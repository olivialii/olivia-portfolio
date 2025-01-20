
import styles from "./App.module.css";

import { Navbar } from "./components/Navbar/Navbar";
import { Intro } from "./components/Intro/intro";
import { Footer } from "./components/Footer/footer"; 


function App() {
  return (
  <div className={styles.App}>
    <Navbar />
    <Intro />
    <Footer />
  </div>
  ); 
}

export default App;
