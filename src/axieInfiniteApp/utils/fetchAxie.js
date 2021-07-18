import calculateQuality from "./calculateQuality";

// Normalize the response
function formatResponse({ data }) {
  const { axie } = data;
  const { id, genes, image, breedCount, parts, pureness } = axie;
  const { quality } = calculateQuality(genes, axie.class);

  const queryExactParams = {
    parts: parts.map(({ id }) => id),
    pureness,
    classes: [axie.class],
    breed: [breedCount, breedCount],
  };

  const cardParts = parts
    .filter(({ abilities }) => abilities.length)
    .map(({ id }) => id);

  return {
    id,
    quality: (quality * 100).toFixed(2),
    image,
    parts,
    type: axie.class,
    breedCount,
    pureness,
    queryExactParams,
    cardParts,
  };
}

export default function fetchAxie({ axieId = "1709432" }) {
  return fetch("https://axieinfinity.com/graphql-server-v2/graphql", {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      operationName: "GetAxieDetail",
      query:
        "query GetAxieDetail($axieId: ID!) {\n  axie(axieId: $axieId) {\n    ...AxieDetail\n    __typename\n  }\n}\n\nfragment AxieDetail on Axie {\n  id\n  image\n  class\n  chain\n  name\n  genes\n  owner\n pureness\n birthDate\n  bodyShape\n  class\n  sireId\n  sireClass\n  matronId\n  matronClass\n  stage\n  title\n  breedCount\n  level\n  figure {\n    atlas\n    model\n    image\n    __typename\n  }\n  parts {\n    ...AxiePart\n    __typename\n  }\n  stats {\n    ...AxieStats\n    __typename\n  }\n  auction {\n    ...AxieAuction\n    __typename\n  }\n  ownerProfile {\n    name\n    __typename\n  }\n  battleInfo {\n    ...AxieBattleInfo\n    __typename\n  }\n  children {\n    id\n    name\n    class\n    image\n    title\n    stage\n    __typename\n  }\n  __typename\n}\n\nfragment AxieBattleInfo on AxieBattleInfo {\n  banned\n  banUntil\n  level\n  __typename\n}\n\nfragment AxiePart on AxiePart {\n  id\n  name\n  class\n  type\n  specialGenes\n  stage\n  abilities {\n    ...AxieCardAbility\n    __typename\n  }\n  __typename\n}\n\nfragment AxieCardAbility on AxieCardAbility {\n  id\n  name\n  attack\n  defense\n  energy\n  description\n  backgroundUrl\n  effectIconUrl\n  __typename\n}\n\nfragment AxieStats on AxieStats {\n  hp\n  speed\n  skill\n  morale\n  __typename\n}\n\nfragment AxieAuction on Auction {\n  startingPrice\n  endingPrice\n  startingTimestamp\n  endingTimestamp\n  duration\n  timeLeft\n  currentPrice\n  currentPriceUSD\n  suggestedPrice\n  seller\n  listingIndex\n  state\n  __typename\n}\n",
      variables: {
        axieId,
      },
    }),
  })
    .then((res) => res.json())
    .then(formatResponse);
}
