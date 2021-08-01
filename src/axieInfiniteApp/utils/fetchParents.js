import calculateQuality, { getTraitsTable } from "./calculateQuality";

const normalizeAxie = (axie) => {
  const { id, genes, image, name, breedCount, parts } = axie;
  const { quality } = calculateQuality(genes, axie.class);

  const traits = getTraitsTable(genes);

  return {
    id,
    quality: (quality * 100).toFixed(2),
    image,
    parts,
    genes,
    traits,
    name,
    type: axie.class,
    breedCount,
  };
};

// Normalize the response
function formatResponse({ data: { matron, sire } }) {
  return {
    matron: normalizeAxie(matron),
    sire: normalizeAxie(sire),
  };
}

export default function fetchParents({ matronId, sireId }) {
  return fetch("https://axieinfinity.com/graphql-server-v2/graphql", {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      operationName: "GetParentsBrief",
      variables: {
        matronId,
        sireId,
      },
      query:
        "query GetParentsBrief($matronId: ID!, $sireId: ID!) {\n  matron: axie(axieId: $matronId) {\n    ...AxieBrief\n    __typename\n  }\n  sire: axie(axieId: $sireId) {\n    ...AxieBrief\n    __typename\n  }\n}\n\nfragment AxieBrief on Axie {\n  id\n  name\n  stage\n genes\n class\n  breedCount\n  image\n  title\n  battleInfo {\n    banned\n    __typename\n  }\n  auction {\n    currentPrice\n    currentPriceUSD\n    __typename\n  }\n  parts {\n    id\n   name\n    class\n   type\n    specialGenes\n    __typename\n  }\n  __typename\n}\n",
    }),
  })
    .then((res) => res.json())
    .then(formatResponse);
}
