import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoImage from "./assets/logo.png";


function Header() {
  // State to manage mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="text-white">
      <div
        className="max-w-6xl mx-auto px-4"
        style={{ fontFamily: "Quinto, sans-serif", letterSpacing: "1px" }}
      >
        <div className="flex justify-between">
          <div className="flex space-x-4 text-center">
            {/* Logo or Brand name */}
            <div>
              <a
                href="https://kitsunetoken.com"
                className="flex items-center py-5 px-2 text-white font-bold"
              >
                <img src={logoImage} alt="logo icon" width="45px" />
                <span className="ml-2">Kitsune</span>
              </a>
            </div>
            {/* Primary Nav */}
            <div className="hidden md:flex items-center space-x-2">
              <Link to="/" className="py-5 px-3 hover:text-gray-400">
                Home
              </Link>
              <a href="#about" className="py-5 px-3 hover:text-gray-400">
                About
              </a>
              <a href="#tokenomics" className="py-5 px-3 hover:text-gray-400">
                Keepernomics
              </a>
              <a href="#howtobuy" className="py-5 px-3 hover:text-gray-400">
                How to buy
              </a>
              <Link to="/airdrop" className="py-5 px-3 font-bold hover:text-gray-400">
                Airdrop
              </Link>
              <a href="#community" className="py-5 px-3 hover:text-gray-400">
                Join the Keepers
              </a>
            </div>
          </div>
          {/* Secondary Nav */}
          <div className="hidden md:flex items-center space-x-1 shake glow">
            <a
              href="https://pancakeswap.finance/"
              className="font-bold py-2 px-3 bg-pink-300 text-pink-900 rounded hover:bg-blue-700 hover:text-white transition duration-300"
            >
              Buy now
            </a>
          </div>
          {/* Mobile button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`${isMobileMenuOpen ? "block" : "hidden"} md:hidden`}
      style={{fontFamily: "Quinto, sans-serif"}}>
        <a href="#home" className="block py-2 px-4 text-sm hover:bg-blue-700">
          Home
        </a>
        <a href="#about" className="block py-2 px-4 text-sm hover:bg-blue-700">
          About
        </a>
        <a href="#tokenomics" className="block py-2 px-4 text-sm hover:bg-blue-700">
          Keepernomics
        </a>
        <a href="#howtobuy" className="block py-2 px-4 text-sm hover:bg-blue-700">
          How to buy
        </a>
        <a href="#community" className="block py-2 px-4 text-sm hover:bg-blue-700">
          Join the Keepers
        </a>
        <a href="#airdrop" className="block font-bold py-2 px-4 text-sm hover:bg-blue-700">
          Airdrop
        </a>
        <a
          href="https://pancakeswap.finance/"
          className="block font-bold py-2 px-4 text-sm bg-pink-300 text-pink-900 rounded hover:bg-blue-700 hover:text-white transition duration-300"
        >
          Buy now
        </a>
      </div>
    </nav>
  );
}

export default Header;
