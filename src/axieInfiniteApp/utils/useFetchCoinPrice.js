import { useState, useEffect } from "react";
import fetchCoinPrice, { AXS_ID, SLP_ID } from "./fetchCoinPrice";

const useFetchCoinPrice = () => {
  const [axsPrice, setAxsPrice] = useState(null);
  const [slpPrice, setSlpPrice] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      if (!document.hidden) {
        fetchCoinPrice(AXS_ID).then(({ usd }) => setAxsPrice(usd));
        fetchCoinPrice(SLP_ID).then(({ usd }) => setSlpPrice(usd));
      }
    };

    fetchData();
    const intervalId = setInterval(() => fetchData(), 10 * 1000);

    return () => clearInterval(intervalId);
  }, []);

  return { axsPrice, slpPrice };
};

export default useFetchCoinPrice;
