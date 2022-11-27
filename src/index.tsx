import React from 'react';
import { createRoot } from 'react-dom/client';
import Application from './Application';
import { BrowserRouter as Router } from 'react-router-dom';

const app = (
  <Router>
    <Application />
  </Router>
);

createRoot(document.getElementById('app')).render(app);
