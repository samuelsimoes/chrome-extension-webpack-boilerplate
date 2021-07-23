import React, { useState } from "react";
import Link from "@material-ui/core/Link";

import BreedCalculator from "../BreedCalculator";
import Reload from "../Reload";
import useFetchCoinPrice from "../utils/useFetchCoinPrice";
import CalculatorRow from "./CalculatorRow";

const CryptoCalculator = () => {
  const [partials, setPartials] = useState([NaN, NaN, NaN]);
  const [isOpen, setIsOpen] = useState(false);
  const { axsPrice, slpPrice, ethPrice } = useFetchCoinPrice();

  const result = partials
    .reduce((acc, curr) => acc + Number(curr), 0)
    .toFixed(2);

  return (
    <div style={{ padding: "20px" }}>
      <CalculatorRow
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
      <CalculatorRow
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
      <CalculatorRow
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
