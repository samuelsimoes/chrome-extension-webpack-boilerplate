function formatGameProgress(response) {
  const { claimable_total, total, last_claimed_item_at } = response;

  return {
    claimableSlp: claimable_total,
    totalSlp: total,
    last_claimed_item_at,
  };
}

export default function fetchGameProgress(address) {
  return fetch(
    `https://game-api.skymavis.com/game-api/clients/${address}/items/1`
  )
    .then((res) => res.json())
    .then(formatGameProgress);
}
