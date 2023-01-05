import React from "react";

const Login = () => {
  return (
    <div>
      <input placeholder="email" />
      <input placeholder="password"></input>
      <button>Submit</button>
      <hr></hr>
      <button>Continue With Google</button>
      <button>Continue With Facebook</button>
    </div>
  );
};

export default Login;
