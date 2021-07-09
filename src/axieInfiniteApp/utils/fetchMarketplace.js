import calculateQuality from "./calculateQuality";

// Normalize the response
function formatResponse(res) {
  const { results } = res.data.axies;

  return results.map((axie) => {
    const {
      id,
      genes,
      auction: { currentPriceUSD },
      image,
      breedCount,
    } = axie;
    const { quality } = calculateQuality(genes, axie.class);

    return {
      id,
      usdPrice: currentPriceUSD,
      quality: (quality * 100).toFixed(2),
      image,
      breedCount,
    };
  });
}

export default function fetchMarketPage({
  parts,
  pureness,
  classes,
  breed,
  ...rest
}) {
  return fetch("https://axieinfinity.com/graphql-server-v2/graphql", {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      operationName: "GetAxieBriefList",
      query:
        "query GetAxieBriefList($auctionType: AuctionType, $criteria: AxieSearchCriteria, $from: Int, $sort: SortBy, $size: Int, $owner: String) {\n  axies(auctionType: $auctionType, criteria: $criteria, from: $from, sort: $sort, size: $size, owner: $owner) {\n    total\n    results {\n      ...AxieBrief\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment AxieBrief on Axie {\n  id\n  genes\n  owner\n  name\n  stage\n  class\n  breedCount\n  image\n  title\n  stats {\n    ...AxieStats\n    __typename\n  }\n  battleInfo {\n    banned\n    __typename\n  }\n  auction {\n    currentPrice\n    currentPriceUSD\n    __typename\n  }\n  parts {\n    id\n    name\n    class\n    type\n    specialGenes\n    __typename\n  }\n  __typename\n}\nfragment AxieStats on AxieStats {\n  hp\n  speed\n  skill\n  morale\n  __typename\n}\n\n",
      variables: {
        from: 0,
        size: 100,
        sort: "PriceAsc",
        auctionType: "Sale",
        owner: null,
        criteria: {
          region: null,
          parts,
          bodyShapes: null,
          classes,
          stages: null,
          numMystic: null,
          pureness: pureness ? [pureness] : null,
          title: null,
          breedable: null,
          breedCount: breed,
          hp: [],
          skill: [],
          speed: [],
          morale: [],
          ...rest,
        },
      },
    }),
  })
    .then((res) => res.json())
    .then(formatResponse);
}
