import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Minimal as MinimalLayout } from './layouts';

import {
  SignIn as SignInView,
  Forgot as ForgotView,
  ResetPassword as ResetPasswordView,
  NotFound as NotFoundView
} from './views';

const Routes = (props) => {
  return (
    <Switch>
      <Redirect exact from="/" to="/login"/>
      <RouteWithLayout
        component={SignInView}
        exact
        layout={MinimalLayout}
				title='Zaloguj się'
        path="/login"
      />
      <RouteWithLayout
        component={ForgotView}
        exact
        layout={MinimalLayout}
				title='Odzyskaj hasło'
        path="/forgotpassword"
      />
      <RouteWithLayout
        component={ResetPasswordView}
        exact
        layout={MinimalLayout}
				title='Zresetuj hasło'
        path="/reset_password"
      />
      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MinimalLayout}
				title='Nie znaleziono'
        path="/not-found"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
