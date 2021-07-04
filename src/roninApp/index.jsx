import React from "react";
import Fab from "@material-ui/core/Fab";
import CachedIcon from "@material-ui/icons/Cached";
import TranslateIcon from "@material-ui/icons/Translate";

import translateAddreses from "./utils/translateAddreses";
import styles from "./styles.module.css";

const sendRestore = () => {
  chrome.runtime.sendMessage({
    type: "restore-extension",
  });
  window.location.reload();
};

const RoninApp = () => {
  return (
    <div className={styles.buttonsContainer}>
      <Fab onClick={sendRestore} color="primary" aria-label="add">
        <CachedIcon />
      </Fab>
      <Fab onClick={translateAddreses} color="primary" aria-label="add">
        <TranslateIcon />
      </Fab>
    </div>
  );
};

export default RoninApp;
