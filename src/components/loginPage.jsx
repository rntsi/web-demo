import React, { useState } from "react";
import LoginForm from "./loginForm";
import Landing from "./landing";

function LoginPage() {
  const [user, setUser] = useState({ name: "", email: "", password:""});
  const [error, setError] = useState("");

  const Login = (credential) => {
    console.log(credential);

    setUser({
        name: credential.name,
        email: credential.email
    });
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-400">
      <div className="w-7/12 h-5/6">
        {user.email != "" ? (
          <Landing name = {user.name}/>
        ) : (
          <LoginForm Login={Login} error={error} />
        )}
      </div>
    </div>
  );
}

export default LoginPage;
