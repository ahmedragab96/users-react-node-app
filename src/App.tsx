import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';
import Layout from './components/layout';
import { UsersProvider } from './contextProvider/usersProvider/userProvider';

function App() {
  return (
    <UsersProvider>
      <BrowserRouter>
        <Route
          path='/'
          component={Layout}
        />
      </BrowserRouter>
    </UsersProvider>
  );
}

export default App;