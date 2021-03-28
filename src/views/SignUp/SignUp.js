import React, { useState, useEffect } from 'react';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Button,
  Link,
  FormControlLabel,
  Checkbox,
  CircularProgress,
	Typography
} from '@material-ui/core';
import { SingleSelect } from './components';
import useStyles from './style';
// import auth from '../../apis/auth';
import storage from 'utils/storage';
import { useToasts } from 'react-toast-notifications';
import constants from '../../utils/constants';

const SignUp = props => {	
  const { history } = props;

  const classes = useStyles();
  const { addToast } = useToasts()
  const [input, setInput] = useState({});
  const [error, setError] = useState({});
  const [progressStatus, setProgressStatus] = useState(false);
	const [checkRegulationStatus, setCheckRegulationStatus] = useState(false);
	const [checkAgreeStatus, setCheckAgreeStatus] = useState(false);
	const [checkDisagreeStatus, setCheckDisagreeStatus] = useState(false);
  const [tryLogin, setTryLogin] = useState(false);
	const [selectedCountry, setSelectedCountry] = useState();
	const [countryList, setCountryList] = useState([
		{ id: '1', name: 'Andorra'},
		{ id: '2', name: 'Albania'},
		{ id: '3', name: 'Belarus'},
		{ id: '4', name: 'Dominica'}		
	]);

  const handleChange = event => {
    let arr = JSON.parse(JSON.stringify(input));
    arr[event.target.name] = event.target.value;
    setInput(arr);
  };

  const handleSignUp = event => {
    setTryLogin(true);
    if ((error && ((error.email && error.email.length > 0) || (error.password && error.password.length > 0))) || !input.email || !input.password) {
      addToast(<label>{constants.CHECK_ALL_FIELDS}</label>, { appearance: 'error', autoDismissTimeout: 5000, autoDismiss: true })
    } else {
      setProgressStatus(true);      
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

	const handleAcceptRegulation = event => {
    setCheckRegulationStatus(!checkRegulationStatus);
  };

	const handleAgreePreference = event => {
    setCheckAgreeStatus(!checkAgreeStatus);
  };

	const handleDisagreePreference = event => {
    setCheckDisagreeStatus(!checkDisagreeStatus);
  };

	const handleBack = () => {
		history.push('/login');
	}

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
      handleSignUp();
    }
  }

  return (
    <>
      <div className={classes.root}>
				<div className={classes.headerContainer}>
					<Typography variant={"h2"} className={classes.register} color="primary">Zarejestruj się</Typography>
					<Typography variant={"h2"} className={classes.registerTitle} color="primary">Podaj swoje dane i stwórz własny projekty!</Typography>
				</div>
        <div className={classes.mainContainer}>
          <div className={classes.loginForm}>				
            <div>
							<div className={classes.input_box_label}><label for="email">E-mail/Login</label></div>
              <input className={classes.input_box} type="email" value={input.email} name="email" id="email" onChange={handleChange} onKeyPress={handleKeyPress} autocomplete='off' />
              <div className={classes.error_log}>{tryLogin && error["email"] && error["email"].length > 0 && error.email}</div>

							<div className={classes.input_box_label}><label htmlFor="password">Hasło</label></div>
              <input className={classes.input_box} type="password" value={input.password} label="password" name="password" id="password" onChange={handleChange} onKeyPress={handleKeyPress} />
              <div className={classes.error_log}>{tryLogin && error["password"] && error["password"].length > 0 && error.password}</div>

							<div className={classes.input_box_label}><label htmlFor="confirmPassword">Potwierdzam hasło</label></div>
              <input className={classes.input_box} type="password" value={input.confirmPassword} label="confirmPassword" name="confirmPassword" id="confirmPassword" onChange={handleChange} onKeyPress={handleKeyPress} />
              <div className={classes.error_log}>{tryLogin && error["confirmPassword"] && error["confirmPassword"].length > 0 && error.confirmPassword}</div>
              
							<div className={classes.input_box_label}><label for="firstName">Imię</label></div>
              <input className={classes.input_box} type="text" value={input.firstName} name="firstName" id="firstName" onChange={handleChange} onKeyPress={handleKeyPress} autocomplete='off' />
              <div className={classes.error_log}>{tryLogin && error["firstName"] && error["firstName"].length > 0 && error.firstName}</div>

							<div className={classes.input_box_label}><label for="lastName">Imię</label></div>
              <input className={classes.input_box} type="text" value={input.lastName} name="lastName" id="lastName" onChange={handleChange} onKeyPress={handleKeyPress} autocomplete='off' />
              <div className={classes.error_log}>{tryLogin && error["lastName"] && error["lastName"].length > 0 && error.lastName}</div>


							<div className={classes.input_box_label}><label for="region">Kraj/Region</label></div>
							<SingleSelect value={selectedCountry} handleChange={setSelectedCountry} list={countryList} />
              {/* <input className={classes.input_box} type="text" value={input.region} name="region" id="region" onChange={handleChange} onKeyPress={handleKeyPress} autocomplete='off' /> */}
              <div className={classes.error_log}>{tryLogin && error["region"] && error["region"].length > 0 && error.region}</div>
            </div>
          </div>
        </div>
				<div>
					<Typography variant={"h2"} className={classes.preferenceTitle} >
						Preferencje komunikacji marketingowej
					</Typography>
					<Typography variant={"h2"} className={classes.preferenceDescription} >
						Od czasu do czasu możemy kontaktować się z Tobą w sprawie naszych produktów i usług, a także innych treści, które mogą Cię zainteresować
					</Typography>
					<div className={classes.preferenceContainer}>
						<FormControlLabel
							className={classes.acceptRegulation}
							control={
								<Checkbox
									checked={checkAgreeStatus}
									onChange={handleAgreePreference}
								/>
							}
							label="TAK"
						/>
						<FormControlLabel
							className={classes.acceptRegulation}
							control={
								<Checkbox
									checked={checkDisagreeStatus}
									onChange={handleDisagreePreference}
								/>
							}
							label="NIE"
						/>	
					</div>
				</div>
				<Typography variant={"h2"} className={classes.footer} >
					Przesyłając ten formularz, zgadzasz się na <a href="https://" target="_blank" className={classes.linkColor}>Warunki korzystania z usługi</a>. Aby uzyskać więcej informacji na temat polityki prywatności w zakresie przetwarzania danych osobowych, kliknij tutaj: Polityka <a href="https://" target="_blank" className={classes.linkColor}>plików cookie</a> i <a href="https://" target="_blank" className={classes.linkColor}>Polityka prywatności</a> lub skontaktuj się z nami pod adresem <a href="https://" target="_blank" className={classes.linkColor}>mail@mail.pl</a>.
				</Typography>
				<div className={classes.regulationContainer}>
					<FormControlLabel
						className={classes.acceptRegulation}
						control={
							<Checkbox
								checked={checkRegulationStatus}
								onChange={handleAcceptRegulation}
							/>
						}
						label="Zaakceptuj"
					/>
					<Link to="/regulation" component={RouterLink} className={classes.btnRegulation}>Regulamin</Link>
				</div>
				<div className={classes.buttonContainer}>
					<Button variant="contained" color="secondary" className={classes.btnBack} onClick={handleBack}>
						Wstecz
					</Button>
					<Button variant="contained" color="secondary" className={classes.btnSignUp} onClick={handleSignUp}>
						Utwórz konto
					</Button>
				</div>				
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

SignUp.propTypes = {
  history: PropTypes.object
};

export default withRouter(SignUp);
