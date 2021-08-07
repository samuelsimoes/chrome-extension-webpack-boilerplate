import calculateQuality, { getTraitsTable } from "./calculateQuality";

export const EGG_STAGE = 1;

export default function normalizeAxie(axie) {
  const {
    id,
    genes,
    auction,
    image,
    stage,
    breedCount,
    sireId,
    sireClass,
    matronId,
    matronClass,
  } = axie;

  const { currentPriceUSD, currentPrice } = auction || {};

  const quality =
    stage !== EGG_STAGE ? calculateQuality(genes, axie.class) : NaN;

  const traits = getTraitsTable(genes);

  const ethPrice = Number(currentPrice) / Math.pow(10, 18);
  const ethRate = currentPriceUSD / ethPrice;

  return {
    id,
    ethRate,
    ethPrice,
    stage,
    usdPrice: currentPriceUSD,
    traits,
    quality: (quality * 100).toFixed(2),
    image,
    breedCount,
    sireId,
    sireClass,
    matronId,
    matronClass,
  };
}
