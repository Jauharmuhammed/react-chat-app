import React, { useContext, useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import Avatar from "../assets/avatar.jpg";

const Info = () => {
  const { currentUser } = useContext(AuthContext);

  // const [image, setImage] = useState(true);
  // const renderImage = async() => {
  //   await fetch(currentUser.photoURL)
  //     .catch((err) => { 
  //       setImage(false);
  //     });
  // };

  // useEffect(() => {
  //   renderImage();
  // }, []);

  const handleLogout = () => {
    localStorage.clear();
    console.log("removed");
    signOut(auth);
    console.log("signed out");
  };

  return (
    <div className="info">
      <div className="user">
        <span className="title">Profile Info</span>
        <div className="userInfo">
          <img
            src={currentUser.photoURL ? currentUser.photoURL : Avatar}
            alt="Profile Image"
          />
          <span className="profileName">{currentUser.displayName}</span>
          <span className="profileStatus">Active Now</span>
        </div>
      </div>
      <div className="bottom">
        <button onClick={handleLogout}>Logout</button>
        <span className="logo">Chat App</span>
      </div>
    </div>
  );
};

export default Info;
