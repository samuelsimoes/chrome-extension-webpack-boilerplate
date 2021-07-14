import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import BreedCalculator from "../BreedCalculator";
import Link from "@material-ui/core/Link";

import useFetchCoinPrice from "../utils/useFetchCoinPrice";

const useStyles = makeStyles({
  textFieldRoot: {
    width: "30%",
    marginRight: "9px",
  },
  svgRoot: {
    margin: "0 8px",
  },
});

const CalcRow = ({ iconSrc, rate, onChange }) => {
  const [value, setValue] = useState(1);
  const [result, setResult] = useState(rate);

  const handleChange = (newValue) => {
    const newResult = (rate * newValue).toFixed(3);
    setValue(newValue);
    setResult(newResult);
    onChange(newResult);
  };

  useEffect(() => {
    handleChange(value);
  }, [rate]);

  const classes = useStyles();
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TextField
        id="standard-basic"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        inputProps={{ min: 0, style: { textAlign: "center" } }}
        classes={{
          root: classes.textFieldRoot,
        }}
      />
      <img src={iconSrc} alt="axs logo" width="25px" height="25px" />
      <ArrowRightAltIcon fontSize="small" classes={{ root: classes.svgRoot }} />
      <span style={{ minWidth: "80px", textAlign: "right" }}>{result} $</span>
    </div>
  );
};

const CryptoCalculator = () => {
  const [partials, setPartials] = useState([NaN, NaN]);
  const [isOpen, setIsOpen] = useState(false);
  const { axsPrice, slpPrice } = useFetchCoinPrice();

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
    </div>
  );
};

export default CryptoCalculator;
