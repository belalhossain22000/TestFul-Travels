import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecipesDetails from "./RecipesDetails";
import { FaHandPointRight } from 'react-icons/fa';


const ChefRecipes = () => {
  const { id } = useParams();

  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allData")
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  const matcheddetails = details.find((detail) => detail.id == id);
  let Mdetails = {};
  if (matcheddetails) {
    Mdetails = matcheddetails;
  }
  const { recipes ,picture,name,bio,likes,numRecipes,experience} = Mdetails;

  return (
    <div>
      <div className=" chef-profile mt-9 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img
              src={picture}
              alt="Album"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{bio}</p>
            <p className="flex items-center gap-4"> <span className="font-bold">likes</span> : <FaHandPointRight></FaHandPointRight>{likes}</p>
            <p> <span className="font-bold">Number of recipes</span> : {numRecipes}</p>
            <p> <span className="font-bold">Experiences</span> :{experience} years </p>
          </div>
        </div>

        <div className="card-body  md:grid grid-cols-3">
          {recipes?.map((recipe) => (
            <RecipesDetails key={recipe.name} recipe={recipe}></RecipesDetails>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChefRecipes;
