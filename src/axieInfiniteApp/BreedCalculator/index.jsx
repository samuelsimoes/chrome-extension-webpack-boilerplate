import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import IconButton from "@material-ui/core/IconButton";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { v4 as uuid } from "uuid";

import BreedRow from "./BreedRow";
import Reload from "../Reload";

const useStyles = makeStyles({
  iconButtonRoot: {
    margin: "0 auto",
    display: "block",
  },
  textFieldRoot: {
    width: "70px",
    marginRight: "9px",
  },
});

const BreedCalculator = ({ isOpen, setIsOpen, axsPrice, slpPrice }) => {
  const [rows, setRows] = useState([]);
  const [partials, setPartials] = useState({});
  const classes = useStyles();

  const addNew = () => {
    const id = uuid();
    setRows((prev) => [...prev, id]);
  };

  const handleRemove = (id) => {
    setRows((prev) => prev.filter((prevId) => prevId !== id));
    setPartials((prev) => {
      const prevCopy = { ...prev };
      delete prevCopy[id];
      return prevCopy;
    });
  };

  const onRowChange = (id) => (result) =>
    setPartials((prev) => ({ ...prev, [id]: result }));

  // Add one row when mount
  useEffect(() => {
    addNew();
  }, []);

  const usdCost = Object.values(partials)
    .reduce((acc, curr) => acc + Number(curr.usd), 0)
    .toFixed(2);

  const slpCost = Object.values(partials).reduce(
    (acc, curr) => acc + Number(curr.slp),
    0
  );

  const axsCost = Object.values(partials).reduce(
    (acc, curr) => acc + Number(curr.axs),
    0
  );

  return (
    <Dialog
      onClose={() => setIsOpen(false)}
      aria-labelledby="simple-dialog-title"
      open={isOpen}
      maxWidth="lg"
    >
      <DialogContent classes={{ root: classes.root }}>
        {rows.map((id) => (
          <BreedRow
            key={id}
            axsPrice={axsPrice}
            slpPrice={slpPrice}
            onChange={onRowChange(id)}
            onRemove={() => handleRemove(id)}
          />
        ))}
        <IconButton onClick={addNew} classes={{ root: classes.iconButtonRoot }}>
          <AddCircleOutlineIcon />
        </IconButton>
        <p
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            borderTop: "1px solid #c0b7b7",
            marginTop: "10px",
          }}
        >
          <span
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            {slpCost}
            <img
              src="https://assets.coingecko.com/coins/images/10366/thumb/SLP.png?1578640057"
              alt="axs logo"
              width="25px"
              height="25px"
              style={{ marginLeft: "5px" }}
            />
          </span>
          <span
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            {axsCost}
            <img
              src="https://assets.coingecko.com/coins/images/13029/thumb/axie_infinity_logo.png?1604471082"
              alt="axs logo"
              width="25px"
              height="25px"
              style={{ marginLeft: "5px" }}
            />
          </span>
          <ArrowRightAltIcon fontSize="small" />
          <span
            style={{ fontSize: "1.3rem", color: "#136713", fontWeight: "bold" }}
          >
            {usdCost} $
          </span>
        </p>
        {true && <Reload />}
      </DialogContent>
    </Dialog>
  );
};

export default BreedCalculator;
