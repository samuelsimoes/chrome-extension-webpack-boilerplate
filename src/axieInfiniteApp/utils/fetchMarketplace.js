import normalizeAxie from "./normalizeAxie";

function fetchMarketPage({
  parts,
  pureness,
  classes,
  breed,
  size,
  from,
  owner,
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
        "query GetAxieBriefList($auctionType: AuctionType, $criteria: AxieSearchCriteria, $from: Int, $sort: SortBy, $size: Int, $owner: String) {\n  axies(auctionType: $auctionType, criteria: $criteria, from: $from, sort: $sort, size: $size, owner: $owner) {\n    total\n    results {\n      ...AxieBrief\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment AxieBrief on Axie {\n  id\n  genes\n  owner\n  name\n  stage\n  class\n sireId\n  sireClass\n  matronId\n  matronClass\n breedCount\n  image\n  title\n  stats {\n    ...AxieStats\n    __typename\n  }\n  battleInfo {\n    banned\n    __typename\n  }\n  auction {\n    currentPrice\n    currentPriceUSD\n    __typename\n  }\n  parts {\n    id\n    name\n    class\n    type\n    specialGenes\n    __typename\n  }\n  __typename\n}\nfragment AxieStats on AxieStats {\n  hp\n  speed\n  skill\n  morale\n  __typename\n}\n\n",
      variables: {
        from: from || 0,
        size: size || 100,
        sort: "PriceAsc",
        auctionType: owner ? "All" : "Sale",
        owner: owner || null,
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
  }).then((res) => res.json());
}

// Normalize the response
function formatResponse(res) {
  const { results } = res.data.axies;
  return results.map((axie) => normalizeAxie(axie));
}

// Exported function
export default async (props) => {
  try {
    let firstResponse = await fetchMarketPage({
      ...props,
      from: 0 * 100,
    });

    const { total } = firstResponse.data.axies;
    const amountOfPages = Math.trunc(Number(total) / 100) || 1;

    const amountOfRequest = amountOfPages > 12 ? 12 : amountOfPages;

    const responses = await Promise.all(
      new Array(amountOfRequest)
        .fill("1")
        .map((_, index) =>
          fetchMarketPage({ ...props, from: Number(index) * 100 }).then(
            formatResponse
          )
        )
    );

    const restOfPages = responses.flat();

    return [...restOfPages];
  } catch (e) {
    return [];
  }
};
