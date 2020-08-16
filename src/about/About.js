import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
  grid: {
    marginTop: 80,
  },
  h1: {
    fontSize: 30,
    letterSpacing: 1.5,
    margin: 0,
  },
  h2: {
    fontSize: 15,
    margin: 0,
  },
});

export default function About(props) {
  const classes = useStyles();
  return (
    <div>
      <Grid className={classes.grid} container>
        <h1 className={classes.h1}>This is About Page.</h1>
      </Grid>
    </div>
  );
}
