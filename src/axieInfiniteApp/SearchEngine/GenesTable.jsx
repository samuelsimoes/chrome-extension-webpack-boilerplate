import React from "react";
import Popover from "@material-ui/core/Popover";
import GridOnIcon from "@material-ui/icons/GridOn";
import { makeStyles } from "@material-ui/core";

const parts = ["eyes", "ears", "mouth", "horn", "back", "tail"];

const colorMap = {
  plant: "rgb(108, 192, 0)",
  reptile: "rgb(200, 138, 224)",
  beast: "rgb(255, 184, 18)",
  aquatic: "rgb(0, 184, 206)",
  bird: "rgb(255, 139, 189)",
  bug: "rgb(255, 83, 65)",
};

const useStyles = makeStyles((theme) => ({
  container: {
    border: "grey",
    borderStyle: "solid",
    borderWidth: "1px",
    borderRadius: "20px",
    whiteSpace: "nowrap",
    padding: "10px",
    zIndex: "1",
    background: "var(--color-gray-5)",
  },
  headerRow: {
    color: "white",
  },
  row: {
    paddingRight: "5px",
  },
  popover: {
    pointerEvents: "none",
  },
  paper: {
    background: "var(--color-gray-5)",
    padding: theme.spacing(1),
  },
}));

const GenesTable = ({ traits }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <table>
        <tr className={classes.headerRow}>
          <td>
            <span>D</span>
          </td>
          <td>
            <span>R1</span>
          </td>
          <td>
            <span>R2</span>
          </td>
        </tr>
        {parts.map((part) => {
          const genes = traits[part];

          return (
            <tr className={classes.row}>
              <td>
                <span style={{ color: colorMap[genes["d"].class] }}>
                  {genes["d"].name}
                </span>
              </td>
              <td>
                <span style={{ color: colorMap[genes["r1"].class] }}>
                  {genes["r1"].name}
                </span>
              </td>
              <td>
                <span style={{ color: colorMap[genes["r2"].class] }}>
                  {genes["r2"].name}
                </span>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export const GenesPopover = ({ traits }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <span
        aria-owns={open ? "genes-popover" : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        <GridOnIcon
          style={{ fontSize: 17, color: "grey", marginRight: "6px" }}
        />
      </span>
      <Popover
        id="genes-popover"
        open={open}
        anchorEl={anchorEl}
        className={classes.popover}
        classes={{
          paper: classes.paper,
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <GenesTable traits={traits} />
      </Popover>
    </>
  );
};

export default GenesTable;
