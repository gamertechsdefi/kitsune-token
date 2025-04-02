import React, { useState } from "react";
import "./App.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Main.css";

function Main() {
  return (
    <div className="mainbody" id="home">
      <div className="flex justify-center h-screen ml-8 mr-8">
        <div className="text-center">
          <h1
            id="mainheader"
            className="text-4xl m-4 font-bold fade-out"
            style={{
              fontFamily: "MoonChild, sans-serif",
              fontSize: "80px",
              color: "#F86Ec3",
              wordSpacing: "5px",
              lineHeight: "70px",
              marginTop: "100px",
              animation: "fadeInOut 4s ease-in-out infinite",
            }}
          >
            THE MOST POWERFUL FOX MEMECOIN
          </h1>
          <p
            className="text-lg text-white p-4 md:p-8 lg:p-12"
            style={{
              fontFamily: "Quinto, sans-serif",
              letterSpacing: "1px",
            }}
          >
            Welcome to the realm of Kitsune Token, where innovation meets
            tradition in the world of decentralized finance (DeFi). Inspired by
            the legendary Japanese fox spirit known for its cunning intellect
            and adaptability, Kitsune Token is here to revolutionize the DeFi
            landscape.
          </p>
          <div className=" flex flex-row text-center justify-center">
          <div className="flex items-center text-center justify-center space-x-2 mr-8">
              <a
                href="https://dexscreener.com/bsc/0x969d92E917e68A3a4e8596770852d94BD315D194"
                style={{
                  fontFamily: "Quinto, sans-serif",
                  letterSpacing: "1px"
                }}
                className="font-bold mt-4 py-2 px-3 bg-pink-600 text-white rounded hover:bg-blue-700 transition duration-300"
              >
                Buy Now
              </a>
            </div>
            <div className="flex items-center text-center justify-center space-x-2">
              <a
                href="https://pancakeswap.finance/swap?outputcurrency=0xb6623b503d269f415b9b5c60cdda3aa4fe34fd22&chainid=56&utm_source=dexscreener&utm_medium=app"
                style={{
                  fontFamily: "Quinto, sans-serif",
                  letterSpacing: "1px"
                }}
                className="font-bold mt-4 py-2 px-3 bg-pink-600 text-white rounded hover:bg-blue-700 transition duration-300"
              >
                Check Chart
              </a>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
