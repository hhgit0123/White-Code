import React, { useState, useEffect } from "react";
import LoginForm from "./LoginForm";
import Loading from "./Loading";
import { connect } from "react-redux";
const mapDispatchToProps = (dispatch) => {
  return {
    authenticate: (x) => {
      dispatch({ type: "LOG IN" });
    },
  };
};
function LoginPage(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [validationErrors, setValidationErrors] = useState({
    login: false,
    password: false,
  });
  function handleChange(e) {
    if (Object.values(validationErrors).indexOf(true) !== -1) {
      setValidationErrors({ login: false, password: false });
    }
    switch (e.target.name) {
      case "login":
        setLogin(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
      default:
        break;
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
  }
  function validateForm() {
    let isFormValid;
    let newValidationErrors = { login: false, password: false };
    if (login !== "login" || password !== "password") {
      isFormValid = false;
    } else {
      isFormValid = true;
    }
    if (login !== "login") {
      newValidationErrors.login = true;
    }
    if (password !== "password") {
      newValidationErrors.password = true;
    }
    setValidationErrors(newValidationErrors);
    return isFormValid;
  }
  useEffect(() => {
    if (isLoading) {
      let timeout = setTimeout(function () {
        setIsLoading(false);
        if (validateForm()) {
          props.authenticate();
        }
      }, 1000);
      return () => {
        window.clearTimeout(timeout);
      };
    }
  }, [isLoading]);
  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <LoginForm
        login={login}
        password={password}
        validationErrors={validationErrors}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    );
  }
}
export default connect(null, mapDispatchToProps)(LoginPage);
