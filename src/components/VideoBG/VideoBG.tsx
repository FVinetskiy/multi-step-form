import React from 'react';
import './VideoBG.sass';
import video from '../../assets/bg.mp4';

const VideoBG:React.FC = () => {
  return (
    <div className="video-bg">
      <video autoPlay muted>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoBG;
