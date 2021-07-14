const slpCost = {
  0: 150,
  1: 300,
  2: 450,
  3: 750,
  4: 1200,
  5: 1950,
  6: 3150,
};

export default (breedA, breedB) => {
  const slp = slpCost[breedA] + slpCost[breedB];

  return { axs: 4, slp };
};
