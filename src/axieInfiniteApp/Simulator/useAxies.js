import { useState, createContext } from "react";
import { v4 as uuidv4 } from "uuid";

import fetchAxie from "../utils/fetchAxie";

const MOCK_ICON =
  "https://storage.googleapis.com/assets.axieinfinity.com/axies/1622154/axie/axie-full-transparent.png";

const axieFactory = (initials = {}) => {
  const id = uuidv4();

  return {
    id,
    srcIcon: MOCK_ICON,
    name: `random ${id.slice(0, 4)}`,
    breedCount: 0,
    puresness: 0,
    type: "custom",
    ...initials,
  };
};

export const AxieContext = createContext({});

export default () => {
  const [axies, setAxies] = useState([]);

  const addAxie = () => {
    const newAxie = axieFactory();
    setAxies((prev) => [newAxie, ...prev]);

    return newAxie.id;
  };

  const removeAxie = (id) =>
    setAxies((prev) => prev.filter((axie) => axie.id !== id));

  const updateAxie = (id, updates) =>
    setAxies((prev) =>
      prev.map((row) => (row.id === id ? { ...row, ...updates } : row))
    );

  const addAxieById = async (axieId) => {
    const axie = await fetchAxie({ axieId });
    const newAxie = axieFactory({
      ...axie,
      srcIcon: axie.image,
      puresness: axie.quality,
      isFetchable: true,
    });

    setAxies((prev) => [newAxie, ...prev]);
    return axie;
  };

  return { axies, addAxie, updateAxie, removeAxie, setAxies, addAxieById };
};
