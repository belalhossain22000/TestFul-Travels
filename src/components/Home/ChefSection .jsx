import React, { useEffect, useState } from "react";
import ChefCard from "./ChefCard ";

const ChefSection = () => {
    const [chefs,setChefses]=useState([])
    useEffect(() => {
        fetch('http://localhost:5000/allData')
        .then(res => res.json())
        .then(data => {
            
            return setChefses(data)
        })
    },[])

  return (
    <div className="">
      <div className="container mx-auto py-12  ">
        <h2 className=" text-3xl font-bold mb-6 bo">Meet Our Chefs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {chefs.map((chef) => (
            <ChefCard chef={chef} key={chef.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChefSection;
