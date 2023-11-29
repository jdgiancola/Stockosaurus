import React from 'react';
import '../Styles/LoginPage.css';

const DonatePage = () => {
  return (
    <div className="Donate-container">
      <div className="Donate-form">
        <h2>Donate!</h2>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="amount" placeholder="Amount" />
          <button type="submit">Donate!</button>
        </form>
        <div className="Donate-footer">
        </div>
      </div>
      <div className="login-illustration">
        {/* Place your image or illustration here */}
      </div>
    </div>
  );
};

export default DonatePage;