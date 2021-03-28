import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Minimal as MinimalLayout } from './layouts';

import {
  SignIn as SignInView,
	SignUp as SignUpView,	
	Verification as VerificationView,
  Forgot as ForgotView,
  ResetPassword as ResetPasswordView,
	Regulation as RegulationView,
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
        component={VerificationView}
        exact
        layout={MinimalLayout}
				title='Weryfikacja'
        path="/verification"
      />
			<RouteWithLayout
        component={SignUpView}
        exact
        layout={MinimalLayout}
				title='Zarejestruj się'
        path="/register"
      />
			<RouteWithLayout
        component={RegulationView}
        exact
        layout={MinimalLayout}
				title='Regulamin'
        path="/regulation"
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
