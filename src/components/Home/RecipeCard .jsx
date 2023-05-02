import React from "react";

const RecipeCard = ({ recipe }) => {
  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img src={recipe.image} alt={recipe.name} className="w-full" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{recipe.name}</div>
          <p className="text-gray-700 text-base mb-2">{recipe.description}</p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full">
            View Recipe
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
