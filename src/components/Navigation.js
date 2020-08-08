import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Tabs, Tab } from '@material-ui/core';
import { Phone, Favorite, PersonPin } from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 500,
  },
});

export default function Navigation(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
        <Paper square elevation={0} className={classes.root}>
        <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            indicatorColor="primary"
            textColor="primary"
            aria-label="icon tabs example"
        >
            <Tab icon={<Phone />} aria-label="phone" />
            <Tab icon={<Favorite />} aria-label="favorite" />
            <Tab icon={<PersonPin />} aria-label="person" />
        </Tabs>
        </Paper>
  );
}
