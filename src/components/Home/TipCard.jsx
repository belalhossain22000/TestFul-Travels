import React from "react";

const TipCard = ({tip }) => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <img
          src={tip.chef.image}
          alt={tip.chef.name}
          className="rounded-full w-16 h-16 mb-4"
        />
        <h3 className="text-lg font-bold mb-2">{tip.title}</h3>
        <p className="text-gray-700 text-sm text-center">{tip.summary}</p>
       
      </div>
    </div>
  );
};

export default TipCard;
