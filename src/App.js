import About from "./Components/About";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import SocialLinks from "./Components/SocialLinks";



function App() {
  return (
   <div >
    <Navbar></Navbar>
    <Home></Home>
    <About></About>
    <SocialLinks></SocialLinks>
    <Experience></Experience>
    <Contact></Contact>
   </div>
  );
}

export default App;
