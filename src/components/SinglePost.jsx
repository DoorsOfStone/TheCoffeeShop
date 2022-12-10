import React, { useEffect, useState } from "react";
import "../Home.css";
import MultiPost from "./MultiPost";
import Navbar from "./Navbar";
import client from "../client.js";
import { Link, useParams } from "react-router-dom";

function SinglePost() {
  /* how to pass the datt from the "Home page to the single post.
  slighly confused worst cones to worst I could make another api call? */
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
        console.log(data);
      })
      .catch(console.error);
  }, [slug]);

  return (
    <div className="home w-full min-h-screen  bg-slate-400">
      <Navbar
        Image={singlePost.image}
        Name={singlePost.name}
        Price={singlePost.price}
      />
      <></>
      <div className="w-full h-full flex justify-center  items-center">
        <div className="w-3/5 h-[600px] flex flex-row">
          <div className="w-1/2 h-full bg-[#ffd59e] flex justify-center items-center">
            <img src={singlePost.imageUrl} />
          </div>
          <div className="w-1/2 h-full flex flex-col bg-black">
            <div className="w-full h-[100px] p-3 flex flex-col">
              <h1 className="text-3xl text-white my-2 font-bold">
                {singlePost.name}
              </h1>
              <h4 className="text-xl text-white my-2 font-light">
                ${singlePost.price}
              </h4>
            </div>
            <div className="w-full h-[100px] mt-5 flex justify-center items-center">
              <input
                className="w-1/5 h-1/2 bg-slate-200 rounded-sm text-center outline-none "
                list="quanity"
                type="select"
                placeholder="QUANITY"
              />
              <datalist id="quanity">
                <option value="1" />
                <option value="2" />
                <option value="3" />
                <option value="4" />
              </datalist>
            </div>
            <article className="p-2 mt-5 text-center text-xl text-white">
              {singlePost.description}
            </article>
            <div className="w-full h-[200px] flex justify-center items-center">
              <button className="w-[100px] h-[50px] bg-white text-black text-lg rounded-sm">
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
