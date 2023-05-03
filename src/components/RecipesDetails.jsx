import React, { useState } from "react";
import { FaHandPointRight, FaRegHeart } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RecipesDetails = ({ recipe }) => {
  const [isClicked, setIsClicked] = useState(false);
  const notify = () => toast("the recipe is your favorite !!!");

  const handleClick = () => {
    setIsClicked(true);
    notify()
  };

  const { name, ingredients, method, rating, foodimg } = recipe;
  console.log(foodimg);
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={foodimg} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        {ingredients.map((ingredient, index) => (
          <p key={index}>
            {" "}
            <span className="font-bold">ingredient</span> : {ingredient}
          </p>
        ))}
        <p>
          {" "}
          <span className="font-bold">Rating</span> : {rating}
        </p>
        <p>
          {" "}
          <span className="font-bold">Chooking Method</span> : {method}
        </p>
        <div className="card-actions justify-end">
          <button
            disabled={isClicked}
            onClick={handleClick}
            className="btn btn-primary text-3xl"
          >
            <FaRegHeart></FaRegHeart>
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default RecipesDetails;
