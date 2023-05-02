import React from "react";
import { Link } from "react-router-dom";

const ChefCard = ({ chef }) => {
  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img src={chef.image} alt={chef.name} className="w-full" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{chef.name}</div>
          <p className="text-gray-700 text-base mb-2">
            {chef.experience} of experience
          </p>
          <p className="text-gray-700 text-base mb-2">
            {chef.numRecipes} recipes
          </p>
          <p className="text-gray-700 text-base mb-2">{chef.likes} likes</p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full">
            <Link to="/cheprecipes"> View Recipes</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
