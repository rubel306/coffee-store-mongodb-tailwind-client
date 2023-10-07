import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./AddCoffee.css";

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
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
    console.log(addCoffee);
  };
  return (
    <div>
      <Header></Header>
      <div className="add-coffee-area bg-[#F4F3F0] p-10 ">
        <div className="add-coffee-info w-3/5 mx-auto">
          <h2 className="text-center">Add New Coffee</h2>
          <p className="text-center">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>
        <form onSubmit={handleAddCoffee} className="mt-8 mb-12">
          <div className="add-coffee-form">
            <div className="form-input w-full flex">
              <div className="form-control w-1/2 mb-5">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <label className="input-group">
                  <input
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
                    type="text"
                    name="photo"
                    placeholder="Enter Your Coffee Name"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
            <button className="btn w-full" type="submit">
              Add Coffee
            </button>
          </div>
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AddCoffee;
