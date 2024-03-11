import { useState } from "react";
import Last from "./Last";
import Name from "./Name";

import LoginBox from "../components/LoginBox";
import Card from "../components/DemoCard";
import Footer from "../components/Footer";
import Back from "../assets/arrow-left.svg";

import "../styles/login.css";



const BackButton = ({ setLogin, target }) => {
  <button className="back-button" onClick={() => setLogin(target)}>
    <p>hello</p>
    <img src={Back} alt="back" />
  </button>;
};

const Login = () => {
  const [login, setLogin] = useState("login");

  return (
    <div className="login-card">
      <Card />
      {login === "login" && <LoginBox setLogin={setLogin} />}
      {login === "name" && <Name setLogin={setLogin} />}
      {login === "success" && <Last />}
      <Footer />
    </div>
  );
};

export default Login;
