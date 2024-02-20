import React from "react";
import aboutImage from "./assets/about_image.png";

function SectionB() {
  return (
    <div className="container mx-auto text-white mt-16" id="about">
      <div className="flex flex-wrap - mx-4 ml-4 mr-4">
        <div className="w-full sm:w-full md:w-1/2 p-4 flex items-center justify-center">
          <img src={aboutImage} alt="Sample" className="max-w-full h-auto" />
        </div>
        <div className="w-full sm:w-full md:w-1/2 p-4 flex items-center justify-center">
          <div>
            <h2
              className="text-2xl font-bold mb-2"
              style={{
                fontFamily: "Quinto, sans-serif",
                letterSpacing: "1px",
                color: "#F86Ec3",
              }}
            >
              About Kitsune Token
            </h2>
            <p
              style={{
                fontFamily: "Quinto, sans-serif",
                letterSpacing: "1px",
              }}
            >
              Kitsune Token is a realistic manifestation of your deepest desires
              intertwined with the mystical nature of the Japanese Fox, Kitsune.
              This project brings together the cunning and intelligent qualities
              of both humans and foxes, captivating the minds of investors with
              its extraordinary narrative. With its innovative features and
              strong community, Kitsune token is making a name for itself as a
              "Shiba Inu Killer meme coin". Join the dedicated community of
              supporters and become a Kitsune Keeper.
            </p>
            <div className="flex items-center mt-4 space-x-2">
              <a
                href="https://t.me/kitsunetokenentry"
                style={{
                  fontFamily: "Quinto, sans-serif",
                }}
                className="font-bold mt-4 py-2 px-3 bg-pink-600 text-white rounded hover:bg-blue-700 transition duration-300"
              >
                Access the Keepers Realm
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionB;