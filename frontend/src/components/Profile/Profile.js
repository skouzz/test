// Profile.js
import React from "react";
import Navbar from "../Navbar/Navbar"; // Adjust the import path as necessary

const Profile = () => {
  return (
    <div>
      <Navbar isLoggedIn={true} /> {/* Assuming the user is logged in */}
      <h2>Profile</h2>
      {/* Add profile content here */}
    </div>
  );
};

export default Profile;
