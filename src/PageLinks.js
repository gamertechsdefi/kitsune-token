import React from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import SectionB from "./SectionB.js";
import Roadmap from "./Roadmap.js";
import Tokenomics from "./Tokenomics.js";
import KeepersBuy from "./Howtobuy.js";
import JoinOurCommunity from "./Community.js";


export default function PageLinks() {

  return (
    <div>
      <Header />
      <Main />
      <SectionB />
      <Roadmap />
      <Tokenomics />
      <KeepersBuy />
      <JoinOurCommunity />
    </div>
  );
}
