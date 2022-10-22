import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Home from "./Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import SignIn from "./Pages/Auth/SignIn";
import SignUp from "./Pages/Auth/SignUp";
import ForgotPassword from "./Pages/Auth/ForgotPassword";
import StartupScreen1 from "./Pages/StartupScreen/StartupScreen1";
import StartupScreen2 from "./Pages/StartupScreen/StartupScreen2";
import StartupScreen3 from "./Pages/StartupScreen/StartupScreen3";
import StartupScreen4 from "./Pages/StartupScreen/StartupScreen4";
import LandingPage from "./Pages/LandingPage/LandingPage";
import LandingPage1 from "./Pages/LandingPage/LandingPage1";
import History from "./Pages/LandingPage/History";
import SettingPage1 from "./Pages/LandingPage/Setting/SettingPage1";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/startup-screen1" element={<StartupScreen1 />} />
        <Route path="/startup-screen2" element={<StartupScreen2 />} />
        <Route path="/startup-screen3" element={<StartupScreen3 />} />
        <Route path="/startup-screen4" element={<StartupScreen4 />} />
        <Route path="/landing-page" element={<LandingPage />}>
          <Route index element={<LandingPage1 />}></Route>
          <Route path="history" element={<History />}></Route>
          <Route path="setting" element={<SettingPage1 />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
