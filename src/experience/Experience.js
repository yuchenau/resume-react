import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import ExperienceTimeline from "./components/ExperienceTimeline";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
  grid: {
    marginTop: 80,
  },
});

export default function Experience(props) {
    const classes = useStyles();
    return (
        <div>
            <Grid className={classes.grid}>
                <ExperienceTimeline />
            </Grid>
        </div>
    );
}
