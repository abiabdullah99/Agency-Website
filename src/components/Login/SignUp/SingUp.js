import React, { useState } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

const SingUp = () => {
  const [signInWithGoogle, googleuser, googleloading, googleError] =
    useSignInWithGoogle(auth);

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [errors, setError] = useState({
    email: "",
    password: "",
    generall: "",
  });

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
    createUserWithEmailAndPassword(userInfo.email, userInfo.password);
  };

  return (
    <div className="mb-20">
      <h2 className="text-center text-4xl font-semibold font-mono mt-32">
        Please Sign Up
      </h2>
      <form
        onSubmit={handleLoginFrom}
        className="flex flex-col md:px-0 font-mono px-20 md:w-4/12 mx-auto mt-10 acount-form"
      >
        <input
          className="mb-4 py-4 px-4 rounded"
          type="email"
          placeholder="Enter Your E-mail"
          name="email"
          onChange={HandleEmail}
        />
        <input
          className="mb-4 py-4 px-4 rounded"
          type="password"
          placeholder="Enter Your Password"
          name="Confirmpassword"
        />
        <input
          className="mb-4 py-4 px-4 rounded"
          type="Password"
          placeholder="Enter Your Confirm Password"
          name="password"
          onChange={HandlePassword}
        />
        <p className="text-secondary">
          All Ready Have Account ?
          <Link className="underline text-primary ml-2 text-lg" to="/login">
            Login
          </Link>
        </p>
        <button className="mt-10 rounded px-8 py-4 w-36 mx-auto bg-secondary text-lg font-semibold text-white">
          Submit
        </button>
        <div class="divider">OR</div>
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

export default SingUp;
