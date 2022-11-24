import React, { useState } from "react";
import {Link, useNavigate} from 'react-router-dom'
import addAvatar from "../assets/add-image.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

function Register() {
  const [error, setError] = useState(false);
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const avatar = e.target[3].files[0];

    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);


      await uploadBytesResumable(storageRef, avatar).then(()=>{
        getDownloadURL(storageRef).then(async (downloadURL) => {
          await updateProfile(response.user, {
            displayName,
            photoURL:downloadURL,
          });
          await setDoc(doc(db, "users", response.user.uid), {
            uid: response.user.uid,
            displayName,
            email,
            photoURL:downloadURL,
          });

          await setDoc(doc(db, 'userChats', response.user.uid), {})
          navigate('/')
        });
      })

    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat App</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Display Name" />
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="file" id="image" hidden />
          <label htmlFor="image">
            <img src={addAvatar} alt="" />
            <span className="avatarText">Add a Profile Picture</span>
          </label>
          {error && <span className="error">Something Went Wrong</span>}
          <button>Signup</button>
        </form>
        <p>Already have an account? <Link to='/login' className="link" >Login</Link></p>
      </div>
    </div>
  );
}

export default Register;
