import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Navigation from './components/Navigation';
import { Paper, Container } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 1500,
  },
});

function App() {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
        <Paper elevation={3}>
          <Navigation />
        </Paper>
    </Container>
  );
}

export default App;
