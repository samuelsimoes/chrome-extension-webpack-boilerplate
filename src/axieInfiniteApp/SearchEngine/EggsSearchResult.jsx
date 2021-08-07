import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import GenesTable, { CustomPopover } from "./GenesTable";
import { getSireAndMatron } from "../utils/eggSearchHandler";
import CopyEthPrice from "./CopyPrice";
import fetchMarketplace from "../utils/fetchMarketplace";
import { EGG_STAGE } from "../utils/normalizeAxie";

const useStyles = makeStyles({
  toolsContainer: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    color: "white",
    borderBottom: "solid grey 1px",
    paddingBottom: "5px",
    marginBottom: "5px",
  },
  addorment: {
    color: "white",
  },
  root: {
    background: "#242735",
  },
  puresnessCell: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  tableCell: {
    color: "white !important",
    borderBottom: "none",
    textAlign: "center",
  },
  buttonRoot: {
    display: "block",
    margin: "15px auto",
  },
});

const AutoRefresh = ({ onRefresh, refreshTime = 45 }) => {
  const [isAutoRefresh, setIsAutoRefresh] = useState(true);
  const [intervalId, setIntervalId] = useState(null);
  const [remainingTime, setRemainingTime] = useState(refreshTime);

  const regresiveCount = () =>
    setRemainingTime((prev) => {
      if (prev === 0) {
        onRefresh();
        return refreshTime;
      }
      return Number(prev) - 1;
    });

  const handleToggle = (isChecked) => {
    setRemainingTime(refreshTime);
    setIsAutoRefresh(isChecked);
  };

  useEffect(() => {
    if (intervalId && !isAutoRefresh) {
      clearInterval(intervalId);
    } else if (isAutoRefresh && !intervalId) {
      const newTaskId = setInterval(regresiveCount, 1 * 1000);
      setIntervalId(newTaskId);
    }

    return () => clearInterval(intervalId);
  }, [isAutoRefresh, intervalId]);

  return (
    <FormControlLabel
      control={
        <Switch
          checked={isAutoRefresh}
          onChange={(e) => handleToggle(e.target.checked)}
          color="primary"
        />
      }
      label={
        isAutoRefresh ? `next refresh ${remainingTime}sec` : "Auto refresh"
      }
    />
  );
};

const PurityEgg = ({ egg }) => {
  const [sire, setSire] = useState({});
  const [matron, setMatron] = useState({});
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const refreshParents = async () => {
      if (egg) {
        const parents = await getSireAndMatron(egg);
        setSire(parents.sire);
        setMatron(parents.matron);
        setIsReady(true);
      }
    };
    refreshParents();
  }, [egg]);

  return (
    <div>
      <span>{sire.quality && Math.round(sire.quality)}%</span>
      {" - "}
      <span>{matron.quality && Math.round(matron.quality)}%</span>
      {isReady && (
        <CustomPopover>
          <div style={{ display: "flex" }}>
            <GenesTable traits={sire.traits} />
            <GenesTable traits={matron.traits} />
          </div>
        </CustomPopover>
      )}
    </div>
  );
};

const EggSearchResult = ({ isOpen, setIsOpen }) => {
  const [eggsMarket, setEggsMarket] = useState([]);
  const [slice, setSlice] = useState(50);

  const classes = useStyles();

  const onSearch = async () => {
    const eggs = await fetchMarketplace({ stages: [EGG_STAGE] });
    setEggsMarket(eggs);
  };

  useEffect(() => {
    if (isOpen) {
      onSearch();
    } else {
      setEggsMarket([]);
    }
  }, [isOpen]);

  return (
    <Dialog
      onClose={() => setIsOpen(false)}
      aria-labelledby="simple-dialog-title"
      open={isOpen}
      maxWidth="lg"
    >
      <DialogContent classes={{ root: classes.root }}>
        <div className={classes.toolsContainer}>
          <AutoRefresh onRefresh={onSearch} />
        </div>
        <TableContainer>
          <Table aria-label="simple table" size="small">
            <TableHead>
              <TableRow>
                <TableCell classes={{ root: classes.tableCell }} align="right">
                  Axie id
                </TableCell>
                <TableCell classes={{ root: classes.tableCell }} align="right">
                  Breed
                </TableCell>
                <TableCell classes={{ root: classes.tableCell }} align="right">
                  Price
                </TableCell>
                <TableCell classes={{ root: classes.tableCell }} align="right">
                  Pureness
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {eggsMarket
                .slice(0, slice)
                .map(
                  ({
                    id,
                    usdPrice,
                    ethPrice,
                    ethRate,
                    quality,
                    traits,
                    breedCount,
                    ...rest
                  }) => (
                    <TableRow key={id}>
                      <TableCell
                        classes={{ root: classes.tableCell }}
                        align="right"
                      >
                        <Link
                          href={`https://marketplace.axieinfinity.com/axie/${id}`}
                          target="_blank"
                        >
                          {id}
                        </Link>
                      </TableCell>

                      <TableCell
                        classes={{ root: classes.tableCell }}
                        align="right"
                      >
                        {breedCount}/7
                      </TableCell>
                      <TableCell
                        classes={{ root: classes.tableCell }}
                        align="right"
                      >
                        {usdPrice} USD{" "}
                        <CopyEthPrice ethPrice={ethPrice} ethRate={ethRate} />
                      </TableCell>
                      <TableCell
                        classes={{ root: classes.tableCell }}
                        className={classes.puresnessCell}
                        align="right"
                      >
                        <PurityEgg egg={rest} />
                      </TableCell>
                    </TableRow>
                  )
                )}
            </TableBody>
          </Table>
        </TableContainer>
        <Button
          onClick={() => setSlice((p) => Number(p) + 50)}
          size="large"
          color="primary"
          variant="contained"
          classes={{ root: classes.buttonRoot }}
          disabled={!eggsMarket || slice >= eggsMarket.length}
        >
          See 50 more results
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default EggSearchResult;
