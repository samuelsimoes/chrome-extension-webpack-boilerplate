import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

import { AxieContext } from "./useAxies";

const useStyles = makeStyles(() => ({
  contentContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  icons: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  autocompleteRoot: {
    width: "30%",
  },
}));

export const breedFactory = (initials) => ({
  type: "breed",
  breedTimes: 1,
  axieAId: null,
  axieBId: null,
});

const Breed = ({ id, breedTimes, axieAId, axieBId, updateStep }) => {
  const { axies } = useContext(AxieContext);
  const classes = useStyles();

  const changeAxieA = (newAxieId) => updateStep(id, { axieAId: newAxieId });
  const changeAxieB = (newAxieId) => updateStep(id, { axieBId: newAxieId });

  const incrementTimes = () => updateStep(id, { breedTimes: breedTimes + 1 });
  const decrementTimes = () => updateStep(id, { breedTimes: breedTimes - 1 });

  const getAxieById = (id) => axies.find((axie) => axie.id === id) || {};
  const axieA = getAxieById(axieAId);
  const axieB = getAxieById(axieBId);

  return (
    <div className={classes.contentContainer}>
      <Autocomplete
        classes={{ root: classes.autocompleteRoot }}
        options={axies}
        value={axieA}
        getOptionSelected={(option, value) => option.id === value.id}
        getOptionLabel={(option) => option && option.name}
        onChange={(_, value) => changeAxieA(value && value.id)}
        renderInput={(params) => (
          <TextField {...params} label="axie" margin="normal" />
        )}
      />
      <div>
        <div className={classes.icons}>
          <Avatar src={axieA.srcIcon} />
          <FavoriteIcon />
          <Avatar src={axieB.srcIcon} />
        </div>
        <div className={classes.icons}>
          <IconButton aria-label="delete" size="small" onClick={decrementTimes}>
            <ArrowDownwardIcon fontSize="inherit" />
          </IconButton>
          <span>{breedTimes}</span>
          <IconButton aria-label="delete" size="small" onClick={incrementTimes}>
            <ArrowUpwardIcon fontSize="inherit" />
          </IconButton>
        </div>
      </div>
      <Autocomplete
        classes={{ root: classes.autocompleteRoot }}
        options={axies}
        value={axieB}
        getOptionSelected={(option, value) => option.id === value.id}
        getOptionLabel={(option) => option && option.name}
        onChange={(_, value) => changeAxieB(value && value.id)}
        renderInput={(params) => (
          <TextField {...params} label="axie" margin="normal" />
        )}
      />
    </div>
  );
};

export default Breed;
