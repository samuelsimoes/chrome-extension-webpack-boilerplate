import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles(() => ({
  axieSection: {
    flex: "1",
    overflow: "hidden",
  },
  listRoot: {
    border: "solid 1px #e7d9d9",
    borderRadius: "2px",
    height: "90%",
    overflowY: "scroll",
  },
  breedContainer: {
    maxWidth: "20px",
    display: "inline-block",
  },
}));

export const Axie = ({
  id,
  name,
  srcIcon,
  breedCount,
  puresness,
  updateAxie,
  removeAxie,
  disableDelete,
}) => {
  const classes = useStyles();
  return (
    <React.Fragment key={id}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="" src={srcIcon} />
        </ListItemAvatar>
        <ListItemText
          primary={
            <TextField
              defaultValue={name}
              value={name}
              onChange={(e) => updateAxie(id, { name: e.target.value })}
              size="small"
              InputProps={{ disableUnderline: true }}
            />
          }
          secondary={
            <>
              Breed:{" "}
              <span className={classes.breedContainer}>
                <TextField
                  defaultValue={breedCount}
                  value={breedCount}
                  onChange={(e) =>
                    updateAxie(id, { breedCount: e.target.value })
                  }
                  size="small"
                  InputProps={{ disableUnderline: true }}
                />
              </span>
              -{" "}
              <span className={classes.breedContainer}>
                <TextField
                  fontSize="small"
                  defaultValue={puresness}
                  value={puresness}
                  onChange={(e) =>
                    updateAxie(id, { puresness: e.target.value })
                  }
                  size="small"
                  InputProps={{ disableUnderline: true }}
                />
              </span>
              %
            </>
          }
        />
        {!disableDelete && (
          <IconButton onClick={() => removeAxie(id)} size="small">
            <DeleteIcon fontSize="inherit" />
          </IconButton>
        )}
      </ListItem>
      <Divider component="li" />
    </React.Fragment>
  );
};

const AxieList = ({ axies, updateAxie, removeAxie, disableDelete }) => {
  const classes = useStyles();

  return (
    <List dense classes={{ root: classes.listRoot }}>
      {axies.map((props) => (
        <Axie
          updateAxie={updateAxie}
          removeAxie={removeAxie}
          disableDelete={disableDelete}
          {...props}
        />
      ))}
    </List>
  );
};

export default AxieList;
