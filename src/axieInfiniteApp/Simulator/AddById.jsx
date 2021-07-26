import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import FingerprintIcon from "@material-ui/icons/Fingerprint";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";

export default function SimplePopover({ handleSearch }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [axieId, setAxieId] = useState("");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onSearch = () => {
    handleSearch(axieId);
    setAxieId("");
    handleClose();
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <IconButton
        aria-describedby={id}
        variant="contained"
        color="primary"
        onClick={handleClick}
        size="small"
      >
        <FingerprintIcon size="small" />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <div
          style={{ marginTop: "10px", marginBottom: "10px", padding: "20px" }}
        >
          <TextField
            variant="outlined"
            fullWidth
            label="Axie ID"
            autoComplete="off"
            autoComplete={false}
            value={axieId}
            onChange={(e) => setAxieId(e.target.value)}
            inputProps={{
              style: { textAlign: "center" },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={onSearch}>
                    <Visibility />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>
      </Popover>
    </>
  );
}
