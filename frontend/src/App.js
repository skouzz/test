import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import SignUp from "./components/Signup/Signup"; // Import the SignUp component
import SignIn from "./components/Signin/Signin"; // Import the SignIn component
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard"; // Import the Dashboard component
import Profile from "./components/Profile/Profile"; // Import the Profile component
import { Routes, Route } from "react-router-dom";

function App() {
  const [isopen, setisopen] = useState(false);
  const toggle = () => {
    setisopen(!isopen);
  };

  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isopen={isopen} toggle={toggle} />
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* Add this route */}
        <Route path="/profile" element={<Profile />} /> {/* Add this route */}
      </Routes>
    </>
  );
}

export default App;
