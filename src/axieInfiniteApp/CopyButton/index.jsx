import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import { green } from "@material-ui/core/colors";

const useStylesTooltip = makeStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.black,
    fontSize: "1rem",
    padding: "6px",
  },
  iconRoot: {
    fontSize: (props) => props.fontSize || "inherit",
  },
}));

const CopyButton = ({ valueToCopy, tooltipContent, fontSize = "14px" }) => {
  const [isCoping, setIsCoping] = useState(false);

  const handleCopy = () => {
    chrome.runtime.sendMessage({
      type: "copy",
      text: valueToCopy,
    });
    setIsCoping(true);
    setTimeout(() => setIsCoping(false), 2 * 1000);
  };

  const classes = useStylesTooltip({ fontSize });

  return (
    <Tooltip
      title={
        isCoping ? (
          <p>
            <strong>"Copied!!!!"</strong>
          </p>
        ) : (
          tooltipContent || valueToCopy
        )
      }
      classes={classes}
    >
      <IconButton size="small" onClick={handleCopy} disableFocusRipple>
        <FileCopyIcon
          size="small"
          classes={{
            root: classes.iconRoot,
          }}
          style={{
            color: isCoping ? green[500] : "grey",
          }}
        />
      </IconButton>
    </Tooltip>
  );
};

export default CopyButton;
