import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useLoaderData } from "react-router-dom";

const ViewCoffee = () => {
  const coffee = useLoaderData();
  const { name, chef, supplier, taste, category, details, photo } = coffee;
  return (
    <div>
      <Header></Header>
      <div className="card justify-center flex card-side bg-base-100 shadow-xl bg-[#F5F4F1] p-8 m-4">
        <figure>
          <img src={photo} alt="Movie" />
        </figure>
        <div className="flex items-center justify-between ml-14">
          <div>
            <h2 className="text-5xl mb-8">{name}</h2>
            <p>
              <b>Chef: </b>
              {chef}
            </p>
            <p>
              <b>Supplier: </b>
              {supplier}
            </p>
            <p>
              <b>Details: </b>
              {details}
            </p>
            <p>
              <b>Taste: </b>
              {taste}
            </p>
            <p>
              <b>Category: </b>
              {category}
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ViewCoffee;
