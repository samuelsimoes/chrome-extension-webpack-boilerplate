import React from "react";
import IconButton from "@material-ui/core/IconButton";
import FindReplaceIcon from "@material-ui/icons/FindReplace";

import abiDecoder from "../../utils/abiDecoder";

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

const TxInspector = ({ tx }) => (
  <IconButton
    onClick={() => fetchTx(tx)}
    color="primary"
    aria-label="find tx"
    component="span"
  >
    <FindReplaceIcon />
  </IconButton>
);

export default TxInspector;
