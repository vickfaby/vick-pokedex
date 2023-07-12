/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useNavigate } from 'react-router';
import LoginBox from '../components/LoginBox';
import '../styles/Login.scss';

function Login() {
  const navigate = useNavigate();

  const goto = (url) => {
    navigate(url);
  };

  return (
    <div className="Login">
      <span
        onClick={() => goto('/singup')}
        className="material-symbols-outlined"
      >
        arrow_back_ios
      </span>
      <div className="loginTitle">
        <p>Pokédex</p>
        <div className="orLine" />
      </div>
      <div className="LoginContent">
        <LoginBox />
        <button
          onClick={() => goto('/loadingscreen')}
          className="primaryButton"
          type="submit"
        >
          Accept
        </button>
        <button className="secondaryButton" type="submit">
          Cancel
        </button>

        <div className="orSeparator">
          <div className="orLine" />
          <span>OR</span>
          <div className="orLine" />
        </div>

        <button className="tertiaryButton" type="submit">
          Log in with Google
        </button>

        <p>Have an account?</p>
        <button
          onClick={() => goto('/singup')}
          className="tertiaryButton"
          type="submit"
        >
          Sing up
        </button>

        <div className="info-policy">
          <p>By singing up, yoy agree our </p>
          <p>Terms of service</p>
          <p>and</p>
          <p onClick={() => goto('/privacypolicy')}>Privacy Policy.</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
