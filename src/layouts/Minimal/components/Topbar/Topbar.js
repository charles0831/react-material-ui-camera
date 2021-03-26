import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Button, Divider, Grid } from '@material-ui/core';
import { HelpIcon, ContactIcon, LogoIcon } from 'assets/svg/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: 'none',
		background: theme.palette.topbar_background,
		color: 'white',
		height: theme.spacing(10),		
		justifyContent: 'center',
  },
	toolBar: {
		display: 'flex',
		justifyContent: 'space-between'
	},
	logoButton: {
		width: '50px',
		height: '50px'
	}
}));

const Topbar = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
      color="primary"
      position="fixed"
    >
      <Toolbar className={classes.toolBar}>
        <RouterLink to="/">
					<Button						
						startIcon={<LogoIcon className={classes.logoButton}/>}
					>
					</Button>
        </RouterLink>
				<div>
					<Grid container alignItems="center">
						<Divider className={classes.divider} orientation="vertical" flexItem />
						<Button
							className={classes.button}
							startIcon={<HelpIcon/>}
						>
							Jak to działa
						</Button>
						<Divider orientation="vertical" flexItem />
						<Button
							className={classes.button}
							startIcon={<ContactIcon/>}
						>
							Kontakt
						</Button>
					</Grid>
			</div>
      </Toolbar>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string
};

export default Topbar;
