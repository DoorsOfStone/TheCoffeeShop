import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../App";
import "../Home.css";
import MultiPost from "./MultiPost";
import Navbar from "./Navbar";
import client from "../client.js";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../Store/cartSlice";

function SinglePost() {
  /* how to pass the datt from the "Home page to the single post.
  slighly confused worst cones to worst I could make another api call? */
  const dispatch = useDispatch();
  const [singlePost, setSinglePost] = useState([]);
  const { slug } = useParams();
  useEffect(() => {
    client
      .fetch(
        `*[slug.current == "${slug}"]{
       name,
       slug,
       imageUrl,
       price,
       description,
   }`
      )
      .then((data) => {
        setSinglePost(data[0]);
      })
      .catch(console.error);
  }, [slug]);

  return (
    <div className="home w-full min-h-screen  bg-slate-400">
      <Navbar />
      <></>
      <div className="w-full h-full flex justify-center  items-center">
        <div className="w-3/5 h-[600px] flex xs:flex-col md:flex-row ">
          <div className="xs:h-1/3 xs:w-full md:w-1/2 md:h-full bg-[#ffd59e] flex justify-center items-center rounded-l-xl">
            <img
              className="w-full h-full rounded-l-xl"
              src={singlePost.imageUrl}
            />
          </div>
          <div className="md:w-1/2 md:h-full xs:w-full xs:h-2/3 flex flex-col  bg-black">
            <div className="w-full h-[100px] p-3 flex flex-col">
              <h1 className="md:text-3xl  xs:text-lg text-white my-2 font-bold">
                {singlePost.name}
              </h1>
              <h4 className="md:text-xl xs:text-md text-white my-2 font-light">
                ${singlePost.price}
              </h4>
            </div>

            <article className="p-2 md:mt-20 text-center x md:text-xl xs:text-sm text-white">
              {singlePost.description}
            </article>
            <div className="w-full h-[200px] flex justify-center items-center">
              <button
                onClick={() =>
                  dispatch(
                    addToCart({
                      id: singlePost.name,
                      title: singlePost.name,
                      image: singlePost.imageUrl,
                      price: singlePost.price,
                    })
                  )
                }
                className="w-[100px] h-[50px] bg-[#ffd59e] hover:bg-[#f3913b] text-black text-lg rounded-sm"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePost;
