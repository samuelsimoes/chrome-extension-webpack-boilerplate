import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import IconButton from "@material-ui/core/IconButton";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
import { v4 as uuid } from "uuid";

import getBreedCost from "./../utils/getBreedCost";
import BreedRow from "./BreedRow";
import Reload from "../Reload";

const useStyles = makeStyles({
  iconButtonContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  textFieldRoot: {
    width: "70px",
    marginRight: "9px",
  },
});

const getNewBreedRow = (initialState = {}) => {
  return {
    type: "breed",
    breedA: 0,
    breedB: 0,
    ...initialState,
  };
};

const BreedCalculator = ({ isOpen, setIsOpen, axsPrice, slpPrice }) => {
  const [rows, setRows] = useState({});
  const classes = useStyles();

  const addNew = () => {
    const newBreed = getNewBreedRow();
    setRows((prev) => ({ ...prev, [uuid()]: newBreed }));
  };

  const resetRows = () => {
    const b0 = getNewBreedRow();
    const b1 = getNewBreedRow({ breedA: 1, breedB: 1 });
    const b2 = getNewBreedRow({ breedA: 2, breedB: 2 });
    const b3 = getNewBreedRow({ breedA: 3, breedB: 3 });

    setRows({
      [uuid()]: b0,
      [uuid()]: b1,
      [uuid()]: b2,
      [uuid()]: b3,
    });
  };

  const handleRowChange = (id) => (newState) => {
    setRows((prev) => {
      const copyPrev = { ...prev };
      copyPrev[id] = { ...prev[id], ...newState };

      return copyPrev;
    });
  };

  const handleRemoveRow = (id) => () =>
    setRows((prev) => {
      const copyPrev = { ...prev };
      delete copyPrev[id];

      return copyPrev;
    });

  const getCost = (id) => {
    const { breedA, breedB } = rows[id];

    const cost = getBreedCost(breedA, breedB);
    const usdCost = cost.axs * axsPrice + cost.slp * slpPrice;
    const newResult = { ...cost, usd: usdCost.toFixed(2) };

    return newResult;
  };

  useEffect(() => resetRows(), []);

  const usdCost = Object.keys(rows)
    .reduce((acc, id) => acc + Number(getCost(id).usd), 0)
    .toFixed(2);

  const slpCost = Object.keys(rows).reduce(
    (acc, id) => acc + Number(getCost(id).slp),
    0
  );

  const axsCost = Object.keys(rows).reduce(
    (acc, id) => acc + Number(getCost(id).axs),
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
        {Object.entries(rows).map(([id, data]) => {
          const onChange = handleRowChange(id);
          const onRemove = handleRemoveRow(id);
          const { usd } = getCost(id);
          return (
            <div>
              <BreedRow
                key={id}
                onChange={onChange}
                onRemove={onRemove}
                {...data}
              />
              <span>{usd}</span>
            </div>
          );
        })}
        <div className={classes.iconButtonContainer}>
          <IconButton onClick={addNew}>
            <AddCircleOutlineIcon />
          </IconButton>
          <IconButton onClick={resetRows}>
            <RotateLeftIcon />
          </IconButton>
        </div>
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
        {false && <Reload />}
      </DialogContent>
    </Dialog>
  );
};

export default BreedCalculator;
