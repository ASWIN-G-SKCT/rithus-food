import React, { useState } from "react";
import { auth, db } from "../firebase";
import {
  GoogleAuthProvider,
  OAuthCredential,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { login } from "store/features/userSlice";
import { User } from "interfaces/types";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(async ({ user: authUser }) => {
        const userRef = doc(db, "users", authUser.uid);
        const userSnap = await getDoc(userRef);
        // TODO: Validate UserSnap interface
        if (userSnap.exists()) {
          const userData = userSnap.data();
          const user = {
            name: userData.name,
            id: userData.id,
            email: userData.email,
            verified: userData.verified || false,
            admin: userData.admin || false,
          };

          dispatch(login(user));

          alert("Logged in");
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode);
      });
  };

  const onGoogleLogin = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = (credential as OAuthCredential)?.accessToken;
        // The signed-in user info.
        const user = result.user;
        // dispatch(login(user));
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  // const onFacebookLogin = () => {
  //   const provider = new FacebookAuthProvider();

  //   signInWithPopup(auth, provider)
  //     .then((result) => {
  //       // The signed-in user info.
  //       const user = result.user;

  //       // This gives you a Facebook Access Token. You can use it to access the Facebook API.
  //       const credential = FacebookAuthProvider.credentialFromResult(result);
  //       const accessToken = credential?.accessToken;

  //       // ...
  //     })
  //     .catch((error) => {
  //       // Handle Errors here.
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       // The email of the user's account used.
  //       const email = error.customData.email;
  //       // The AuthCredential type that was used.
  //       const credential = FacebookAuthProvider.credentialFromError(error);
  //       alert(errorMessage);
  //       // ...
  //     });
  // };

  return (
    <form onSubmit={onSubmitHandler}>
      <h1>Login</h1>
      <input placeholder="email" onChange={(e) => setEmail(e.target.value)} />
      <input
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button>Submit</button>
      <hr></hr>
      <button>Continue With Google</button>
      <button>Continue With Facebook</button>
    </form>
  );
};

export default Login;
