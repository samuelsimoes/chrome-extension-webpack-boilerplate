import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Draggable } from "react-smooth-dnd";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import DragHandleIcon from "@material-ui/icons/DragHandle";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

import Breed from "./Breed";
import Sell from "./Sell";
import Buy from "./Buy";
import { types } from "./useStrategy";
import Swap from "./Swap";

const useStyles = makeStyles({
  listItem: {
    border: "solid green 1px",
    borderRadius: "3px",
    marginBottom: "4px",
  },
  invalidListItem: {
    border: "solid red 1px",
    borderRadius: "3px",
  },
  listItemIcon: {
    minWidth: "0",
  },
});

const renderStepsByType = ({ type, ...rest }) => {
  switch (type) {
    case types.BREED:
      return <Breed {...rest} />;
    case types.Sell:
      return <Sell {...rest} />;
    case types.BUY:
      return <Buy {...rest} />;
    case types.SWAP:
      return <Swap {...rest} />;
    default:
      return <ListItemText primary={type} />;
  }
};

const StrategySteps = ({
  steps,
  addStep,
  updateStep,
  reorderSteps,
  removeStep,
  partials,
  rates,
}) => {
  const classes = useStyles();

  const isValidStep = (index) => partials[index].valid;

  return (
    <List>
      <Container
        dragHandleSelector=".drag-handle"
        lockAxis="y"
        onDrop={reorderSteps}
      >
        {steps.map(({ id, ...params }, index) => (
          <Draggable key={id}>
            <ListItem
              className={
                isValidStep(index + 1)
                  ? classes.listItem
                  : classes.invalidListItem
              }
            >
              <IconButton onClick={() => removeStep(id)} size="small">
                <DeleteIcon fontSize="inherit" />
              </IconButton>
              {renderStepsByType({ ...params, id, addStep, updateStep, rates })}
              <ListItemSecondaryAction>
                <ListItemIcon
                  classes={{ root: classes.listItemIcon }}
                  className="drag-handle"
                >
                  <DragHandleIcon />
                </ListItemIcon>
              </ListItemSecondaryAction>
            </ListItem>
          </Draggable>
        ))}
      </Container>
    </List>
  );
};

export default StrategySteps;
