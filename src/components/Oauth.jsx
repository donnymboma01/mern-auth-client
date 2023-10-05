/* eslint-disable no-unused-vars */
import React from "react";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "@firebase/auth";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { signinSuccess } from "../redux/user/userSlice";

function Oauth() {
  const dispatch = useDispatch();

  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);
      const response = await fetch("/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });
      const data = await response.json();
      dispatch(signinSuccess(data));
      console.log(result);
    } catch (error) {
      console.log("could not login with google");
    }
  };

  return (
    <button
      type="button"
      className="bg-red-700 text-white rounded-lg p-3 uppercase hover:opacity-95"
      onClick={handleGoogleClick}
    >
      Continue with Google
    </button>
  );
}

export default Oauth;
