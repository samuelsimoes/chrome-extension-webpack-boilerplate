import bodyPartsMap from "./bodyPartsMap.json";
import binarytraits from "./binarytraits.json";

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

const calculate = (genes, classType) => {
  const speGenes = genesToBin(BigInt(genes));
  let traits = getTraits(speGenes);
  let qp = getQualityAndPureness(traits, classType.toLowerCase());

  return qp;
};

export default calculate;
