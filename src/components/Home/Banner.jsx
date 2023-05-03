import React from "react";
// import BannerImage from "./banner-image.jpg";

const Banner = () => {
  return (
    <div className=" container mx-auto py-12  my-5 card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img
          className="w-[700px]"
          src="https://thumbs.dreamstime.com/z/happy-chef-pointing-copy-space-young-83942019.jpg"
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
