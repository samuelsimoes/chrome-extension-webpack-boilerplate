import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import { green } from "@material-ui/core/colors";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import styles from "./styles.module.css";

const useStyles = makeStyles({
  root: {
    background: "#242735",
  },
  tableCell: {
    color: "white !important",
    borderBottom: "none",
    textAlign: "center",
  },
});

const useStylesTooltip = makeStyles((theme) => ({
  arrow: {
    color: theme.palette.common.black,
  },
  tooltip: {
    backgroundColor: theme.palette.common.black,
    fontSize: "1rem",
    padding: "6px",
  },
}));

const CopyEthPrice = ({ ethPrice, ethRate }) => {
  const [isCoping, setIsCoping] = useState(false);
  const suggestedPrice =
    (Number(ethPrice) * Number(ethRate) - 1) / Number(ethRate);

  const handleCopy = () => {
    chrome.runtime.sendMessage({
      type: "copy",
      text: suggestedPrice.toFixed(7),
    });
    setIsCoping(true);
    setTimeout(() => setIsCoping(false), 2 * 1000);
  };

  const classes = useStylesTooltip();

  return (
    <Tooltip
      title={
        <>
          {!isCoping && (
            <>
              <p>
                <strong>Real price</strong>
              </p>
              <p>{ethPrice && Number(ethPrice).toFixed(6)} eth</p>
              <br />
            </>
          )}
          <p>
            <strong>{!isCoping ? "Value to copy" : "Copied!!!!"}</strong>
          </p>
          <p>{suggestedPrice && Number(suggestedPrice).toFixed(6)} eth</p>
        </>
      }
      classes={classes}
    >
      <IconButton size="small" onClick={handleCopy} disableFocusRipple>
        <FileCopyIcon
          fontSize="small"
          style={{ color: isCoping ? green[500] : "grey" }}
        />
      </IconButton>
    </Tooltip>
  );
};

const SearchResult = ({ isOpen, setIsOpen, axieMarket }) => {
  const classes = useStyles();
  return (
    <Dialog
      onClose={() => setIsOpen(false)}
      aria-labelledby="simple-dialog-title"
      open={isOpen}
      maxWidth="lg"
    >
      <DialogContent classes={{ root: classes.root }}>
        <TableContainer>
          <Table aria-label="simple table" size="small">
            <TableHead>
              <TableRow>
                <TableCell
                  classes={{ root: classes.tableCell }}
                  className={styles.dialogResult}
                  align="right"
                >
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
              {axieMarket.map(
                ({ id, usdPrice, ethPrice, ethRate, quality, breedCount }) => (
                  <TableRow key={id}>
                    <TableCell
                      classes={{ root: classes.tableCell }}
                      align="right"
                    >
                      {" "}
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
      </DialogContent>
    </Dialog>
  );
};

export default SearchResult;
