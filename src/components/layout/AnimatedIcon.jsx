import React from "react";
import Lottie from "lottie-react";
import "../../styles/animatedicon/animatedicon.css";

const AnimatedIcon = ({ icon }) => {
  return (
    // <div className="animation">
      <div className="animated_icon">
        <Lottie loop animationData={icon} />;
      </div>
    // </div>
  );
};

export default AnimatedIcon;
