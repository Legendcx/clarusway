import {BrowserRouter, Route, Routes} from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Detail from "../pages/Detail";
import Home from "../pages/Home";

const Router = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      {/* <Route index path="/" element={<Home/>} /> */}
      <Route path="/detail" element={<Detail/>} />
    </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default Router