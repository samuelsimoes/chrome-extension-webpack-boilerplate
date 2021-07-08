const breedAxies = {
  inputs: [
    { type: "uint256", name: "" },
    { type: "uint256", name: "" },
  ],
  constant: true,
  name: "breedAxies",
  payable: false,
  outputs: [],
  type: "function",
};

const growAxieggToAdult = {
  inputs: [
    { type: "uint256", name: "" },
    { type: "uint256", name: "" },
  ],
  constant: true,
  name: "growAxieggToAdult",
  payable: false,
  outputs: [],
  type: "function",
};

const safeTransferFrom = {
  inputs: [
    { type: "address", name: "" },
    { type: "address", name: "" },
    { type: "uint256", name: "" },
  ],
  constant: true,
  name: "safeTransferFrom",
  payable: false,
  outputs: [],
  type: "function",
};

export default [breedAxies, growAxieggToAdult, safeTransferFrom];
