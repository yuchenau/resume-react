import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Grid, Button } from '@material-ui/core';
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles({
  root: {
    maxWidth: 1000,
    marginBottom: 10,
  },
  media: {
    margin: 5,
  },
  button: {
    marginLeft: 20,
  }
});

export default function PortfolioCard(props) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
        <CardActionArea>
            <Grid container>
                <Grid item xs={5}>
                    <CardMedia
                    component="img"
                    className={classes.media}
                    src={props.image}
                    alt="project image"
                    />
                </Grid>
                <Grid item xs={7}>
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.introduction}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.functions}
                    </Typography>
                    {props.icons}
                    </CardContent>
                    <Button className={classes.button} variant="contained" color="default" startIcon={<GitHubIcon/>}>
                        View Source Code
                    </Button>
                </Grid>
            </Grid>
        </CardActionArea>
        </Card>
    );
}
