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
          <button type="submit" className='loginbtn'>Log in</button>
        </form>
        <div className="login-footer">
          <span>Don't have an account? <a href="/signup">Sign up</a></span>
        </div>
      </div>
      <div className="login-illustration">
        {/* Place your image or illustration here */}
      </div>
    </div>
  );
};

export default LoginPage;