import Navbar from "./components/Navbar";
// import {FaBars , FaTimes} from "react-icons/fa";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Experience/>
      <Projects/>
      <Contact/>

      <SocialLinks/>
    </div>
  );
}

export default App;
