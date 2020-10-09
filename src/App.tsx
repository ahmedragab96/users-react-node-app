import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';
import Layout from './components/layout';

function App() {
  return (
    <BrowserRouter>
      <Route
        path='/'
        component={Layout}
      />
    </BrowserRouter>
  );
}

export default App;