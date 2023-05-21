import React from 'react';
import '../styles/LoginBox.scss';

function LoginBox() {
  return (
    <div className="LoginBox">
      <div className="inputsContainer">

        <p>Email</p>
        <div className="inputLogin">
          <input placeholder="AshKetchum@example.com" />
        </div>

        <p>Password</p>
        <div className="inputLogin">
          <input placeholder="******" />
        </div>

        <p>password must contain almost 6 charters</p>

      </div>
    </div>
  );
}

export default LoginBox;
