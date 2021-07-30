var observer;

const observerConfig = { attributes: false, childList: true, subtree: true };
const colorMap = {
  plant: "rgb(108, 192, 0)",
  reptile: "rgb(200, 138, 224)",
  beast: "rgb(255, 184, 18)",
  aquatic: "rgb(0, 184, 206)",
  bird: "rgb(255, 139, 189)",
  bug: "rgb(255, 83, 65)",
};
const classGeneMap = {
  "0000": "beast",
  "0001": "bug",
  "0010": "bird",
  "0011": "plant",
  "0100": "aquatic",
  "0101": "reptile",
  1000: "???",
  1001: "???",
  1010: "???",
};
const typeOrder = {
  patternColor: 1,
  eyes: 2,
  mouth: 3,
  ears: 4,
  horn: 5,
  back: 6,
  tail: 7,
};
const geneColorMap = {
  "0000": {
    "0010": "ffec51",
    "0011": "ffa12a",
    "0100": "f0c66e",
    "0110": "60afce",
  },
  "0001": { "0010": "ff7183", "0011": "ff6d61", "0100": "f74e4e" },
  "0010": { "0010": "ff9ab8", "0011": "ffb4bb", "0100": "ff778e" },
  "0011": { "0010": "ccef5e", "0011": "efd636", "0100": "c5ffd9" },
  "0100": {
    "0010": "4cffdf",
    "0011": "2de8f2",
    "0100": "759edb",
    "0110": "ff5a71",
  },
  "0101": {
    "0010": "fdbcff",
    "0011": "ef93ff",
    "0100": "f5e1ff",
    "0110": "43e27d",
  },
  //nut hidden_1
  1000: {
    "0010": "D9D9D9",
    "0011": "D9D9D9",
    "0100": "D9D9D9",
    "0110": "D9D9D9",
  },
  //star hidden_2
  1001: {
    "0010": "D9D9D9",
    "0011": "D9D9D9",
    "0100": "D9D9D9",
    "0110": "D9D9D9",
  },
  //moon hidden_3
  1010: {
    "0010": "D9D9D9",
    "0011": "D9D9D9",
    "0100": "D9D9D9",
    "0110": "D9D9D9",
  },
};
const PROBABILITIES = { d: 0.375, r1: 0.09375, r2: 0.03125 };
const parts = ["eyes", "mouth", "ears", "horn", "back", "tail"];
const MAX_QUALITY = 6 * (PROBABILITIES.d + PROBABILITIES.r1 + PROBABILITIES.r2);
const MAX_RUN_RETRIES = 30;
const OPTIONS_MAP = {
  class: "classes",
  part: "parts",
  bodyShape: "bodyShapes",
  stage: "stages",
  mystic: "numMystic",
};
const SEARCH_PARAMS = [
  "class",
  "stage",
  "breedCount",
  "mystic",
  "pureness",
  "region",
  "title",
  "part",
  "bodyShape",
  "hp",
  "speed",
  "skill",
  "morale",
];

var notReadyCount = 0;
var currentURL = window.location.href;
var axies = {};
var initObserver = true;

var debug = false;

function debugLog(msg, ...extra) {
  if (debug) {
    if (extra.length > 0) console.log(msg, extra);
    else console.log(msg);
  }
}

function loadComplete(mutationsList) {
  for (let i = 0; i < mutationsList.length; i++) {
    for (let j = 0; j < mutationsList[i].removedNodes.length; j++) {
      //if the spinning puff is removed then we are loaded
      if (
        "innerHTML" in mutationsList[i].removedNodes[j] &&
        mutationsList[i].removedNodes[j].innerHTML.includes("puff-loading.png")
      ) {
        debugLog("loadComplete true", mutationsList[i].removedNodes[j]);
        return true;
      }
    }

    for (let j = 0; j < mutationsList[i].addedNodes.length; j++) {
      if (
        ("innerHTML" in mutationsList[i].addedNodes[j] &&
          mutationsList[i].addedNodes[j].innerHTML.includes(
            '<div class="axie-card">'
          )) ||
        (mutationsList[i].addedNodes[j].nodeName == "SPAN" &&
          mutationsList[i].addedNodes[j].innerText.match(/\d+ Axies$/))
      ) {
        debugLog("loadComplete true", mutationsList[i].addedNodes[j]);
        return true;
      }
    }
  }
  debugLog("loadComplete false");
  return false;
}

