import { useState } from "react";

export default () => {
  const [balances, setBalances] = useState([
    {
      id: "slp",
      balance: 5100,
      usdBalance: "800.56",
    },
    {
      id: "axs",
      balance: 51,
      usdBalance: "800.56",
    },
    {
      id: "eth",
      balance: "0.0234847",
      usdBalance: "1800.56",
    },
    {
      id: "egg",
      balance: 0,
      usdBalance: "0",
    },
  ]);

  const updateBalance = (id, newBalance) =>
    setBalances((prevBalaces) =>
      prevBalaces.map((row) =>
        row.id === id ? { ...row, balance: newBalance } : row
      )
    );

  return { balances, updateBalance, setBalances };
};
