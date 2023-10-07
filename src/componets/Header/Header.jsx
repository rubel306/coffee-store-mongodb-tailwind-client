import bg from "/header-bg.jpg";
import logo from "/logo.png";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <div
        className="header-area"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <img src={logo} alt="" />
        <h2>Espresso Emporium</h2>
      </div>
    </div>
  );
};

export default Header;
