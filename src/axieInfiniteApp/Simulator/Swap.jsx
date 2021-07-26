import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import SwapHorizontalCircleIcon from "@material-ui/icons/SwapHorizontalCircle";

const LOGO_AXS_SRC =
  "https://assets.coingecko.com/coins/images/13029/thumb/axie_infinity_logo.png?1604471082";
const LOGO_SLP_SRC =
  "https://assets.coingecko.com/coins/images/10366/thumb/SLP.png?1578640057";

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
  feeContainer: {
    width: "50px",
  },
}));

export const swapFactory = (initials) => ({
  type: "swap",
  slpAmount: 0,
  axsAmount: 0,
  fee: 0,
});

const Swap = ({ id, slpAmount, axsAmount, fee, updateStep, rates }) => {
  const classes = useStyles();

  const changeSlp = (newValue) => updateStep(id, { slpAmount: newValue });
  const changeAxs = (newValue) => updateStep(id, { axsAmount: newValue });
  const changeFee = (newValue) => updateStep(id, { fee: newValue });

  return (
    <div className={classes.contentContainer}>
      <div className={classes.balanceRow}>
        <img src={LOGO_AXS_SRC} alt="" width="25px" height="25px" />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <TextField
            size="small"
            value={axsAmount}
            defaultValue={axsAmount}
            onChange={(e) => changeAxs(e.target.value)}
            InputProps={{ disableUnderline: true }}
            inputProps={{ style: { padding: 0 } }}
            className={classes.amount}
            margin="dense"
          />
          <span className={classes.fiatConvertion}>
            {(Number(axsAmount) * Number(rates.axsPrice)).toFixed(2)} usd
          </span>
        </div>
      </div>
      <div>
        <SwapHorizontalCircleIcon fontSize="large" />
        <div className={classes.feeContainer}>
          <TextField
            size="small"
            value={fee}
            defaultValue={fee}
            onChange={(e) => changeFee(e.target.value)}
            InputProps={{ disableUnderline: true }}
            inputProps={{ style: { padding: 0 } }}
            className={classes.amount}
            margin="dense"
            label="fee ($)"
          />
        </div>
      </div>
      <div className={classes.balanceRow}>
        <img src={LOGO_SLP_SRC} alt="" width="25px" height="25px" />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <TextField
            size="small"
            value={slpAmount}
            defaultValue={slpAmount}
            onChange={(e) => changeSlp(e.target.value)}
            InputProps={{ disableUnderline: true }}
            inputProps={{ style: { padding: 0 } }}
            className={classes.amount}
            margin="dense"
          />
          <span className={classes.fiatConvertion}>
            {(Number(slpAmount) * Number(rates.slpPrice)).toFixed(2)} usd
          </span>
        </div>
      </div>
    </div>
  );
};

export default Swap;
