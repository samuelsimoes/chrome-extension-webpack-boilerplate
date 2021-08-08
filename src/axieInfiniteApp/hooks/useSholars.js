import { useState, useEffect } from "react";

import fetchProfile from "../utils/fetchProfile";

export default (addresses = []) => {
  const [scholars, setScholars] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const init = async () => {
      setIsFetching(true);

      const scholarsData = await Promise.all(
        addresses.map((roninAddress) => fetchProfile({ roninAddress }))
      );

      setScholars(scholarsData);
      setIsFetching(false);
    };
    init();
  }, []);

  const addNewScholar = (address) => {};

  return {
    scholars,
    addNewScholar,
    isFetching,
  };
};
