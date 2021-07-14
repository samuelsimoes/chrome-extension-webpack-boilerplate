import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FavoriteIcon from "@material-ui/icons/Favorite";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

import getBreedCost from "./../utils/getBreedCost";

const useStyles = makeStyles({
  textFieldRoot: {
    width: "70px",
    marginRight: "9px",
  },
});

const BreedRow = ({ axsPrice, slpPrice, onChange, onRemove }) => {
  const [breedA, setBreedA] = useState(0);
  const [breedB, setBreedB] = useState(0);
  const [result, setResult] = useState({});

  useEffect(() => {
    const cost = getBreedCost(breedA, breedB);
    const usdCost = cost.axs * axsPrice + cost.slp * slpPrice;
    const newResult = { ...cost, usd: usdCost.toFixed(2) };

    setResult(newResult);
    onChange(newResult);
  }, [breedA, breedB, axsPrice, slpPrice]);

  const classes = useStyles();
  return (
    <div>
      <IconButton aria-label="delete" onClick={onRemove}>
        <DeleteIcon fontSize="small" />
      </IconButton>
      <TextField
        id="standard-basic"
        value={breedA}
        onChange={(e) => setBreedA(e.target.value)}
        autoComplete={false}
        inputProps={{
          min: 0,
          style: { textAlign: "center" },
        }}
        classes={{
          root: classes.textFieldRoot,
        }}
      />
      <FavoriteIcon fontSize="small" />
      <TextField
        id="standard-basic"
        autoComplete={false}
        value={breedB}
        onChange={(e) => setBreedB(e.target.value)}
        inputProps={{
          min: 0,
          style: { textAlign: "center" },
        }}
        classes={{
          root: classes.textFieldRoot,
        }}
      />
      <span>{result.usd}</span>
    </div>
  );
};

export default BreedRow;
