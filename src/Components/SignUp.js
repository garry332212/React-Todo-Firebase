import React, { useState } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { Alert } from "react-bootstrap";

const SignUp = () => {
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setsignUpPassword] = useState("");
  const [signUpPasswordConfirm, setSignUpPasswordConfirm] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  //Creating User Account
  const submitSignUpHandler = async (e) => {
    e.preventDefault();
    if (!signUpEmail && !signUpPassword && !signUpPasswordConfirm) {
      return setError("Fill In All The Details");
    }
    if (!signUpEmail.includes(".com")) {
      return setError("Enter a Correct Email Address");
    }

    if (signUpPassword.trim().length < 6) {
      return setError("Password Should Be More Than 6 Characters");
    }

    if (signUpPassword !== signUpPasswordConfirm) {
      return setError("Passwords Do Not Match!");
    }

    try {
      setError("");
      setLoading(true);
      await auth.createUserWithEmailAndPassword(signUpEmail, signUpPassword);
      navigate("/todoinput", { replace: true });
    } catch {
      setError("Failed To Create An Account");
    }
    setLoading(false);
  };

  return (
    <>
      <div className="login">
        <div className="loginTitle signup">Sign Up To What-Todo</div>

        {error && <Alert variant="danger">{error}</Alert>}

        <form onSubmit={submitSignUpHandler}>
          <div className="form-group input1">
            <input
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Enter your email"
              autoComplete="current-email"
              onChange={(e) => setSignUpEmail(e.target.value)}
            />
          </div>
          <div className="form-group input2">
            <input
              type="password"
              className="form-control"
              placeholder="Create a password"
              autoComplete="current-password"
              onChange={(e) => setsignUpPassword(e.target.value)}
            />
          </div>
          <div className="form-group input3">
            <input
              type="password"
              className="form-control"
              placeholder="Confirm your password"
              autoComplete="current-password"
              onChange={(e) => setSignUpPasswordConfirm(e.target.value)}
            />
          </div>

          <button disabled={loading} type="submit" className="btn btn-primary ">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default SignUp;
