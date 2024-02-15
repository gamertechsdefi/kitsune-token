import React from "react";
import "./App.css";
import metamaskImage from "./assets/metamask.png";
import bnbImage from "./assets/bnb2.webp";
import buykitImage from "./assets/buykit.png";

function HowToBuy() {
    return (
      <div
        className="max-w-4xl mx-auto p-4 text-white mt-16" id="community"
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
          Socials
        </h2>
        <p
          className="sm:text-white md:text-1xl text-center mb-6"
          style={{
            fontFamily: "Quinto, sans-serif",
            fontSize: "17px"
          }}
        >
          Our Community of Keepers is growing stronger every day. As a
          decentralized, community-owned project, we aim to bring more trust to
          the Binance Smart Chain by providing real value. Follow our social media
          platforms to stay up-to-date with the latest information about Kitsune's
          mission and visions.
        </p>
        <div className="flex justify-center space-x-4 mt-4" style={{color: "#f86bc3"}}>
          <a href="https://twitter.com/kitsunetoken0" target="_blank" rel="noopener noreferrer">
            <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" fill="currentColor"></path>
            </svg>
          </a>
          <a href="https://t.me/kitsunetokenentry" target="_blank" rel="noopener noreferrer">
            <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.09 15.59L8.47 20.47c.67 0 1-.24 1.24-.72l2.4-3.6 4.8 3.36c.8.56 1.44.27 1.68-.96l3.6-16.8c.48-1.52-.32-2.24-1.52-1.76L.99 9.35c-1.44.48-1.44 1.44-.48 1.92l3.84 1.44 9.6 3.36c.64.16 1.2-.16.96-.48z" fill="currentColor"></path>
            </svg>
          </a>
        </div>
      </div>
    );
  }
export default HowToBuy;
