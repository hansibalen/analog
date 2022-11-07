import React from 'react';
import { createRoot } from 'react-dom/client';
import Application from './Application';
import { BrowserRouter as Router } from 'react-router-dom';

// Application to Render
const app = (
  <Router>
    <Application />
  </Router>
);

// Render application in DOM
createRoot(document.getElementById('app')).render(app);
