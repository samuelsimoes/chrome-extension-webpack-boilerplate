import React from "react";

import { SearchProvider } from "./context/SearchContext";
import { InyectionProvider } from "./context/InyectionContext";
import FloatingButtons from "./FloatingButtons";
import MarketplaceInyection from "./MarketplaceInyection";
import wrapIntoPortal from "./utils/wrapIntoPortal";
import "./utils/ChainApiDriver";

const FloatingButtonsPortal = wrapIntoPortal(<FloatingButtons />);
const MarketplaceInyectionPortal = wrapIntoPortal(<MarketplaceInyection />);

export default () => (
  <InyectionProvider>
    <SearchProvider>
      <FloatingButtonsPortal />
      <MarketplaceInyectionPortal />
    </SearchProvider>
  </InyectionProvider>
);
