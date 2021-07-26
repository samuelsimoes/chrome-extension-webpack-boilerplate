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

import { useSearchContext } from "../context/SearchContext";
import CopyEthPrice from "./CopyPrice";

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

const AutoRefresh = ({ onRefresh }) => {
  const [isAutoRefresh, setIsAutoRefresh] = useState(true);
  const [intervalId, setIntervalId] = useState(null);
  const [remainingTime, setRemainingTime] = useState(60);

  const regresiveCount = () =>
    setRemainingTime((prev) => {
      if (prev === 0) {
        onRefresh();
        return 60;
      }
      return Number(prev) - 1;
    });

  const handleToggle = (isChecked) => {
    setRemainingTime(60);
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

const SearchResult = () => {
  const { axieMarket, isOpenModal, setIsOpenModal, onSearch } =
    useSearchContext();

  const [idAxie, setIdAxie] = useState("");
  const [slice, setSlice] = useState(50);

  const classes = useStyles();

  return (
    <Dialog
      onClose={() => setIsOpenModal(false)}
      aria-labelledby="simple-dialog-title"
      open={isOpenModal}
      maxWidth="lg"
    >
      <DialogContent classes={{ root: classes.root }}>
        <div className={classes.toolsContainer}>
          <AutoRefresh onRefresh={onSearch} />
          <TextField
            variant="outlined"
            fullWidth
            label="Axie ID"
            autoComplete="off"
            autoComplete={false}
            value={idAxie}
            onChange={(e) => setIdAxie(e.target.value)}
            inputProps={{
              style: { textAlign: "center" },
            }}
          />
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
              {axieMarket
                .slice(0, slice)
                .map(
                  ({
                    id,
                    usdPrice,
                    ethPrice,
                    ethRate,
                    quality,
                    breedCount,
                  }) => (
                    <TableRow key={id}>
                      <TableCell
                        classes={{ root: classes.tableCell }}
                        align="right"
                      >
                        {" "}
                        <Link
                          href={`https://marketplace.axieinfinity.com/axie/${id}`}
                          target="_blank"
                          style={{
                            background: idAxie === id ? "yellow" : "none",
                          }}
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
                        align="right"
                      >
                        {quality}%
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
          disabled={!axieMarket || slice >= axieMarket.length}
        >
          See 50 more results
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default SearchResult;
