import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import React, { useState } from 'react';
import './logincomponent.css'; // Don't forget to create this CSS file
import { auth, googleprovider } from "../../index"; // Import the Google Auth provider
import { Link } from 'react-router-dom'; // Import Link
import gmailsign from "../../Assets/elements/gmail.png"

const LoginComponent = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('User signed in:', userCredential.user);
      // Redirect to another page (you can replace '/home' with the desired path)
      window.location.href = '/homepage';
    } catch (error) {
      console.error('Failed to sign in:', error.message);
      setError('Incorrect email or password');
    }
  };

  const signInWithGoogle = async () => {
    try {
      const userCredential = await signInWithPopup(auth, googleprovider);
      console.log('User signed in with Google:', userCredential.user);
      // Redirect to another page (you can replace '/home' with the desired path)
      window.location.href = '/homepage';
    } catch (error) {
      console.error('Failed to sign in with Google:', error.message);
    }
  };

  return (
    <div className="signup-box">
      <span className="signup-borderLine"></span>
      <form onSubmit={handleLogin}>
        <h2 className="signup-h2">Student's Information</h2>
        {error && <div className="error-message">{error}</div>}
        <div className="signup-inputBox">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <i></i>
        </div>
        <div className="signup-inputBox">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <i></i>
        </div>
        <div className="showpassword">
          <input
            type="checkbox"
            id="showPassword"
            onChange={togglePasswordVisibility}
          />
          <div>
            <span className="showpassword-text">Show Password</span>
          </div>
        </div>
        <div className="signbtn">
        <button type="submit" className="signup-button">
          Start Learning
        </button>
        <button onClick={signInWithGoogle} className="gmail-sign">
        <img src={gmailsign} alt="gmailsing-alt" />
        </button>
        </div>
      </form>
      <Link to="/signup" className="signup-link">
        Don't have an account? Sign Up
      </Link>
    </div>
  );
};

export default LoginComponent;
