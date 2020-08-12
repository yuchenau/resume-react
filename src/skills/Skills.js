import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import { Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  grid: {
    marginTop: 80,
  },
  h2: {
    fontSize: 15,
  },
});

const Icon = styled.img`
  width: 50px;
  margin: 7px;
`;

export default function Skills(props) {
  const classes = useStyles();
  return (
    <div>
      <Grid className={classes.grid}>
        <Grid>
          <Typography className={classes.h2}>
            Fullstack Frontend Technologies
          </Typography>
          <Icon src="https://img.icons8.com/color/96/000000/html-5.png" />
          <Icon src="https://img.icons8.com/color/96/000000/css3.png" />
          <Icon src="https://img.icons8.com/color/96/000000/sass.png" />
          <Icon src="https://img.icons8.com/color/96/000000/javascript.png" />
          <Icon src="https://img.icons8.com/color/96/000000/typescript.png" />
          <Icon src="https://img.icons8.com/color/96/000000/react-native.png" />
          <Icon src="https://img.icons8.com/color/96/000000/redux.png" />
          <Icon src="https://img.icons8.com/color/48/000000/material-ui.png" />
        </Grid>
        <Grid>
          <Typography className={classes.h2}>
            Fullstack Backend Technology
          </Typography>
          <Icon src="https://img.icons8.com/material-rounded/96/000000/api-settings.png" />
          <Icon src="https://img.icons8.com/color/96/000000/nodejs.png" />
          <Icon src="https://img.icons8.com/ios-filled/100/000000/mysql-logo.png" />
          <Icon src="https://img.icons8.com/color/96/000000/mongodb.png" />
        </Grid>
        <Grid>
          <Typography className={classes.h2}>Programming Languages</Typography>
          <Icon src="https://img.icons8.com/color/96/000000/python.png" />
          <Icon src="https://img.icons8.com/color/96/000000/java-coffee-cup-logo.png" />
        </Grid>
        <Grid>
          <Typography className={classes.h2}>
            Collaboration Technology
          </Typography>
        </Grid>

        <Icon src="https://img.icons8.com/material-sharp/96/000000/github.png" />
        <Icon src="https://img.icons8.com/color/96/000000/npm.png" />
        <Icon src="https://img.icons8.com/color/96/000000/amazon-web-services.png" />
        <Icon src="https://img.icons8.com/fluent/96/000000/visual-studio-code-2019.png" />
        <Icon src="https://img.icons8.com/color/96/000000/pycharm.png" />
        <Icon src="https://img.icons8.com/color/96/000000/intellij-idea.png" />
      </Grid>
    </div>
  );
}
