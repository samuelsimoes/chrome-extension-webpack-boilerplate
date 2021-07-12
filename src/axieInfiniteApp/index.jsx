import React from "react";
import Typography from "@material-ui/core/Typography";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import SearchEngine from "./SearchEngine";
import CryptoCalculator from "./CryptoCalculator";

const AxieInfiniteApp = () => {
  return (
    <>
      <Accordion defaultExpanded={true}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Crypto Calculator</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CryptoCalculator />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Search Tool</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <SearchEngine />
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default AxieInfiniteApp;
