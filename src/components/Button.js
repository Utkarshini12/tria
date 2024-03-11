import { useState } from "react";

import "../styles/button.css";

const Button = ({ text, image, width, backgroundColor, position }) => {
  const [isHovered, setIsHovered] = useState(false);

  const customStyle = {
    width: width,
    backgroundColor: isHovered ? "#785cff" : backgroundColor,
  };

  return (
    <div
      className="btn-color"
      style={customStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={position}>
        <img src={image} alt="" />
        <span className="ps-2">{text}</span>
      </div>
    </div>
  );
};

export default Button;
