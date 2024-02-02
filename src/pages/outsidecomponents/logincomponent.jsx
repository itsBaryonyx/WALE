import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './LoginComponent.css'; // Don't forget to create this CSS file

const LoginComponent = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Check if username and password match the specified credentials
    if (username === 'Admin' && password === '123') {
      // Link to another page (you can replace '/home' with the desired path)
      window.location.href = '/home';
    } else {
      // Add logic to handle incorrect credentials (e.g., display an error message)
      console.log('Incorrect username or password');
    }
  };

  return (
    <div className="login-box">
      <span className="login-borderLine"></span>
      <form onSubmit={handleLogin}>
        <h2 className="login-h2">Student's Information</h2>
        <div className="login-inputBox">
          <input
            type="text"
            required="required"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <span>First Name and Last Name</span>
          <i></i>
        </div>
        <div className="login-inputBox">
          <input
            type={showPassword ? 'text' : 'password'}
            required="required"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span>Password</span>
          <i></i>
          {/* Add the checkbox for show/hide password */}
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
        {/* Use Link instead of a submit button */}
        <Link to="/home" className="start-learning">
          Start Learning
        </Link>
      </form>
    </div>
  );
};

export default LoginComponent;
