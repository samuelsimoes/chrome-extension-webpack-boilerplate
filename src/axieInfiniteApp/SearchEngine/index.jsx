import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
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

import bodypartsMap from "../utils/calculateQuality/bodyPartsMap.json";
import fetchMarketplace from "../utils/fetchMarketplace";
import SearchResult from "./SearchResult";

const queryMarket = async ({
  pureness,
  purenessRange,
  breed,
  parts,
  axieClass,
  callback,
}) => {
  const axies = await fetchMarketplace({
    parts,
    pureness,
    classes: axieClass,
    breed,
  });

  const filterAxies = axies.filter(
    ({ quality }) => quality >= purenessRange[0] && quality <= purenessRange[1]
  );

  callback(filterAxies);
};

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
const bodyParts = Object.values(bodypartsMap).map(({ partId }) => partId);
const axieClasses = ["Beast", "Bug", "Bird", "Plant", "Aquatic", "Reptile"];

const SearchEngine = () => {
  const [pureness, setPureness] = useState(6);
  const [purenessRange, setPurenessRange] = useState([0, 100]);
  const [breed, setBreed] = useState([0, 7]);
  const [parts, setParts] = useState([]);
  const [axieClass, setAxieClass] = useState([]);
  const [axieMarket, setAxieMarket] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const handlePureness = (event, newValue) => {
    setPureness(newValue);
  };

  const handleChangeRange = (event, newValue) => {
    setPurenessRange(newValue);
  };

  const handleBreed = (event, newValue) => {
    setBreed(newValue);
  };

  const handleOpen = (axies) => {
    setAxieMarket(axies);
    setIsOpen(true);
  };

  const onSearch = () =>
    queryMarket({
      pureness,
      purenessRange,
      breed,
      parts,
      axieClass,
      callback: handleOpen,
    });

  return (
    <div style={{ width: "100%" }}>
      <Typography id="discrete-slider" gutterBottom>
        Pureness: {pureness}
      </Typography>
      <Slider
        defaultValue={pureness}
        getAriaValueText={(value) => value}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        onChange={handlePureness}
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
        onChange={handleChangeRange}
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
        onChange={handleBreed}
        value={breed}
        step={1}
        marks
        min={0}
        max={7}
      />
      <Accordion>
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
      <Button onClick={onSearch} variant="contained" color="primary">
        Search
      </Button>
      <SearchResult
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        axieMarket={axieMarket}
        onRefresh={onSearch}
      />
    </div>
  );
};

export default SearchEngine;
