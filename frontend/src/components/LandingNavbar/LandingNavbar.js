import React from 'react';
import PropTypes from 'prop-types';
import './LandingNavbar.css';
import logo from '../../assets/logo.png';

const LandingNavbar = () => (

   <div className="navbar">
      <img className="logo" src={logo} alt="Reely logo"/>
      <p className="text-3">reely</p>
      <p className="text-2">about</p>
      <p className="text-1">sign in</p>
    </div>

);

LandingNavbar.propTypes = {};

LandingNavbar.defaultProps = {};

export default LandingNavbar;
