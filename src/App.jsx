import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from "./App.module.css";

import { Navbar } from "./components/Navbar/Navbar";
import { Intro } from "./components/Intro/intro";
import { Footer } from "./components/Footer/footer"; 
import Projects from './components/Projects/Projects';
import ProjectPage from './components/ProjectPage/ProjectPage';


function App() {
  
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path='/ProjectPage' element={<ProjectPage/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
