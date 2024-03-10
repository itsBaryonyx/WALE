import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './navbarinside.css';
import logoinside from '../../Assets/elements/logo.png';
import { db } from '../../index';
import { collection, query, where, getDocs } from 'firebase/firestore';
import User from './user'; // Import the User component

const NavbarInside = () => {
  const currentUser = User(); // Get the current user from the User component
  const [firstName, setFirstName] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Assuming the user's data is stored in a collection named 'users'
        const userCollectionRef = collection(db, 'users');
        const q = query(userCollectionRef, where("email", "==", currentUser.email));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const userData = querySnapshot.docs[0].data();
          setFirstName(userData.firstname || 'Student'); // Set user's first name or default to 'Student'
        } else {
          console.log('User data not found.');
          setFirstName('Student'); // Default to 'Student' if user data not found
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        setFirstName('Student'); // Default to 'Student' in case of an error
      }
    };

    if (currentUser) {
      fetchUserData();
    }
  }, [currentUser]);

  return (
    <div className="navbarinsidecontainer">
      <div className="navbarinside">
        <img className="logoinside" src={logoinside} alt="Logo" />
        <Link to="/homepage" className="navbarinsidelogo">
          WALE
        </Link>
        <div className="userinfo">
          <div className="greet">
            {/* Display the user's first name if available, otherwise default to "Student" */}
            <p>Welcome, {firstName}!</p>
          </div>
          <div className="profile">
            <a href="/profile">
              {currentUser && currentUser.photoURL && <img src={currentUser.photoURL} alt="alt-profile" />}
            </a>
          </div>
          <div>
            <Link to="/" className="logout-in">
              Log-Out
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarInside;
