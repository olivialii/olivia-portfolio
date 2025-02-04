import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Navbar } from "./components/Navbar/navbar";
import { Intro } from "./components/Intro/intro";
import { Footer } from "./components/Footer/footer"; 
import Projects from './components/Projects/projects';
import SearchNEU from './components/ProjectPage/SearchNEU';
import Mbta from './components/ProjectPage/mbta';
import AboutMe from './components/AboutMe/aboutme';
import Play from './components/Play/play';


function App() {
  
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path='/SearchNEU' element={<SearchNEU/>} />
          <Route path='/mbta' element={<Mbta />} />
          <Route path='/AboutMe' element={<AboutMe />} />
          <Route path='/Play' element={<Play />} />
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
