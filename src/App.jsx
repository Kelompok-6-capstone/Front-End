import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';

const App = () => (
  <Router>
    <AppRoutes />
  </Router>
);

export default App;