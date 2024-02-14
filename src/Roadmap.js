import React from "react";
import "./App.css";

function Roadmap() {
  return (
    <div
      className="max-w-4xl mx-auto p-4 text-white mt-8"
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
        Roadmap
      </h2>
      <div className="space-y-4">
        <div className="bg-blue-500 p-4 rounded-lg shadow-md">
          <h3 className="font-bold text-lg">Phase 1: Conceptualization</h3>
          <p>Detailing the project's vision, goals, and initial planning.</p>
        </div>
        <div className="bg-blue-500 p-4 rounded-lg shadow-md">
          <h3 className="font-bold text-lg">Phase 2: Development & Launch</h3>
          <p>
            Starting the development process & officially launching the project to the public
          </p>
        </div>
        <div className="bg-blue-500 p-4 rounded-lg shadow-md">
          <h3 className="font-bold text-lg">Phase 3: Moon</h3>
          <p>Massive marketing campaigns: influencers, callers, bill boards and more</p>
        </div>
        <div className="bg-blue-500 p-4 rounded-lg shadow-md">
          <h3 className="font-bold text-lg">Phase 4: Expansion</h3>
          <p>
            Expanding the project's reach, adding new features, and growing the
            community.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
