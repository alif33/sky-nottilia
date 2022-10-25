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
import ContactInfo from "./Pages/LandingPage/Setting/ContactInfo";
import Refferals from "./Pages/LandingPage/Setting/Refferals";
import InviteAFriend from "./Pages/LandingPage/Setting/InviteAFriend";
import Menu from "./Pages/LandingPage/Setting/Menu/Menu";
import Billing from "./Pages/LandingPage/Setting/Billing";
import Overview from "./Pages/LandingPage/Setting/Menu/Overview";
import SignInMethod from "./Pages/LandingPage/Setting/Menu/SignInMethod";
import BasicInformation from "./Pages/LandingPage/Setting/Menu/BasicInformation";
import ConnectedAccount from "./Pages/LandingPage/Setting/Menu/ConnectedAccount";
import Notifications from "./Pages/LandingPage/Setting/Menu/Notifications";
import DeactivateAccount from "./Pages/LandingPage/Setting/Menu/DeactivateAccount";
import ChartPage from "./Pages/LandingPage/ChartPage/ChartPage";
import NotePage from "./Pages/LandingPage/NotePage/NotePage";
import Message from "./Pages/LandingPage/Message/Message";
import PostScheduler from "./Pages/LandingPage/Post Scheduler/PostScheduler";

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
          <Route path="post-scheduler" element={<PostScheduler />}></Route>
          <Route path="chart-page" element={<ChartPage />}></Route>
          <Route path="note-page" element={<NotePage />}></Route>
          <Route path="message" element={<Message />}></Route>
          <Route path="setting" element={<SettingPage1 />}>
            <Route index element={<Menu />}></Route>
            <Route path="menu" element={<Menu />}>
              <Route index element={<Overview />}></Route>
              <Route path="sign-in-method" element={<SignInMethod />}></Route>
              <Route
                path="basic-information"
                element={<BasicInformation />}
              ></Route>
              <Route
                path="connected-account"
                element={<ConnectedAccount />}
              ></Route>
              <Route path="notifications" element={<Notifications />}></Route>
              <Route
                path="deactivate-account"
                element={<DeactivateAccount />}
              ></Route>
            </Route>
            <Route path="billing" element={<Billing />}></Route>
            <Route path="contact-info" element={<ContactInfo />}></Route>
            <Route path="refferals" element={<Refferals />}></Route>
            <Route path="invite-a-friend" element={<InviteAFriend />}></Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
