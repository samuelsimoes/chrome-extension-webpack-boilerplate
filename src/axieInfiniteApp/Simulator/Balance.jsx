import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const LOGO_AXS_SRC =
  "https://assets.coingecko.com/coins/images/13029/thumb/axie_infinity_logo.png?1604471082";
const LOGO_SLP_SRC =
  "https://assets.coingecko.com/coins/images/10366/thumb/SLP.png?1578640057";
const LOGO_ETH_SRC =
  "https://assets.coingecko.com/coins/images/279/thumb/ethereum.png?1595348880";

const EGG_SRC =
  "https://storage.googleapis.com/axie-cdn/avatars/egg/beast-bird-egg-full-transparent.png";

const useStyles = makeStyles(() => ({
  balanceRow: {
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

const icons = {
  slp: LOGO_SLP_SRC,
  axs: LOGO_AXS_SRC,
  eth: LOGO_ETH_SRC,
  egg: EGG_SRC,
};

const rateNames = {
  slp: "slpPrice",
  axs: "axsPrice",
  eth: "ethPrice",
};

const Balance = ({ balances, updateBalance, disableEdit, rates }) => {
  const classes = useStyles();

  return (
    <div>
      {balances.map(({ id, balance }) => (
        <div key={id} className={classes.balanceRow}>
          <img src={icons[id]} alt="" width="25px" height="25px" />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <TextField
              defaultValue={balance}
              value={balance}
              onChange={(e) => updateBalance(id, e.target.value)}
              size="small"
              InputProps={{ disableUnderline: true }}
              inputProps={{ style: { padding: 0 } }}
              className={classes.amount}
              margin="dense"
              disabled={disableEdit}
            />
            <span className={classes.fiatConvertion}>
              {(Number(balance) * Number(rates[rateNames[id]])).toFixed(2)} usd
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Balance;
