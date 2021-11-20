export default ({ axies, steps, balances, rates }) => {
  const partials = steps.reduce(
    (states, step) => {
      const lastValidState = [...states.filter(({ valid }) => valid)].pop();
      const { type } = step;

      if (type === "breed") {
        const newRowState = calculateBreedState(lastValidState, step);
        return [...states, newRowState];
      }

      if (type === "sell") {
        const newRowState = calculateSellState(lastValidState, step);
        return [...states, newRowState];
      }

      if (type === "buy") {
        const newRowState = calculateBuyState(lastValidState, step);
        return [...states, newRowState];
      }

      if (type === "swap") {
        const newRowState = calculateSwapState(lastValidState, step);
        return [...states, newRowState];
      }

      return [...states, { valid: false }];
    },
    [
      {
        axies,
        balances,
        rates,
        valid: true,
      },
    ]
  );

  const result = [...partials.filter(({ valid }) => valid)].pop();

  return { partials, result };
};

const getStateManager = (state) => {
  let _state = state;

  const getAxieById = (axieId) => _state.axies.find(({ id }) => axieId === id);

  const spend = (cryptos) => {
    const newBalances = _state.balances.map((row) => {
      const { id, balance } = row;
      const spendedAmount = cryptos[id] || 0;
      return { ...row, balance: balance - spendedAmount };
    });

    _state = { ..._state, balances: newBalances };
  };

  const deposite = (cryptos) => {
    const newBalances = _state.balances.map((row) => {
      const { id, balance } = row;
      const spendedAmount = cryptos[id] || 0;
      return { ...row, balance: Number(balance) + Number(spendedAmount) };
    });

    _state = { ..._state, balances: newBalances };
  };

  const breed = (axieId, times) => {
    const newAxies = _state.axies.map((row) =>
      row.id === axieId ? { ...row, breedCount: row.breedCount + times } : row
    );
    _state = { ..._state, axies: newAxies };
  };

  const removeAxie = (axieId) => {
    const newAxies = _state.axies.filter((row) => row.id !== axieId);
    _state = { ..._state, axies: newAxies };
  };

  const getBalance = (idCrypto) => {
    const row = _state.balances.find(({ id }) => id === idCrypto);
    return row ? Number(row.balance) : 0;
  };

  const getRates = () => _state.rates;

  const getFinalState = () => _state;

  return {
    getAxieById,
    removeAxie,
    breed,
    spend,
    deposite,
    getBalance,
    getRates,
    getFinalState,
  };
};

// --------------------------
// --------------------------
// --------------------------
const calculateBreedCost = (axie, times) => {
  const BREED_COST = [300, 450, 750, 1200, 1950, 3150, 5100];
  const { breedCount } = axie;

  return BREED_COST.slice(breedCount, breedCount + times).reduce(
    (acc, curr) => acc + curr,
    0
  );
};

function calculateBreedState(lastState, currentStep) {
  try {
    const stateManager = getStateManager(lastState);

    const { axieAId, axieBId, breedTimes } = currentStep;
    if (axieAId === axieBId) throw new Error();

    const axieA = stateManager.getAxieById(axieAId);
    const axieB = stateManager.getAxieById(axieBId);

    const slpForA = calculateBreedCost(axieA, breedTimes);
    const slpForB = calculateBreedCost(axieB, breedTimes);

    const axsCost = 2 * breedTimes;

    stateManager.spend({ slp: slpForA + slpForB, axs: axsCost });
    stateManager.breed(axieAId, breedTimes);
    stateManager.breed(axieBId, breedTimes);
    stateManager.deposite({ egg: breedTimes });

    return stateManager.getFinalState();
  } catch (e) {
    console.log(e);
    return { valid: false };
  }
}

// --------------------------
// --------------------------
// --------------------------
function calculateSellState(lastState, currentStep) {
  try {
    const stateManager = getStateManager(lastState);

    const { axieId, usdAmount } = currentStep;
    const axie = stateManager.getAxieById(axieId);
    if (!axie) throw new Error();

    const { ethPrice } = stateManager.getRates();
    stateManager.deposite({ eth: Number(usdAmount) / Number(ethPrice) });

    stateManager.removeAxie(axieId);

    return stateManager.getFinalState();
  } catch (e) {
    console.log(e);
    return { valid: false };
  }
}

// --------------------------
// --------------------------
// --------------------------
function calculateBuyState(lastState, currentStep) {
  try {
    const stateManager = getStateManager(lastState);

    const { usdAmount } = currentStep;

    const { ethPrice } = stateManager.getRates();

    stateManager.spend({ eth: Number(usdAmount) / Number(ethPrice) });

    return stateManager.getFinalState();
  } catch (e) {
    console.log(e);
    return { valid: false };
  }
}

// --------------------------
// --------------------------
// --------------------------
function calculateSwapState(lastState, currentStep) {
  try {
    const stateManager = getStateManager(lastState);

    const { slpAmount, axsAmount, fee } = currentStep;
    const { ethPrice, axsPrice, slpPrice } = stateManager.getRates();

    const axsCost = (Number(axsAmount) * Number(axsPrice)) / Number(ethPrice);
    const slpCost = (Number(slpAmount) * Number(slpPrice)) / Number(ethPrice);
    const feeCost = Number(fee) / Number(ethPrice);

    const totalCost = axsCost + slpCost + feeCost;
    const ethInWallet = stateManager.getBalance("eth");
    if (totalCost > ethInWallet) throw new Error();

    stateManager.spend({
      eth: totalCost,
    });

    stateManager.deposite({
      axs: axsAmount,
      slp: slpAmount,
    });

    return stateManager.getFinalState();
  } catch (e) {
    console.log(e);
    return { valid: false };
  }
}
