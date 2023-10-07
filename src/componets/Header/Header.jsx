import bg from "/header-bg.jpg";
import logo from "/logo.png";
import "./Header.css";
import { Link } from "react-router-dom";
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
        <div>
          <nav className="text-white text-4xl ml-8">
            <Link className="mr-4" to="/">
              Home
            </Link>
            <Link to="/addcoffee">Add Coffee</Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
