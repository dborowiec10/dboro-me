import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './layouts/Main';
import Publications from './pages/Publications';
import Contact from './pages/Contact';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import Projects from './pages/Projects';
import Timeline from './pages/Timeline';
import Skills from './pages/Skills';

import './static/css/main.scss';

const { PUBLIC_URL } = process.env;

const App = () => (
  <BrowserRouter basename={PUBLIC_URL}>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/skills" element={<Skills />} />
        <Route element={<NotFound />} status={404} />
      </Routes>
  </BrowserRouter>
);

export default App;
