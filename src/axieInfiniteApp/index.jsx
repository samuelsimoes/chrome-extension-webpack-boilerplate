import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Fab from "@material-ui/core/Fab";
import SearchIcon from "@material-ui/icons/Search";
import FunctionsIcon from "@material-ui/icons/Functions";

import SearchEngine from "./SearchEngine";
import CryptoCalculator from "./CryptoCalculator";
import Reload from "./Reload";
import { SearchProvider } from "./context/SearchContext";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
  },
  fabRoot: {
    margin: "4px",
  },
});

const FloatingPopover = ({ icon, children }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const clasess = useStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <Fab
        classes={{ root: clasess.fabRoot }}
        color="primary"
        aria-label="add"
        onClick={handleClick}
      >
        {icon}
      </Fab>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        {children}
      </Popover>
    </>
  );
};

const AxieInfiniteApp = () => {
  const clasess = useStyles();
  return (
    <div className={clasess.container}>
      <FloatingPopover icon={<FunctionsIcon />}>
        <CryptoCalculator />
      </FloatingPopover>
      <FloatingPopover icon={<SearchIcon />}>
        <SearchEngine />
      </FloatingPopover>
      <Reload />
    </div>
  );
};

export default AxieInfiniteApp;
