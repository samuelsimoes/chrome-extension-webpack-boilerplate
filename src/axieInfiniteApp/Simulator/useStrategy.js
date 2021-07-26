import { useState } from "react";
import arrayMove from "array-move";
import { v4 as uuidv4 } from "uuid";
import { breedFactory } from "./Breed";
import { SellFactory } from "./Sell";
import { buyFactory } from "./Buy";
import { swapFactory } from "./Swap";

export const types = {
  SWAP: "swap",
  BREED: "breed",
  MARKET: "market",
  Sell: "sell",
  BUY: "buy",
};

const createStepByType = (type) => {
  switch (type) {
    case types.BREED:
      return breedFactory();

    case types.Sell:
      return SellFactory();

    case types.BUY:
      return buyFactory();

    case types.SWAP:
      return swapFactory();

    default:
      return { type: "custom" };
  }
};

const stepFactory = (initials = {}) => {
  const id = uuidv4();
  const initialsByType = createStepByType(initials.type);

  return {
    id,
    name: id,
    ...initialsByType,
    ...initials,
  };
};

export default () => {
  const [steps, setSteps] = useState([]);

  const addStep = (type = "custom") => {
    const newStep = stepFactory({ type });
    setSteps((prev) => [...prev, newStep]);
  };

  const removeStep = (id) =>
    setSteps((prev) => prev.filter((step) => step.id !== id));

  const updateStep = (id, updates) =>
    setSteps((prev) =>
      prev.map((row) => (row.id === id ? { ...row, ...updates } : row))
    );

  const reorderSteps = ({ removedIndex, addedIndex }) => {
    setSteps((prev) => arrayMove(prev, removedIndex, addedIndex));
  };

  return { steps, addStep, updateStep, reorderSteps, removeStep, setSteps };
};
