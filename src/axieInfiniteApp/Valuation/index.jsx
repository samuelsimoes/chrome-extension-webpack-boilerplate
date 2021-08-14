import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

import useScholars from "../hooks/useSholars";
import CopyButton from "../CopyButton";

import {
  LOGO_ETH_SRC,
  LOGO_AXS_SRC,
  LOGO_SLP_SRC,
  LOGO_AXIE_SRC,
  EGG_SRC,
} from "../utils/assets";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    height: "90vh",
    padding: "8px",
  },
  card: {
    width: "100%",
  },
  sumary: {
    border: "solid 1px #e3e3e3",
    padding: "8px",
    margin: "8px 0",
    borderRadius: "8px",
  },
  filterContainer: {
    padding: 1,
  },
  listContainer: {
    flex: 1,
    overflowY: "scroll",
    width: "100%",
  },
  listItemContainer: {
    padding: 3,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
    marginTop: "12px",
  },
  addressString: {
    fontSize: 13,
  },
  nameAccount: {
    fontSize: 18,
    fontWeight: "bold",
  },
  address: {
    display: "flex",
    alignItems: "center",
  },
  pos: {
    marginBottom: 12,
  },
  ownership: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  ownerItem: {
    display: "flex",
    alignItems: "center",
    fontSize: "15px",
  },
});

