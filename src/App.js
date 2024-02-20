import "./App.css";
import { Router, Route, Routes } from "react-router-dom";
import PageLinks from "./PageLinks.js";
import Airdrop from "./Airdrop.js";

function App() {
  return (
        <Routes>
          <Route path="/" element={<PageLinks />} />
          <Route path="/airdrop" element={<Airdrop />} />
        </Routes>
  );
}

export default App;
