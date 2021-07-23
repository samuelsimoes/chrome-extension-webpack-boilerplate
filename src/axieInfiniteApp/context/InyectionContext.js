import React, { createContext, useState, useContext } from "react";

const InyectionContext = createContext({});

export const useInyectionContext = () => useContext(InyectionContext);

export const InyectionProvider = ({ children }) => {
  const [inyect, setInyect] = useState(false);

  return (
    <InyectionContext.Provider value={{ inyect, setInyect }}>
      {children}
    </InyectionContext.Provider>
  );
};
