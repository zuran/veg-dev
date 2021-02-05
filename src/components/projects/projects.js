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

import { Link, Shop, YouTube, PictureAsPdf } from '@material-ui/icons';

const useStyles = makeStyles({
  container: {
    paddingTop: 64,
    paddingBottom: 48,
  },
  root: {
    maxWidth: 365,
    //minHeight: 300,
  },
  media: {
    height: 240,
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
      <AppBar position="fixed">
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
                  image="/images/projects/goth-and-found_screenshot.png"
                  title="Goth and Found"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Goth and Found
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    2021 Submission to the Global Game jam with a team from San
                    Diego.
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <Chip size="small" label="Arcade" />
                  <Chip size="small" label="Game Jam" />

                  <Grid container justify="flex-end">
                    <Grid item>
                      <Tooltip title="Watch Video" placement="left">
                        <IconButton
                          color="primary"
                          href="https://youtu.be/w5_P2gjf8to"
                          aria-label="watch video"
                          className={classes.viewWeb}
                        >
                          <YouTube />
                        </IconButton>
                      </Tooltip>
                    </Grid>
                    <Grid item>
                      <Tooltip title="Visit Site" placement="left">
                        <IconButton
                          color="primary"
                          href="https://globalgamejam.org/2021/games/goth-and-found-1"
                          aria-label="visit site"
                          className={classes.viewWeb}
                        >
                          <Link />
                        </IconButton>
                      </Tooltip>
                    </Grid>
                  </Grid>
                </CardActions>
              </CardActionArea>
            </Card>
          </Grid>

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
                      color="primary"
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
                  <Tooltip title="Watch Video" placement="left">
                    <IconButton
                      color="primary"
                      href="https://www.youtube.com/watch?v=sx8FtsRTZEY"
                      aria-label="watch video"
                      className={classes.viewWeb}
                    >
                      <YouTube />
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
                    to Space Pirate Trainer. I created this game as part of an
                    Unreal Game Development course that I'm contributing to.
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <Chip size="small" label="VR" />
                  <Tooltip title="Watch Video" placement="left">
                    <IconButton
                      color="primary"
                      href="https://www.youtube.com/watch?v=xNDPvKx1fyg"
                      aria-label="watch video"
                      className={classes.viewWeb}
                    >
                      <YouTube />
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
                  <Tooltip title="See App In Store" placement="left">
                    <IconButton
                      color="primary"
                      href="https://play.google.com/store/apps/details?id=org.memphisgamedev.avarus"
                      aria-label="see app in store"
                      className={classes.viewWeb}
                    >
                      <Shop />
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
