import Logo from "../assets/logo.svg";

import "../styles/card.css";

const Card = () => {
  return (
    <div className="logoCard d-flex justify-content-center align-items-center">
      <div>
        <img src={Logo} alt="logo" />
        <p className="textColor">
          Login to <br /> <span className="fw-bold">tria</span> Demo
        </p>
      </div>
    </div>
  );
};

export default Card;
