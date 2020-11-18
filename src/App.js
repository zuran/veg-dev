import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from 'react-router-dom';
import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  Toolbar,
  Typography,
  Container,
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core';
import { AccountTree, Home, Person } from '@material-ui/icons';

import ProjectsRoute from './routes/projects';

import Contact from './components/contact/contact.js';
import About from './components/about/about.js';

export default function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#00695c',
      },
    },
  });

  const [value, setValue] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <Switch>
            <Route path="/about">
              <Contact />
            </Route>
            <Route path="/topics">
              <ProjectsRoute />
            </Route>
            <Route path="/">
              <About />
            </Route>
          </Switch>

          <AppBar
            position="fixed"
            color="primary"
            style={{ top: 'auto', bottom: 0 }}
          >
            <BottomNavigation
              value={value || 'home'}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              showLabels
            >
              <BottomNavigationAction
                label="Home"
                value="home"
                component={Link}
                to="/"
                icon={<Home />}
              />
              <BottomNavigationAction
                label="Projects"
                value="projects"
                component={Link}
                to="/topics"
                icon={<AccountTree />}
              />
              <BottomNavigationAction
                label="Contact"
                value="contact"
                component={Link}
                to="/about"
                icon={<Person />}
              />
            </BottomNavigation>
          </AppBar>
        </div>
      </Router>
    </ThemeProvider>
  );
}

function Home2() {
  return (
    <React.Fragment>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6">Stephen Young</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar></Toolbar>
      <Container>Nothing to see yet</Container>
    </React.Fragment>
  );
}

function About2() {
  return (
    <React.Fragment>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6">Contact</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar></Toolbar>
      <Container>Nothing to see yet</Container>
    </React.Fragment>
  );
}

function Topics() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}
