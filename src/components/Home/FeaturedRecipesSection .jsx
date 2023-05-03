import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard ";

const FeaturedRecipesSection = () => {
  const [featureRecipes, setFeatureRecipes] = useState([]);
  useEffect(() => {
    fetch("https://myapp-belalhossain22000.vercel.app/feature")
      .then((res) => res.json())
      .then((data) => setFeatureRecipes(data));
  }, []);

  return (
    <div>
      <div className="container mx-auto py-12">
        <h2 className="text-3xl font-bold mb-6">Featured Recipes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {featureRecipes.map((recipe) => (
            <RecipeCard recipe={recipe} key={recipe.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedRecipesSection;
