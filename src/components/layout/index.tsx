import React from 'react';
import {
  Switch,
  Route,
} from 'react-router';
import UserTableScreen from '../../screens/usersTableScreen';
import AddUserScreen from '../../screens/addUserFormScreen';

const Layout = () => {
  return(
    <div>
      <Switch>
        <Route
          path='/'
          component={UserTableScreen}
          exact
        />
        <Route
          path='/new'
          component={AddUserScreen}
          exact
        />
      </Switch>
    </div>
  );
}

export default Layout;