import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import SearchEngine from "./SearchEngine";
import CryptoCalculator from "./CryptoCalculator";

const useStyles = makeStyles({
  container: {
    maxWidth: "375px",
  },
});

const AxieInfiniteApp = () => {
  const clasess = useStyles();
  return (
    <div className={clasess.container}>
      <Accordion>
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
    </div>
  );
};

export default AxieInfiniteApp;
