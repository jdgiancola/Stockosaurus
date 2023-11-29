import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
 import { ADD_USER } from '../utils/mutations'; // Replace 'path-to-your-mutation' with the actual path

const SignupPage = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      // Assuming Auth.login() is a function to handle user login, replace it with your actual logic
      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form-container">
        <h2>Create an account</h2>
        <p>Let's get started!</p>

        {data ? (
          <p>
            Success! You may now head{' '}
            <Link to="/">back to the homepage.</Link>
          </p>
        ) : (
          <form className="signup-form" onSubmit={handleFormSubmit}>
            <input
              className="form-input"
              placeholder="Your username"
              name="username"
              type="text"
              value={formState.username}
              onChange={handleInputChange}
            />
            <input
              className="form-input"
              placeholder="Your email"
              name="email"
              type="email"
              value={formState.email}
              onChange={handleInputChange}
            />
            <input
              className="form-input"
              placeholder="******"
              name="password"
              type="password"
              value={formState.password}
              onChange={handleInputChange}
            />
            <button
              className="btn-signup"
              style={{ cursor: 'pointer' }}
              type="submit"
            >
              Submit
            </button>
          </form>
        )}

        {error && (
          <div className="error-message">
            {error.message}
          </div>
        )}
      </div>
    </div>
  );
};

export default SignupPage;


