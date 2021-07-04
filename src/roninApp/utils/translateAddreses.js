import {
  AXIES_CONTRACT,
  MARKETPLACE_CONTRACT,
} from "../constants/roninAddresses";

export default () =>
  document.querySelectorAll("a").forEach((elem) => {
    if (!elem.innerText.includes("0x")) return;

    if (elem.innerText === MARKETPLACE_CONTRACT) elem.innerText = "Marketplace";

    if (elem.innerText === AXIES_CONTRACT) elem.innerText = "Axie contract";
  });
