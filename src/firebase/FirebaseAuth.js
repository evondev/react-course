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
import { useEffect } from "react";

const FirebaseAuth = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [userInfo, setUserInfo] = useState("");
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUserInfo(currentUser);
      } else {
        setUserInfo("");
      }
    });
  }, []);
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
            className="w-full p-3 mb-5 border border-gray-200 rounded outline-none focus:border-blue-500"
            name="email"
            onChange={handleInputChange}
            placeholder="Enter your email address"
          />
          <input
            type="password"
            className="w-full p-3 mb-5 border border-gray-200 rounded outline-none focus:border-blue-500"
            name="password"
            onChange={handleInputChange}
            placeholder="Enter your password"
          />
          <button
            type="submit"
            className="w-full p-3 text-sm font-medium text-white bg-blue-500 rounded-lg"
          >
            SignUp
          </button>
        </form>
        <div className="flex items-center mt-10 gap-x-5">
          <span>{userInfo?.displayName}</span>
          <button
            className="p-3 text-sm font-medium text-white bg-purple-500 rounded-lg"
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
            className="w-full p-3 mb-5 border border-gray-200 rounded outline-none focus:border-blue-500"
            name="email"
            onChange={handleInputChange}
            placeholder="Enter your email address"
          />
          <input
            type="password"
            className="w-full p-3 mb-5 border border-gray-200 rounded outline-none focus:border-blue-500"
            name="password"
            onChange={handleInputChange}
            placeholder="Enter your password"
          />
          <button
            type="submit"
            className="w-full p-3 text-sm font-medium text-white bg-pink-500 rounded-lg"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default FirebaseAuth;
