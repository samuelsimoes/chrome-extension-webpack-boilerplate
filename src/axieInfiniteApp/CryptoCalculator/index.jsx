import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Link from "@material-ui/core/Link";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";

import BreedCalculator from "../BreedCalculator";
import Reload from "../Reload";
import useFetchCoinPrice from "../utils/useFetchCoinPrice";

const useStyles = makeStyles({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  textFieldRoot: {
    width: "110px",
    marginRight: "9px",
  },
  svgRoot: {
    margin: "0 8px",
  },
  result: {
    minWidth: "110px",
    textAlign: "center",
    fontSize: "1.05rem",
    "&:hover": {
      cursor: "pointer",
    },
  },
  rate: {
    minWidth: "135px",
    fontStyle: "italic",
    color: "#7d7b7b",
    textAlign: "right",
  },
});

const CalcRow = ({ iconSrc, rate, onChange }) => {
  const [amountCrypto, setAmountCrypto] = useState(0);
  const [amountFiat, setAmountFiat] = useState(0);
  const [isCriptoToFiat, setIsCryptoToFiat] = useState(true);
  const classes = useStyles();

  const handleCryptoChange = (cryptoValue) => {
    const newResult = rate * cryptoValue;
    setAmountCrypto(cryptoValue);
    setAmountFiat(newResult);
    onChange(newResult);
  };

  const handleFiatChange = (fiatValue) => {
    const newResult = (fiatValue / rate).toFixed(6);
    setAmountCrypto(newResult);
    setAmountFiat(fiatValue);
    onChange(fiatValue);
  };

  const handleToggle = () => setIsCryptoToFiat((prev) => !prev);

  const handleCopy = () =>
    chrome.runtime.sendMessage({
      type: "copy",
      text: amountCrypto,
    });

  useEffect(() => {
    if (isCriptoToFiat) {
      handleCryptoChange(amountCrypto);
    } else {
      handleFiatChange(amountFiat);
    }
  }, [rate]);

  return (
    <div className={classes.container}>
      {isCriptoToFiat ? (
        <TextField
          autoComplete="off"
          value={amountCrypto}
          onChange={(e) => handleCryptoChange(e.target.value)}
          inputProps={{ min: 0, style: { textAlign: "center" } }}
          classes={{
            root: classes.textFieldRoot,
          }}
        />
      ) : (
        <Tooltip title="click to copy">
          <Button onClick={handleCopy} className={classes.result}>
            {amountCrypto}
          </Button>
        </Tooltip>
      )}
      <img
        src={iconSrc}
        alt="axs logo"
        width="25px"
        height="25px"
        onClick={handleToggle}
      />
      <IconButton onClick={handleToggle}>
        {isCriptoToFiat ? (
          <ArrowForwardIcon
            fontSize="small"
            classes={{ root: classes.svgRoot }}
          />
        ) : (
          <ArrowBackIcon fontSize="small" classes={{ root: classes.svgRoot }} />
        )}
      </IconButton>
      {isCriptoToFiat ? (
        amountFiat ? (
          <>
            <span className={classes.result}>
              {amountFiat && Number(amountFiat).toFixed(2)}
            </span>
            <span style={{ minWidth: "25px", textAlign: "right" }}>$</span>
          </>
        ) : (
          <>
            <span className={classes.rate}>
              {rate && rate.toFixed(2)} usd/eth
            </span>
          </>
        )
      ) : (
        <>
          <TextField
            autoComplete="off"
            value={amountFiat}
            onChange={(e) => handleFiatChange(e.target.value)}
            inputProps={{ min: 0, style: { textAlign: "center" } }}
            classes={{
              root: classes.textFieldRoot,
            }}
          />
          <span style={{ minWidth: "25px", textAlign: "right" }}>$</span>
        </>
      )}
    </div>
  );
};

const CryptoCalculator = () => {
  const [partials, setPartials] = useState([NaN, NaN, NaN]);
  const [isOpen, setIsOpen] = useState(false);
  const { axsPrice, slpPrice, ethPrice } = useFetchCoinPrice();

  const result = partials
    .reduce((acc, curr) => acc + Number(curr), 0)
    .toFixed(2);

  return (
    <div>
      <CalcRow
        iconSrc="https://assets.coingecko.com/coins/images/13029/thumb/axie_infinity_logo.png?1604471082"
        rate={axsPrice}
        onChange={(res) =>
          setPartials((prev) => {
            const newPartial = [...prev];
            newPartial[0] = res;
            return newPartial;
          })
        }
      />
      <CalcRow
        iconSrc="https://assets.coingecko.com/coins/images/10366/thumb/SLP.png?1578640057"
        rate={slpPrice}
        onChange={(res) =>
          setPartials((prev) => {
            const newPartial = [...prev];
            newPartial[1] = res;
            return newPartial;
          })
        }
      />
      <CalcRow
        iconSrc="https://assets.coingecko.com/coins/images/279/thumb/ethereum.png?1595348880"
        rate={ethPrice}
        onChange={(res) =>
          setPartials((prev) => {
            const newPartial = [...prev];
            newPartial[2] = res;
            return newPartial;
          })
        }
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          borderTop: "1px solid #c0b7b7",
          marginTop: "10px",
        }}
      >
        <div>
          <span
            style={{ fontSize: "1.3rem", color: "#136713", fontWeight: "bold" }}
          >
            {result} $
          </span>
        </div>
      </div>
      <Link component="button" variant="body2" onClick={() => setIsOpen(true)}>
        Open breed calculator
      </Link>
      <BreedCalculator
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        axsPrice={axsPrice}
        slpPrice={slpPrice}
      />
      {false && <Reload />}
    </div>
  );
};

export default CryptoCalculator;
