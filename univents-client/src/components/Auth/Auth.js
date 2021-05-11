import React from "react";
import "./Auth.css";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";

function Auth({signIn, signUp}) {
  const [selectedContent, setSelectedContent] = React.useState(<SignIn signIn={signIn}/>);
  function switchToSignIn(e) {
    e.preventDefault();    
    setSelectedContent(<SignIn signIn={signIn}/>);
  }
  function switchToSignUp(e) {
    e.preventDefault();
    setSelectedContent(<SignUp signUp={signUp}/>);
  }
  return (
    <div className="auth-wrapper">
      <div className="auth__navigation">
        <a href="/" className={selectedContent.type === SignIn ? "auth__link-active" : ""} onClick={switchToSignIn}>Вход</a>
        <span> / </span>
        <a href="/" className={selectedContent.type === SignUp ? "auth__link-active" : ""} onClick={switchToSignUp}>Регистрация</a>
      </div>
      <div className="auth__content">{selectedContent}</div>
    </div>
  );
}
export default Auth;
