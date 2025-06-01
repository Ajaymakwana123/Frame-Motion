import React from "react";
import Home from "../Components/Home";
import User from "../Components/User";
import About from "../Components/About";
import { Route, Routes } from "react-router-dom";
import UserDetail from "../Components/UserDetail";

const Routin = () => {
  return (
    <Routes>
      {/* routes mtbl path rasta */}
      <Route path="/" element={<Home />}></Route>
      <Route path="/user" element={<User />}>
        <Route path="/user/:name" element={<UserDetail />} />
      </Route>
      <Route path="/about" element={<About />}></Route>
    </Routes>
  );
};

export default Routin;
