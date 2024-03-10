import { signInWithEmailLink, signInWithPopup } from "firebase/auth";
import React, { useState } from "react";
import { auth, googleprovider } from "../../index";
import './signupcomponent.css'; // Import the CSS file
import gmailsign from "../../Assets/elements/gmail.png"

const SignUpComponent = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const signUp = async (e) => {
    e.preventDefault();
    try {
      // Password validation logic
      const passwordRegex = 
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      console.log('Wrong:', signUp.user);
      if (!passwordRegex.test(password)) {
        setPasswordError("Password should be at least 12 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.");
        return; // Prevent sign-up if password is not strong enough
      }
      const userCredential = await signInWithEmailLink(auth, email, password);
      console.log('User signed up successfully:', userCredential.user);
      window.location.href = '/homepage';
    } catch (error) {
      console.error('Sign-up failed:', error.message);
    }
  };
  
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleprovider);
      window.location.href = '/homepage';
    } catch (err) {
      console.error(err);
    }
  };
  

  return (
    <div className="signup-box">
      <span className="signup-borderLine"></span>
      <form onSubmit={signUp}>
        <h2 className="signup-h2">Create an Account</h2>
        {passwordError && <p className="error-message" style={{ fontSize: "small" }}>{passwordError}</p>}
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
          <span>Password</span>
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
        <button onClick={signUp} className="signup-button">
          Start Learning
        </button>
        <button onClick={signInWithGoogle} className="gmail-sign">
        <img src={gmailsign} alt="gmailsing-alt" />
        </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpComponent;
