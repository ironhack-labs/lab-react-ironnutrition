import React, { setState } from "react";
import { Redirect } from "react-router-dom";

const FormButton = () => {
  const state = {
    redirect: false
  };
  const setRedirect = () => {
    const setState = {
      redirect: true
    };
  };
  const renderRedirect = () => {
    if (state.redirect) {
      return (
        <Redirect to="https://medium.com/@anneeb/redirecting-in-react-4de5e517354a" />
      );
    }
  };

  return (
    <div>
      {renderRedirect()}
      <button onClick={setRedirect}>Redirect</button>
    </div>
  );
};

export default FormButton;
