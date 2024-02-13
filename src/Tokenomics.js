import React from "react";
import "./Tokenomics.css";
import nomicsImage from "./assets/nomics_image.png";

function Tokenomics() {
  return (
    <div className="flex items-center justify-center min-h-screen mx-auto text-white px-4 lg:px-0">
      <div className="flex flex-wrap justify-center">
        <div className="text-center w-full flex items-center justify-center p-4">
          <div>
            <h1
              className="font-bold mb-2 text-6xl md:text-8xl"
              style={{
                fontFamily: "Moonchild, sans-serif",
                letterSpacing: "1px",
                color: "#F86Ec3",
              }}
            >
              Keepernomics
            </h1>
            <div className="flex flex-wrap justify-center">
              <div className="flex flex-col m-4 md:w-1/3">
                <p
                  style={{
                    fontFamily: "Quinto, sans-serif",
                    letterSpacing: "1px",
                    fontSize: "40px",
                  }}
                >
                  5%
                </p>
                <p
                  style={{
                    fontFamily: "Quinto, sans-serif",
                    letterSpacing: "1px",
                    fontSize: "20px",
                  }}
                >
                  Marketing
                </p>
              </div>
              <div className="flex flex-col m-4 md:w-1/3">
                <p
                  style={{
                    fontFamily: "Quinto, sans-serif",
                    letterSpacing: "1px",
                    fontSize: "40px",
                  }}
                >
                  2%
                </p>
                <p
                  style={{
                    fontFamily: "Quinto, sans-serif",
                    letterSpacing: "1px",
                    fontSize: "20px",
                  }}
                >
                  Burn
                </p>
              </div>
              <div className="flex flex-col m-4 md:w-1/3">
                <p
                  style={{
                    fontFamily: "Quinto, sans-serif",
                    letterSpacing: "1px",
                    fontSize: "40px",
                  }}
                >
                  3%
                </p>
                <p
                  style={{
                    fontFamily: "Quinto, sans-serif",
                    letterSpacing: "1px",
                    fontSize: "20px",
                  }}
                >
                  Development
                </p>
              </div>
              {/* If you have more items, they will wrap to the next line on desktop view */}
            </div> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tokenomics;