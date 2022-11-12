import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import VideosPage from './pages/Video'
function App() {
    return(
        <div>
          <Routes>
            <Route  path="/" element={<Home/>} ></Route>
            <Route path="/videos" element={<VideosPage/>} ></Route>
          </Routes>
        </div>
    )
    // return <InternTask/> ;
}

export default App;
