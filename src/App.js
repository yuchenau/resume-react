import React from "react";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import Routes from "./routes/Routes";
import { Paper, Container, Grid } from "@material-ui/core";
import Sidebar from "./components/Sidebar";

const useStyles = makeStyles({
  root: {
    marginTop: 40,
  },
  paper: {
    height: 570,
  },
});

const Caption = styled.p`
  text-align: center;
  font-size: 12px;
  margin: 0;
`;

function App() {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Paper className={classes.paper} elevation={3}>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            {/* <Portrait /> */}
            <Sidebar />
            <Caption style={{ marginTop: 50 }}>
              © 2020 Copyright Reserved
            </Caption>
            <Caption>
              Designed by Yuchen{" "}
              <span role="img" aria-label="Eclipse">
                🌖
              </span>
            </Caption>
          </Grid>
          <Grid item xs={10}>
            <Routes />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default App;
