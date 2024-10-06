import React from 'react';
import PropTypes from 'prop-types';
import './WelcomeLanding.css';
import backgroundVideo from '../../assets/welcome-landing.mp4';

const WelcomeLanding = () => (
   <div className="welcome-landing">
      <video className="background-video" autoPlay loop muted>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="welcome">
         <p className="text-6">Connect</p>
         <p className="text-7">creatively</p>
         <button className="learn-more">
            <p className="text-8">LEARN MORE</p>
         </button>
      </div>
   </div>
);

WelcomeLanding.propTypes = {};

WelcomeLanding.defaultProps = {};

export default WelcomeLanding;