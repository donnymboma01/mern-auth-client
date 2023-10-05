/* eslint-disable no-unused-vars */
import React from "react";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "@firebase/auth";
import { app } from "../firebase";

function Oauth() {
  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);
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
