import React from 'react';
import {
  AppBar,
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Grid,
  IconButton,
  makeStyles,
  Toolbar,
  Tooltip,
  Typography,
} from '@material-ui/core';

import { Link } from '@material-ui/icons';

const useStyles = makeStyles({
  container: {
    background: '#e0f2f1',
  },
  root: {
    maxWidth: 365,
    //minHeight: 300,
  },
  media: {
    height: 200,
  },
  viewWeb: {
    marginLeft: 'auto',
  },
  grid: {
    paddingTop: 20,
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

      <Container className={classes.container}>
        <Grid container spacing={4} className={classes.grid}>
          <Grid item>
            <Card className={classes.root} raised={true}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="/images/projects/solar-system_screenshot.png"
                  title="Solar System Simulation"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Solar System Simulation
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
                <CardActions disableSpacing>
                  <Chip size="small" label="Three.js" />
                  <Chip size="small" label="VR" />
                  <Chip size="small" label="Mobile" />
                  <Tooltip title="Visit Site" placement="left">
                    <IconButton
                      href="https://veg.dev"
                      aria-label="visit site"
                      className={classes.viewWeb}
                    >
                      <Link />
                    </IconButton>
                  </Tooltip>
                </CardActions>
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
                <CardActions disableSpacing>
                  <Chip size="small" label="VR" />
                  <Chip size="small" label="Game Jam" />
                </CardActions>
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
                    to Space Pirate Trainer.
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <Chip size="small" label="VR" />
                </CardActions>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item>
            <Card className={classes.root} raised={true}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="/images/projects/taroternia_screenshot.png"
                  title="Taroternia"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Taroternia
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Created for Oculus Launch Pad 2019, Taroternia is a tarot
                    inspired journey of self reflection.
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <Chip size="small" label="VR" />
                </CardActions>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item>
            <Card className={classes.root} raised={true}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="/images/projects/avarus_screenshot.png"
                  title="Avarus"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Avarus
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    A time attack coin matching mobile game created with Justin
                    Palmer.
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <Chip size="small" label="Mobile" />
                  <Chip size="small" label="Game Jam" />
                  <Tooltip title="Visit Site" placement="left">
                    <IconButton
                      href="https://play.google.com/store/apps/details?id=org.memphisgamedev.avarus"
                      aria-label="visit site"
                      className={classes.viewWeb}
                    >
                      <Link />
                    </IconButton>
                  </Tooltip>
                </CardActions>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Toolbar></Toolbar>
    </React.Fragment>
  );
}
