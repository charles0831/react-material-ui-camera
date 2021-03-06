import React, { useState, useEffect } from 'react';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Button,
  Link,
  FormControlLabel,
  Checkbox,
  CircularProgress,
	Typography,
	Grid
} from '@material-ui/core';
import useStyles from './style';
// import auth from '../../apis/auth';
import storage from 'utils/storage';
import { useToasts } from 'react-toast-notifications';
import constants from '../../utils/constants';
import AppleIcon from '@material-ui/icons/Apple';
import FacebookIcon from '@material-ui/icons/Facebook';
import { GoogleLogin } from 'react-google-login';
// import FacebookLogin from 'react-facebook-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import AppleLogin from 'react-apple-login';
import { GoogleIcon } from 'assets/svg/icons';

const SignIn = props => {
  const { history } = props;

  const classes = useStyles();
  const { addToast } = useToasts()
  const [checkStatus, setCheckStatus] = useState(false);
  const [input, setInput] = useState({});
  const [error, setError] = useState({});
  const [progressStatus, setProgressStatus] = useState(false);
  const [tryLogin, setTryLogin] = useState(false);

  const handleChange = event => {
    let arr = JSON.parse(JSON.stringify(input));
    arr[event.target.name] = event.target.value;
    setInput(arr);
  };

  const handleRememberMe = event => {
    setCheckStatus(!checkStatus);
  };
  const handleSignIn = event => {
    setTryLogin(true);
    if ((error && ((error.email && error.email.length > 0) || (error.password && error.password.length > 0))) || !input.email || !input.password) {
      addToast(<label>{constants.CHECK_ALL_FIELDS}</label>, { appearance: 'error', autoDismissTimeout: 5000, autoDismiss: true })
    } else {
      setProgressStatus(true);
      if (checkStatus) {
        storage.setStorage('email', input.email);
        storage.setStorage('password', input.password);
      } else {
        storage.removeStorage('email');
        storage.removeStorage('password');
      }
      // auth
      //   .login(input.email, input.password)	
      //   .then(response => {
      //     if (response.code === 200) {
      //       setProgressStatus(false);
      //       addToast(<label>{response.message}</label>, { appearance: 'success', autoDismissTimeout: 1000, autoDismiss: true })
      //       setTimeout(function () { history.push('/cockpit'); }, 1000);

      //     } else {
      //       setProgressStatus(false);
      //       addToast(<label>{response.message}</label>, { appearance: 'error', autoDismissTimeout: 5000, autoDismiss: true })
      //     }
      //   })
    }
  };
  useEffect(() => {
    let arr = JSON.parse(JSON.stringify(input));
    if (storage.getStorage('email') && storage.getStorage('email').length > 0) {
      arr['email'] = storage.getStorage('email');
    }
    if (storage.getStorage('password') && storage.getStorage('password').length > 0) {
      arr['password'] = storage.getStorage('password');
    }
    setInput(arr);
  }, []);
  useEffect(() => {
    let arr = JSON.parse(JSON.stringify(error));
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    if (input["email"] && !pattern.test(input["email"])) {
      arr["email"] = constants.ENTER_VALID_EMAIL;
    } else {
      arr["email"] = "";
    }
    if (input["password"] && input["password"].length <= 5) {
      arr["password"] = constants.ENTER_PASSWORD;
    } else {
      arr["password"] = "";
    }

    setError(arr);
  }, [input]);

  const handleKeyPress = (event) => {
    if (event.charCode === 13) {
      handleSignIn();
    }
  }

	const responseGoogle = (response) => {
		console.log(response);
	}

	const responseFacebook = (response) => {
		console.log(response);
	}

	const responseApple = (response) => {
		console.log(response);
	}

  return (
    <>
      <div className={classes.root}>
				<div className={classes.headerContainer}>
					<Typography variant={"h2"} className={classes.welcome} color="primary">Witamy w aplikacji!</Typography>
					<Typography variant={"h2"} className={classes.createLogin} color="primary">Zaloguj si?? i tw??rz w??asne projekty</Typography>
				</div>
        <div className={classes.mainContainer}>
          <div className={classes.loginForm}>						
            <div>
              <div className={classes.input_box_label}><label for="email">E-mail/Login</label></div>
              <input className={classes.input_box} type="email" value={input.email} name="email" id="email" onChange={handleChange} onKeyPress={handleKeyPress} autocomplete='off' />
              <div className={classes.error_log}>{tryLogin && error["email"] && error["email"].length > 0 && error.email}</div>
              <div className={classes.input_box_label}><label htmlFor="password">Has??o</label></div>
              <input className={classes.input_box} type="password" value={input.password} label="password" name="password" id="password" onChange={handleChange} onKeyPress={handleKeyPress} />
              <div className={classes.error_log}>{tryLogin && error["password"] && error["password"].length > 0 && error.password}</div>
              <Link to="/forgotpassword" component={RouterLink} className={classes.btnForgot}>Zapomnia??em has??a</Link>
							<FormControlLabel
                className={classes.rememberMe}
                control={
                  <Checkbox
                    checked={checkStatus}
                    onChange={handleRememberMe}
                  />
                }
                label="Zapami??taj mnie"
              />
            </div>
            <div className={classes.buttonContainer}>							
              <Button variant="contained" color="secondary" className={classes.btnLogin} onClick={handleSignIn}>
								Zaloguj si??
              </Button>
              <Link to="/register" component={RouterLink} className={classes.btnRegister}>nie masz konta? zarejestrowa??!</Link>
            </div>
						<div className={classes.socialContainer}>
							<Typography className={classes.loginWithSocial} >Zaloguj si?? za pomoc??:</Typography>
							<GoogleLogin
								clientId={process.env.REACT_APP_GOOGLE_KEY}
								buttonText="Google"
								onSuccess={responseGoogle}
								onFailure={responseGoogle}
								cookiePolicy={'single_host_origin'}
								render={renderProps => (									
									<Grid container onClick={renderProps.onClick} disabled={renderProps.disabled} className={classes.btnGoogleLogin}>
										<Grid item xs={4}>
											<GoogleIcon/>
										</Grid>
										<Grid item xs={4}>
											Google
										</Grid>
									</Grid>
								)}
							/>
							<AppleLogin 
								clientId={process.env.REACT_APP_APPLE_KEY}
								redirectURI="https://redirectUrl.com"
								className={classes.btnAppleLogin}
								callback={responseApple}														
								render={renderProps => (																		
									<Grid container onClick={renderProps.onClick} disabled={renderProps.disabled} className={classes.btnAppleLogin}>
										<Grid item xs={4}>
											<AppleIcon/>
										</Grid>
										<Grid item xs={4}>
											Apple
										</Grid>
									</Grid>
								)}
							/>
							<FacebookLogin
								appId={process.env.REACT_APP_FACEBOOK_KEY}
								autoLoad={true}
								callback={responseFacebook}
								render={renderProps => (																		
									<Grid container onClick={renderProps.onClick} disabled={renderProps.disabled} className={classes.btnFacebookLogin}>
										<Grid item xs={4}>
											<FacebookIcon/>
										</Grid>
										<Grid item xs={4}>
											Facebook
										</Grid>
									</Grid>
								)}
							/>
						</div>
          </div>
        </div>
				<Typography variant={"h2"} className={classes.footer} >
					Przesy??aj??c ten formularz, zgadzasz si?? na <a href="https://" target="_blank" className={classes.linkColor}>Warunki korzystania z us??ugi</a>. Aby uzyska?? wi??cej informacji na temat polityki prywatno??ci w zakresie przetwarzania danych osobowych, kliknij tutaj: Polityka <a href="https://" target="_blank" className={classes.linkColor}>plik??w cookie</a> i <a href="https://" target="_blank" className={classes.linkColor}>Polityka prywatno??ci</a> lub skontaktuj si?? z nami pod adresem <a href="https://" target="_blank" className={classes.linkColor}>mail@mail.pl</a>.
				</Typography>					
      </div>
      {
        progressStatus ?
          <>
            <div className={classes.progressContainer}>
              <CircularProgress className={classes.progress} />
            </div>
          </>
          :
          <></>
      }
    </>
  );
};

SignIn.propTypes = {
  history: PropTypes.object
};

export default withRouter(SignIn);
