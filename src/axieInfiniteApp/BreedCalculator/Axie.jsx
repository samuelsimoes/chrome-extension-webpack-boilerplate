import React, { useState, useEffect } from "react";
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

const Axie = ({ breed, setBreed }) => {
  return (
    <div>
      <TextField
        id="standard-basic"
        value={axieId}
        onChange={(e) => setAxieId(e.target.value)}
        autoComplete={false}
        inputProps={{
          min: 0,
          style: { textAlign: "center" },
        }}
        classes={{
          root: classes.textFieldRoot,
        }}
      />
      <TextField
        id="standard-basic"
        value={breed}
        onChange={(e) => setBreed(e.target.value)}
        autoComplete={false}
        inputProps={{
          min: 0,
          style: { textAlign: "center" },
        }}
        classes={{
          root: classes.textFieldRoot,
        }}
      />
    </div>
  );
};

export default Axie;
