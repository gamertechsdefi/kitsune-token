import React, { useState } from "react";
import "./App.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import './Main.css'

function Main() {
  return (
    <div className="mainbody">
      <div className="flex justify-center  h-screen mt-12">
        <div className="text-center">
          <h1
            id="mainheader"
            className="text-4xl m-4 font-bold fade-out"
            style={{
              fontFamily: "MoonChild, sans-serif",
              fontSize: "120px",
              color: "#F86EC3",
              wordSpacing: "5px",
              lineHeight: "80px",
              marginTop: "100px",
              animation: "fadeInOut 4s ease-in-out infinite",
            }}
          >
            THE SPIRIT KEEPERS
          </h1>
          <p
            className="text-lg text-white p-4 md:p-8 lg:p-12"
            style={{
              fontFamily: "Quinto, sans-serif",
              letterSpacing: "1px",
            }}
          >
           The Nine Tailed Fox is 
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
