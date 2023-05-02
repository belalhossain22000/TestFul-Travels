import React from "react";

const RecipesDetails = ({ recipe }) => {
  const { name, ingredients, method, rating, foodimg } = recipe;
  console.log(foodimg)
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img
          src={foodimg}
          alt="Album"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        {ingredients.map((ingredient, index) => (
          <p key={index}>ingredient: {ingredient}</p>
        ))}
        <p>{method}</p>
        <p>{rating}</p>
      </div>
    </div>
  );
};

export default RecipesDetails;
