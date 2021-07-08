import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
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

import bodypartsMap from "./utils/calculateQuality/bodyPartsMap.json";
import sendRestore from "../utils/commonContentEvents";
import fetchMarketplace from "./utils/fetchMarketplace";
import styles from "./styles.module.css";

const queryMarket = async ({
  pureness,
  purenessRange,
  breed,
  parts,
  axieClass,
}) => {
  [...document.querySelector("body").children].forEach((elem) => {
    if (elem.id !== "entry-point") {
      elem.remove();
    }
  });

  const axies = await fetchMarketplace({
    parts,
    pureness: [pureness],
    classes: axieClass,
    breed,
  });

  axies
    .filter(
      ({ quality }) =>
        quality >= purenessRange[0] && quality <= purenessRange[1]
    )
    .forEach(({ id, usdPrice, quality }) => {
      const row = `<strong>${usdPrice} USD - <a href='https://marketplace.axieinfinity.com/axie/${id}'>${id}</a></strong> - ${quality}%`;
      const p = document.createElement("p");
      p.innerHTML = row;
      document.body.append(p);
    });
};

const useStyles = makeStyles({
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

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
const bodyParts = Object.values(bodypartsMap).map(({ partId }) => partId);
const axieClasses = ["Beast", "Bug", "Bird", "Plant", "Aquatic", "Reptile"];

const AxiesInfinityApp = () => {
  const [pureness, setPureness] = useState(6);
  const [purenessRange, setPurenessRange] = useState([0, 100]);
  const [breed, setBreed] = useState(0);
  const [parts, setParts] = useState([]);
  const [axieClass, setAxieClass] = useState([]);
  const classes = useStyles();

  const handlePureness = (event, newValue) => {
    setPureness(newValue);
  };

  const handleChangeRange = (event, newValue) => {
    setPurenessRange(newValue);
  };

  const handleBreed = (event, newValue) => {
    setBreed(newValue);
  };

  const handlePart = (newPart) => {
    setParts((prev) => [...prev, newPart]);
  };

  const handleAxieClass = (newPart) => {
    setAxieClass((prev) =>
      prev.includes(newPart) ? prev.filter(p !== newPart) : [...prev, newPart]
    );
  };

  const onSearch = () =>
    queryMarket({
      pureness,
      purenessRange,
      breed,
      parts,
      axieClass,
    });

  return (
    <div className={styles.buttonsContainer}>
      <Card className={classes.root}>
        <CardContent>
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
            Breed: {breed}
          </Typography>
          <Slider
            defaultValue={breed}
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
            <AccordionDetails
              style={{ display: "flex", flexDirection: "column" }}
            >
              <Autocomplete
                multiple
                id="checkboxes-tags-demo"
                options={bodyParts}
                disableCloseOnSelect
                getOptionLabel={(part) => part}
                renderOption={(part, { selected }) => (
                  <span onClick={() => handlePart(part)}>
                    <Checkbox
                      icon={icon}
                      checkedIcon={checkedIcon}
                      style={{ marginRight: 8 }}
                      checked={selected}
                      onChange={() => handlePart(part)}
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
                renderOption={(classname, { selected }) => (
                  <span onClick={() => handleAxieClass(classname)}>
                    <Checkbox
                      icon={icon}
                      checkedIcon={checkedIcon}
                      style={{ marginRight: 8 }}
                      checked={selected}
                      onChange={() => handleAxieClass(classname)}
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
        </CardContent>
        <CardActions>
          <Button onClick={onSearch} variant="contained" color="primary">
            Search
          </Button>
          <Button onClick={sendRestore} variant="outlined" color="secondary">
            Reload
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default AxiesInfinityApp;
