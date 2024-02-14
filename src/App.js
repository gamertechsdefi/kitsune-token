import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header.js';
import Main from './Main.js';
import Roadmap from './Roadmap.js';
import Tokenomics from './Tokenomics.js'
import SectionB from './SectionB.js';
import KeepersBuy from './Howtobuy.js';
import JoinOurCommunity from './Community.js';


function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <SectionB />
      <Roadmap  />
      <Tokenomics />
      <KeepersBuy />
      <JoinOurCommunity />
    </div>
  );
}

export default App;
