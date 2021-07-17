// Normalize the response
function formatResponse(res) {
  const {
    data: {
      exchangeRate: { eth },
    },
  } = res;

  return eth;
}

export default function fetchEthRate() {
  return fetch("https://axieinfinity.com/graphql-server-v2/graphql", {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      operationName: "NewEthExchangeRate",
      query:
        "query NewEthExchangeRate {\n  exchangeRate {\n    eth {\n      usd\n      __typename\n    }\n    __typename\n  }\n}\n",
      variables: {},
    }),
  })
    .then((res) => res.json())
    .then(formatResponse);
}