async function init() {
  debugLog("init");
  await getBodyParts();

  /*
    supported pages
    https://marketplace.axieinfinity.com/profile/inventory/axie(?page=N)
    https://marketplace.axieinfinity.com/profile/[ADDRESS]/axie(?page=N)
    https://marketplace.axieinfinity.com/axie
    https://marketplace.axieinfinity.com/axie/17469
    */

  let callback = function (mutationsList, observer) {
    debugLog("mutationsList", mutationsList);

    //ignore if not a supported page
    if (
      !window.location.href.match(
        /https:\/\/marketplace\.axieinfinity\.com\/profile\/(inventory|(0x|ronin:)\w+)\/axie/
      ) &&
      !window.location.href.startsWith(
        "https://marketplace.axieinfinity.com/axie"
      )
    ) {
      debugLog("ignoring");
      return;
    }

    if (
      window.location.href == currentURL &&
      !window.location.href.startsWith(
        "https://marketplace.axieinfinity.com/axie/"
      )
    ) {
      //ignore details page
      //fix Order By drop down z-index
      if (
        mutationsList.length == 1 &&
        mutationsList[0].target.children.length == 2
      ) {
        var mutated = mutationsList[0];
        if (
          mutated.target.children[1].children[0].nodeName == "UL" &&
          mutated.target.children[1].children[0].textContent.indexOf(
            "Highest Price"
          ) != -1
        ) {
          mutated.target.children[1].style["zIndex"] = 99999;
        } else if (
          mutated.target.children[1].className.includes("transition-opacity")
        ) {
          mutated.target.children[1].style["zIndex"] = 99998;
        }
      }
    }
    if (window.location.href != currentURL) {
      currentURL = window.location.href;
      debugLog("New URI detected.");
    }
    //Only call run() if we find certain conditions in the mutation list
    if (loadComplete(mutationsList)) {
      //if you browses quickly, run() won't clearInterval before the page is ready
      if (intID != -1) {
        clearInterval(intID);
      }
      intID = setInterval(run, 1000);
    }
  };
  observer = new MutationObserver(callback);
}

var bodyPartsMap = {};
async function getBodyParts() {
  let parts = await fetch("https://axieinfinity.com/api/v2/body-parts?r=freak")
    .then((res) => res.json())
    .catch(async (err) => {
      console.log("Failed to get body parts from the API");
      //API is unreliable. fall back to hard-coded local copy.
      let parts = await fetch(chrome.extension.getURL("body-parts.json")).then(
        (res) => res.json()
      );
      for (let i in parts) {
        bodyPartsMap[parts[i].partId] = parts[i];
      }
    });
  for (let i in parts) {
    bodyPartsMap[parts[i].partId] = parts[i];
  }
}

function getQualityAndPureness(traits, cls) {
  let quality = 0;
  let dPureness = 0;
  for (let i in parts) {
    if (traits[parts[i]].d.class == cls) {
      quality += PROBABILITIES.d;
      dPureness++;
    }
    if (traits[parts[i]].r1.class == cls) {
      quality += PROBABILITIES.r1;
    }
    if (traits[parts[i]].r2.class == cls) {
      quality += PROBABILITIES.r2;
    }
  }
  return { quality: quality / MAX_QUALITY, pureness: dPureness };
}

function strMul(str, num) {
  var s = "";
  for (var i = 0; i < num; i++) {
    s += str;
  }
  return s;
}

function genesToBin(genes) {
  var genesString = genes.toString(2);
  genesString = strMul("0", 256 - genesString.length) + genesString;
  return genesString;
}

