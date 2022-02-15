import React from "react";

function Login({ setUser }) {
  return <button onClick={() => setUser(true)}>Login</button>;
}

export default Login;
