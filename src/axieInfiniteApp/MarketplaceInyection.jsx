import React, { useState, useEffect } from "react";
import GridOnIcon from "@material-ui/icons/GridOn";
import Popover from "@material-ui/core/Popover";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Tooltip from "@material-ui/core/Tooltip";
import { v4 as uuid } from "uuid";

import { useInyectionContext } from "./context/InyectionContext";
import wrapIntoPortal from "./utils/wrapIntoPortal";
import SearchEngine from "./SearchEngine";
import { debounce } from "@material-ui/core";
import makeGridSortable from "./utils/makeGridSortable";
import freakTableManipulataion from "./utils/freakTableManipulataion";

const ButtonPopover = ({ tooltipTitle, children }) => {
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
      <Tooltip title={tooltipTitle}>
        <IconButton aria-label="delete" onClick={handleClick} size="small">
          <SearchIcon fontSize="small" style={{ color: "white" }} />
        </IconButton>
      </Tooltip>
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

var globalUrlVariable = "";
const MarketplaceInyection = () => {
  const [inyect, setInyect] = useState("");

  useEffect(() => {
    const debouncedInyection = debounce(() => {
      if (globalUrlVariable !== window.location.href) {
        globalUrlVariable = window.location.href;
        setInyect(uuid());
        makeGridSortable();
      }
    }, 1.5 * 1000);

    new MutationObserver(debouncedInyection).observe(document.body, {
      attributes: false,
      childList: true,
      subtree: true,
    });
  }, []);

  return inyect ? (
    <>
      {Array.from(document.querySelectorAll(".axie-card")).map((elem) => {
        const target =
          elem.querySelector("span").parentElement.parentElement.parentElement;

        target.addEventListener("click", (e) => e.preventDefault());

        const axieId = target.innerText.replace("#", "");

        const PortalElem = wrapIntoPortal(
          <>
            <Tooltip title="Show genes">
              <IconButton
                aria-label="delete"
                onClick={() => freakTableManipulataion(elem)}
                size="small"
              >
                <GridOnIcon fontSize="small" style={{ color: "white" }} />
              </IconButton>
            </Tooltip>
            <ButtonPopover tooltipTitle="Search similars">
              <SearchEngine axieId={axieId} />
            </ButtonPopover>
          </>,
          target
        );

        return <PortalElem />;
      })}
    </>
  ) : null;
};

export default MarketplaceInyection;
