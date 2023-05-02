import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ChefRecipes = () => {
  const { id } = useParams();
  console.log(id);

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
  const {bio,experience,likes,name,numRecipes,picture,recipes
  }=Mdetails
  
  console.log(recipes);
  return (
    <div>
      <div className=" chef-profile bg-white shadow-lg rounded-lg overflow-hidden">
        <div
          className="chef-banner h-64 bg-cover bg-center flex flex-col justify-end px-6 pb-12"
          style={{ backgroundImage: `url(${Mdetails.picture})` }}
        >
          <h2 className="text-4xl font-bold text-white mb-2">
            {Mdetails.name}
          </h2>
          <p className="text-xl text-white font-semibold">{Mdetails.bio}</p>
          <div className="chef-stats flex justify-between mt-4">
            <div className="likes text-lg font-medium">
              {Mdetails.likes} Likes
            </div>
            <div className="num-recipes text-lg font-medium">
              {Mdetails.numRecipes} Recipes
            </div>
            <div className="experience text-lg font-medium">
              {Mdetails.experience} Years Experience
            </div>
          </div>
        </div>
        <div className=" m-11 card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img src={Mdetails.picture} alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New album is released!</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefRecipes;
