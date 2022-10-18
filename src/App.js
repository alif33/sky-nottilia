import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Home from "./Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import SignIn from "./Pages/Auth/SignIn";
import SignUp from "./Pages/Auth/SignUp";
import ForgotPassword from "./Pages/Auth/ForgotPassword";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </div>
  );
}

export default App;
