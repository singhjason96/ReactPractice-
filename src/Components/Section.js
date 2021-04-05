import React, { useState } from "react";

import { TextField, makeStyles } from "@material-ui/core";

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

const Section = (props) => {
  const classes = useStyles();
  return (
    <>
      <h1>New Section</h1>
    </>
  );
};

export default Section;
