import React from 'react';
import TituloPokedex from '../components/TituloPokedex';
import LoginBox from '../components/LoginBox';
import '../styles/SingUp.scss';

function SingUp() {
  return (
    <div className="SingUp">
      <TituloPokedex />
      <p>Create Account</p>
      <LoginBox />

      <button className="primaryButton" type="submit">
        Create Account
      </button>

      <div className='orSeparator'>

      <div className="orLine"/>
        {/* <p>or</p> */}
        <span>OR</span>
      <div className="orLine"/>
      </div>

      <button className="secondaryButton" type="submit">
        Sing up in with google
      </button>

      <p>Have an account?</p>

      <button className="tertiaryButton" type="submit">
        Log in
      </button>

      <div className="info-policy">
        <p>By singing up, yoy agree our </p>
        <p>Terms of service</p>
        <p>and</p>
        <p>Privacy Policy.</p>
      </div>
    </div>
  );
}

export default SingUp;
