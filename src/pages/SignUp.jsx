import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import HeaderContainer from "../containers/Header";
import FooterContainer from "../containers/Footer";
import { Form } from "../components";
import * as ROUTES from "../constants/routes";
import { FirebaseContext } from "../context/FirebaseContext";

const SignUp = () => {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [firstName, setFirstName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();

  const isInvalid = firstName === "" || emailAddress === "" || password === "";

  const handleSignUp = (e) => {
    e.preventDefault();

    firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((result) => {
        result.user
          .updateProfile({
            displayName: firstName,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => {
            history.push(ROUTES.BROWSE);
          });
      })
      .catch((error) => {
        setFirstName("");
        setEmailAddress("");
        setPassword("");
        setError(error.message);
      });
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignUp} method="POST">
            <Form.Input
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <Form.Input
              placeholder="Email"
              type="email"
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
            />
            <Form.Input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Form.Submit disabled={isInvalid} type="submit">
              Sign Up
            </Form.Submit>
            <Form.Text>
              Already have an account? &nbsp;
              <Form.Link to={ROUTES.SIGN_IN}>Sign In</Form.Link>
            </Form.Text>
            <Form.TextSmall>
              This page is protected by Google reCaptcha to ensure that you are
              not a bot
            </Form.TextSmall>
          </Form.Base>
        </Form>
      </HeaderContainer>
      <FooterContainer></FooterContainer>
    </>
  );
};

export default SignUp;
