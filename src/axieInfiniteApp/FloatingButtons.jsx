import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Fab from "@material-ui/core/Fab";
import SearchIcon from "@material-ui/icons/Search";
import FunctionsIcon from "@material-ui/icons/Functions";
import Button from "@material-ui/core/Button";
import ChildFriendlyIcon from "@material-ui/icons/ChildFriendly";

import SearchEngine from "./SearchEngine";
import SearchResult from "./SearchEngine/SearchResult";
import EggsSearchResult from "./SearchEngine/EggsSearchResult";
import CryptoCalculator from "./CryptoCalculator";
import Reload from "./Reload";
import fetchProfile from "./utils/fetchProfile";
import Valuation from "./Valuation";

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

[];

const fetchScholars = async () => {};

export default () => {
  const [isOpen, setIsOpen] = useState(false);
  const clasess = useStyles();

  return (
    <div className={clasess.container}>
      <FloatingPopover icon={<SearchIcon />}>
        <SearchEngine />
      </FloatingPopover>
      <FloatingPopover icon={<FunctionsIcon />}>
        <CryptoCalculator />
      </FloatingPopover>
      <SearchResult />
      <EggsSearchResult isOpen={isOpen} setIsOpen={setIsOpen} />
      <Fab
        classes={{ root: clasess.fabRoot }}
        color="primary"
        aria-label="add"
        onClick={() => setIsOpen(true)}
      >
        <ChildFriendlyIcon />
      </Fab>
      <FloatingPopover ison={<SearchIcon />}>
        <Valuation />
      </FloatingPopover>
      {true && <Reload />}
    </div>
  );
};
