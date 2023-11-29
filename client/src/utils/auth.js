// Desc: Authentication service for managing user authentication using JSON Web Tokens (JWT).

// Import the jwt-decode library for decoding JWT tokens
import * as jwt_decode from 'jwt-decode';

// Create a new class to instantiate a user authentication service
class AuthService {
  // Method to get the user profile by decoding the JWT token
  getProfile() {
    return jwt_decode(this.getToken());
  }

  // Method to check if the user is logged in based on the presence and validity of the JWT token
  loggedIn() {
    const token = this.getToken();
    // If there is a token and it is not expired, return true
    return token && !this.isTokenExpired(token) ? true : false;
  }

  // Method to check if a given JWT token is expired
  isTokenExpired(token) {
    try {
      // Decode the token to get the expiration timestamp
      const decoded = decode(token);
      // Compare the expiration timestamp with the current time
      if (decoded.exp < Date.now() / 1000) {
        return true; // Token is expired
      } else {
        return false; // Token is not expired
      }
    } catch (err) {
      console.log('Token expired check failed! Line 48 AuthService.js');
      return false; // Token decoding failed, consider it not expired
    }
  }

  // Method to get the JWT token from localStorage
  getToken() {
    return localStorage.getItem('id_token');
  }

  // Method to handle user login by storing the JWT token in localStorage and redirecting to the root path
  login(idToken) {
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  }
}



// Export an instance of the AuthService class
export default new AuthService();

