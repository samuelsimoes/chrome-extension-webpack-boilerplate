import React from "react";
import Fab from "@material-ui/core/Fab";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import CachedIcon from "@material-ui/icons/Cached";

import sendRestore from "../utils/commonContentEvents";
import styles from "./styles.module.css";
import calculateQuality from "./calculateQuality";

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "axies-query-response") {
    [...document.querySelector("body").children].forEach((elem) => {
      if (elem.id !== "entry-point") {
        elem.remove();
      }
    });

    const { results } = message.message.res.data.axies;
    results.forEach(({ id, genes, auction, ...axie }) => {
      const { quality } = calculateQuality(genes, axie.class);
      const row = `<strong>${
        auction.currentPriceUSD
      } USD - <a href='https://marketplace.axieinfinity.com/axie/${id}'>${id}</a></strong> - ${(
        quality * 100
      ).toFixed(2)}%`;
      const p = document.createElement("p");
      p.innerHTML = row;

      document.body.append(p);
    });
  }
  return true;
});

const queryMarket = () => {
  chrome.runtime.sendMessage({
    type: "query-axies-market",
  });
};

const DanielTools = () => {
  return (
    <div className={styles.buttonsContainer}>
      <Fab onClick={queryMarket} color="primary" aria-label="add">
        <AccountBalanceIcon />
      </Fab>
      <Fab onClick={sendRestore} color="primary" aria-label="add">
        <CachedIcon />
      </Fab>
    </div>
  );
};

export default DanielTools;
