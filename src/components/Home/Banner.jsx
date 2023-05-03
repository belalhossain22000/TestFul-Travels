import React from "react";
// import BannerImage from "./banner-image.jpg";

const Banner = () => {
  return (
    <div className=" container mx-auto py-12  my-5 card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img
          className="w-[700px]"
          src="https://img.freepik.com/free-photo/profession-looking-telephone-handsome-serious_1134-1068.jpg?w=996&t=st=1683138679~exp=1683139279~hmac=9fbd1b43a8fcc87f761d7ad064bec9947ba0ee0f01124c505c5967568cc01a5d"
          alt="Album"
        />
      </figure>
      <div className="card-body text-center">
        <h2 className="card-title text-3xl font-bold">Exploring  <br /> the Culinary Delights of Bangladeshi Chefs"</h2>
        <p>Experience the taste of Bangladesh through the expertly <br /> crafted recipes of top Bangladeshi chefs on our website."</p>
        <p>Discover the unique flavors and culinary heritage of Bangladesh with Taste of Bangladesh, <br /> your ultimate guide to Bangladeshi cuisine."</p>
      </div>
    </div>
  );
};

export default Banner;
