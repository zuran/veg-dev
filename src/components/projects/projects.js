import React from 'react';
import {
  AppBar,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';

import './projects.css';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    height: 300,
  },
  media: {
    height: 140,
  },
});

export default function Projects() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6">Projects</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar></Toolbar>
      <Container>
        <Grid container spacing={4}>
          <Grid item>
            <Card className={classes.root} raised={true}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="/images/projects/solar-system_screenshot.png"
                  title="Solar System Sim"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Solar System Sim
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    A solar system simulation using Three.js intended to show
                    relatively accurate planet positions and scale.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item>
            <Card className={classes.root} raised={true}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="/images/projects/gfds_screenshot.png"
                  title="Goblin Flower Delivery Service"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Goblin Flower Delivery Service
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    This was my Oculus Start Game Jam submission for the jam in
                    September. I collaborated with Kathryn Hicks and Devitt
                    Upkins.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item>
            <Card className={classes.root} raised={true}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="/images/projects/geodra_screenshot.png"
                  title="Geodra"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Geodra
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    An intense asteroid shooter/gem collector similar in style
                    to Space Pirate Trainer
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
