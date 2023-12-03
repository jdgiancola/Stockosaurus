import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Swal from 'sweetalert2';
import Auth from '../utils/auth'; // Import Auth service for handling user authentication
import '../Styles/LoginPage.css';

// Define the functionality component for the login page
const LoginPage = () => {
  // State to manage form input values
  const [formState, setFormState] = useState({
    email: '',
    password: ''
  });

  // UseMutation hook to execute the ADD_USER mutation
  const [login, { error, data }] = useMutation(ADD_USER);

  // Function to handle input changes in the form
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState },
      });

      // Display success message with Sweet Alert
      Swal.fire({
        icon: 'success',
        title: 'Login Successful!',
        text: 'Welcome aboard Stockosaurus – the inventory adventure of a lifetime! Harness the strength of smart management and transform your business landscape.',
      });

      // Assuming Auth.login() is a function to handle user login, replace it with your actual logic
      Auth.login(data.addUser.token);
    } catch (e) {
      // Display error message with Sweet Alert
      Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: 'Invalid credentials. Please try again.',
      });
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Log In!</h2>
        <form onSubmit={handleFormSubmit}>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formState.email}
            onChange={handleInputChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formState.password}
            onChange={handleInputChange}
          />
          <button type="submit" className="loginbtn">Log in</button>
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
