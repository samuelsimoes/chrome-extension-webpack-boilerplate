import { ethers } from "ethers";

import { rcp } from "./contracts/variables.js";
import {
  ETH_CONTRACT_DATA,
  AXS_CONTRACT_DATA,
  SLP_CONTRACT_DATA,
} from "./contracts/roninChainCoins.js";
import ERC20_ABI from "./abi/ERC20.abi.json";

const provider = new ethers.providers.JsonRpcProvider(rcp.rpcUrl);

const ethContract = new ethers.Contract(
  ETH_CONTRACT_DATA.address,
  ERC20_ABI,
  provider
);

export const getEthBalance = async (address = "") => {
  if (!address) return NaN;

  const balance = await ethContract.balanceOf(address);
  const formatedBalance = Number(ethers.utils.formatEther(balance));
  return formatedBalance;
};

const axsContract = new ethers.Contract(
  AXS_CONTRACT_DATA.address,
  ERC20_ABI,
  provider
);

export const getAxsBalance = async (address = "") => {
  if (!address) return NaN;

  const balance = await axsContract.balanceOf(address);
  const formatedBalance = Number(ethers.utils.formatEther(balance));
  return formatedBalance;
};

const slpContract = new ethers.Contract(
  SLP_CONTRACT_DATA.address,
  ERC20_ABI,
  provider
);

export const getSlpBalance = async (address = "") => {
  if (!address) return NaN;

  const balance = await slpContract.balanceOf(address);
  const formatedBalance = Number(ethers.utils.formatEther(balance, 0));
  return formatedBalance;
};
