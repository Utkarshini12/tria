import tr from "../assets/tr.svg";

import "../styles/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <img src={tr} className="p-2" alt="footer" />
      Powered by Tria
    </div>
  );
};

export default Footer;
