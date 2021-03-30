import React, { useState } from "react";
import "./Header.css";
import { TextField, makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
      backgroundColor: "red",
    },
  },
  textFieldStyle: {
    color: "white",
  },
}));

const Header = (props) => {
  const classes = useStyles();
  let history = useHistory();

  function nextComponent() {
    return history.push("/section");
  }
  return (
    <>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField
            error
            id="standard-error"
            label="Error"
            defaultValue="Hello World"
            className={classes.textFieldStyle}
          />
          <TextField
            error
            id="standard-error-helper-text"
            label="Error"
            defaultValue="Hello World"
            helperText="Incorrect entry."
          />
        </div>
      </form>
      <button onClick={nextComponent}>Go To Next Component</button>
    </>
  );
};

export default Header;
