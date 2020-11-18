import React from 'react';
import {
  AppBar,
  Box,
  Divider,
  IconButton,
  Toolbar,
  Typography,
  Container,
  List,
  ListItem,
  ListItemIcon,
  Grid,
} from '@material-ui/core';

import { LinkedIn, GitHub, Twitter } from '@material-ui/icons';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <React.Fragment>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6">Contact</Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Grid container justify="center" spacing={3}>
          <Grid item>
            <IconButton
              aria-label="LinkedIn"
              href="https://www.linkedin.com/in/stephen-young-20107534/"
            >
              <LinkedIn fontSize="large" />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton aria-label="GitHub" href="https://github.com/zuran">
              <GitHub fontSize="large" />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              aria-label="Twitter"
              href="https://twitter.com/limitlessprana"
            >
              <Twitter fontSize="large" />
            </IconButton>
          </Grid>
        </Grid>
        <Divider />
      </Container>
    </React.Fragment>
  );
}