const Valuation = () => {
  const { scholars } = useScholars([
    "ronin:af4a761efebccdbde51b046decda82f34345eb50", // Main
    "ronin:f2a2e4732ce73019ae6814990efcbdeda019aa2a", // Jugador 1
    "ronin:2756b2ce1bac714148a7b66b6eb0a5f7f5ad9313", // Jugador 2
    "ronin:60e64b03ce276cd1e18c1bf8e9bf171620fd27de", // Jugador 3
    "ronin:6c0c98e8aad2693e74d807868823943648b25c81", // jugador 4
    "ronin:76d640f8e297df54ac89801c713661931c2a0ab4", // Alejandro
    "ronin:920f89e4e3dff306d4b6135d8734c1aa748bdc4b", // carlox
    "ronin:ca244aa68d679ae431fb013fb5ec9e7d9775fd23", // Mati_Infinity
    "ronin:feaed8c3054e9f084f6aaf2b86e4ebe39e199c81", // Pitagoras
    "ronin:e35445b634a78b213c5b36c776621ec3a2263d31", // Ricardo
    "ronin:f64d21dfcec588ec5a75edf94ce637104a460841", // Gatita69
  ]);

  const [nameFilter, setNameFilter] = useState("");

  const classes = useStyles();

  const NFTs = scholars.reduce((acc, { property }) => property.length + acc, 0);
  const axies = scholars.reduce(
    (acc, { property }) =>
      property.filter(({ stage }) => stage === 1).length + acc,
    0
  );
  const eggs = scholars.reduce(
    (acc, { property }) =>
      property.filter(({ stage }) => stage === 4).length + acc,
    0
  );

  const slpInWallet = scholars.reduce(
    (acc, { wallet: { slp } }) => slp + acc,
    0
  );

  const ethInWallet = scholars.reduce(
    (acc, { wallet: { eth } }) => eth + acc,
    0
  );

  const axsInWallet = scholars.reduce(
    (acc, { wallet: { axs } }) => axs + acc,
    0
  );

  return (
    <div className={classes.container}>
      <div className={classes.sumary}>
        sumary
        <p>
          {NFTs} NFTs (aprox {NFTs * 600}$ - 600$ per axie)
        </p>
        <p>
          {axies} Axies + {eggs} Eggs
        </p>
        <p>{slpInWallet} slp</p>
        <p>{axsInWallet.toFixed(2)} axs</p>
        <p>{ethInWallet.toFixed(4)} eth</p>
      </div>
      <div className={classes.filterContainer}>
        <TextField
          variant="outlined"
          fullWidth
          size="small"
          label="Account name filter"
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
          autoComplete="off"
          inputProps={{
            style: { textAlign: "center" },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </div>
      <List className={classes.listContainer}>
        {scholars
          .filter(({ profile: { name } }) =>
            name.toLowerCase().includes(nameFilter)
          )
          .map((s) => (
            <ListItem className={classes.listItemContainer}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography variant="h5" className={classes.nameAccount}>
                    {s.profile.name}{" "}
                    <Tooltip title="Visit profile">
                      <IconButton
                        size="small"
                        onClick={() =>
                          window
                            .open(
                              `/profile/${s.profile.addresses.ronin.replace(
                                "0x",
                                "ronin:"
                              )}/axie`,
                              "_blank"
                            )
                            .focus()
                        }
                      >
                        <OpenInNewIcon
                          style={{ color: "grey", fontSize: "18px" }}
                        />
                      </IconButton>
                    </Tooltip>
                  </Typography>
                  <Typography
                    className={classes.addressString}
                    color="textSecondary"
                    gutterBottom
                  >
                    <div className={classes.address}>
                      <img
                        src="https://explorer.roninchain.com/contract-icon/ron.png"
                        width="14"
                        height="14"
                        style={{ marginRight: "2px", marginLeft: "2px" }}
                      />
                      <span>
                        {s.profile.addresses.ronin
                          .replace("0x", "ronin:")
                          .slice(0, 14) +
                          "......." +
                          s.profile.addresses.ronin.slice(35)}
                      </span>
                      <span>
                        <CopyButton
                          valueToCopy={s.profile.addresses.ronin.replace(
                            "0x",
                            "ronin:"
                          )}
                          fontSize="14px"
                        />
                      </span>
                    </div>
                  </Typography>
                  {s.profile.addresses.ethereum && (
                    <Typography
                      className={classes.addressString}
                      color="textSecondary"
                      gutterBottom
                    >
                      <div className={classes.address}>
                        <img src={LOGO_ETH_SRC} width="17" height="17" />
                        <span>
                          {s.profile.addresses.ethereum.slice(0, 14) +
                            "......." +
                            s.profile.addresses.ethereum.slice(35)}
                        </span>
                        <span>
                          <CopyButton
                            valueToCopy={s.profile.addresses.ethereum}
                            fontSize="14px"
                          />
                        </span>
                      </div>
                    </Typography>
                  )}

                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    <strong>Wallet</strong>
                  </Typography>
                  <div className={classes.ownership}>
                    <Typography
                      className={classes.ownerItem}
                      variant="body2"
                      component="span"
                    >
                      {s.property.filter(({ stage }) => stage === 4).length}{" "}
                      <img src={LOGO_AXIE_SRC} alt="..." width="30px" />
                    </Typography>
                    <Typography
                      className={classes.ownerItem}
                      variant="body2"
                      component="span"
                    >
                      {s.property.filter(({ stage }) => stage === 1).length}
                      <span width="50px">
                        <img src={EGG_SRC} alt="..." width="45px" />
                      </span>
                    </Typography>
                  </div>
                  <div className={classes.ownership}>
                    <Typography
                      className={classes.ownerItem}
                      variant="body2"
                      component="span"
                    >
                      {s.wallet.eth ? Number(s.wallet.eth).toFixed(4) : 0}{" "}
                      <img src={LOGO_ETH_SRC} alt="..." />
                    </Typography>
                    <Typography
                      className={classes.ownerItem}
                      variant="body2"
                      component="span"
                    >
                      {s.wallet.slp} <img src={LOGO_SLP_SRC} alt="..." />
                    </Typography>
                    <Typography
                      className={classes.ownerItem}
                      variant="body2"
                      component="span"
                    >
                      {s.wallet.axs.toFixed(0)}{" "}
                      <img src={LOGO_AXS_SRC} alt="..." />
                    </Typography>
                  </div>
                  {!!(s.gameProgress.totalSlp - s.wallet.slp) && (
                    <>
                      <Typography
                        className={classes.title}
                        color="textSecondary"
                        gutterBottom
                      >
                        <strong>next token claim</strong>
                        <span style={{ display: "block" }}>
                          {new Date(
                            s.gameProgress.last_claimed_item_at * 1000
                          ).toLocaleDateString()}{" "}
                          -{" "}
                          {new Date(
                            s.gameProgress.last_claimed_item_at * 1000
                          ).toLocaleTimeString()}{" "}
                          - {s.gameProgress.totalSlp - s.wallet.slp}{" "}
                          <img
                            src={LOGO_SLP_SRC}
                            alt="..."
                            width="16px"
                            style={{ display: "inline" }}
                          />
                        </span>
                      </Typography>
                    </>
                  )}
                </CardContent>
              </Card>
            </ListItem>
          ))}
      </List>
    </div>
  );
};

export default Valuation;
