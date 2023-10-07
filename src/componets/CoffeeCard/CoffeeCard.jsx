import React from "react";
import { FaRegEye, FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, chef, supplier, taste, category, details, photo } = coffee;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://coffee-store-mongodb-tailwind-server-27v96cyfh-rubels-projects.vercel.app/coffees/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged === true) {
              Swal.fire("Deleted!", "Your Coffee has been deleted.", "success");
            }
            const remaining = coffees.filter((cof) => cof._id !== _id);
            setCoffees(remaining);
            console.log(data);
          });
      }
    });

    console.log(id);
  };

  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl bg-[#F5F4F1] p-8 m-4">
        <figure>
          <img src={photo} alt="Movie" />
        </figure>
        <div className="flex items-center justify-between w-full">
          <div>
            <p>
              <b>Name: </b>
              {name}
            </p>
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
          <div className="btn-group btn-group-vertical">
            <Link to={`/coffees/${_id}`} className="btn">
              <FaRegEye></FaRegEye>
            </Link>
            <Link to={`/update/${_id}`} className="btn">
              <FaPencilAlt></FaPencilAlt>
            </Link>
            <button className="btn" onClick={() => handleDelete(_id)}>
              <FaTrashAlt></FaTrashAlt>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
