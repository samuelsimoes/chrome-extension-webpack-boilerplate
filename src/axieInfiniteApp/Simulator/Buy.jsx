import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import { Axie } from "./AxieList";
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

export const buyFactory = (initials) => ({
  type: "buy",
  usdAmount: 0,
});

const Buy = ({ id, usdAmount, updateStep }) => {
  const [axieId, setAxieId] = useState(null);
  const { axies, addAxie, updateAxie, removeAxie } = useContext(AxieContext);
  const classes = useStyles();

  useEffect(() => {
    const newAxieId = addAxie();
    setAxieId(newAxieId);

    return () => removeAxie(newAxieId);
  }, []);

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
        <div>
          <ShoppingCartIcon fontSize="large" />
          <p>Buy</p>
        </div>
      </div>
      <div className={classes.icons}>
        <Axie {...axie} updateAxie={updateAxie} disableDelete />
      </div>
    </div>
  );
};

export default Buy;
