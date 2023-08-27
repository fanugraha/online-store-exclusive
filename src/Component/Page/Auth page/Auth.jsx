import { useState } from "react";
import LoginCard from "../../Atom/Card/Login Card/LoginCard";
import RegisterCard from "../../Atom/Card/Register Card/RegisterCard";
import "./AuthPagestyle.css";

const AuthForm = () => {
  const [authType, setAuthType] = useState(true);

  const handleLogin = () => {
    setAuthType(true);
  };

  const handleRegister = () => {
    setAuthType(false);
  };

  return (
    <div className="container AuthPage">
      {authType === true && <LoginCard handleRegister={handleRegister} />}
      {authType === false && <RegisterCard handleLogin={handleLogin} />}
      <img src="src\assets\Image\authbg.png" alt="" />
    </div>
  );
};

export default AuthForm;
