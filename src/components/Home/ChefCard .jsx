import React from "react";
import LazyLoad from "react-lazy-load";
import { Link, useNavigate } from "react-router-dom";
import { FaHandPointRight } from "react-icons/fa";

const ChefCard = ({ chef }) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <LazyLoad
          height={300}
          width={400}
          threshold={0.95}
          onContentVisible={() => {
            console.log("loaded!");
          }}
        >
          <img src={chef.picture} alt={chef.name} className="w-full" />
        </LazyLoad>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{chef.name}</div>
          <p className="text-gray-700 text-base mb-2">
            {chef.experience} of experience
          </p>
          <p className="text-gray-700 text-base mb-2">
            {chef.numRecipes} recipes
          </p>
          <p className="text-gray-700 flex items-center gap-3 text-base mb-2">
            <FaHandPointRight /> {chef.likes} likes
          </p>
          <button
            onClick={() => navigate(`/chefrecipes/${chef.id}`)}
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full"
          >
            View Recipes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
