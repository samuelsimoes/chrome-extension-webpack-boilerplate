import { getAxsBalance, getEthBalance, getSlpBalance } from "./ChainApiDriver";
import fetchMarketplace from "./fetchMarketplace";
import fetchGameProgress from "./fetchGameProgress";

async function fetchProfile({ roninAddress = "" }) {
  const normalizedRoninAddress = roninAddress.replace("ronin:", "0x");

  const profileData = await fetch(
    "https://axieinfinity.com/graphql-server-v2/graphql",
    {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        operationName: "GetProfileByRoninAddress",
        variables: { roninAddress: normalizedRoninAddress },
        query:
          "query GetProfileByRoninAddress($roninAddress: String!) {\n  publicProfileWithRoninAddress(roninAddress: $roninAddress) {\n    ...Profile\n    __typename\n  }\n}\n\nfragment Profile on PublicProfile {\n  accountId\n  name\n  addresses {\n    ...Addresses\n    __typename\n  }\n  __typename\n}\n\nfragment Addresses on NetAddresses {\n  ethereum\n  tomo\n  loom\n  ronin\n  __typename\n}\n",
      }),
      method: "POST",
      mode: "cors",
      credentials: "include",
    }
  );

  const {
    data: { publicProfileWithRoninAddress },
  } = await profileData.json();

  const eth = await getEthBalance(normalizedRoninAddress);
  const axs = await getAxsBalance(normalizedRoninAddress);
  const slp = await getSlpBalance(normalizedRoninAddress);
  const wallet = { eth, axs, slp };

  const gameProgress = await fetchGameProgress(normalizedRoninAddress);

  const property = await fetchMarketplace({
    owner: normalizedRoninAddress,
  });

  return {
    profile: publicProfileWithRoninAddress,
    property,
    wallet,
    gameProgress,
  };
}

export default fetchProfile;
