import React, { createContext, useState, useContext, useEffect } from "react";

import fetchMarketplace from "../utils/fetchMarketplace";
import fetchAxie from "../utils/fetchAxie";

const SearchContext = createContext({});

export const useSearchContext = () => useContext(SearchContext);

export const SearchProvider = ({ children }) => {
  const [pureness, setPureness] = useState(6);
  const [purenessRange, setPurenessRange] = useState([0, 100]);
  const [breed, setBreed] = useState([0, 7]);
  const [parts, setParts] = useState([]);
  const [axieClass, setAxieClass] = useState([]);
  const [axieMarket, setAxieMarket] = useState([]);

  const [isFetching, setIsFetching] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const filterAxies = axieMarket.filter(
    ({ quality }) => quality >= purenessRange[0] && quality <= purenessRange[1]
  );

  const onSearch = async () => {
    setIsFetching(true);

    const marketAxies = await fetchMarketplace({
      parts,
      pureness,
      classes: axieClass,
      breed,
    });

    setIsOpenModal(true);
    setIsFetching(false);
    setAxieMarket(marketAxies);
  };

  const onFetchAxie = async (axieId) => {
    setIsFetching(true);

    const { queryExactParams } = await fetchAxie({ axieId });

    setParts(queryExactParams.parts);
    setPureness(queryExactParams.pureness);
    setAxieClass(queryExactParams.classes);
    setBreed(queryExactParams.breed);
    setIsFetching(false);
  };

  const clearAll = () => {
    setPureness(6);
    setPurenessRange([0, 100]);
    setBreed([0, 7]);
    setParts([]);
    setAxieClass([]);
    setAxieMarket([]);
    setIsFetching(false);
  };

  useEffect(() => {
    if (!isOpenModal) {
      setAxieMarket([]);
    }
  }, [isOpenModal]);

  return (
    <SearchContext.Provider
      value={{
        pureness,
        setPureness,
        purenessRange,
        setPurenessRange,
        breed,
        setBreed,
        parts,
        setParts,
        axieClass,
        setAxieClass,
        axieMarket: filterAxies,
        setAxieMarket,
        isOpenModal,
        setIsOpenModal,
        onSearch,
        onFetchAxie,
        clearAll,
        isFetching,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
