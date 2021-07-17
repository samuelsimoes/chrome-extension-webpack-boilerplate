import React from "react";
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

import CopyEthPrice from "./CopyPrice";

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
        <div></div>
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
