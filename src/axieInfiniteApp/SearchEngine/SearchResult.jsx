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

import { GenesPopover } from "./GenesTable";
import { useSearchContext } from "../context/SearchContext";
import Aquatic from "../assets/Aquatic";
import Beast from "../assets/Beast";
import Bird from "../assets/Bird";
import Bug from "../assets/Bug";
import Dawn from "../assets/Dawn";
import Dusk from "../assets/Dusk";
import Mech from "../assets/Mech";
import Plant from "../assets/Plant";
import Reptile from "../assets/Reptile";
import CopyEthPrice from "./CopyPrice";
import sendNotification from "../utils/sendNotification";

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

const ClassIcon = ({ classType }) => {
  switch (classType) {
    case "Aquatic":
      return <Aquatic />;

    case "Beast":
      return <Beast />;

    case "Bird":
      return <Bird />;

    case "Bug":
      return <Bug />;

    case "Dawn":
      return <Dawn />;

    case "Dusk":
      return <Dusk />;

    case "Mech":
      return <Mech />;

    case "Plant":
      return <Plant />;

    case "Reptile":
      return <Reptile />;

    default:
      return null;
  }
};

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

const PriceAlert = ({ axieMarket }) => {
  const [isActive, setIsActive] = useState(false);
  const [wasNotified, setWasNotified] = useState(false);
  const [priceLimit, setPriceLimit] = useState(0);

  const handleToggle = (checked) => {
    setWasNotified(false);
    setIsActive(checked);
  };

  useEffect(() => {
    if (!wasNotified && isActive) {
      const bargains = axieMarket
        .filter(({ usdPrice }) => Number(usdPrice) < Number(priceLimit))
        .map(({ id, usdPrice }) =>
          sendNotification(
            encodeURI(
              `New+axie+listed \n\nLimit price: ${priceLimit} USD \nPrice:+${usdPrice}+USD \n\nhttps://marketplace.axieinfinity.com/axie/${id}`
            )
          )
        );

      if (bargains.length) {
        setWasNotified(true);
        setIsActive(false);
      }
    }
  }, [axieMarket, isActive, priceLimit]);

  return (
    <div>
      <FormControlLabel
        control={
          <Switch
            checked={isActive}
            onChange={(e) => handleToggle(e.target.checked)}
            color="primary"
          />
        }
        label="Price Alert"
      />
      <TextField
        variant="outlined"
        fullWidth
        label="Limit price (USD)"
        autoComplete="off"
        autoComplete={false}
        value={priceLimit}
        onChange={(e) => setPriceLimit(e.target.value)}
        inputProps={{
          style: { textAlign: "center", width: "200px" },
        }}
      />
    </div>
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
          <PriceAlert axieMarket={axieMarket} />
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
                    classType,
                    traits,
                    breedCount,
                  }) => (
                    <TableRow key={id}>
                      <TableCell
                        classes={{ root: classes.tableCell }}
                        align="right"
                      >
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
                        className={classes.puresnessCell}
                        align="right"
                      >
                        <GenesPopover traits={traits} />
                        <span>{quality}%</span>
                        <ClassIcon classType={classType} />
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
