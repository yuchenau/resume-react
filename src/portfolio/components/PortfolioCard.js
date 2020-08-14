import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 1000,
    marginBottom: 10,
  },
  media: {
    margin: 5,
  },
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
                </Grid>
            </Grid>
            
            
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary">
            Share
            </Button>
            <Button size="small" color="primary">
            Learn More
            </Button>
        </CardActions>
        </Card>
    );
}
