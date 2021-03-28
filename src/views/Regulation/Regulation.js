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
import useStyles from './style';
// import auth from '../../apis/auth';
import storage from 'utils/storage';
import { useToasts } from 'react-toast-notifications';
import constants from '../../utils/constants';

const Regulation = props => {
  const { history } = props;
  const classes = useStyles();
	const [progressStatus, setProgressStatus] = useState(false);

  return (
    <>
      <div className={classes.root}>
				<div className={classes.headerContainer}>
					<Typography variant={"h2"} className={classes.regulation} color="primary">regulamin</Typography>
					<Typography variant={"h2"} className={classes.regulationTitle} color="primary">Podaj swoje dane i stwórz własny projekty!</Typography>
				</div>
				<Typography variant={"h2"} className={classes.footer} >
					Przesyłając ten formularz, zgadzasz się na <a href="https://" target="_blank" className={classes.linkColor}>Warunki korzystania z usługi</a>. Aby uzyskać więcej informacji na temat polityki prywatności w zakresie przetwarzania danych osobowych, kliknij tutaj: Polityka <a href="https://" target="_blank" className={classes.linkColor}>plików cookie</a> i <a href="https://" target="_blank" className={classes.linkColor}>Polityka prywatności</a> lub skontaktuj się z nami pod adresem <a href="https://" target="_blank" className={classes.linkColor}>mail@mail.pl</a>.
				</Typography>
				<Link to="/register" component={RouterLink} className={classes.btnBack}>Wstecz</Link>
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

Regulation.propTypes = {
  history: PropTypes.object
};

export default withRouter(Regulation);
