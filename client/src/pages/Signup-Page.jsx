import React from 'react';

import '../Styles/Signup-Page.css';

const SignupPage = () => {
  return (
    <div className="signup-container">
      <div className="signup-form-container">
        <h2>Create an account</h2>
        <p>Let's get started!</p>
        <form className="signup-form">
          <div className="form-group">
            <input type="text" placeholder="Name" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Password" required />
          </div>
          <button type="submit" className="btn-signup">Sign Up</button>
        </form>
        <button className="btn-continue">Continue with email</button>
        <div className="login-link">
          Already have an account? <a href="/login">Login</a>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
