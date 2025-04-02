import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header.js";
import airdropImage from "./assets/airdrop_kitsune.png";

function Airdrop() {
  const handleWalletConnect = () => {
    alert("Wallet connected");
  };
  return (
    <div>
      <Header>
        <Header />
      </Header>
      <div
        className="min-h-screen flex items-center justify-center"
        id="airdrop"
      >
        <div className="flex-col items-center justify-center text-center">
          <img
            src={airdropImage}
            alt="airdrop image"
            className=""
            width="200px"
          />
          <h1
            className="text-5xl font-bold text-white mb-4"
            style={{
              fontFamily: "Moonchild, sans-serif",
              fontSize: "70px",
              letterSpacing: "1px",
              color: "#F86BC3",
            }}
          >
           AIRDROP IS OVER
          </h1>
          <p
            className="text-xl text-gray-300 mb-16"
            style={{ fontFamily: "Quinto, sans-serif" }}
          >
            Thank you for participating.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Airdrop;
