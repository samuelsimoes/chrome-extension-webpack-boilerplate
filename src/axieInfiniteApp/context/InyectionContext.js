import React, { createContext, useState, useContext } from "react";
import { v4 as uuid } from "uuid";

const InyectionContext = createContext({});

export const useInyectionContext = () => useContext(InyectionContext);

export const InyectionProvider = ({ children }) => {
  const [inyect, setInyect] = useState("");

  return (
    <InyectionContext.Provider
      value={{ inyect, setInyect: () => setInyect(uuid()) }}
    >
      {children}
    </InyectionContext.Provider>
  );
};
