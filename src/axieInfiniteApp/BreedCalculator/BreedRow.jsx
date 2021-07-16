import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FavoriteIcon from "@material-ui/icons/Favorite";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles({
  textFieldRoot: {
    width: "70px",
    marginRight: "9px",
  },
});

const BreedRow = ({ breedA, breedB, onChange, onRemove }) => {
  const setBreedA = (value) => onChange({ breedA: value });
  const setBreedB = (value) => onChange({ breedB: value });

  const classes = useStyles();
  return (
    <>
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
    </>
  );
};

export default BreedRow;
