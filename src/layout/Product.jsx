import Header from "../componets/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../componets/Footer/Footer";

const Product = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Product;
