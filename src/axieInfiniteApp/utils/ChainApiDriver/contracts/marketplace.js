const { ethers } = require("ethers");
const { contracts } = require("./variables.js");

const AUCTION_CREATED_TOPIC =
  "0xae3392a96856e8c1881402157f65e69336cb9e04ffba578babad5b29909def82";

const marketplaceContractData = contracts.find(
  ({ id }) => id === "clock-auction"
);

const marketplaceAddress = marketplaceContractData.address;

const auctionCreatedAbi = marketplaceContractData.abi.find(
  ({ name, type }) => name === "AuctionCreated" && type === "event"
);

const iAuctionCreatedEvent = new ethers.utils.Interface([auctionCreatedAbi]);

function getMarketplaceContract(provider) {
  return new ethers.Contract(
    marketplaceAddress,
    marketplaceContractData.abi,
    provider
  );
}

module.exports = {
  AUCTION_CREATED_TOPIC,
  iAuctionCreatedEvent,
  marketplaceAddress,
  getMarketplaceContract,
};
