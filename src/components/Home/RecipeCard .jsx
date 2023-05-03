import React from "react";
import LazyLoad from 'react-lazy-load';


const RecipeCard = ({ recipe }) => {
  return (
    <div className="h-[600px]">
      <div className="h-[600px] max-w-sm rounded overflow-hidden shadow-lg">
      <LazyLoad height={300} width={400} threshold={0.95} onContentVisible={() => {console.log('loaded!')}}>
        <img  src={recipe.image} alt={recipe.name} className="  h-[300px] w-full " />
        </LazyLoad>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{recipe.name}</div>
          <p className="text-gray-700 text-base mb-2">{recipe.description}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
