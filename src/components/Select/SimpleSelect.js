import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginBottom: theme.spacing(3),
    minWidth: 120,
    float: "right",
  },
}));

const SimpleSelect = (props) => {
  const classes = useStyles();

  return (
    <div className="clearfix">
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-helper-label">
          Project type
        </InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={props.project}
          onChange={props.handleChange}
        >
          <MenuItem value={"featured"}>Featured projects</MenuItem>
          <MenuItem value={"all"}>All projects</MenuItem>
          <MenuItem value={"company"}>Company project</MenuItem>
          <MenuItem value={"personal"}>Personal project</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default SimpleSelect;
