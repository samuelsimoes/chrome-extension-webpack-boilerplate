const rcp = {
  id: "ronin-mainnet",
  name: "Ronin Network",
  rpcUrl: "https://api.roninchain.com/rpc",
  chainId: 2020,
  blockExplorerUrl: "https://explorer.roninchain.com",
  unit: "RON",
};

const contracts2 = [
  {
    id: "sidechain-weth",
    name: "Ronin WETH Contract",
    iconSrc: "https://cdn.axieinfinity.com/ronin-wallet/assets/weth.png",
    address: "0xc99a6a985ed2cac1ef41640596c5a5f9f4e19ef5",
    type: "erc20",
    metadata: {
      symbol: "WETH",
      numberOfDecimal: 18,
    },
  },
  {
    id: "axs",
    name: "Axie Infinity Shard",
    address: "0x97a9107c1793bc407d6f527b77e7fff4d812bece",
    iconSrc: "https://cdn.axieinfinity.com/ronin-wallet/assets/axs.png",
    type: "erc20",
    metadata: {
      symbol: "AXS",
      numberOfDecimal: 18,
    },
  },
  {
    id: "slp",
    name: "Smooth Love Potion",
    iconSrc: "https://cdn.axieinfinity.com/ronin-wallet/assets/love-potion.png",
    address: "0xa8754b9fa15fc18bb59458815510e40a12cd2014",
    type: "erc20",
    metadata: {
      symbol: "SLP",
      numberOfDecimal: 0,
    },
  },
  {
    id: "axie",
    name: "Axie Contract",
    iconSrc: "https://cdn.axieinfinity.com/ronin-wallet/assets/axie.png",
    address: "0x32950db2a7164ae833121501c797d79e7b79d74c",
    metadata: {
      type: "axie",
      displayName: "Axie",
    },
    type: "erc721",
  },
  {
    id: "land",
    name: "Axie Land Contract",
    iconSrc: "https://cdn.axieinfinity.com/ronin-wallet/assets/land.png",
    address: "0x8c811e3c958e190f5ec15fb376533a3398620500",
    type: "erc721",
    metadata: {
      type: "land",
      displayName: "Land Plot",
    },
    abi: [
      {
        inputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "constructor",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "_oldAdmin",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "_newAdmin",
            type: "address",
          },
        ],
        name: "AdminChanged",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "_oldAdmin",
            type: "address",
          },
        ],
        name: "AdminRemoved",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "_owner",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "_approved",
            type: "address",
          },
          {
            indexed: true,
            internalType: "uint256",
            name: "_tokenId",
            type: "uint256",
          },
        ],
        name: "Approval",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "_owner",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "_operator",
            type: "address",
          },
          {
            indexed: false,
            internalType: "bool",
            name: "_approved",
            type: "bool",
          },
        ],
        name: "ApprovalForAll",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "_minter",
            type: "address",
          },
        ],
        name: "MinterAdded",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "_minter",
            type: "address",
          },
        ],
        name: "MinterRemoved",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [],
        name: "Paused",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "_spender",
            type: "address",
          },
        ],
        name: "SpenderUnwhitelisted",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "_spender",
            type: "address",
          },
        ],
        name: "SpenderWhitelisted",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "_from",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "_to",
            type: "address",
          },
          {
            indexed: true,
            internalType: "uint256",
            name: "_tokenId",
            type: "uint256",
          },
        ],
        name: "Transfer",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [],
        name: "Unpaused",
        type: "event",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "address[]",
            name: "_addedMinters",
            type: "address[]",
          },
        ],
        name: "addMinters",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "admin",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "address",
            name: "_to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_tokenId",
            type: "uint256",
          },
        ],
        name: "approve",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "address",
            name: "_owner",
            type: "address",
          },
        ],
        name: "balanceOf",
        outputs: [
          {
            internalType: "uint256",
            name: "_balance",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "baseTokenURI",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "address[]",
            name: "_owners",
            type: "address[]",
          },
          {
            internalType: "int256[]",
            name: "_rows",
            type: "int256[]",
          },
          {
            internalType: "int256[]",
            name: "_cols",
            type: "int256[]",
          },
        ],
        name: "batchMint",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "address",
            name: "_newAdmin",
            type: "address",
          },
        ],
        name: "changeAdmin",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "uint256",
            name: "_tokenId",
            type: "uint256",
          },
        ],
        name: "decodeTokenId",
        outputs: [
          {
            internalType: "int256",
            name: "_row",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "_col",
            type: "int256",
          },
        ],
        payable: false,
        stateMutability: "pure",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        name: "estateData",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "uint256",
            name: "_tokenId",
            type: "uint256",
          },
        ],
        name: "getApproved",
        outputs: [
          {
            internalType: "address",
            name: "_operator",
            type: "address",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "int256",
            name: "_row",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "_col",
            type: "int256",
          },
        ],
        name: "getEstateData",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "int256",
            name: "_row",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "_col",
            type: "int256",
          },
        ],
        name: "getTokenId",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "pure",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "address",
            name: "_owner",
            type: "address",
          },
          {
            internalType: "address",
            name: "_operator",
            type: "address",
          },
        ],
        name: "isApprovedForAll",
        outputs: [
          {
            internalType: "bool",
            name: "_approved",
            type: "bool",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "address",
            name: "_addr",
            type: "address",
          },
        ],
        name: "isMinter",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "address",
            name: "_owner",
            type: "address",
          },
        ],
        name: "landOfOwner",
        outputs: [
          {
            internalType: "int256[]",
            name: "",
            type: "int256[]",
          },
          {
            internalType: "int256[]",
            name: "",
            type: "int256[]",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "address",
            name: "_to",
            type: "address",
          },
          {
            internalType: "int256",
            name: "_row",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "_col",
            type: "int256",
          },
        ],
        name: "mint",
        outputs: [
          {
            internalType: "uint256",
            name: "_itemId",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        name: "minter",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        name: "minters",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "name",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "uint256",
            name: "_tokenId",
            type: "uint256",
          },
        ],
        name: "ownerOf",
        outputs: [
          {
            internalType: "address",
            name: "_owner",
            type: "address",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "int256",
            name: "_row",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "_col",
            type: "int256",
          },
        ],
        name: "ownerOfLand",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [],
        name: "pause",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "paused",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [],
        name: "removeAdmin",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "address[]",
            name: "_removedMinters",
            type: "address[]",
          },
        ],
        name: "removeMinters",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "address",
            name: "_from",
            type: "address",
          },
          {
            internalType: "address",
            name: "_to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_tokenId",
            type: "uint256",
          },
        ],
        name: "safeTransferFrom",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "address",
            name: "_from",
            type: "address",
          },
          {
            internalType: "address",
            name: "_to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_tokenId",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "_data",
            type: "bytes",
          },
        ],
        name: "safeTransferFrom",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "address",
            name: "_operator",
            type: "address",
          },
          {
            internalType: "bool",
            name: "_approved",
            type: "bool",
          },
        ],
        name: "setApprovalForAll",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "string",
            name: "_baseTokenURI",
            type: "string",
          },
        ],
        name: "setBaseTokenURI",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "int256",
            name: "_row",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "_col",
            type: "int256",
          },
          {
            internalType: "string",
            name: "_data",
            type: "string",
          },
        ],
        name: "setEstateData",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "bytes4",
            name: "_interfaceId",
            type: "bytes4",
          },
        ],
        name: "supportsInterface",
        outputs: [
          {
            internalType: "bool",
            name: "_supported",
            type: "bool",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "symbol",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "uint256",
            name: "_index",
            type: "uint256",
          },
        ],
        name: "tokenByIndex",
        outputs: [
          {
            internalType: "uint256",
            name: "_tokenId",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "address",
            name: "_owner",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_index",
            type: "uint256",
          },
        ],
        name: "tokenOfOwnerByIndex",
        outputs: [
          {
            internalType: "uint256",
            name: "_tokenId",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "uint256",
            name: "_tokenId",
            type: "uint256",
          },
        ],
        name: "tokenURI",
        outputs: [
          {
            internalType: "string",
            name: "_uri",
            type: "string",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "totalSupply",
        outputs: [
          {
            internalType: "uint256",
            name: "_supply",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "address",
            name: "_from",
            type: "address",
          },
          {
            internalType: "address",
            name: "_to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_tokenId",
            type: "uint256",
          },
        ],
        name: "transferFrom",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [],
        name: "unpause",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "address",
            name: "_spender",
            type: "address",
          },
        ],
        name: "unwhitelist",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "address",
            name: "_spender",
            type: "address",
          },
        ],
        name: "whitelist",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        name: "whitelisted",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
    ],
  },
  {
    id: "land-item",
    name: "Axie Land Item Contract",
    iconSrc: "https://cdn.axieinfinity.com/ronin-wallet/assets/land-item.png",
    address: "0xa96660f0e4a3e9bc7388925d245a6d4d79e21259",
    type: "erc721",
    metadata: {
      type: "item",
      displayName: "Land Item",
    },
    abi: [
      {
        inputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "constructor",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "_oldAdmin",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "_newAdmin",
            type: "address",
          },
        ],
        name: "AdminChanged",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "_oldAdmin",
            type: "address",
          },
        ],
        name: "AdminRemoved",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "_owner",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "_approved",
            type: "address",
          },
          {
            indexed: true,
            internalType: "uint256",
            name: "_tokenId",
            type: "uint256",
          },
        ],
        name: "Approval",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "_owner",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "_operator",
            type: "address",
          },
          {
            indexed: false,
            internalType: "bool",
            name: "_approved",
            type: "bool",
          },
        ],
        name: "ApprovalForAll",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "_minter",
            type: "address",
          },
        ],
        name: "MinterAdded",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "_minter",
            type: "address",
          },
        ],
        name: "MinterRemoved",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [],
        name: "Paused",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "_spender",
            type: "address",
          },
        ],
        name: "SpenderUnwhitelisted",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "_spender",
            type: "address",
          },
        ],
        name: "SpenderWhitelisted",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "_from",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "_to",
            type: "address",
          },
          {
            indexed: true,
            internalType: "uint256",
            name: "_tokenId",
            type: "uint256",
          },
        ],
        name: "Transfer",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [],
        name: "Unpaused",
        type: "event",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "address[]",
            name: "_addedMinters",
            type: "address[]",
          },
        ],
        name: "addMinters",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "string",
            name: "_name",
            type: "string",
          },
          {
            internalType: "string",
            name: "_symbol",
            type: "string",
          },
          {
            internalType: "string",
            name: "_baseTokenURI",
            type: "string",
          },
        ],
        name: "addTokenType",
        outputs: [
          {
            internalType: "uint256",
            name: "_tokenType",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "admin",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "address",
            name: "_to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_tokenId",
            type: "uint256",
          },
        ],
        name: "approve",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "address",
            name: "_owner",
            type: "address",
          },
        ],
        name: "balanceOf",
        outputs: [
          {
            internalType: "uint256",
            name: "_balance",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "baseTokenURI",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "address[]",
            name: "_recipients",
            type: "address[]",
          },
          {
            internalType: "uint256[]",
            name: "_tokenTypes",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "_tokenIds",
            type: "uint256[]",
          },
        ],
        name: "batchMint",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "address",
            name: "_newAdmin",
            type: "address",
          },
        ],
        name: "changeAdmin",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "uint256",
            name: "_itemId",
            type: "uint256",
          },
        ],
        name: "deconstructItemId",
        outputs: [
          {
            internalType: "uint256",
            name: "_tokenType",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "_tokenId",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "pure",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "uint256",
            name: "_tokenType",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "_name",
            type: "string",
          },
          {
            internalType: "string",
            name: "_symbol",
            type: "string",
          },
          {
            internalType: "string",
            name: "_baseTokenURI",
            type: "string",
          },
        ],
        name: "editTokenMetadata",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "uint256",
            name: "_tokenId",
            type: "uint256",
          },
        ],
        name: "getApproved",
        outputs: [
          {
            internalType: "address",
            name: "_operator",
            type: "address",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "uint256",
            name: "_tokenType",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "_tokenId",
            type: "uint256",
          },
        ],
        name: "getItemId",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "getTokenTypeCount",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "address",
            name: "_owner",
            type: "address",
          },
          {
            internalType: "address",
            name: "_operator",
            type: "address",
          },
        ],
        name: "isApprovedForAll",
        outputs: [
          {
            internalType: "bool",
            name: "_approved",
            type: "bool",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "address",
            name: "_addr",
            type: "address",
          },
        ],
        name: "isMinter",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "address",
            name: "_to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_tokenType",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "_tokenId",
            type: "uint256",
          },
        ],
        name: "mint",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "address",
            name: "_to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_tokenType",
            type: "uint256",
          },
        ],
        name: "mintNew",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        name: "minter",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        name: "minters",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "name",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "uint256",
            name: "_tokenId",
            type: "uint256",
          },
        ],
        name: "ownerOf",
        outputs: [
          {
            internalType: "address",
            name: "_owner",
            type: "address",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [],
        name: "pause",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "paused",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [],
        name: "removeAdmin",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "address[]",
            name: "_removedMinters",
            type: "address[]",
          },
        ],
        name: "removeMinters",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "address",
            name: "_from",
            type: "address",
          },
          {
            internalType: "address",
            name: "_to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_tokenId",
            type: "uint256",
          },
        ],
        name: "safeTransferFrom",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "address",
            name: "_from",
            type: "address",
          },
          {
            internalType: "address",
            name: "_to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_tokenId",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "_data",
            type: "bytes",
          },
        ],
        name: "safeTransferFrom",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "address",
            name: "_operator",
            type: "address",
          },
          {
            internalType: "bool",
            name: "_approved",
            type: "bool",
          },
        ],
        name: "setApprovalForAll",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "string",
            name: "_baseTokenURI",
            type: "string",
          },
        ],
        name: "setBaseTokenURI",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "bytes4",
            name: "_interfaceId",
            type: "bytes4",
          },
        ],
        name: "supportsInterface",
        outputs: [
          {
            internalType: "bool",
            name: "_supported",
            type: "bool",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "symbol",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        name: "tokenBalance",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "uint256",
            name: "_index",
            type: "uint256",
          },
        ],
        name: "tokenByIndex",
        outputs: [
          {
            internalType: "uint256",
            name: "_tokenId",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        name: "tokenMetadata",
        outputs: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "symbol",
            type: "string",
          },
          {
            internalType: "string",
            name: "baseTokenURI",
            type: "string",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "address",
            name: "_owner",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_index",
            type: "uint256",
          },
        ],
        name: "tokenOfOwnerByIndex",
        outputs: [
          {
            internalType: "uint256",
            name: "_tokenId",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "uint256",
            name: "_tokenId",
            type: "uint256",
          },
        ],
        name: "tokenURI",
        outputs: [
          {
            internalType: "string",
            name: "_uri",
            type: "string",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "totalSupply",
        outputs: [
          {
            internalType: "uint256",
            name: "_supply",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "address",
            name: "_from",
            type: "address",
          },
          {
            internalType: "address",
            name: "_to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_tokenId",
            type: "uint256",
          },
        ],
        name: "transferFrom",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [],
        name: "unpause",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "address",
            name: "_spender",
            type: "address",
          },
        ],
        name: "unwhitelist",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "address",
            name: "_spender",
            type: "address",
          },
        ],
        name: "whitelist",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        name: "whitelisted",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
    ],
  },
  {
    id: "sidechain-gateway",
    name: "Ronin Gateway Contract",
    iconSrc: "https://cdn.axieinfinity.com/ronin-wallet/assets/ronin.png",
    address: "0xe35d62ebe18413d96ca2a2f7cf215bb21a406b4b",
    abi: [
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "_oldAdmin",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "_newAdmin",
            type: "address",
          },
        ],
        name: "AdminChanged",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "_oldAdmin",
            type: "address",
          },
        ],
        name: "AdminRemoved",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [],
        name: "Paused",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "uint256",
            name: "_withdrawalId",
            type: "uint256",
          },
          {
            indexed: true,
            internalType: "address",
            name: "_owner",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "_tokenAddress",
            type: "address",
          },
          {
            indexed: false,
            internalType: "address",
            name: "_mainchainAddress",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint32",
            name: "_standard",
            type: "uint32",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "_tokenNumber",
            type: "uint256",
          },
        ],
        name: "RequestTokenWithdrawalSigAgain",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "uint256",
            name: "depositId",
            type: "uint256",
          },
          {
            indexed: true,
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "tokenAddress",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "tokenNumber",
            type: "uint256",
          },
        ],
        name: "TokenDeposited",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "uint256",
            name: "_withdrawId",
            type: "uint256",
          },
          {
            indexed: true,
            internalType: "address",
            name: "_owner",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "_tokenAddress",
            type: "address",
          },
          {
            indexed: false,
            internalType: "address",
            name: "_mainchainAddress",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint32",
            name: "_standard",
            type: "uint32",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "_tokenNumber",
            type: "uint256",
          },
        ],
        name: "TokenWithdrew",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [],
        name: "Unpaused",
        type: "event",
      },
      {
        payable: true,
        stateMutability: "payable",
        type: "fallback",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "uint256",
            name: "_withdrawalId",
            type: "uint256",
          },
        ],
        name: "acknowledWithdrawalOnMainchain",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "admin",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "address",
            name: "_newAdmin",
            type: "address",
          },
        ],
        name: "changeAdmin",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "uint256",
            name: "_depositId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "_owner",
            type: "address",
          },
          {
            internalType: "address",
            name: "_token",
            type: "address",
          },
          {
            internalType: "uint32",
            name: "_standard",
            type: "uint32",
          },
          {
            internalType: "uint256",
            name: "_tokenNumber",
            type: "uint256",
          },
        ],
        name: "depositERCTokenFor",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        name: "deposits",
        outputs: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "address",
            name: "tokenAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tokenNumber",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "address",
            name: "_owner",
            type: "address",
          },
        ],
        name: "getPendingWithdrawals",
        outputs: [
          {
            internalType: "uint256[]",
            name: "ids",
            type: "uint256[]",
          },
          {
            components: [
              {
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                internalType: "address",
                name: "tokenAddress",
                type: "address",
              },
              {
                internalType: "address",
                name: "mainchainAddress",
                type: "address",
              },
              {
                internalType: "uint32",
                name: "standard",
                type: "uint32",
              },
              {
                internalType: "uint256",
                name: "tokenNumber",
                type: "uint256",
              },
            ],
            internalType: "struct SidechainGatewayStorage.WithdrawalEntry[]",
            name: "entries",
            type: "tuple[]",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "uint256",
            name: "_withdrawalId",
            type: "uint256",
          },
        ],
        name: "getWithdrawalSignatures",
        outputs: [
          {
            internalType: "address[]",
            name: "_signers",
            type: "address[]",
          },
          {
            internalType: "bytes[]",
            name: "_sigs",
            type: "bytes[]",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "uint256",
            name: "_withdrawalId",
            type: "uint256",
          },
        ],
        name: "getWithdrawalSigners",
        outputs: [
          {
            internalType: "address[]",
            name: "",
            type: "address[]",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "maxPendingWithdrawal",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [],
        name: "pause",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "paused",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "registry",
        outputs: [
          {
            internalType: "contract Registry",
            name: "",
            type: "address",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [],
        name: "removeAdmin",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "uint256",
            name: "_withdrawalId",
            type: "uint256",
          },
        ],
        name: "requestSignatureAgain",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "uint256",
            name: "_withdrawalId",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "_shouldReplace",
            type: "bool",
          },
          {
            internalType: "bytes",
            name: "_sig",
            type: "bytes",
          },
        ],
        name: "submitWithdrawalSignatures",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [],
        name: "unpause",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "uint256",
            name: "_maxPendingWithdrawal",
            type: "uint256",
          },
        ],
        name: "updateMaxPendingWithdrawal",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "address",
            name: "_registry",
            type: "address",
          },
        ],
        name: "updateRegistry",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "address",
            name: "_token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_amount",
            type: "uint256",
          },
        ],
        name: "withdrawERC20",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "address",
            name: "_owner",
            type: "address",
          },
          {
            internalType: "address",
            name: "_token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_amount",
            type: "uint256",
          },
        ],
        name: "withdrawERC20For",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "address",
            name: "_token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_tokenId",
            type: "uint256",
          },
        ],
        name: "withdrawERC721",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "uint256",
            name: "_amount",
            type: "uint256",
          },
        ],
        name: "withdrawETH",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "withdrawalCount",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "address",
            name: "_owner",
            type: "address",
          },
          {
            internalType: "address",
            name: "_token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_tokenId",
            type: "uint256",
          },
        ],
        name: "withdrawalERC721For",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        name: "withdrawalSig",
        outputs: [
          {
            internalType: "bytes",
            name: "",
            type: "bytes",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        name: "withdrawalSigners",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        name: "withdrawals",
        outputs: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "address",
            name: "tokenAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "mainchainAddress",
            type: "address",
          },
          {
            internalType: "uint32",
            name: "standard",
            type: "uint32",
          },
          {
            internalType: "uint256",
            name: "tokenNumber",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
    ],
  },
  {
    id: "clock-auction",
    name: "Marketplace Contract",
    address: "0x213073989821f738a7ba3520c3d31a1f9ad31bbd",
    abi: [
      {
        inputs: [
          {
            internalType: "uint256",
            name: "_tokenMaxOccurrences",
            type: "uint256",
          },
          {
            internalType: "contract IExchange",
            name: "_exchangeContract",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_ownerCut",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "constructor",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "_oldAdmin",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "_newAdmin",
            type: "address",
          },
        ],
        name: "AdminChanged",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "_oldAdmin",
            type: "address",
          },
        ],
        name: "AdminRemoved",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "_seller",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "_listingIndex",
            type: "uint256",
          },
        ],
        name: "AuctionCancelled",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "_seller",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "_listingIndex",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256[]",
            name: "_startingPrices",
            type: "uint256[]",
          },
          {
            indexed: false,
            internalType: "uint256[]",
            name: "_endingPrices",
            type: "uint256[]",
          },
          {
            indexed: false,
            internalType: "contract IERC20[]",
            name: "_exchangeTokens",
            type: "address[]",
          },
          {
            indexed: false,
            internalType: "uint256[]",
            name: "_durations",
            type: "uint256[]",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "_startingTimestamps",
            type: "uint256",
          },
        ],
        name: "AuctionCreated",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "_seller",
            type: "address",
          },
          {
            indexed: false,
            internalType: "address",
            name: "_buyer",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "_listingIndex",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "contract IERC20",
            name: "_token",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "_totalPrice",
            type: "uint256",
          },
        ],
        name: "AuctionSuccessful",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [],
        name: "Paused",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "_seller",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "_listingIndex",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "address",
            name: "_exchangeTokens",
            type: "address",
          },
        ],
        name: "TokenAuctionCancelled",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [],
        name: "Unpaused",
        type: "event",
      },
      {
        constant: true,
        inputs: [],
        name: "admin",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        name: "auctions",
        outputs: [
          {
            internalType: "address",
            name: "seller",
            type: "address",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "uint256",
            name: "_listingIndex",
            type: "uint256",
          },
        ],
        name: "cancelAuction",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "uint256",
            name: "_listingIndex",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "_token",
            type: "address",
          },
        ],
        name: "cancelTokenAuction",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "address",
            name: "_newAdmin",
            type: "address",
          },
        ],
        name: "changeAdmin",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "enum IExchange.TokenType[]",
            name: "_tokenTypes",
            type: "uint8[]",
          },
          {
            internalType: "address[]",
            name: "_tokenAddresses",
            type: "address[]",
          },
          {
            internalType: "uint256[]",
            name: "_tokenNumbers",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "_startingPrices",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "_endingPrices",
            type: "uint256[]",
          },
          {
            internalType: "contract IERC20[]",
            name: "_exchangeTokens",
            type: "address[]",
          },
          {
            internalType: "uint256[]",
            name: "_durations",
            type: "uint256[]",
          },
        ],
        name: "createAuction",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "uint256",
            name: "_listingIndex",
            type: "uint256",
          },
          {
            internalType: "uint256[]",
            name: "_startingPrices",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "_endingPrices",
            type: "uint256[]",
          },
          {
            internalType: "contract IERC20[]",
            name: "_exchangeTokens",
            type: "address[]",
          },
          {
            internalType: "uint256[]",
            name: "_durations",
            type: "uint256[]",
          },
        ],
        name: "createAuction",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "exchangeContract",
        outputs: [
          {
            internalType: "contract IExchange",
            name: "",
            type: "address",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "address",
            name: "_seller",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_listingIndex",
            type: "uint256",
          },
        ],
        name: "getCurrentPrices",
        outputs: [
          {
            internalType: "contract IERC20[]",
            name: "",
            type: "address[]",
          },
          {
            internalType: "uint256[]",
            name: "",
            type: "uint256[]",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "address",
            name: "_tokenAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_tokenNumber",
            type: "uint256",
          },
        ],
        name: "getTokenAuctions",
        outputs: [
          {
            internalType: "address[]",
            name: "_sellers",
            type: "address[]",
          },
          {
            internalType: "uint256[]",
            name: "_listingIndexes",
            type: "uint256[]",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "address",
            name: "_tokenAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_tokenNumber",
            type: "uint256",
          },
        ],
        name: "getTokenAuctionsCount",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "address",
            name: "_seller",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_listingIndex",
            type: "uint256",
          },
        ],
        name: "isAuctionExisting",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "ownerCut",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [],
        name: "pause",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "paused",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [],
        name: "removeAdmin",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "address",
            name: "_seller",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_listingIndex",
            type: "uint256",
          },
        ],
        name: "revalidateAuction",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "uint256",
            name: "_listingIndex",
            type: "uint256",
          },
        ],
        name: "revalidateRelatedAuctions",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "uint256",
            name: "_newOwnerCut",
            type: "uint256",
          },
        ],
        name: "setOwnerCut",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "uint256",
            name: "_tokenMaxOccurrences",
            type: "uint256",
          },
        ],
        name: "setTokenMaxOccurrences",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "address",
            name: "_seller",
            type: "address",
          },
          {
            internalType: "contract IERC20",
            name: "_token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_bidAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "_listingIndex",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "_listingState",
            type: "uint256",
          },
        ],
        name: "settleAuction",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "tokenMaxOccurrences",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [],
        name: "unpause",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "contract IExchange",
            name: "_exchangeContract",
            type: "address",
          },
        ],
        name: "updateExchangeContract",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [],
        name: "withdrawEther",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "contract IERC20",
            name: "_token",
            type: "address",
          },
        ],
        name: "withdrawToken",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
    ],
  },
  {
    id: "exchange",
    name: "Exchange Contract",
    address: "0x2da06d60bd413bcbb6586430857433bd9d3a4be4",
    abi: [
      {
        inputs: [
          {
            internalType: "contract IERC20[]",
            name: "_tokens",
            type: "address[]",
          },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "constructor",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "_oldAdmin",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "_newAdmin",
            type: "address",
          },
        ],
        name: "AdminChanged",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "_oldAdmin",
            type: "address",
          },
        ],
        name: "AdminRemoved",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "_creator",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "_listingIndex",
            type: "uint256",
          },
        ],
        name: "ListingCreated",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "contract IERC20",
            name: "_token",
            type: "address",
          },
        ],
        name: "TokenAdded",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "contract IERC20",
            name: "_token",
            type: "address",
          },
        ],
        name: "TokenRemoved",
        type: "event",
      },
      {
        payable: false,
        stateMutability: "nonpayable",
        type: "fallback",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "contract AbstractAuction",
            name: "_auctionType",
            type: "address",
          },
        ],
        name: "addAuctionType",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "contract IERC20[]",
            name: "_tokens",
            type: "address[]",
          },
        ],
        name: "addTokens",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "admin",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        name: "auctionTypes",
        outputs: [
          {
            internalType: "contract AbstractAuction",
            name: "",
            type: "address",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "autoRevalidate",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "address",
            name: "_facilitator",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_listingIndex",
            type: "uint256",
          },
        ],
        name: "canFacilitateListing",
        outputs: [
          {
            internalType: "bool",
            name: "_result",
            type: "bool",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "address",
            name: "_newAdmin",
            type: "address",
          },
        ],
        name: "changeAdmin",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "enum IExchange.TokenType[]",
            name: "_tokenTypes",
            type: "uint8[]",
          },
          {
            internalType: "address[]",
            name: "_tokenAddresses",
            type: "address[]",
          },
          {
            internalType: "uint256[]",
            name: "_tokenNumbers",
            type: "uint256[]",
          },
        ],
        name: "createOrGetListing",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "exchangeTokenCount",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        name: "exchangeTokenMap",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        name: "exchangeTokens",
        outputs: [
          {
            internalType: "contract IERC20",
            name: "",
            type: "address",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "uint256",
            name: "_listingIndex",
            type: "uint256",
          },
        ],
        name: "getListing",
        outputs: [
          {
            internalType: "enum IExchange.TokenType[]",
            name: "_tokenTypes",
            type: "uint8[]",
          },
          {
            internalType: "address[]",
            name: "_tokenAddresses",
            type: "address[]",
          },
          {
            internalType: "uint256[]",
            name: "_tokenNumbers",
            type: "uint256[]",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "uint256",
            name: "_listingIndex",
            type: "uint256",
          },
        ],
        name: "getListingState",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "enum IExchange.TokenType[]",
            name: "_tokenTypes",
            type: "uint8[]",
          },
          {
            internalType: "address[]",
            name: "_tokenAddresses",
            type: "address[]",
          },
          {
            internalType: "uint256[]",
            name: "_tokenNumbers",
            type: "uint256[]",
          },
        ],
        name: "getMultipleTokensState",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "address",
            name: "_bidder",
            type: "address",
          },
          {
            internalType: "contract IERC20",
            name: "_token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_amount",
            type: "uint256",
          },
        ],
        name: "hasEnoughToken",
        outputs: [
          {
            internalType: "bool",
            name: "_result",
            type: "bool",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "contract IERC20",
            name: "_token",
            type: "address",
          },
        ],
        name: "isTokenExchangeable",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        name: "listings",
        outputs: [
          {
            internalType: "uint256",
            name: "createdAt",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [],
        name: "removeAdmin",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "uint256",
            name: "_index",
            type: "uint256",
          },
        ],
        name: "removeAuctionType",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "contract IERC20",
            name: "_token",
            type: "address",
          },
        ],
        name: "removeToken",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "bool",
            name: "_value",
            type: "bool",
          },
        ],
        name: "setAutoRevalidate",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "uint256",
            name: "_listingIndex",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "_seller",
            type: "address",
          },
          {
            internalType: "address",
            name: "_buyer",
            type: "address",
          },
        ],
        name: "transferAssets",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "address",
            name: "_buyer",
            type: "address",
          },
          {
            internalType: "contract IERC20",
            name: "_token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_amount",
            type: "uint256",
          },
        ],
        name: "withdrawToken",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
    ],
  },
];

