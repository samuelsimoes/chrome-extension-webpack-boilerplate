const slpCost = {
  0: 300,
  1: 450,
  2: 750,
  3: 1200,
  4: 1950,
  5: 3150,
  6: 5100,
};

export default (breedA, breedB) => {
  const slp = slpCost[breedA] + slpCost[breedB];

  return { axs: 1, slp };
};
