import bg from "/header-bg.jpg";
import footerBg from "/footerBG.jpg";
import "./Footer.css";
import FooterTop from "./FooterTop/FooterTop";
const Footer = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${footerBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <FooterTop></FooterTop>
      <div
        className="footer-area"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h3 className="text-center pt-4">
          Copyright Espresso Emporium ! All Rights Reserved
        </h3>
      </div>
    </div>
  );
};

export default Footer;
