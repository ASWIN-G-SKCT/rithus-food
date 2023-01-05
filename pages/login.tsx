import React, { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { login } from "../store/features/userSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch(login(user));
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode);
      });
  };
  return (
    <form onSubmit={onSubmitHandler}>
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
