import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Details from "../pages/Details";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />}/>
        <Route path="details/:name" element={<Details />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default Router;