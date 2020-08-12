import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import EducationTimeline from "./components/EducationTimeline";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
  grid: {
    marginTop: 80,
  },
});

export default function Education(props) {
  const classes = useStyles();
  return (
    <div>
      <Grid className={classes.grid}>
        <EducationTimeline />
      </Grid>
    </div>
  );
}
