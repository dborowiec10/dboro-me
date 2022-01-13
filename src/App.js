import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './layouts/Main'; // fallback for lazy pages
import Publications from './pages/Publications';
import './static/css/main.scss'; // All of our styles

const { PUBLIC_URL } = process.env;

// Every route - we lazy load so that each page can be chunked
// NOTE that some of these chunks are very small. We should optimize
// which pages are lazy loaded in the future.
const Contact = lazy(() => import('./pages/Contact'));
const Index = lazy(() => import('./pages/Index'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Projects = lazy(() => import('./pages/Projects'));
const Timeline = lazy(() => import('./pages/Timeline'));
const Skills = lazy(() => import('./pages/Skills'));

const App = () => (
  <BrowserRouter basename={PUBLIC_URL}>
    <Suspense fallback={<Main />}>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/projects" component={Projects} />
        <Route path="/publications" component={Publications} />
        <Route path="/contact" component={Contact} />
        <Route path="/timeline" component={Timeline} />
        <Route path="/skills" component={Skills} />
        <Route component={NotFound} status={404} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default App;
