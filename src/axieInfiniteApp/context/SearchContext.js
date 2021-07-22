import React, { createContext, useState } from "react";

const SearchContext = createContext({});

export const SearchProvider = ({ children }) => {
  const [open, isOpen] = useState(false);

  return (
    <SearchContext.Provider value={{ open, isOpen }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
