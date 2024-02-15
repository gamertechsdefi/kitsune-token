import React from "react";
import "./Tokenomics.css"; // Ensure this CSS file is tailored to match your website's theme

function Tokenomics() {
  return (
    <div className="flex flex-col items-center justify-center mb-32 min-h-screen text-white">
      <h1
        className="text-4xl font-bold mt-32 mb-8"
        style={{ fontFamily: "MoonChild, sans-serif", fontSize: "80px" }}
      >
        Tokenomics
      </h1>
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        style={{ fontFamily: "Quinto, sans-serif", letterSpacing: "1px" }}
      >
        <div className="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 bg-pink-700 p-6 rounded-xl shadow-xl">
          <p className="text-3xl font-semibold">9,000,000,000</p>
          <p className="text-xl">Total Supply</p>
        </div>
        <div className="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 bg-pink-700 p-6 rounded-xl shadow-xl">
          <p className="text-3xl font-semibold">6,000,000,000</p>
          <p className="text-xl">Initial Burn</p>
        </div>
        <div className="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 bg-pink-700 p-6 rounded-xl shadow-xl">
          <p className="text-3xl font-semibold">3,000,000,000</p>
          <p className="text-xl">Circulatory Supply</p>
        </div>
        <div className="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 bg-pink-700 p-6 rounded-xl shadow-xl">
          <p className="text-3xl font-semibold">4%</p>
          <p className="text-xl">Marketing</p>
        </div>
        <div className="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 bg-pink-700 p-6 rounded-xl shadow-xl">
          <p className="text-3xl font-semibold">2%</p>
          <p className="text-xl">Liquidity</p>
        </div>
        <div className="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 bg-pink-700 p-6 rounded-xl shadow-xl">
          <p className="text-3xl font-semibold">1%</p>
          <p className="text-xl">Burn</p>
        </div>
      </div>
    </div>
  );
}

export default Tokenomics;
