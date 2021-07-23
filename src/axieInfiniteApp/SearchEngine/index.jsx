import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import CircularProgress from "@material-ui/core/CircularProgress";

import { useSearchContext } from "../context/SearchContext";
import bodypartsMap from "../utils/calculateQuality/bodyPartsMap.json";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
const bodyParts = Object.values(bodypartsMap).map(({ partId }) => partId);
const axieClasses = ["Beast", "Bug", "Bird", "Plant", "Aquatic", "Reptile"];

const SearchEngine = ({ axieId }) => {
  const [idAxie, setIdAxie] = useState(axieId);
  const {
    pureness,
    setPureness,
    purenessRange,
    setPurenessRange,
    breed,
    setBreed,
    parts,
    setParts,
    axieClass,
    setAxieClass,
    onSearch,
    onFetchAxie,
    clearAll,
    isFetching,
  } = useSearchContext();

  useEffect(() => {
    if (axieId) {
      onFetchAxie(axieId);
    } else {
      clearAll();
    }
  }, []);

  return (
    <div style={{ maxWidth: "375px", padding: "15px" }}>
      <Typography id="discrete-slider" gutterBottom>
        Pureness: {pureness}
      </Typography>
      <Slider
        defaultValue={pureness}
        getAriaValueText={(value) => value}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        onChange={(_, newValue) => setPureness(newValue)}
        value={pureness}
        step={1}
        marks
        min={0}
        max={6}
      />
      <Typography id="range-slider" gutterBottom>
        Pureness range: {purenessRange[0]} - {purenessRange[1]}
      </Typography>
      <Slider
        value={purenessRange}
        onChange={(_, newValue) => setPurenessRange(newValue)}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={(value) => `${value}%`}
      />
      <Typography id="discrete-slider" gutterBottom>
        Breed: {breed[0]} - {breed[1]}
      </Typography>
      <Slider
        getAriaValueText={(value) => value}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        onChange={(_, newValue) => setBreed(newValue)}
        value={breed}
        step={1}
        marks
        min={0}
        max={7}
      />
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Class and parts</Typography>
        </AccordionSummary>
        <AccordionDetails style={{ display: "flex", flexDirection: "column" }}>
          <Autocomplete
            multiple
            id="checkboxes-tags-demo"
            options={bodyParts}
            value={parts}
            disableCloseOnSelect
            getOptionLabel={(part) => part}
            onChange={(_, values) => setParts([...values])}
            renderOption={(part, { selected }) => (
              <span>
                <Checkbox
                  icon={icon}
                  checkedIcon={checkedIcon}
                  style={{ marginRight: 8 }}
                  checked={selected}
                />
                {part}
              </span>
            )}
            style={{ marginTop: "10px" }}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="Parts"
                placeholder="Parts"
              />
            )}
          />
          <Autocomplete
            multiple
            id="checkboxes-tags-demo"
            options={axieClasses}
            value={axieClass}
            disableCloseOnSelect
            getOptionLabel={(part) => part}
            onChange={(_, values) => setAxieClass([...values])}
            renderOption={(classname, { selected }) => (
              <span>
                <Checkbox
                  icon={icon}
                  checkedIcon={checkedIcon}
                  style={{ marginRight: 8 }}
                  checked={selected}
                />
                {classname}
              </span>
            )}
            style={{ marginTop: "10px" }}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="Classes"
                placeholder="Classes"
              />
            )}
          />
        </AccordionDetails>
      </Accordion>
      <div style={{ marginTop: "10px", marginBottom: "10px" }}>
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
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => onFetchAxie(idAxie)}>
                  <Visibility />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </div>
      <Button
        onClick={onSearch}
        disabled={isFetching}
        variant="contained"
        color="primary"
      >
        {isFetching ? <CircularProgress /> : "Search"}
      </Button>
    </div>
  );
};

export default SearchEngine;
