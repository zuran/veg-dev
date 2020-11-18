import React from 'react';

import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Paper,
  makeStyles,
} from '@material-ui/core';

import {
  Timeline,
  TimelineItem,
  TimelineContent,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
} from '@material-ui/lab';

import { Devices, School, SportsEsports } from '@material-ui/icons';

const useStyles = makeStyles({
  container: {},
  paper: {
    padding: '6px 16px',
  },
});

export default function About() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6">Stephen Young</Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.container}>
        <Timeline align="alternate">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot>
                <Devices />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                  Enterprise Web and Mobile
                </Typography>
                <Typography>7 years</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot>
                <School />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                  Computer Science Educator
                </Typography>
                <Typography>3 years</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot>
                <SportsEsports />
              </TimelineDot>
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                  Virtual Reality Research
                </Typography>
                <Typography>Present</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Container>
    </React.Fragment>
  );
}
