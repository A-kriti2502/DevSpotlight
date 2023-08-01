import Navbar from "./components/Navbar";
// import {FaBars , FaTimes} from "react-icons/fa";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useState } from "react";
// import Aboutme from "./components/Aboutme";

function App() {

  const [nav , setnav] = useState(false);

  return (
    <div>
      <Navbar nav={nav} setnav={setnav}/>
      <Home nav={nav} setnav={setnav}/>
      <Experience/>
      {/* <Aboutme/> */}
      <Projects/>
      <Contact/>
      <SocialLinks/>
    </div>
  );
}

export default App;
