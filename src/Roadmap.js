import React from "react";
import "./App.css";
import metamaskImage from "./assets/metamask.png";
import bnbImage from "./assets/bnb2.webp";
import buykitImage from "./assets/buykit.png"

function HowToBuy() {
  return (
    <div
      className="max-w-4xl mx-auto p-4 text-white"
      style={{ fontFamily: "Quinto, sans-serif", letterSpacing: "1px" }}
    >
      <h2
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6"
        style={{
          fontFamily: "Moonchild, sans-serif",
          fontSize: "80px",
          color: "#F86Ec3",
        }}
      >
        KeepersMap
      </h2>
      <div className="space-y-4">
        {/* Step 1 */}
      </div>
    </div>
  );
}

export default HowToBuy;
