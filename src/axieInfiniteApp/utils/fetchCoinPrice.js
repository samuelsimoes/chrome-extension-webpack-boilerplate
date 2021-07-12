//1. Import coingecko-api
import CoinGecko from "coingecko-api";

//2. Initiate the CoinGecko API Client
const CoinGeckoClient = new CoinGecko();

//3. Make calls
const fetchCoinPriceMarket = async (coinId) => {
  try {
    let res = await CoinGeckoClient.coins.fetch(coinId, {
      market_data: true,
      community_data: false,
      localization: false,
      sparkline: false,
      tickers: false,
    });

    const { usd } = res.data.market_data.current_price;

    return { usd };
  } catch (e) {
    console.log(e);
    return { error: true };
  }
};

export const AXS_ID = "axie-infinity";
export const SLP_ID = "smooth-love-potion";

export default fetchCoinPriceMarket;
