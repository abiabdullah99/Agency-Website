import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
const Login = () => {
  const [signInWithGoogle, googleuser, googleloading, googleError] =
    useSignInWithGoogle(auth);
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [errors, setError] = useState({
    email: "",
    password: "",
    generall: "",
  });

  const [signInWithEmailAndPassword, user, loading, Hookerror] =
    useSignInWithEmailAndPassword(auth);

  const HandleEmail = (e) => {
    const emailRegex = /\S+@\S+\.\S+/;
    const validEmail = emailRegex.test(e.target.value);
    if (validEmail) {
      setUserInfo({ ...userInfo, email: e.target.value });
      setError({ ...errors, email: "" });
    } else {
      setUserInfo({ ...userInfo, email: "Invalid Email" });
      setError({ ...errors, email: "" });
    }
  };

  const HandlePassword = (e) => {
    const passWordRegex = /.{6,}/;
    const validPassword = passWordRegex.test(e.target.value);
    if (validPassword) {
      setUserInfo({ ...userInfo, password: e.target.value });
      setError({ ...errors, password: "" });
    } else {
      setUserInfo({ ...userInfo, password: "Minimum 6 characters!" });
      setError({ ...errors, password: "" });
    }
  };
  const handleLoginFrom = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(userInfo.email, userInfo.password);
  };

  const Navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  useEffect(() => {
    if (user || googleuser) {
      Navigate(from);
    }
  }, [user, googleuser]);

  useEffect(() => {
    const error = Hookerror || googleError;
    if (error) {
      switch (error?.code) {
      }
    }
  }, []);
  return (
    <div className="mb-20 mx-auto">
      <h2 className="text-center text-4xl font-semibold font-mono mt-32">
        Please Login
      </h2>
      <form
        onSubmit={handleLoginFrom}
        className="flex flex-col md:px-0 font-mono px-20 md:w-4/12 mx-auto mt-10 acount-form"
      >
        <input
          onChange={HandleEmail}
          className="mb-4 py-4 px-4 rounded"
          type="email"
          placeholder="Enter Your E-mail"
          name="email"
        />
        <input
          onChange={HandlePassword}
          className="mb-4 py-4 px-4 rounded"
          type="password"
          placeholder="Enter Your Password"
          name="password"
        />
        <p className="text-secondary">
          New To Agency ?
          <Link className="underline text-primary ml-2 text-lg" to="/signup">
            Sign Up
          </Link>
        </p>
        <button className="mt-10 rounded px-8 py-4 w-36 mx-auto bg-secondary text-lg font-semibold text-white">
          Submit
        </button>
        <div className="divider">OR</div>
      </form>
      <button
        onClick={() => signInWithGoogle()}
        className="mt-4  flex justify-center rounded px-8 py-4 mx-auto bg-primary text-xl font-semibold text-white w-2/12"
      >
        Google
      </button>
    </div>
  );
};

export default Login;
