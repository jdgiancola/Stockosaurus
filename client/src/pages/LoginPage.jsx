import React from 'react';
import '../Styles/LoginPage.css';

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Log In!</h2>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Sign up</button>
        </form>
        <button className="email-button">Continue with email</button>
        <div className="login-footer">
          <span>Already have an account? <a href="/login">Log in</a></span>
        </div>
      </div>
      <div className="login-illustration">
        {/* Place your image or illustration here */}
      </div>
    </div>
  );
};

export default LoginPage;