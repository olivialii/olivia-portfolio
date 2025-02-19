import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Navbar } from "./components/Navbar/navbar";
import { Intro } from "./components/Intro/intro";
import { Footer } from "./components/Footer/footer"; 
import Projects from './components/Projects/projects';
import SearchNEU from './components/ProjectPage/SearchNEU';
import Mbta from './components/ProjectPage/mbta';
import AboutMe from './components/AboutMe/aboutme';
import Play from './components/Play/play';
import Game from './components/ProjectPage/game';
import { ScrollToTop } from './utils';
import Fridge from './components/ProjectPage/fridge';
import Dailp from './components/ProjectPage/DAILP';


function App() {
  
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path='/SearchNEU' element={<SearchNEU/>} />
          <Route path='/mbta' element={<Mbta />} />
          <Route path='/AboutMe' element={<AboutMe />} />
          <Route path='/Play' element={<Play />} />
          <Route path='/Game' element={<Game />} />
          <Route path='/Fridge' element={<Fridge />} />
          <Route path='/DAILP' element={<Dailp />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Projects />} />
        </Routes>
        <Footer />
      </div>
      
    </Router>
  );
}

export default App;
