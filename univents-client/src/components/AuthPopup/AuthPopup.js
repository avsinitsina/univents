import { Modal } from "react-bootstrap";
import Auth from "../Auth/Auth";
import React from "react";

function AuthPopup({ signIn, signUp, show, onHide }) {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Body>
        <Auth signIn={signIn} signUp={signUp}/>
      </Modal.Body>
    </Modal>
  );
}

export default AuthPopup;