const regionGeneMap = { "00000": "global", "00001": "japan" };
function getRegionFromGroup(group) {
  let regionBin = group.slice(8, 13);
  if (regionBin in regionGeneMap) {
    return regionGeneMap[regionBin];
  }
  return "Unknown Region";
}

function getClassFromGroup(group) {
  let bin = group.slice(0, 4);
  if (!(bin in classGeneMap)) {
    return "Unknown Class";
  }
  return classGeneMap[bin];
}

function getPatternsFromGroup(group) {
  //patterns could be 6 bits. use 4 for now
  return {
    d: group.slice(2, 8),
    r1: group.slice(8, 14),
    r2: group.slice(14, 20),
  };
}

function getColor(bin, cls) {
  let color;
  if (bin == "0000") {
    color = "ffffff";
  } else if (bin == "0001") {
    color = "7a6767";
  } else {
    color = geneColorMap[cls][bin];
  }
  return color;
}

function getColorsFromGroup(group, cls) {
  return {
    d: getColor(group.slice(20, 24), cls),
    r1: getColor(group.slice(24, 28), cls),
    r2: getColor(group.slice(28, 32), cls),
  };
}

//hack. key: part name + " " + part type
var partsClassMap = {};
function getPartName(cls, part, region, binary, skinBinary = "00") {
  let trait;
  if (binary in binarytraits[cls][part]) {
    if (skinBinary == "11") {
      trait = binarytraits[cls][part][binary]["mystic"];
    } else if (skinBinary == "10") {
      trait = binarytraits[cls][part][binary]["xmas"];
    } else if (region in binarytraits[cls][part][binary]) {
      trait = binarytraits[cls][part][binary][region];
    } else if ("global" in binarytraits[cls][part][binary]) {
      trait = binarytraits[cls][part][binary]["global"];
    } else {
      trait = "UNKNOWN Regional " + cls + " " + part;
    }
  } else {
    trait = "UNKNOWN " + cls + " " + part;
  }
  //return part + "-" + trait.toLowerCase().replace(/\s/g, "-");
  partsClassMap[trait + " " + part] = cls;
  return trait;
}

function getPartsFromGroup(part, group, region) {
  let skinBinary = group.slice(0, 2);
  let mystic = skinBinary == "11";
  let dClass = classGeneMap[group.slice(2, 6)];
  let dBin = group.slice(6, 12);
  let dName = getPartName(dClass, part, region, dBin, skinBinary);

  let r1Class = classGeneMap[group.slice(12, 16)];
  let r1Bin = group.slice(16, 22);
  let r1Name = getPartName(r1Class, part, region, r1Bin);

  let r2Class = classGeneMap[group.slice(22, 26)];
  let r2Bin = group.slice(26, 32);
  let r2Name = getPartName(r2Class, part, region, r2Bin);

  return {
    d: getPartFromName(part, dName),
    r1: getPartFromName(part, r1Name),
    r2: getPartFromName(part, r2Name),
    mystic: mystic,
  };
}

function getTraits(genes) {
  var groups = [
    genes.slice(0, 32),
    genes.slice(32, 64),
    genes.slice(64, 96),
    genes.slice(96, 128),
    genes.slice(128, 160),
    genes.slice(160, 192),
    genes.slice(192, 224),
    genes.slice(224, 256),
  ];
  let cls = getClassFromGroup(groups[0]);
  let region = getRegionFromGroup(groups[0]);
  let pattern = getPatternsFromGroup(groups[1]);
  let color = getColorsFromGroup(groups[1], groups[0].slice(0, 4));
  let eyes = getPartsFromGroup("eyes", groups[2], region);
  let mouth = getPartsFromGroup("mouth", groups[3], region);
  let ears = getPartsFromGroup("ears", groups[4], region);
  let horn = getPartsFromGroup("horn", groups[5], region);
  let back = getPartsFromGroup("back", groups[6], region);
  let tail = getPartsFromGroup("tail", groups[7], region);
  return {
    cls: cls,
    region: region,
    pattern: pattern,
    color: color,
    eyes: eyes,
    mouth: mouth,
    ears: ears,
    horn: horn,
    back: back,
    tail: tail,
  };
}

