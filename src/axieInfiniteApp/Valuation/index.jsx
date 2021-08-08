import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import useSholars from "../hooks/useSholars";

const value = {
  profile: {
    accountId: "431612",
    name: "R1707",
    addresses: {
      ethereum: "0x085ba2a7b12eaef8180423119fd99d14f5e2bc3c",
      tomo: null,
      loom: "0x229b2ced689ed15095dc30ca68287c1f5aae3baf",
      ronin: "0x76d640f8e297df54ac89801c713661931c2a0ab4",
      __typename: "NetAddresses",
    },
    __typename: "PublicProfile",
  },
  property: [],
  wallet: {
    eth: 0,
    axs: 0.25709063124197995,
    slp: 0,
  },
  gameProgress: {
    claimableSlp: 0,
    totalSlp: 0,
  },
};

const useStyles = makeStyles({
  container: {
    width: 300,
    height: 400,
    overflowY: "scroll",
  },
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Valuation = () => {
  const { scholars } = useSholars([
    "ronin:76d640f8e297df54ac89801c713661931c2a0ab4",
    "ronin:f2a2e4732ce73019ae6814990efcbdeda019aa2a",
    "ronin:2756b2ce1bac714148a7b66b6eb0a5f7f5ad9313",
    "ronin:60e64b03ce276cd1e18c1bf8e9bf171620fd27de",
    "ronin:6c0c98e8aad2693e74d807868823943648b25c81",
  ]);
  const classes = useStyles();

  return (
    <div>
      <div className={classes.container}>
        {scholars.map((s) => (
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2">
                {s.profile.name}
              </Typography>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                <Link
                  href={`https://marketplace.axieinfinity.com/profile/${s.profile.addresses.ronin.replace(
                    "0x",
                    "ronin:"
                  )}/axie`}
                  target="_blank"
                >
                  {s.profile.addresses.ronin.replace("0x", "ronin:")}
                </Link>
              </Typography>
              <Typography variant="body2" component="p">
                {s.property.filter(({ stage }) => stage === 4).length} Axies
              </Typography>
              <Typography variant="body2" component="p">
                {s.property.filter(({ stage }) => stage === 1).length} Eggs
              </Typography>
              <Typography variant="body2" component="p">
                {s.wallet.eth} ETH
              </Typography>
              <Typography variant="body2" component="p">
                {s.wallet.slp} SLP
              </Typography>
              <Typography variant="body2" component="p">
                {s.wallet.axs} AXS
              </Typography>
              <Typography variant="body2" component="p">
                {s.gameProgress.totalSlp} SLP
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Valuation;
