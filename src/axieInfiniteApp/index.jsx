import React from "react";

import { SearchProvider } from "./context/SearchContext";
import FloatingButtons from "./FloatingButtons";
import wrapIntoPortal from "./utils/wrapIntoPortal";

const FloatingButtonsPortal = wrapIntoPortal(<FloatingButtons />);

export default () => (
  <SearchProvider>
    <FloatingButtonsPortal />
  </SearchProvider>
);
