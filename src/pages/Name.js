import Cross from "../assets/close-circle.svg";
import Heart from "../assets/heart.svg";

import "../styles/name.css";
const Name = ({ setLogin }) => {
  return (
    <div className="login-box-name ">
      <p className="text-start name-title">Create your Tria name</p>

      <div className="input-container">
        <input type="text" value="kunaaal" disabled />
        <span className=" domain">@tria</span>
        <button className="next-button" onClick={() => setLogin("success")}>
          Next
        </button>
      </div>
      <div className="d-flex align-items-center">
        <img src={Cross} alt="cross" />
        <span className="error-message">Username not available</span>
      </div>

      <div>
        <div className="suggestions ">
          <p className="text-start pt-3 suggestion-text">Recommended:</p>
          <div className="d-flex pb-3">
            <span className="pill ">kunaaal123</span>
            <span className="pill ">kunaaal123</span>
            <span className="pill ">kunaaal123</span>
          </div>
        </div>
      </div>

      <div className="d-flex align-items-center info ">
        <img src={Heart} alt="heart" />
        <span className="note">
          {" "}
          Your <span className="highlight">@tria</span> is like Gmail, for Web3.
          Pay, receive and log-in to apps on any device, and blockchain.
        </span>
      </div>
    </div>
  );
};

export default Name;
