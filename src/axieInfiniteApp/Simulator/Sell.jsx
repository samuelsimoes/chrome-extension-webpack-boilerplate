import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Avatar from "@material-ui/core/Avatar";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";

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
    width: "120px",
    marginRight: "10px",
  },
  balanceRow: {
    width: "30%",
    paddingBottom: "8px",
    display: "flex",
    alignItems: "center",
    marginLeft: "20px",
    justifyContent: "flex-start",
  },
  amount: {
    padding: "0 2px 0 5px",
    fontSize: "1.1rem",
  },
  fiatConvertion: {
    fontSize: ".7rem",
    fontStyle: "italic",
    color: "grey",
  },
}));

export const SellFactory = (initials) => ({
  type: "sell",
  axieId: null,
  usdAmount: 0,
});

const Sell = ({ id, axieId, usdAmount, updateStep }) => {
  const { axies } = useContext(AxieContext);
  const classes = useStyles();

  const changeAxie = (newAxieId) => updateStep(id, { axieId: newAxieId });
  const changeUsd = (newValue) => updateStep(id, { usdAmount: newValue });

  const getAxieById = (id) => axies.find((axie) => axie.id === id) || {};
  const axie = getAxieById(axieId);

  return (
    <div className={classes.contentContainer}>
      <div className={classes.balanceRow}>
        <img
          src="https://assets.coingecko.com/coins/images/325/small/Tether-logo.png?1598003707"
          alt=""
          width="25px"
          height="25px"
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <TextField
            size="small"
            value={usdAmount}
            onChange={(e) => changeUsd(e.target.value)}
            InputProps={{ disableUnderline: true }}
            inputProps={{ style: { padding: 0 } }}
            className={classes.amount}
            margin="dense"
          />
        </div>
      </div>
      <div>
        <MonetizationOnIcon fontSize="large" />
        <p>Sell</p>
      </div>
      <div className={classes.icons}>
        <Autocomplete
          classes={{ root: classes.autocompleteRoot }}
          options={axies}
          value={axie}
          getOptionSelected={(option, value) => option.id === value.id}
          getOptionLabel={(option) => option && option.name}
          onChange={(_, value) => changeAxie(value && value.id)}
          renderInput={(params) => (
            <TextField {...params} label="axie" margin="normal" />
          )}
        />
        <Avatar src={axie.srcIcon} />
      </div>
    </div>
  );
};

export default Sell;
