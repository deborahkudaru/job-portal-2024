import React, { useEffect, useState } from "react";
import Body from "./components/Body";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Footer from "./components/Footer";
import Workersignup from "./pages/Workersignup";
import Employersignup from "./pages/Employersignup";
import About from "./pages/About";
import ManualProfile from "./pages/ManualProfile";
import Dashboard from "./pages/Dashboard";
import { ToastContainer } from "react-toastify";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import { auth } from "./Firebase";
import WorkerProfile from "./pages/WorkerProfile";
import LoggedHome from "./pages/LoggedHome";
import WorkerHome from "./pages/WorkerHome";
import PostJob from "./pages/PostJob";
import PostedJobs from "./components/PostedJobs";
import Edit from "./components/Edit";
import Apply from "./pages/Apply";

const App = () => {
  // const [backendData, setBackendData] = useState([{}])

  // useEffect(() => {
  //   fetch("/api").then(
  //     response => response.json()
  //   ).then(
  //     data => {
  //       setBackendData(data)
  //     }
  //   )
  // }, [])

  const [user, setUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  });

  return (
    <div>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/about" element={<About />} />
        <Route path="/create-manually" element={<ManualProfile />} />
        {/* <Route path="/login" element={user ? <Navigate to="/profile" /> : <Login />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/worker-signup" element={<Workersignup />} />
        <Route path="/employer-signup" element={<Employersignup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/home" element={<Home />} />
        <Route path="/worker-profile" element={<WorkerProfile />} />
        <Route path="/logged-home" element={<LoggedHome />} />
        <Route path="/worker-home" element={< WorkerHome/>} />
        <Route path="/post-job" element={< PostJob/>} />
        <Route path="/posted-jobs" element={< PostedJobs/>} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/apply" element={<Apply />} />
      </Routes>
      <ToastContainer />
      <Footer />
    </div>
  );
};

export default App;
