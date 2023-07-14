import React from 'react';
import { useNavigate } from 'react-router';
import TituloPokedex from '../components/TituloPokedex';
import LoginBox from '../components/LoginBox';
import '../styles/SingUp.scss';

function SingingUp() {
  const navigate = useNavigate();

  const goto = (url) => {
    navigate(url);
  };

  return (
    <div className="SingUp">
      <TituloPokedex />
      <div className="SingUpContent">
        <p>Create Account</p>
        <LoginBox />

        <button className="primaryButton" type="submit">
          Create Account
        </button>

        <div className="orSeparator">
          <div className="orLine" />
          <span>OR</span>
          <div className="orLine" />
        </div>

        <button className="secondaryButton" type="submit">
          Sign up with Google
        </button>

        <p>Have an account?</p>

        <button
          onClick={() => goto('/login')}
          className="tertiaryButton"
          type="submit"
        >
          Log in
        </button>

        <div className="info-policy">
          <p>By singing up, yoy agree our </p>
          <p>Terms of service</p>
          <p>and</p>
          <p>Privacy Policy.</p>
        </div>
      </div>
    </div>
  );
}

export default SingingUp;
