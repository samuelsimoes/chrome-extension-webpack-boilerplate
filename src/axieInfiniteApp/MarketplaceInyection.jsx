import React from "react";

import Popover from "@material-ui/core/Popover";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

import { useInyectionContext } from "./context/InyectionContext";
import wrapIntoPortal from "./utils/wrapIntoPortal";
import SearchEngine from "./SearchEngine";

const ButtonPopover = ({ children }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

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
      <IconButton aria-label="delete" onClick={handleClick} size="small">
        <SearchIcon fontSize="small" style={{ color: "white" }} />
      </IconButton>
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

const MarketplaceInyection = () => {
  const { inyect, setInyect } = useInyectionContext();

  return inyect ? (
    <>
      {Array.from(document.querySelectorAll(".axie-card")).map((elem) => {
        const target =
          elem.querySelector("span").parentElement.parentElement.parentElement;

        target.addEventListener("click", (e) => e.preventDefault());

        const axieId = target.innerText.replace("#", "");

        const PortalElem = wrapIntoPortal(
          <ButtonPopover onUnmount={() => setInyect(false)}>
            <SearchEngine axieId={axieId} />
          </ButtonPopover>,
          target
        );

        return <PortalElem />;
      })}
    </>
  ) : null;
};

export default MarketplaceInyection;
