import React from 'react';
import {
  Switch,
  Route,
} from 'react-router';
import UserTableScreen from '../../screens/usersTableScreen';

const Layout = () => {
  return(
    <div>
      <Switch>
        <Route
          path='/'
          component={UserTableScreen}
        />
      </Switch>
    </div>
  );
}

export default Layout;