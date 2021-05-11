import "./App.css";
import Header from "./components/Header/Header";
import AuthPopup from "./components/AuthPopup/AuthPopup";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false);
  function onHide() {
    setShow(false);
  }
  function showPopup() {
    setShow(true);
  }
  function logout() {
    console.log("Вы вышли");
    setIsAuthorized(false);
  }
  function signIn() {
    setIsAuthorized(true);
    setShow(false);
    console.log("Вы авторизованы");
  }
  function signUp() {
    setIsAuthorized(true);
    setShow(false);
    console.log("Вы зарегистрированы");
  }
  return (
    <>
      <Header
        onLogin={showPopup}
        onLogout={logout}
        isAuthorized={isAuthorized}
      />
      <div className="container">
        <AuthPopup
          show={show}
          onHide={onHide}
          signIn={signIn}
          signUp={signUp}
        />
      </div>
    </>
  );
}

export default App;
