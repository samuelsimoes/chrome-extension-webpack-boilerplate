import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import { green } from "@material-ui/core/colors";

const useStylesTooltip = makeStyles((theme) => ({
  arrow: {
    color: theme.palette.common.black,
  },
  tooltip: {
    backgroundColor: theme.palette.common.black,
    fontSize: "1rem",
    padding: "6px",
  },
}));

const CopyEthPrice = ({ ethPrice, ethRate }) => {
  const [isCoping, setIsCoping] = useState(false);
  const suggestedPrice =
    (Number(ethPrice) * Number(ethRate) - 1) / Number(ethRate);

  const handleCopy = () => {
    chrome.runtime.sendMessage({
      type: "copy",
      text: suggestedPrice.toFixed(7),
    });
    setIsCoping(true);
    setTimeout(() => setIsCoping(false), 2 * 1000);
  };

  const classes = useStylesTooltip();

  return (
    <Tooltip
      title={
        <>
          {!isCoping && (
            <>
              <p>
                <strong>Real price</strong>
              </p>
              <p>{ethPrice && Number(ethPrice).toFixed(6)} eth</p>
              <br />
            </>
          )}
          <p>
            <strong>{!isCoping ? "Value to copy" : "Copied!!!!"}</strong>
          </p>
          <p>{suggestedPrice && Number(suggestedPrice).toFixed(6)} eth</p>
        </>
      }
      classes={classes}
    >
      <IconButton size="small" onClick={handleCopy} disableFocusRipple>
        <FileCopyIcon
          fontSize="small"
          style={{ color: isCoping ? green[500] : "grey" }}
        />
      </IconButton>
    </Tooltip>
  );
};

export default CopyEthPrice;
