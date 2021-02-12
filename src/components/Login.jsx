import React from "react";
import { useStateValue } from "../StateProvider";

function Login() {
  const [state, dispatch] = useStateValue();
  const loginToApp = () => {
    dispatch({
      type: "SET_USER",
      user: "Vinothkumar",
    });
  };
  return (
    <div>
      <h1>Login Component</h1>
      <button onClick={loginToApp}>{state.user ? "Logout" : "Login"}</button>
    </div>
  );
}

export default Login;
