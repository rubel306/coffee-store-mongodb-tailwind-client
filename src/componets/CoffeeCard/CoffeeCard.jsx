import React from "react";
import { FaRegEye, FaPencilAlt, FaTrashAlt } from "react-icons/fa";

const CoffeeCard = ({ coffee }) => {
  const { _id, name, chef, supplier, taste, category, details, photo } = coffee;
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
            <button className="btn">
              <FaRegEye></FaRegEye>
            </button>
            <button className="btn">
              <FaPencilAlt></FaPencilAlt>
            </button>
            <button className="btn">
              <FaTrashAlt></FaTrashAlt>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
