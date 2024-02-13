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
        How to Buy
      </h2>
      <div className="space-y-4">
        {/* Step 1 */}
        <div className="border-2 border-gray-200 p-4 rounded-lg flex flex-col md:flex-row items-center gap-4">
          <div className="flex-shrink-0">
            <img
              src={metamaskImage}
              alt="Description"
              className="w-20 h-20 object-cover"
            />
          </div>
          <div className="flex-1">
            <p className="text-base sm:text-lg">
              Create a TRUST or Metamask Wallet using either a desktop computer
              or an iOS/Android mobile device. That will allow you to buy, sell,
              send, and receive $SIMBA
            </p>
          </div>
        </div>
        {/* Step 2 */}
        <div className="border-2 border-gray-200 p-4 rounded-lg flex flex-col md:flex-row items-center gap-4">
          <div className="flex-shrink-0">
            <img
              src={bnbImage}
              width= "70%"
              alt="Description"
              className="w-20 h-20"
            />
          </div>
          <div className="flex-1">
            <p className="text-base sm:text-lg">
              Have BNB in your wallet to switch to $SIMBA. If you don’t have any
              BNB, you can buy directly on metamask, transfer from another
              wallet, or buy on another exchange and send it to your wallet.
            </p>
          </div>
        </div>
        {/* Step 3 */}
        <div className="border-2 border-gray-200 p-4 rounded-lg flex flex-col md:flex-row items-center gap-4">
          <div className="flex-shrink-0">
            <img
              src={buykitImage}
              alt="Description"
              className="w-20 h-20 object-cover"
            />
          </div>
          <div className="flex-1">
            <p className="text-base sm:text-lg">
              Create a TRUST or Metamask Wallet using either a desktop computer
              or an iOS/Android mobile device. That will allow you to buy, sell,
              send, and receive $SIMBA
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowToBuy;
