import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Fab from "@material-ui/core/Fab";
import SearchIcon from "@material-ui/icons/Search";
import FunctionsIcon from "@material-ui/icons/Functions";
import InputIcon from "@material-ui/icons/Input";
import GridOnIcon from "@material-ui/icons/GridOn";

import SearchEngine from "./SearchEngine";
import SearchResult from "./SearchEngine/SearchResult";
import CryptoCalculator from "./CryptoCalculator";
import { useInyectionContext } from "./context/InyectionContext";
import freakTableManipulataion from "./utils/freakTableManipulataion";
import makeGridSortable from "./utils/makeGridSortable";
import Reload from "./Reload";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    position: "fixed",
    bottom: "10px",
    right: "10px",
    marginRight: "10px",
    marginBottom: "10px",
    width: "fit-content",
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

export default () => {
  const { setInyect } = useInyectionContext();
  const clasess = useStyles();

  const onInyect = () => {
    makeGridSortable();
    setInyect(true);
  };

  return (
    <div className={clasess.container}>
      <Fab
        onClick={freakTableManipulataion}
        classes={{ root: clasess.fabRoot }}
        color="primary"
      >
        <GridOnIcon />
      </Fab>
      <Fab
        onClick={onInyect}
        classes={{ root: clasess.fabRoot }}
        color="primary"
      >
        <InputIcon />
      </Fab>
      <FloatingPopover icon={<FunctionsIcon />}>
        <CryptoCalculator />
      </FloatingPopover>
      <FloatingPopover icon={<SearchIcon />}>
        <SearchEngine />
      </FloatingPopover>
      {false && <Reload />}
      <SearchResult />
    </div>
  );
};
