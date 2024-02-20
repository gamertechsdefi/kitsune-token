import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header.js";

function Airdrop() {
  return (
    <div>
      <Header>
        <Header />
      </Header>
      <div
        className="min-h-screen flex items-center justify-center text-center"
        id="airdrop"
      >
        <div>
          <h1
            className="text-5xl font-bold text-white mb-4"
            style={{
              fontFamily: "Moonchild, sans-serif",
              fontSize: "70px",
              letterSpacing: "1px",
              color: "#F86BC3",
            }}
          >
            Airdrop Coming Soon!
          </h1>
          <p
            className="text-xl text-gray-300"
            style={{ fontFamily: "Quinto, sans-serif" }}
          >
            Stay tuned for our exciting airdrop. More details will be revealed
            soon.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Airdrop;
