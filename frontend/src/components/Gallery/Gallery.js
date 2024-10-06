import React from 'react';
import PropTypes from 'prop-types';
import './Gallery.css';
import director from '../../assets/dir.jpg';
import producer from '../../assets/prod.jpg';
import crew from '../../assets/crew.jpg';
import team from '../../assets/team.jpg';
import camera from '../../assets/camera.jpg';
import stills from '../../assets/stills.jpg';

const Gallery = () => (
 <div className='gallery'>
   <img className="gallery-image-h" id="img1" src={director} alt="Director looking into camera"/>
   <img className="gallery-image-v" id="img2" src={producer} alt="Producer holding clapperboard"/>
   <img className="gallery-image-h" id="img3" src={crew} alt="Film crew looking at camera"/>
   <img className="gallery-image-v" id="img4" src={team} alt="Film team in top picture facing actors in bottom picture"/>
   <img className="gallery-image-h" id="img5" src={camera} alt="Shot from a camera"/>
   <img className="gallery-image-v" id="img6" src={stills} alt="Collage of stills from different angles"/>
 </div>
);

Gallery.propTypes = {};

Gallery.defaultProps = {};

export default Gallery;
