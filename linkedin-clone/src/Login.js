import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
import { auth } from "./firebase";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = new useState("");
  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
    .then(userAuth => {
        dispatch(login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoURL: userAuth.user.photoURL
        }))
    }).catch(errors => alert(errors.message));
  };

  const register = () => {
    console.log("register clicked");
    if (!name) {
      return alert("Please enter a full name");
    }

    auth.createUserWithEmailAndPassword(email, password).
    then((userAuth) => {
      userAuth.user.updateProfile({
        displayName: name,
        photoURL: profilePic,
      })
      .then(() => {
          dispatch(login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: name,
            photoURL: profilePic
          }));
      })
    }).catch(error => alert(error.message));
  };

  return (
    <div className="login">
      <img
        src="https://1000logos.net/wp-content/uploads/2017/03/Linkedin-Logo.png"
        alt="Linkedin Logo"
      />
      <form>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name required if registering"
        />
        <input
          onChange={(e) => setProfilePic(e.target.value)}
          type="text"
          placeholder="Profile pic URL (optional)"
        />
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a member?{" "}
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
