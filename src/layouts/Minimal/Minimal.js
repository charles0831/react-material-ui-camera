import React, { useState, useEffect }  from 'react';
import PropTypes from 'prop-types';
import { SiteInfoContextConsumer } from "App";
import { makeStyles, useTheme } from '@material-ui/styles';
import useStyles from './style';
import { Grid } from '@material-ui/core';
import { Topbar, Rightbar } from './components';

const Minimal = props => {
  const { children } = props;
  const theme = useTheme();
  const classes = useStyles(theme);
	
  return (
		<SiteInfoContextConsumer>
    { (props) => (
    <div className={classes.root}>
			<Topbar/>
      <Grid container spacing={0} className={classes.main}>
				<Grid item xs={12} sm={4} className={classes.sidebar}>          
        	<main className={classes.content}>{children}</main>
        </Grid>   
				<Grid item xs={12} sm={8}>
					<Rightbar />        
        	{/* <main className={classes.content}>{children}</main> */}
        </Grid>
      </Grid>
    </div>
		)}
    </SiteInfoContextConsumer>
  );
};

Minimal.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default Minimal;
