import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, Avatar } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Signiture from '../images/Signature.png';
import Profile from '../images/IMG_9026.png';

const useStyles = makeStyles({
  grid: {
    marginTop: 80,
    marginBottom: 50,  
  },
  h1: {
    fontSize: 30,
    letterSpacing: 1.5,
    margin: 0,
  },
  h2: {
    fontSize: 14,
  },
  button: {
    marginRight: 10,
  },
  signiture: {
    marginTop: 30,
    marginBottom: 70,
    width: 300,
  },
  figure: {
    width: "70%",
    borderRadius: "50%",
  },
});

export default function Home(props) {
    const classes = useStyles();
    return (
        <div>
            <Grid className={classes.grid} container>
                <Grid item xs={5}>
                    <h1 className={classes.h1}>Hi, I'm Yuchen</h1>
                    <h2 className={classes.h2}>
                      I'm a Frontend Developer based on Brisbane, Australia.
                      My previous experience regarding Information Technology and Interaction Design help me to comprehend the user case from the perspective of both developer and designer :)
                    </h2>
                    <img className={classes.signiture} src={Signiture} />
                    <Button className={classes.button} variant="contained" color="primary" startIcon={<FacebookIcon/>}>Facebook</Button>
                    <Button className={classes.button} variant="contained" color="primary" startIcon={<GitHubIcon />}>GitHub</Button>
                    <Button className={classes.button} variant="contained" color="primary" startIcon={<LinkedInIcon />}>LinkedIn</Button>
                </Grid>
                <Grid item xs={7}>
                  <figure><img className={classes.figure} src={Profile}/></figure>
                </Grid>
            </Grid>
        </div>
    );
}
