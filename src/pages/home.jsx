import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import client from "../client.js"; //my connecet to sanity
import ProductCard from "../components/ProductCard.jsx"; // the ui for a single itemCard on the this page
import Navbar from "../components/Navbar.jsx"; // the navbar also consist of a cart
import Banner from "../components/Banner.jsx"; // simple qoute add to page just for the over all design
import "../Home.css";
function MultiPost() {
  // This is the home page
  const [multiPostData, setMultiPostData] = useState([]);
  useEffect(() => {
    client
      // _type refers to the docuement that im calling upon in the sanity_thecoffeeshop folder
      .fetch(
        `*[_type == "coffee"]{
       name,
       slug,
       imageUrl,
       price,
       description,
   }`
      )
      .then((data) => {
        setMultiPostData(data);
        console.log(data);
      })
      .catch(console.error);
  }, []);
  return (
    <div className="home w-full min-h-screen ">
      <Navbar />
      <Banner />
      <div className="flex justify-center flex-row flex-wrap w-full my-5 ">
        {multiPostData &&
          multiPostData.map((coffee, index) => (
            <ProductCard
              key={index}
              image={coffee.imageUrl}
              name={coffee.name}
              slug={coffee.slug}
              price={coffee.price}
              description={coffee.description}
            />
          ))}
      </div>
    </div>
  );
}

export default MultiPost;