const contracts = [
  {
    id: "sidechain-weth",
    name: "Ronin WETH Contract",
    iconSrc: "https://cdn.axieinfinity.com/ronin-wallet/assets/weth.png",
    address: "0xc99a6a985ed2cac1ef41640596c5a5f9f4e19ef5",
    type: "erc20",
    metadata: {
      symbol: "WETH",
      numberOfDecimal: 18,
    },
  },
  {
    id: "axs",
    name: "Axie Infinity Shard",
    address: "0x97a9107c1793bc407d6f527b77e7fff4d812bece",
    iconSrc: "https://cdn.axieinfinity.com/ronin-wallet/assets/axs.png",
    type: "erc20",
    metadata: {
      symbol: "AXS",
      numberOfDecimal: 18,
    },
  },
  {
    id: "slp",
    name: "Smooth Love Potion",
    iconSrc: "https://cdn.axieinfinity.com/ronin-wallet/assets/love-potion.png",
    address: "0xa8754b9fa15fc18bb59458815510e40a12cd2014",
    type: "erc20",
    metadata: {
      symbol: "SLP",
      numberOfDecimal: 0,
    },
  },
  {
    id: "axie",
    name: "Axie Contract",
    iconSrc: "https://cdn.axieinfinity.com/ronin-wallet/assets/axie.png",
    address: "0x32950db2a7164ae833121501c797d79e7b79d74c",
    metadata: {
      type: "axie",
      displayName: "Axie",
    },
    type: "erc721",
  },
  {
    id: "land",
    name: "Axie Land Contract",
    iconSrc: "https://cdn.axieinfinity.com/ronin-wallet/assets/land.png",
    address: "0x8c811e3c958e190f5ec15fb376533a3398620500",
    type: "erc721",
    metadata: {
      type: "land",
      displayName: "Land Plot",
    },
    abi: [
      {
        inputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "constructor",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "_oldAdmin",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "_newAdmin",
            type: "address",
          },
        ],
        name: "AdminChanged",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "_oldAdmin",
            type: "address",
          },
        ],
        name: "AdminRemoved",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "_owner",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "_approved",
            type: "address",
          },
          {
            indexed: true,
            internalType: "uint256",
            name: "_tokenId",
            type: "uint256",
          },
        ],
        name: "Approval",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "_owner",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "_operator",
            type: "address",
          },
          {
            indexed: false,
            internalType: "bool",
            name: "_approved",
            type: "bool",
          },
        ],
        name: "ApprovalForAll",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "_minter",
            type: "address",
          },
        ],
        name: "MinterAdded",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "_minter",
            type: "address",
          },
        ],
        name: "MinterRemoved",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [],
        name: "Paused",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "_spender",
            type: "address",
          },
        ],
        name: "SpenderUnwhitelisted",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "_spender",
            type: "address",
          },
        ],
        name: "SpenderWhitelisted",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "_from",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "_to",
            type: "address",
          },
          {
            indexed: true,
            internalType: "uint256",
            name: "_tokenId",
            type: "uint256",
          },
        ],
        name: "Transfer",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [],
        name: "Unpaused",
        type: "event",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "address[]",
            name: "_addedMinters",
            type: "address[]",
          },
        ],
        name: "addMinters",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "admin",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "address",
            name: "_to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_tokenId",
            type: "uint256",
          },
        ],
        name: "approve",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "address",
            name: "_owner",
            type: "address",
          },
        ],
        name: "balanceOf",
        outputs: [
          {
            internalType: "uint256",
            name: "_balance",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "baseTokenURI",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "address[]",
            name: "_owners",
            type: "address[]",
          },
          {
            internalType: "int256[]",
            name: "_rows",
            type: "int256[]",
          },
          {
            internalType: "int256[]",
            name: "_cols",
            type: "int256[]",
          },
        ],
        name: "batchMint",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "address",
            name: "_newAdmin",
            type: "address",
          },
        ],
        name: "changeAdmin",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "uint256",
            name: "_tokenId",
            type: "uint256",
          },
        ],
        name: "decodeTokenId",
        outputs: [
          {
            internalType: "int256",
            name: "_row",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "_col",
            type: "int256",
          },
        ],
        payable: false,
        stateMutability: "pure",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        name: "estateData",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "uint256",
            name: "_tokenId",
            type: "uint256",
          },
        ],
        name: "getApproved",
        outputs: [
          {
            internalType: "address",
            name: "_operator",
            type: "address",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "int256",
            name: "_row",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "_col",
            type: "int256",
          },
        ],
        name: "getEstateData",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "int256",
            name: "_row",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "_col",
            type: "int256",
          },
        ],
        name: "getTokenId",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "pure",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "address",
            name: "_owner",
            type: "address",
          },
          {
            internalType: "address",
            name: "_operator",
            type: "address",
          },
        ],
        name: "isApprovedForAll",
        outputs: [
          {
            internalType: "bool",
            name: "_approved",
            type: "bool",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "address",
            name: "_addr",
            type: "address",
          },
        ],
        name: "isMinter",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "address",
            name: "_owner",
            type: "address",
          },
        ],
        name: "landOfOwner",
        outputs: [
          {
            internalType: "int256[]",
            name: "",
            type: "int256[]",
          },
          {
            internalType: "int256[]",
            name: "",
            type: "int256[]",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "address",
            name: "_to",
            type: "address",
          },
          {
            internalType: "int256",
            name: "_row",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "_col",
            type: "int256",
          },
        ],
        name: "mint",
        outputs: [
          {
            internalType: "uint256",
            name: "_itemId",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        name: "minter",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        name: "minters",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "name",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "uint256",
            name: "_tokenId",
            type: "uint256",
          },
        ],
        name: "ownerOf",
        outputs: [
          {
            internalType: "address",
            name: "_owner",
            type: "address",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "int256",
            name: "_row",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "_col",
            type: "int256",
          },
        ],
        name: "ownerOfLand",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [],
        name: "pause",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "paused",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [],
        name: "removeAdmin",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "address[]",
            name: "_removedMinters",
            type: "address[]",
          },
        ],
        name: "removeMinters",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "address",
            name: "_from",
            type: "address",
          },
          {
            internalType: "address",
            name: "_to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_tokenId",
            type: "uint256",
          },
        ],
        name: "safeTransferFrom",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "address",
            name: "_from",
            type: "address",
          },
          {
            internalType: "address",
            name: "_to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_tokenId",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "_data",
            type: "bytes",
          },
        ],
        name: "safeTransferFrom",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "address",
            name: "_operator",
            type: "address",
          },
          {
            internalType: "bool",
            name: "_approved",
            type: "bool",
          },
        ],
        name: "setApprovalForAll",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "string",
            name: "_baseTokenURI",
            type: "string",
          },
        ],
        name: "setBaseTokenURI",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "int256",
            name: "_row",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "_col",
            type: "int256",
          },
          {
            internalType: "string",
            name: "_data",
            type: "string",
          },
        ],
        name: "setEstateData",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "bytes4",
            name: "_interfaceId",
            type: "bytes4",
          },
        ],
        name: "supportsInterface",
        outputs: [
          {
            internalType: "bool",
            name: "_supported",
            type: "bool",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "symbol",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "uint256",
            name: "_index",
            type: "uint256",
          },
        ],
        name: "tokenByIndex",
        outputs: [
          {
            internalType: "uint256",
            name: "_tokenId",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "address",
            name: "_owner",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_index",
            type: "uint256",
          },
        ],
        name: "tokenOfOwnerByIndex",
        outputs: [
          {
            internalType: "uint256",
            name: "_tokenId",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "uint256",
            name: "_tokenId",
            type: "uint256",
          },
        ],
        name: "tokenURI",
        outputs: [
          {
            internalType: "string",
            name: "_uri",
            type: "string",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "totalSupply",
        outputs: [
          {
            internalType: "uint256",
            name: "_supply",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "address",
            name: "_from",
            type: "address",
          },
          {
            internalType: "address",
            name: "_to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_tokenId",
            type: "uint256",
          },
        ],
        name: "transferFrom",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [],
        name: "unpause",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "address",
            name: "_spender",
            type: "address",
          },
        ],
        name: "unwhitelist",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "address",
            name: "_spender",
            type: "address",
          },
        ],
        name: "whitelist",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        name: "whitelisted",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
    ],
  },
  {
    id: "land-item",
    name: "Axie Land Item Contract",
    iconSrc: "https://cdn.axieinfinity.com/ronin-wallet/assets/land-item.png",
    address: "0xa96660f0e4a3e9bc7388925d245a6d4d79e21259",
    type: "erc721",
    metadata: {
      type: "item",
      displayName: "Land Item",
    },
    abi: [
      {
        inputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "constructor",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "_oldAdmin",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "_newAdmin",
            type: "address",
          },
        ],
        name: "AdminChanged",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "_oldAdmin",
            type: "address",
          },
        ],
        name: "AdminRemoved",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "_owner",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "_approved",
            type: "address",
          },
          {
            indexed: true,
            internalType: "uint256",
            name: "_tokenId",
            type: "uint256",
          },
        ],
        name: "Approval",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "_owner",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "_operator",
            type: "address",
          },
          {
            indexed: false,
            internalType: "bool",
            name: "_approved",
            type: "bool",
          },
        ],
        name: "ApprovalForAll",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "_minter",
            type: "address",
          },
        ],
        name: "MinterAdded",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "_minter",
            type: "address",
          },
        ],
        name: "MinterRemoved",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [],
        name: "Paused",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "_spender",
            type: "address",
          },
        ],
        name: "SpenderUnwhitelisted",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "_spender",
            type: "address",
          },
        ],
        name: "SpenderWhitelisted",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "_from",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "_to",
            type: "address",
          },
          {
            indexed: true,
            internalType: "uint256",
            name: "_tokenId",
            type: "uint256",
          },
        ],
        name: "Transfer",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [],
        name: "Unpaused",
        type: "event",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "address[]",
            name: "_addedMinters",
            type: "address[]",
          },
        ],
        name: "addMinters",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "string",
            name: "_name",
            type: "string",
          },
          {
            internalType: "string",
            name: "_symbol",
            type: "string",
          },
          {
            internalType: "string",
            name: "_baseTokenURI",
            type: "string",
          },
        ],
        name: "addTokenType",
        outputs: [
          {
            internalType: "uint256",
            name: "_tokenType",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "admin",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "address",
            name: "_to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_tokenId",
            type: "uint256",
          },
        ],
        name: "approve",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "address",
            name: "_owner",
            type: "address",
          },
        ],
        name: "balanceOf",
        outputs: [
          {
            internalType: "uint256",
            name: "_balance",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "baseTokenURI",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "address[]",
            name: "_recipients",
            type: "address[]",
          },
          {
            internalType: "uint256[]",
            name: "_tokenTypes",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "_tokenIds",
            type: "uint256[]",
          },
        ],
        name: "batchMint",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "address",
            name: "_newAdmin",
            type: "address",
          },
        ],
        name: "changeAdmin",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "uint256",
            name: "_itemId",
            type: "uint256",
          },
        ],
        name: "deconstructItemId",
        outputs: [
          {
            internalType: "uint256",
            name: "_tokenType",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "_tokenId",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "pure",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "uint256",
            name: "_tokenType",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "_name",
            type: "string",
          },
          {
            internalType: "string",
            name: "_symbol",
            type: "string",
          },
          {
            internalType: "string",
            name: "_baseTokenURI",
            type: "string",
          },
        ],
        name: "editTokenMetadata",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "uint256",
            name: "_tokenId",
            type: "uint256",
          },
        ],
        name: "getApproved",
        outputs: [
          {
            internalType: "address",
            name: "_operator",
            type: "address",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "uint256",
            name: "_tokenType",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "_tokenId",
            type: "uint256",
          },
        ],
        name: "getItemId",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "getTokenTypeCount",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "address",
            name: "_owner",
            type: "address",
          },
          {
            internalType: "address",
            name: "_operator",
            type: "address",
          },
        ],
        name: "isApprovedForAll",
        outputs: [
          {
            internalType: "bool",
            name: "_approved",
            type: "bool",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "address",
            name: "_addr",
            type: "address",
          },
        ],
        name: "isMinter",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "address",
            name: "_to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_tokenType",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "_tokenId",
            type: "uint256",
          },
        ],
        name: "mint",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "address",
            name: "_to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_tokenType",
            type: "uint256",
          },
        ],
        name: "mintNew",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        name: "minter",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        name: "minters",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "name",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "uint256",
            name: "_tokenId",
            type: "uint256",
          },
        ],
        name: "ownerOf",
        outputs: [
          {
            internalType: "address",
            name: "_owner",
            type: "address",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [],
        name: "pause",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "paused",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [],
        name: "removeAdmin",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "address[]",
            name: "_removedMinters",
            type: "address[]",
          },
        ],
        name: "removeMinters",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "address",
            name: "_from",
            type: "address",
          },
          {
            internalType: "address",
            name: "_to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_tokenId",
            type: "uint256",
          },
        ],
        name: "safeTransferFrom",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "address",
            name: "_from",
            type: "address",
          },
          {
            internalType: "address",
            name: "_to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_tokenId",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "_data",
            type: "bytes",
          },
        ],
        name: "safeTransferFrom",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "address",
            name: "_operator",
            type: "address",
          },
          {
            internalType: "bool",
            name: "_approved",
            type: "bool",
          },
        ],
        name: "setApprovalForAll",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "string",
            name: "_baseTokenURI",
            type: "string",
          },
        ],
        name: "setBaseTokenURI",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "bytes4",
            name: "_interfaceId",
            type: "bytes4",
          },
        ],
        name: "supportsInterface",
        outputs: [
          {
            internalType: "bool",
            name: "_supported",
            type: "bool",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "symbol",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        name: "tokenBalance",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "uint256",
            name: "_index",
            type: "uint256",
          },
        ],
        name: "tokenByIndex",
        outputs: [
          {
            internalType: "uint256",
            name: "_tokenId",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        name: "tokenMetadata",
        outputs: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "symbol",
            type: "string",
          },
          {
            internalType: "string",
            name: "baseTokenURI",
            type: "string",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "address",
            name: "_owner",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_index",
            type: "uint256",
          },
        ],
        name: "tokenOfOwnerByIndex",
        outputs: [
          {
            internalType: "uint256",
            name: "_tokenId",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "uint256",
            name: "_tokenId",
            type: "uint256",
          },
        ],
        name: "tokenURI",
        outputs: [
          {
            internalType: "string",
            name: "_uri",
            type: "string",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "totalSupply",
        outputs: [
          {
            internalType: "uint256",
            name: "_supply",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "address",
            name: "_from",
            type: "address",
          },
          {
            internalType: "address",
            name: "_to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_tokenId",
            type: "uint256",
          },
        ],
        name: "transferFrom",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [],
        name: "unpause",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "address",
            name: "_spender",
            type: "address",
          },
        ],
        name: "unwhitelist",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "address",
            name: "_spender",
            type: "address",
          },
        ],
        name: "whitelist",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        name: "whitelisted",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
    ],
  },
  {
    id: "sidechain-gateway",
    name: "Ronin Gateway Contract",
    iconSrc: "https://cdn.axieinfinity.com/ronin-wallet/assets/ronin.png",
    address: "0xe35d62ebe18413d96ca2a2f7cf215bb21a406b4b",
    abi: [
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "_oldAdmin",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "_newAdmin",
            type: "address",
          },
        ],
        name: "AdminChanged",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "_oldAdmin",
            type: "address",
          },
        ],
        name: "AdminRemoved",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [],
        name: "Paused",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "uint256",
            name: "_withdrawalId",
            type: "uint256",
          },
          {
            indexed: true,
            internalType: "address",
            name: "_owner",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "_tokenAddress",
            type: "address",
          },
          {
            indexed: false,
            internalType: "address",
            name: "_mainchainAddress",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint32",
            name: "_standard",
            type: "uint32",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "_tokenNumber",
            type: "uint256",
          },
        ],
        name: "RequestTokenWithdrawalSigAgain",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "uint256",
            name: "depositId",
            type: "uint256",
          },
          {
            indexed: true,
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "tokenAddress",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "tokenNumber",
            type: "uint256",
          },
        ],
        name: "TokenDeposited",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "uint256",
            name: "_withdrawId",
            type: "uint256",
          },
          {
            indexed: true,
            internalType: "address",
            name: "_owner",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "_tokenAddress",
            type: "address",
          },
          {
            indexed: false,
            internalType: "address",
            name: "_mainchainAddress",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint32",
            name: "_standard",
            type: "uint32",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "_tokenNumber",
            type: "uint256",
          },
        ],
        name: "TokenWithdrew",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [],
        name: "Unpaused",
        type: "event",
      },
      {
        payable: true,
        stateMutability: "payable",
        type: "fallback",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "uint256",
            name: "_withdrawalId",
            type: "uint256",
          },
        ],
        name: "acknowledWithdrawalOnMainchain",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "admin",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "address",
            name: "_newAdmin",
            type: "address",
          },
        ],
        name: "changeAdmin",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "uint256",
            name: "_depositId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "_owner",
            type: "address",
          },
          {
            internalType: "address",
            name: "_token",
            type: "address",
          },
          {
            internalType: "uint32",
            name: "_standard",
            type: "uint32",
          },
          {
            internalType: "uint256",
            name: "_tokenNumber",
            type: "uint256",
          },
        ],
        name: "depositERCTokenFor",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        name: "deposits",
        outputs: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "address",
            name: "tokenAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tokenNumber",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "address",
            name: "_owner",
            type: "address",
          },
        ],
        name: "getPendingWithdrawals",
        outputs: [
          {
            internalType: "uint256[]",
            name: "ids",
            type: "uint256[]",
          },
          {
            components: [
              {
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                internalType: "address",
                name: "tokenAddress",
                type: "address",
              },
              {
                internalType: "address",
                name: "mainchainAddress",
                type: "address",
              },
              {
                internalType: "uint32",
                name: "standard",
                type: "uint32",
              },
              {
                internalType: "uint256",
                name: "tokenNumber",
                type: "uint256",
              },
            ],
            internalType: "struct SidechainGatewayStorage.WithdrawalEntry[]",
            name: "entries",
            type: "tuple[]",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "uint256",
            name: "_withdrawalId",
            type: "uint256",
          },
        ],
        name: "getWithdrawalSignatures",
        outputs: [
          {
            internalType: "address[]",
            name: "_signers",
            type: "address[]",
          },
          {
            internalType: "bytes[]",
            name: "_sigs",
            type: "bytes[]",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "uint256",
            name: "_withdrawalId",
            type: "uint256",
          },
        ],
        name: "getWithdrawalSigners",
        outputs: [
          {
            internalType: "address[]",
            name: "",
            type: "address[]",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "maxPendingWithdrawal",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [],
        name: "pause",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "paused",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "registry",
        outputs: [
          {
            internalType: "contract Registry",
            name: "",
            type: "address",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [],
        name: "removeAdmin",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "uint256",
            name: "_withdrawalId",
            type: "uint256",
          },
        ],
        name: "requestSignatureAgain",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "uint256",
            name: "_withdrawalId",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "_shouldReplace",
            type: "bool",
          },
          {
            internalType: "bytes",
            name: "_sig",
            type: "bytes",
          },
        ],
        name: "submitWithdrawalSignatures",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [],
        name: "unpause",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "uint256",
            name: "_maxPendingWithdrawal",
            type: "uint256",
          },
        ],
        name: "updateMaxPendingWithdrawal",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "address",
            name: "_registry",
            type: "address",
          },
        ],
        name: "updateRegistry",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "address",
            name: "_token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_amount",
            type: "uint256",
          },
        ],
        name: "withdrawERC20",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "address",
            name: "_owner",
            type: "address",
          },
          {
            internalType: "address",
            name: "_token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_amount",
            type: "uint256",
          },
        ],
        name: "withdrawERC20For",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "address",
            name: "_token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_tokenId",
            type: "uint256",
          },
        ],
        name: "withdrawERC721",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "uint256",
            name: "_amount",
            type: "uint256",
          },
        ],
        name: "withdrawETH",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "withdrawalCount",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "address",
            name: "_owner",
            type: "address",
          },
          {
            internalType: "address",
            name: "_token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_tokenId",
            type: "uint256",
          },
        ],
        name: "withdrawalERC721For",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        name: "withdrawalSig",
        outputs: [
          {
            internalType: "bytes",
            name: "",
            type: "bytes",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        name: "withdrawalSigners",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        name: "withdrawals",
        outputs: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "address",
            name: "tokenAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "mainchainAddress",
            type: "address",
          },
          {
            internalType: "uint32",
            name: "standard",
            type: "uint32",
          },
          {
            internalType: "uint256",
            name: "tokenNumber",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
    ],
  },
  {
    id: "clock-auction",
    name: "Marketplace Contract",
    address: "0x213073989821f738a7ba3520c3d31a1f9ad31bbd",
    abi: [
      {
        inputs: [
          {
            internalType: "uint256",
            name: "_tokenMaxOccurrences",
            type: "uint256",
          },
          {
            internalType: "contract IExchange",
            name: "_exchangeContract",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_ownerCut",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "constructor",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "_oldAdmin",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "_newAdmin",
            type: "address",
          },
        ],
        name: "AdminChanged",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "_oldAdmin",
            type: "address",
          },
        ],
        name: "AdminRemoved",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "_seller",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "_listingIndex",
            type: "uint256",
          },
        ],
        name: "AuctionCancelled",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "_seller",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "_listingIndex",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256[]",
            name: "_startingPrices",
            type: "uint256[]",
          },
          {
            indexed: false,
            internalType: "uint256[]",
            name: "_endingPrices",
            type: "uint256[]",
          },
          {
            indexed: false,
            internalType: "contract IERC20[]",
            name: "_exchangeTokens",
            type: "address[]",
          },
          {
            indexed: false,
            internalType: "uint256[]",
            name: "_durations",
            type: "uint256[]",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "_startingTimestamps",
            type: "uint256",
          },
        ],
        name: "AuctionCreated",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "_seller",
            type: "address",
          },
          {
            indexed: false,
            internalType: "address",
            name: "_buyer",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "_listingIndex",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "contract IERC20",
            name: "_token",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "_totalPrice",
            type: "uint256",
          },
        ],
        name: "AuctionSuccessful",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [],
        name: "Paused",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "_seller",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "_listingIndex",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "address",
            name: "_exchangeTokens",
            type: "address",
          },
        ],
        name: "TokenAuctionCancelled",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [],
        name: "Unpaused",
        type: "event",
      },
      {
        constant: true,
        inputs: [],
        name: "admin",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        name: "auctions",
        outputs: [
          {
            internalType: "address",
            name: "seller",
            type: "address",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "uint256",
            name: "_listingIndex",
            type: "uint256",
          },
        ],
        name: "cancelAuction",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "uint256",
            name: "_listingIndex",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "_token",
            type: "address",
          },
        ],
        name: "cancelTokenAuction",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "address",
            name: "_newAdmin",
            type: "address",
          },
        ],
        name: "changeAdmin",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "enum IExchange.TokenType[]",
            name: "_tokenTypes",
            type: "uint8[]",
          },
          {
            internalType: "address[]",
            name: "_tokenAddresses",
            type: "address[]",
          },
          {
            internalType: "uint256[]",
            name: "_tokenNumbers",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "_startingPrices",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "_endingPrices",
            type: "uint256[]",
          },
          {
            internalType: "contract IERC20[]",
            name: "_exchangeTokens",
            type: "address[]",
          },
          {
            internalType: "uint256[]",
            name: "_durations",
            type: "uint256[]",
          },
        ],
        name: "createAuction",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "uint256",
            name: "_listingIndex",
            type: "uint256",
          },
          {
            internalType: "uint256[]",
            name: "_startingPrices",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "_endingPrices",
            type: "uint256[]",
          },
          {
            internalType: "contract IERC20[]",
            name: "_exchangeTokens",
            type: "address[]",
          },
          {
            internalType: "uint256[]",
            name: "_durations",
            type: "uint256[]",
          },
        ],
        name: "createAuction",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "exchangeContract",
        outputs: [
          {
            internalType: "contract IExchange",
            name: "",
            type: "address",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "address",
            name: "_seller",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_listingIndex",
            type: "uint256",
          },
        ],
        name: "getCurrentPrices",
        outputs: [
          {
            internalType: "contract IERC20[]",
            name: "",
            type: "address[]",
          },
          {
            internalType: "uint256[]",
            name: "",
            type: "uint256[]",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "address",
            name: "_tokenAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_tokenNumber",
            type: "uint256",
          },
        ],
        name: "getTokenAuctions",
        outputs: [
          {
            internalType: "address[]",
            name: "_sellers",
            type: "address[]",
          },
          {
            internalType: "uint256[]",
            name: "_listingIndexes",
            type: "uint256[]",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "address",
            name: "_tokenAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_tokenNumber",
            type: "uint256",
          },
        ],
        name: "getTokenAuctionsCount",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "address",
            name: "_seller",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_listingIndex",
            type: "uint256",
          },
        ],
        name: "isAuctionExisting",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "ownerCut",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [],
        name: "pause",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "paused",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [],
        name: "removeAdmin",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "address",
            name: "_seller",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_listingIndex",
            type: "uint256",
          },
        ],
        name: "revalidateAuction",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "uint256",
            name: "_listingIndex",
            type: "uint256",
          },
        ],
        name: "revalidateRelatedAuctions",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "uint256",
            name: "_newOwnerCut",
            type: "uint256",
          },
        ],
        name: "setOwnerCut",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "uint256",
            name: "_tokenMaxOccurrences",
            type: "uint256",
          },
        ],
        name: "setTokenMaxOccurrences",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "address",
            name: "_seller",
            type: "address",
          },
          {
            internalType: "contract IERC20",
            name: "_token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_bidAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "_listingIndex",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "_listingState",
            type: "uint256",
          },
        ],
        name: "settleAuction",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "tokenMaxOccurrences",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [],
        name: "unpause",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "contract IExchange",
            name: "_exchangeContract",
            type: "address",
          },
        ],
        name: "updateExchangeContract",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [],
        name: "withdrawEther",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "contract IERC20",
            name: "_token",
            type: "address",
          },
        ],
        name: "withdrawToken",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
    ],
  },
  {
    id: "exchange",
    name: "Exchange Contract",
    address: "0x2da06d60bd413bcbb6586430857433bd9d3a4be4",
    abi: [
      {
        inputs: [
          {
            internalType: "contract IERC20[]",
            name: "_tokens",
            type: "address[]",
          },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "constructor",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "_oldAdmin",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "_newAdmin",
            type: "address",
          },
        ],
        name: "AdminChanged",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "_oldAdmin",
            type: "address",
          },
        ],
        name: "AdminRemoved",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "_creator",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "_listingIndex",
            type: "uint256",
          },
        ],
        name: "ListingCreated",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "contract IERC20",
            name: "_token",
            type: "address",
          },
        ],
        name: "TokenAdded",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "contract IERC20",
            name: "_token",
            type: "address",
          },
        ],
        name: "TokenRemoved",
        type: "event",
      },
      {
        payable: false,
        stateMutability: "nonpayable",
        type: "fallback",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "contract AbstractAuction",
            name: "_auctionType",
            type: "address",
          },
        ],
        name: "addAuctionType",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "contract IERC20[]",
            name: "_tokens",
            type: "address[]",
          },
        ],
        name: "addTokens",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "admin",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        name: "auctionTypes",
        outputs: [
          {
            internalType: "contract AbstractAuction",
            name: "",
            type: "address",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "autoRevalidate",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "address",
            name: "_facilitator",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_listingIndex",
            type: "uint256",
          },
        ],
        name: "canFacilitateListing",
        outputs: [
          {
            internalType: "bool",
            name: "_result",
            type: "bool",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "address",
            name: "_newAdmin",
            type: "address",
          },
        ],
        name: "changeAdmin",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "enum IExchange.TokenType[]",
            name: "_tokenTypes",
            type: "uint8[]",
          },
          {
            internalType: "address[]",
            name: "_tokenAddresses",
            type: "address[]",
          },
          {
            internalType: "uint256[]",
            name: "_tokenNumbers",
            type: "uint256[]",
          },
        ],
        name: "createOrGetListing",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "exchangeTokenCount",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        name: "exchangeTokenMap",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        name: "exchangeTokens",
        outputs: [
          {
            internalType: "contract IERC20",
            name: "",
            type: "address",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "uint256",
            name: "_listingIndex",
            type: "uint256",
          },
        ],
        name: "getListing",
        outputs: [
          {
            internalType: "enum IExchange.TokenType[]",
            name: "_tokenTypes",
            type: "uint8[]",
          },
          {
            internalType: "address[]",
            name: "_tokenAddresses",
            type: "address[]",
          },
          {
            internalType: "uint256[]",
            name: "_tokenNumbers",
            type: "uint256[]",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "uint256",
            name: "_listingIndex",
            type: "uint256",
          },
        ],
        name: "getListingState",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "enum IExchange.TokenType[]",
            name: "_tokenTypes",
            type: "uint8[]",
          },
          {
            internalType: "address[]",
            name: "_tokenAddresses",
            type: "address[]",
          },
          {
            internalType: "uint256[]",
            name: "_tokenNumbers",
            type: "uint256[]",
          },
        ],
        name: "getMultipleTokensState",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "address",
            name: "_bidder",
            type: "address",
          },
          {
            internalType: "contract IERC20",
            name: "_token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_amount",
            type: "uint256",
          },
        ],
        name: "hasEnoughToken",
        outputs: [
          {
            internalType: "bool",
            name: "_result",
            type: "bool",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "contract IERC20",
            name: "_token",
            type: "address",
          },
        ],
        name: "isTokenExchangeable",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        name: "listings",
        outputs: [
          {
            internalType: "uint256",
            name: "createdAt",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [],
        name: "removeAdmin",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "uint256",
            name: "_index",
            type: "uint256",
          },
        ],
        name: "removeAuctionType",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "contract IERC20",
            name: "_token",
            type: "address",
          },
        ],
        name: "removeToken",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "bool",
            name: "_value",
            type: "bool",
          },
        ],
        name: "setAutoRevalidate",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "uint256",
            name: "_listingIndex",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "_seller",
            type: "address",
          },
          {
            internalType: "address",
            name: "_buyer",
            type: "address",
          },
        ],
        name: "transferAssets",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "address",
            name: "_buyer",
            type: "address",
          },
          {
            internalType: "contract IERC20",
            name: "_token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_amount",
            type: "uint256",
          },
        ],
        name: "withdrawToken",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
    ],
  },
];

module.exports = { rcp, contracts, contracts2 };
