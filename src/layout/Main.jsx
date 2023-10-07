import { Outlet } from "react-router-dom";
import Footer from "../componets/Footer/Footer";
import Header from "../componets/Header/Header";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
