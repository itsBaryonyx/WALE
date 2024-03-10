import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../02. Admin components CSS/navbaradmin.css';
import logoinside from '../../Assets/elements/logo.png';
import { db } from '../../index';
import { collection, query, where, getDocs } from 'firebase/firestore';
import User from '../../pages/insidecomponents/user'; // Import the User component

const Navbaradmin = () => {
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
    <div className="admin-navbarinsidecontainer">
      <div className="admin-navbarinside">
        <img className="admin-logoinside" src={logoinside} alt="Logo" />
        <Link to="/adminhomepage" className="admin-navbarinsidelogo">
          WALE
        </Link>
        <div className="admin-userinfo">
          <div className="admin-greet">
            {/* Display the user's first name if available, otherwise default to "Student" */}
            <p>Welcome, {firstName}!</p>
          </div>
          <div className="admin-profile">
            <a href="/profile">
              {currentUser && currentUser.photoURL && <img src={currentUser.photoURL} alt="alt-profile" />}
            </a>
          </div>
          <div>
            <Link to="/" className="admin-logout-in">
              Log-Out
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbaradmin;
