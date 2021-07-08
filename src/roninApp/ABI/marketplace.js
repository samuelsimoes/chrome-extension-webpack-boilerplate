const createAuction = {
  inputs: [
    { type: "uint8[]", name: "" },
    { type: "address[]", name: "" },
    { type: "uint256[]", name: "" },
    { type: "uint256[]", name: "" },
    { type: "uint256[]", name: "" },
    { type: "address[]", name: "" },
    { type: "uint256[]", name: "" },
  ],
  constant: true,
  name: "createAuction",
  payable: false,
  outputs: [],
  type: "function",
};

const settleAuction = {
  inputs: [
    { type: "address", name: "" },
    { type: "address", name: "" },
    { type: "uint256[]", name: "" },
    { type: "uint256[]", name: "" },
    { type: "uint256[]", name: "" },
  ],
  constant: true,
  name: "settleAuction",
  payable: false,
  outputs: [],
  type: "function",
};

export default [settleAuction, createAuction];