function getPartFromName(traitType, partName) {
  let traitId =
    traitType.toLowerCase() +
    "-" +
    partName
      .toLowerCase()
      .replace(/\s/g, "-")
      .replace(/[\?'\.]/g, "");
  return bodyPartsMap[traitId];
}

function checkStatus(res) {
  if (res.ok) {
    return res;
  } else {
    throw Exception("Failed to get axie details: " + res);
  }
}

//Assume we are on https://marketplace.axieinfinity.com/profile/inventory/axie
async function getAccountFromProfile() {
  let axieAnchors = document.querySelectorAll("a[href^='/axie/']");
  if (axieAnchors.length > 0) {
    let anc = axieAnchors[0];
    let axieId = parseInt(anc.href.substring(anc.href.lastIndexOf("/") + 1));
    let axie = await getAxieInfoMarket(axieId);
    //this will return the 0x formatted ronin address
    return axie.owner;
  }
  return null;
}

function getAccount() {
  //https://marketplace.axieinfinity.com/profile/0x.../axie
  //https://marketplace.axieinfinity.com/profile/ronin:.../axie
  let checkIndex = "https://marketplace.axieinfinity.com/profile/".length;
  let start = window.location.href.slice(
    "https://marketplace.axieinfinity.com/profile/".length
  );
  let account = start.slice(0, start.indexOf("/"));
  if (account.startsWith("ronin:")) {
    account = account.replace("ronin:", "0x");
  } else {
    //0xaddress. TODO: get ronin address from eth addr
  }
  //TODO: validate address
  if (account !== "") {
    return account;
  }
  return null;
}

function getQueryParameters(name) {
  let query = window.location.search.substring(1);
  let vars = query.split("&");
  let result = [];
  for (var i = 0; i < vars.length; i++) {
    let pair = vars[i].split("=");
    if (pair[0] == name) {
      result.push(pair[1]);
    }
  }
  return result;
}

function getAxieInfoMarket(id) {
  debugLog("getAxieInfoMarket", id);
  return new Promise((resolve, reject) => {
    if (id in axies) {
      resolve(axies[id]);
    } else {
      axies[id] = {}; //kind of mutex
      chrome.runtime.sendMessage(
        { contentScriptQuery: "getAxieInfoMarket", axieId: id },
        function (result) {
          axies[id] = result;
          if (result.stage > 2) {
            axies[id].genes = genesToBin(BigInt(axies[id].genes));
            let traits = getTraits(axies[id].genes);
            let qp = getQualityAndPureness(
              traits,
              axies[id].class.toLowerCase()
            );
            axies[id].traits = traits;
            axies[id].quality = qp.quality;
            axies[id].pureness = qp.pureness;
          }
          resolve(result);
        }
      );
    }
  });
}

async function getAxieBriefList() {
  debugLog("getAxieBriefList");
  let sort = "PriceAsc";
  let auctionType = "Sale";
  let address = null; //if marketplace page. default
  //if self profile page
  if (
    window.location.href.startsWith(
      "https://marketplace.axieinfinity.com/profile/inventory/axie"
    )
  ) {
    address = await getAccountFromProfile();
    sort = "IdDesc";
    auctionType = "All";
  } else if (
    window.location.href.startsWith(
      "https://marketplace.axieinfinity.com/profile/ronin:"
    )
  ) {
    // || window.location.href.startsWith("https://marketplace.axieinfinity.com/profile/0x")) {
    address = getAccount();
    sort = "IdDesc";
    auctionType = "All";
  }
  debugLog("Account: " + address);
  let page = 1;
  let p = getQueryParameters("page");
  if (p.length > 0) {
    page = parseInt(p[0]); //assume only 1 page
  }

  let s = getQueryParameters("sort");
  if (s.length > 0) {
    sort = s[0];
  }
  let a = getQueryParameters("auctionType");
  if (a.length > 0) {
    auctionType = a[0];
  }

  let criteria = {
    region: null,
    parts: null,
    bodyShapes: null,
    classes: null,
    stages: null,
    numMystic: null,
    pureness: null,
    title: null,
    breedCount: null,
    hp: [],
    skill: [],
    speed: [],
    morale: [],
  }; //"breedable":null,
  for (let sIdx = 0; sIdx < SEARCH_PARAMS.length; sIdx++) {
    let option = SEARCH_PARAMS[sIdx];
    let opts = getQueryParameters(option);
    if (opts.length > 0) {
      if ("region" == option) {
        criteria.region = opts[0];
        continue;
      }
      let opt = [];
      if (
        [
          "stage",
          "breedCount",
          "mystic",
          "pureness",
          "hp",
          "speed",
          "skill",
          "morale",
        ].indexOf(option) != -1
      ) {
        for (let i = 0; i < opts.length; i++) {
          opt.push(parseInt(opts[i]));
        }
      } else {
        for (let i = 0; i < opts.length; i++) {
          if ("title" == option) {
            opt.push(opts[i].replace(/-/g, " "));
          } else {
            opt.push(opts[i]);
          }
        }
      }
      if (option in OPTIONS_MAP) {
        criteria[OPTIONS_MAP[option]] = opt;
      } else {
        criteria[option] = opt;
      }
    }
  }

  return new Promise((resolve, reject) => {
    chrome.runtime.sendMessage(
      {
        contentScriptQuery: "getAxieBriefList",
        address: address,
        page: page,
        sort: sort,
        auctionType: auctionType,
        criteria: criteria,
      },
      function (results) {
        for (let i = 0; i < results.length; i++) {
          let axie = results[i];
          let id = axie.id;
          debugLog("got axie " + id);
          axies[id] = axie;
          if (axie.stage > 2) {
            axies[id].genes = genesToBin(BigInt(axies[id].genes));
            let traits = getTraits(axies[id].genes);
            let qp = getQualityAndPureness(
              traits,
              axies[id].class.toLowerCase()
            );
            axies[id].traits = traits;
            axies[id].quality = qp.quality;
            axies[id].pureness = qp.pureness;
          }
        }
        resolve(results);
      }
    );
  });
}

function appendTrait(table, trait) {
  let row = document.createElement("tr");
  let mystic = trait["mystic"];
  for (let position in trait) {
    if (position == "mystic") continue;
    let data = document.createElement("td");
    let span = document.createElement("span");
    if (trait[position].hasOwnProperty("class")) {
      span.style.color = colorMap[trait[position].class];
    }
    span.textContent = trait[position].name;
    if (position == "d" && mystic) {
      span.textContent += "*";
    }
    data.style["padding-right"] = "5px";
    data.appendChild(span);
    row.appendChild(data);
  }
  table.appendChild(row);
}

function genGenesDiv(axie, mouseOverNode, type = "list") {
  let traits = document.createElement("div");
  let table = document.createElement("table");
  appendTrait(table, {
    d: { name: "D" },
    r1: { name: "R1" },
    r2: { name: "R2" },
  });
  appendTrait(table, axie.traits.eyes);
  appendTrait(table, axie.traits.ears);
  appendTrait(table, axie.traits.mouth);
  appendTrait(table, axie.traits.horn);
  appendTrait(table, axie.traits.back);
  appendTrait(table, axie.traits.tail);
  traits.appendChild(table);
  traits.style.display = "none";
  traits.style.position = "absolute";
  traits.style["z-index"] = "9999";
  traits.style.border = "grey";
  traits.style["border-style"] = "solid";
  traits.style["border-width"] = "1px";
  traits.style["border-radius"] = "20px";
  traits.style["white-space"] = "nowrap";
  traits.style["padding-left"] = "10px";
  traits.style["padding-top"] = "10px";
  traits.style["padding-bottom"] = "10px";
  traits.style["padding-right"] = "10px";

  if (currentURL.startsWith("https://marketplace.axieinfinity.com/")) {
    traits.style.background = "var(--color-gray-5)";
    traits.style.top = "-85px";
    if (type == "list") {
      if (axie.stage == 3) {
        traits.style.top = "-85px";
      }
      traits.style.left = "0px";
    } else if (type == "details") {
      traits.style.left = "auto";
      traits.style.top = "auto";
    }
  } else {
    traits.style.background = "white";
    //traits.style.background = window.getComputedStyle(document.getRootNode().body, null).getPropertyValue("background-color");
    traits.style.top = "-90px";
    if (type == "list") {
      if (axie.stage == 3) {
        traits.style.top = "-90px";
      }
      traits.style.left = "-18px";
    } else if (type == "details") {
      traits.style.left = "0px";
    }
  }
  mouseOverNode.addEventListener("mouseover", function () {
    traits.style.display = "block";
  });
  mouseOverNode.addEventListener("mouseout", function () {
    traits.style.display = "none";
  });
  return traits;
}

function insertAfter(newNode, referenceNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

async function run() {
  debugLog("run");
  let dbg;
  try {
    let axieAnchors = document.querySelectorAll("a[href^='/axie/']");
    debugLog(axieAnchors);
    if (axieAnchors.length > 0 && observer != null) {
      clearInterval(intID);
      intID = -1;
      notReadyCount = 0;
      debugLog("run ready");
    } else {
      notReadyCount++;
      debugLog("not ready");
      if (notReadyCount > MAX_RUN_RETRIES) {
        clearInterval(intID);
        console.log("Page took too long to load. Bailing");
      }
      return;
    }
    debugLog(window.location.href);
    if (initObserver) {
      let targetNode = document.body;

      observer.observe(targetNode, observerConfig);
      initObserver = false;

      /*
TODO: add support for breeding window
            if (window.location.href.includes("/axie/")) {
                let breedButton = document.evaluate("//span[text()='Breed' or text()='繁殖']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                //if (breedButton && getComputedStyle(breedButton.parentNode.parentNode).backgroundColor != "rgb(203, 203, 203)") {
                if (breedButton) {
    //debugLog("observing breed button ", getComputedStyle(breedButton.parentNode.parentNode).backgroundColor, breedButton);
                    //find the X button in the breeder window
                    let xpath = "//svg:path[@d='M2 12L12 2M12 12L2 2']";
                    let pathNode = document.evaluate(xpath, document, function(prefix) { if (prefix === 'svg') { return 'http://www.w3.org/2000/svg'; }}, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                    let breedTarget = pathNode.parentNode.parentNode.parentNode.parentNode;
                    observer.observe(breedTarget, observerConfig);
                } else {
    //debugLog("ignoring breed");
                }
            }
*/
    }

    //single axie (axieDetail page). Added mouseover handler to Stats text
    if (
      currentURL.match(/https:\/\/marketplace\.axieinfinity\.com\/axie\/\d+/)
    ) {
      let axieId = parseInt(
        currentURL.substring(currentURL.lastIndexOf("/") + 1)
      );
      let axie;
      axie = await getAxieInfoMarket(axieId);

      if (axie.stage > 2) {
        let xpath = "(//svg:svg[@viewBox='681 3039 12 11'])[2]";
        let pathNode;
        let detailsNode;
        //this will break when localization is implemented on the site
        xpath = "//div[text()='Stats']";
        pathNode = document.evaluate(
          xpath,
          document,
          null,
          XPathResult.FIRST_ORDERED_NODE_TYPE,
          null
        ).singleNodeValue;
        detailsNode = pathNode;
        let traits = genGenesDiv(axie, detailsNode, "details");
        if (
          detailsNode.childElementCount == 0 &&
          currentURL.startsWith("https://marketplace.axieinfinity.com/axie/")
        ) {
          detailsNode.appendChild(traits);
        } else if (
          !currentURL.startsWith("https://marketplace.axieinfinity.com/axie/")
        ) {
          detailsNode.appendChild(traits);
        }
      }
    }
    // else {

    //Poll getAxieBriefList if we are on a profile listing page or market listing page, but not axieDetails or ListView
    if (
      currentURL.match(
        /https:\/\/marketplace\.axieinfinity\.com\/(profile|axie)/
      ) &&
      !currentURL.match(/\/axie\/\d+/) &&
      currentURL.lastIndexOf("view=ListView") == -1
    ) {
      let pageAxies = [];
      for (let i = 0; i < axieAnchors.length; i++) {
        let anc = axieAnchors[i];
        let div = anc.firstElementChild;
        let axieId = parseInt(
          anc.href.substring(anc.href.lastIndexOf("/") + 1)
        );
        if (!(axieId in axies)) {
          //get all axies on the page and break
          debugLog("getting axies");
          var results = await getAxieBriefList();
          debugLog(axies);
          break;
        }
      }
    }

    //limit to listing pages and details page, but not in ListView
    if (
      (currentURL.startsWith("https://marketplace.axieinfinity.com/profile/") ||
        currentURL.startsWith("https://marketplace.axieinfinity.com/axie")) &&
      currentURL.lastIndexOf("view=ListView") == -1
    ) {
      for (let i = 0; i < axieAnchors.length; i++) {
        let anc = axieAnchors[i];
        let div = anc.firstElementChild;
        let axieId = parseInt(
          anc.href.substring(anc.href.lastIndexOf("/") + 1)
        );

        let axie;
        if (!(axieId in axies)) {
          axie = await getAxieInfoMarket(axieId);
        } else {
          axie = axies[axieId];
        }
        let card = anc.firstElementChild.firstElementChild.firstElementChild;
        if (axie.stage > 2) {
          if (options[SHOW_BREEDS_STATS_OPTION]) {
            dbg = anc;
            if (!card.children || (card.children && card.children.length < 2)) {
              //igoring showing stats on children for now
              continue;
            }
            let content = card.children[2];
            let statsDiv = document.createElement("div");
            let stats =
              "H: " +
              axie.stats.hp +
              ", S: " +
              axie.stats.speed +
              ", M: " +
              axie.stats.morale +
              ", P: " +
              Math.round(axie.quality * 100) +
              "%";
            content.className = card.children[2].className;
            if (axie.stage == 3) {
              statsDiv.textContent = stats;
              content.className = content.className.replace(
                "invisible",
                "visible"
              );
            } else if (axie.stage > 3) {
              content.childNodes.forEach((n) => {
                if (n.nodeType == Node.TEXT_NODE) {
                  n.textContent = "";
                  //n.remove() doesn't work. probably because removing during iteration is not supported.
                }
              });
              statsDiv.textContent = "🍆: " + axie.breedCount + ", " + stats;
            }
            //prevent dupes
            if (content.childElementCount == 0) {
              let traits = genGenesDiv(axie, statsDiv);
              content.appendChild(statsDiv);
              content.appendChild(traits);
              //remove part's box margin to prevent overlap with price
              content.style["margin-top"] = "0px";
              card.style["position"] = "relative"; //will this mess shit up?
            }
          }
        }
      }
    }
  } catch (e) {
    console.log("ERROR: " + e);
    console.log(e.stack);
    console.log(dbg);
    throw e;
  } finally {
    rescanning = false;
  }
}

var intID;
var options = {};
//currently, the extension will keep running if the page was previously loaded while enabled...need to reload page to disable inflight extension.
getOptions((response) => {
  options[ENABLE_OPTION] = response[ENABLE_OPTION];
  options[SHOW_BREEDS_STATS_OPTION] = response[SHOW_BREEDS_STATS_OPTION];
  if (options[ENABLE_OPTION]) {
    init();
    intID = setInterval(run, 1000);
  }
});
