
import Blog from "./components/blog";
import Countdown from "./components/countdown";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import New from "./components/new";
import Premium from "./components/premium";
import Products from "./components/products";
import "./index.css"
import {BrowserRouter, Router, Route} from "react-router-dom"

function App() {
  return (
    <div>
      
    <Navbar/>
    
    <Hero/>
    <Countdown/>
    <Products/>
    <Premium/>
    <Blog/>
    <New/>
    <Footer/>
    
    </div>
    
  );
}

export default App;
