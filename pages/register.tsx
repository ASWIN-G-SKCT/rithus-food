import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  OAuthCredential,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { login } from "../store/features/userSlice";
import { auth, db } from "../firebase";
import { User } from "../interfaces/types";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const addUserToCollection = async (user: User): Promise<void> => {
    await setDoc(doc(db, "users", user.id), user);
  };

  const onEmailPasswordLogin = async () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user: authUser }) => {
        const user = {
          name,
          id: authUser.uid,
          email: authUser.email,
          verified: authUser.emailVerified,
          admin: false,
        };
        addUserToCollection(user).then(() => {
          dispatch(login(user));
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode + errorMessage);
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
        const authUser = result.user;
        const user = {
          id: authUser.uid,
          name: authUser.displayName,
          email: authUser.email,
          verified: authUser.emailVerified,
          admin: false,
        };

        addUserToCollection(user).then(() => {
          dispatch(login(user));
        });

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

  const onFacebookLogin = () => {
    const provider = new FacebookAuthProvider();
    let signedInUser;
    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const authUser = result.user;

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential?.accessToken;

        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);
        alert(errorMessage);
        // ...
      });

    return signedInUser;
  };

  return (
    <form>
      <h1>Register</h1>
      <input
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="button" onClick={onEmailPasswordLogin}>
        Submit
      </button>

      <hr></hr>
      <button type="button" onClick={onGoogleLogin}>
        Continue With Google
      </button>
      <button type="button" onClick={onFacebookLogin}>
        Continue With Facebook
      </button>
    </form>
  );
};

export default Register;
