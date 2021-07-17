import { useState, useEffect } from "react";
import fetchCoinPrice, { AXS_ID, SLP_ID, ETH_ID } from "./fetchCoinPrice";

const useFetchCoinPrice = () => {
  const [axsPrice, setAxsPrice] = useState(null);
  const [slpPrice, setSlpPrice] = useState(null);
  const [ethPrice, setEthPrice] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      if (!document.hidden) {
        fetchCoinPrice(AXS_ID).then(({ usd }) => setAxsPrice(usd));
        fetchCoinPrice(SLP_ID).then(({ usd }) => setSlpPrice(usd));
        fetchCoinPrice(ETH_ID).then(({ usd }) => setEthPrice(usd));
      }
    };

    fetchData();
    const intervalId = setInterval(() => fetchData(), 20 * 1000);

    return () => clearInterval(intervalId);
  }, []);

  return { axsPrice, slpPrice, ethPrice };
};

export default useFetchCoinPrice;
