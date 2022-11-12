import { Route, Routes } from "react-router-dom";
import "./App.css";
<<<<<<< HEAD
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";
import Section3 from "./components/Section3/Section3";
import Section4 from "./components/Section4/Section4";
import Section5 from "./components/Section5/Section5";
import Section6 from "./components/Section6/Section6";
import Section7 from "./components/Section7/Section7";
import VideosPage from "./components/videosPage/VideosPage";
import InternTask from "./InternTask/InternTask";

function App() {
    return(
        <div>
        <VideosPage/>
        {/* <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5/>
        <Section6/>
        <Section7/>
        <Footer/> */}
=======
import Home from "./pages/Home";
import VideosPage from './pages/Video'
function App() {
    return(
        <div>
          <Routes>
            <Route  path="/" element={<Home/>} ></Route>
            <Route path="/videos" element={<VideosPage/>} ></Route>
          </Routes>
>>>>>>> 559ced5f4474eeb8e51d65cf1a73487b6267c0f5
        </div>
    )
    // return <InternTask/> ;
}

export default App;
