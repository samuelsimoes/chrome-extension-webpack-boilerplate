import React, { useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Typography from "@material-ui/core/Typography";
import ControlPointIcon from "@material-ui/icons/ControlPoint";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SwapHorizontalCircleIcon from "@material-ui/icons/SwapHorizontalCircle";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";

import Balance from "./Balance";
import useBalance from "./useBalance";
import AxieList from "./AxieList";
import AddById from "./AddById";
import useAxies, { AxieContext } from "./useAxies";
import StrategySteps from "./StrategySteps";
import useStrategy, { types } from "./useStrategy";
import useCalculateResult from "./useCalculateResult";
import useSaveInStorage from "./useSaveInStorage";

const useStyles = makeStyles(() => ({
  dialogContent: {
    height: "80vh",
    display: "flex",
    justifyContent: "space-between",
  },
  sideContainer: {
    width: "28%",
    height: "95%",
    border: "solid #b3b1b1 1px",
    borderRadius: "8px",
    padding: "8px",
    display: "flex",
    flexDirection: "column",
  },
  strategyContainer: {
    width: "60%",
    height: "95%",
    margin: "0 10px",
    borderRadius: "8px",
  },
  strategyBox: {
    height: "85%",
    border: "solid #b3b1b1 1px",
    borderRadius: "8px",
    padding: "8px",
    overflowY: "scroll",
  },
  strategyTools: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  /** Side section container */
  sideContent: {
    padding: "8px",
    marginBottom: "10px",
    height: "100%",
  },
  sideTitle: {
    borderBottom: "solid 1px grey",
    fontStyle: "italic",
  },
  switchRoot: {
    marginLeft: "10px",
  },
}));

const SideSection = ({ title, children, className }) => {
  const classes = useStyles();
  return (
    <div className={`${classes.sideContent} ${className}`}>
      <Typography
        className={classes.sideTitle}
        variant="subtitle1"
        gutterBottom
      >
        {title}
      </Typography>
      {children}
    </div>
  );
};

function App({ open, handleClose, rates }) {
  const { balances, updateBalance, setBalances } = useBalance();
  const { axies, addAxie, addAxieById, updateAxie, removeAxie, setAxies } =
    useAxies();
  const { steps, addStep, updateStep, reorderSteps, removeStep, setSteps } =
    useStrategy();

  const [initialAxies, setInitialAxies] = useState(true);
  const [initialBalances, setInitialBalances] = useState(true);

  useSaveInStorage([
    {
      name: "balances",
      state: balances,
      setter: setBalances,
    },
    {
      name: "axies",
      state: axies,
      setter: setAxies,
    },
    {
      name: "steps",
      state: steps,
      setter: setSteps,
    },
  ]);

  const { partials, result } = useCalculateResult({
    axies,
    steps,
    balances,
    rates,
  });

  const dummyListItem = useRef(null);
  const classes = useStyles();

  const scrollToBottomStrategy = () => {
    if (dummyListItem && dummyListItem.current)
      dummyListItem.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleAddStep = (type) => {
    addStep(type);
    setTimeout(scrollToBottomStrategy, 0);
  };

  return (
    <Dialog
      fullScreen
      maxWidth={"xl"}
      open={open}
      onClose={handleClose}
      aria-labelledby="max-width-dialog-title"
    >
      <DialogContent classes={{ root: classes.dialogContent }}>
        <AxieContext.Provider
          value={{ axies, addAxie, updateAxie, removeAxie }}
        >
          <div className={classes.sideContainer}>
            <SideSection
              title={
                <>
                  Currency Balance{" "}
                  <FormControlLabel
                    classes={{ root: classes.switchRoot }}
                    control={
                      <Switch
                        checked={initialBalances}
                        onChange={(e) => setInitialBalances(e.target.checked)}
                        name="checkedB"
                        color="primary"
                      />
                    }
                    label="Initial"
                  />
                </>
              }
            >
              <Balance
                balances={initialBalances ? balances : result.balances}
                updateBalance={updateBalance}
                disableEdit={!initialBalances}
                rates={rates}
              />
            </SideSection>
          </div>
          <div className={classes.strategyContainer}>
            <div className={classes.strategyBox}>
              <StrategySteps
                steps={steps}
                addStep={addStep}
                updateStep={updateStep}
                reorderSteps={reorderSteps}
                removeStep={removeStep}
                partials={partials}
                rates={rates}
              />
              <div ref={dummyListItem}></div>
            </div>
            <div className={classes.strategyTools}>
              <Tooltip title="Add Breed">
                <IconButton onClick={() => handleAddStep(types.BREED)}>
                  <FavoriteIcon fontSize="large" />
                </IconButton>
              </Tooltip>
              <Tooltip title="Sell axie">
                <IconButton onClick={() => handleAddStep(types.Sell)}>
                  <MonetizationOnIcon fontSize="large" />
                </IconButton>
              </Tooltip>
              <Tooltip title="Buy axie">
                <IconButton onClick={() => handleAddStep(types.BUY)}>
                  <ShoppingCartIcon fontSize="large" />
                </IconButton>
              </Tooltip>
              <Tooltip title="Swap tokens">
                <IconButton onClick={() => handleAddStep(types.SWAP)}>
                  <SwapHorizontalCircleIcon fontSize="large" />
                </IconButton>
              </Tooltip>
            </div>
            <div className={classes.strategyTools} onClick={handleClose}>
              <Button variant="outlined">Save and Close</Button>
            </div>
          </div>
          <div className={classes.sideContainer}>
            <SideSection
              title={
                <>
                  Axies
                  <IconButton size="small" onClick={addAxie}>
                    <ControlPointIcon fontSize="inherit" />
                  </IconButton>
                  <AddById handleSearch={addAxieById} />
                  <FormControlLabel
                    classes={{ root: classes.switchRoot }}
                    control={
                      <Switch
                        checked={initialAxies}
                        onChange={(e) => setInitialAxies(e.target.checked)}
                        name="checkedB"
                        color="primary"
                      />
                    }
                    label="Initial"
                  />
                </>
              }
              className={classes.axieSection}
            >
              <AxieList
                axies={initialAxies ? axies : result.axies}
                updateAxie={updateAxie}
                removeAxie={removeAxie}
                disableDelete={!initialAxies}
              />
            </SideSection>
          </div>
        </AxieContext.Provider>
      </DialogContent>
    </Dialog>
  );
}

export default App;
