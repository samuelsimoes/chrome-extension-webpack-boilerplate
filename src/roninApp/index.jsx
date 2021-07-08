import React from "react";
import ReactDOM from "react-dom";
import Fab from "@material-ui/core/Fab";
import CachedIcon from "@material-ui/icons/Cached";
import TranslateIcon from "@material-ui/icons/Translate";

import TxInspector from "./components/TxInspector";
import translateAddreses from "./utils/translateAddreses";
import abiDecoder from "./utils/abiDecoder";
import styles from "./styles.module.css";
import sendRestore from "../utils/commonContentEvents";

const getMessageByInput = (input = {}) => {
  const { name } = input;

  switch (name) {
    case "breedAxies":
      return `Axies <a class="text-14 leading-20 text-primary-5 font-normal" href='https://marketplace.axieinfinity.com/axie/${input.params[0].value}'>${input.params[0].value}</a> and <a class="text-14 leading-20 text-primary-5 font-normal" href='https://marketplace.axieinfinity.com/axie/${input.params[1].value}'>${input.params[1].value}</a> are making love`;
    case "safeTransferFrom":
      return `Axie <a class="text-14 leading-20 text-primary-5 font-normal" href='https://marketplace.axieinfinity.com/axie/${input.params[2].value}'>${input.params[2].value}</a> has been transfered to <a class="text-14 leading-20 text-primary-5 font-normal" href='https://explorer.roninchain.com/address/${input.params[1].value}/txs'/>this wallet</a>`;
    case "growAxieggToAdult":
      return `Axie <a class="text-14 leading-20 text-primary-5 font-normal"  href='https://marketplace.axieinfinity.com/axie/${input.params[0].value}'>${input.params[0].value}</a> has born`;
    case "transfer":
      return `Tokens has been transfered to <a class="text-14 leading-20 text-primary-5 font-normal" href='https://explorer.roninchain.com/address/${input.params[0].value}/txs'/>this wallet</a>`;
    case "createAuction":
      return `Axie <a class="text-14 leading-20 text-primary-5 font-normal" href='https://marketplace.axieinfinity.com/axie/${input.params[2].value}'>${input.params[2].value}</a> is in sell`;
    case "settleAuction":
      return "An auction has been settle";
    default:
      return "Unknow Transaction";
  }
};
const fetchTx = (tx) =>
  fetch(`https://explorer.roninchain.com/api/tx/${tx}`)
    .then((res) => res.json())
    .then((res) => {
      const row = document.getElementById(`wrap-${tx}`);
      row.removeChild(row.lastElementChild);
      row.removeChild(row.lastElementChild);
      row.removeChild(row.lastElementChild);
      row.removeChild(row.lastElementChild);

      const { input } = res;
      const decodedInput = abiDecoder.decodeMethod(input);
      const message = document.createElement("p");

      message.innerHTML = getMessageByInput(decodedInput);
      row.appendChild(message);
    });

const addInspectorButtons = () => {
  const txsRows = document.querySelectorAll("div.border-t.px-16.py-12") || [];
  txsRows.forEach((row) => {
    const unwrappedRow = row.firstElementChild;

    const tx = unwrappedRow.firstChild.innerText;
    unwrappedRow.id = `wrap-${tx}`;

    fetchTx(tx);
  });
};

const RoninApp = () => {
  const location = window.location.pathname.split("/");
  const isAddressPage = location[1] === "address";
  const isTxTab = location[3] === "txs";

  const handleTxTranslate = () => {
    translateAddreses();
    addInspectorButtons();
  };

  return (
    <div className={styles.buttonsContainer}>
      <Fab onClick={sendRestore} color="primary" aria-label="add">
        <CachedIcon />
      </Fab>
      <Fab onClick={handleTxTranslate} color="primary" aria-label="add">
        <TranslateIcon />
      </Fab>
    </div>
  );
};

export default RoninApp;
