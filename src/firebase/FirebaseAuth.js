import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  getAuth,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { auth, db } from "./firebase-config";
import { addDoc, collection } from "firebase/firestore";

const FirebaseAuth = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [userInfo, setUserInfo] = useState("");
  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      setUserInfo(currentUser);
    } else {
      setUserInfo("");
    }
  });
  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const handleCreateUser = async (e) => {
    e.preventDefault();
    try {
      // credentials
      const cred = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );

      await updateProfile(auth.currentUser, {
        displayName: "Tran Anh Tuan",
      });
      setUserInfo(cred);
      console.log("Success!!");
      const userRef = collection(db, "users");
      await addDoc(userRef, {
        email: values.email,
        password: values.password,
        id: cred.user.uid,
      });
    } catch (err) {
      console.log(err);
    }

    // console.log("handleCreateUser ~ updatedUser", updatedUser);

    // console.log("handleCreateUser ~ user", user);
    // if (user) setUserInfo(user);
    // console.log("Create user successfully");
  };
  const handleSignOut = () => {
    signOut(auth);
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    const cred = await signInWithEmailAndPassword(
      auth,
      values.email,
      values.password
    );
    setUserInfo(cred);
    console.log("Login successfully!");
  };
  return (
    <>
      <div className="w-full max-w-[500px] mx-auto bg-white shadow-lg p-5 mb-10">
        <form onSubmit={handleCreateUser}>
          <input
            type="email"
            className="p-3 rounded border border-gray-200 w-full mb-5 outline-none focus:border-blue-500"
            name="email"
            onChange={handleInputChange}
            placeholder="Enter your email address"
          />
          <input
            type="password"
            className="p-3 rounded border border-gray-200 w-full mb-5 outline-none focus:border-blue-500"
            name="password"
            onChange={handleInputChange}
            placeholder="Enter your password"
          />
          <button
            type="submit"
            className="p-3 bg-blue-500 text-white text-sm font-medium w-full rounded-lg"
          >
            SignUp
          </button>
        </form>
        <div className="mt-10 flex items-center gap-x-5">
          <span>{userInfo?.displayName}</span>
          <button
            className="p-3 bg-purple-500 text-white text-sm font-medium rounded-lg"
            onClick={handleSignOut}
          >
            SignOut
          </button>
        </div>
      </div>
      <div className="w-full max-w-[500px] mx-auto bg-white shadow-lg p-5 mb-10">
        <form onSubmit={handleLogin}>
          <input
            type="email"
            className="p-3 rounded border border-gray-200 w-full mb-5 outline-none focus:border-blue-500"
            name="email"
            onChange={handleInputChange}
            placeholder="Enter your email address"
          />
          <input
            type="password"
            className="p-3 rounded border border-gray-200 w-full mb-5 outline-none focus:border-blue-500"
            name="password"
            onChange={handleInputChange}
            placeholder="Enter your password"
          />
          <button
            type="submit"
            className="p-3 bg-pink-500 text-white text-sm font-medium w-full rounded-lg"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default FirebaseAuth;
