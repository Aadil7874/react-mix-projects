import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import About from "../About/About";

function Layout() {
  return (
    <>
      <Routes>
        <Route path="/header" element={<Header />} />
        <Route path="/routing/about" element={<About />} />
        <Navigate to={<About />} />
        {/* <Route path="/about" element={<Header />} /> */}
      </Routes>
    </>
  );
}

export default Layout;
