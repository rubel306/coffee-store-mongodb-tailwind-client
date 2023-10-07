import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, chef, supplier, taste, category, details, photo } = coffee;
  console.log("update coffee", coffee);
  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const addCoffee = { name, chef, supplier, taste, category, details, photo };
    fetch(`http://localhost:5000/update/${coffee._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged === true) {
          Swal.fire({
            icon: "success",
            title: "Update Successful ",
            text: "Your Added a Coffee Successfully",
          });
        }
        console.log(data);
      });
  };
  return (
    <div>
      <Header></Header>
      <h2>Update coffe {coffee.name}</h2>
      <form onSubmit={handleUpdateCoffee} className="mt-8 mb-12">
        <div className="add-coffee-form">
          <div className="form-input w-full flex">
            <div className="form-control w-1/2 mb-5">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <label className="input-group">
                <input
                  defaultValue={name}
                  type="text"
                  name="name"
                  placeholder="Enter Your Coffee Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Chef</span>
              </label>
              <label className="input-group">
                <input
                  defaultValue={chef}
                  type="text"
                  name="chef"
                  placeholder="Enter Coffee Chef Name"
                  className="input input-bordered w-full ml-4"
                />
              </label>
            </div>
          </div>
          <div className="form-input w-full flex">
            <div className="form-control w-1/2 mb-5">
              <label className="label">
                <span className="label-text">Supplier</span>
              </label>
              <label className="input-group">
                <input
                  defaultValue={supplier}
                  type="text"
                  name="supplier"
                  placeholder="Enter Your Supplier Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Taste</span>
              </label>
              <label className="input-group">
                <input
                  defaultValue={taste}
                  type="text"
                  name="taste"
                  placeholder="Enter Coffee Taste"
                  className="input input-bordered w-full ml-4"
                />
              </label>
            </div>
          </div>
          <div className="form-input w-full flex">
            <div className="form-control w-1/2 mb-5">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <label className="input-group">
                <input
                  defaultValue={category}
                  type="text"
                  name="category"
                  placeholder="Enter Your Coffee Category"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <label className="input-group">
                <input
                  defaultValue={details}
                  type="text"
                  name="details"
                  placeholder="Enter Coffee Chef Details"
                  className="input input-bordered w-full ml-4"
                />
              </label>
            </div>
          </div>
          <div className="form-input w-full">
            <div className="form-control mb-5">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <label className="input-group">
                <input
                  defaultValue={photo}
                  type="text"
                  name="photo"
                  placeholder="Enter Your Coffee Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <button className="btn w-full" type="submit">
            Update Coffee
          </button>
        </div>
      </form>
      <Footer></Footer>
    </div>
  );
};

export default UpdateCoffee;
