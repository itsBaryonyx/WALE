import React, { useEffect, useState } from 'react';
import './mainscreenprofile.css';
import bg1 from '../../Assets/background/bg1.jpg';
import { db } from '../../index';
import { collection, addDoc, updateDoc, getDocs } from 'firebase/firestore';
import User from './user';

export function Mainscreenprofile() {
  const [userData, setUserData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    address: '',
    contact: ''
  });

  const currentUser = User(); // Get the current user from the User component

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Assuming the user's data is stored in a collection named 'users'
        // and each document is named after the user's ID
        const userDocRef = collection(db, 'users', currentUser.uid);
        const userDocSnapshot = await userDocRef.get();
        
        if (userDocSnapshot.exists()) {
          setUserData(userDocSnapshot.data()); // Set user data if the document exists
        } else {
          console.log('User data not found.'); // Log message if user data is not found
        }
        
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setLoading(false);
      }
    };

    fetchUserData();
  }, [currentUser.uid]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSave = async () => {
    try {
      const userCollectionRef = collection(db, 'users');
      const userQuerySnapshot = await getDocs(userCollectionRef);
  
      // Check if a document with the same email exists
      const existingUserDoc = userQuerySnapshot.docs.find(doc => doc.data().email === currentUser.email);
  
      if (existingUserDoc) {
        console.log('User data found. Updating the existing collection.');
  
        // Perform update instead of adding a new document
        await updateDoc(existingUserDoc.ref, {
          firstname: userData.firstname,
          lastname: userData.lastname,
          address: userData.address,
          contact: userData.contact
        });
      } else {
        console.log('User data not found. Creating new user collection.');
  
        // Add new document for the current user
        await addDoc(userCollectionRef, {
          firstname: userData.firstname,
          lastname: userData.lastname,
          address: userData.address,
          contact: userData.contact,
          email: currentUser.email,
        });
      }
  
      console.log('User information saved successfully.');
    } catch (error) {
      console.error('Error saving user information:', error);
    }
  };
  
  
  
  return (
    <div className="mainscreenincontainer-l">
      <img className="bg1" src={bg1} alt="bg1-alt" />
      <div className="edit-profile">
        <div className="profile-edit">
          {currentUser && currentUser.photoURL && <img src={currentUser.photoURL} alt="alt-profile" />}
        </div>
        {!loading && (
          <div>
            <div className='rowname'>
              <div className="profile-input">
                <label htmlFor="firstname">First Name</label>
                <input type="text" id="firstname" name="firstname" value={userData.firstname} onChange={handleInputChange} />
              </div>
              <div className="profile-input">
                <label htmlFor="lastname">Last Name</label>
                <input type="text" id="lastname" name="lastname" value={userData.lastname} onChange={handleInputChange} />
              </div>
            </div>
            <div className="profile-input email-input">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={currentUser.email}
                readOnly
              />
            </div>
            <div className="profile-input">
              <label htmlFor="address">Address</label>
              <input type="text" id="address" name="address" value={userData.address} onChange={handleInputChange} />
            </div>
            <div className="profile-input">
              <label htmlFor="contact">Contact</label>
              <input type="text" id="contact" name="contact" value={userData.contact} onChange={handleInputChange} />
            </div>
          </div>
        )}
      </div>
      <div className="profile-buttons">
        <button className="cancel-button">Cancel</button>
        <button className="save-button" onClick={handleSave}>Save</button>
      </div>
    </div>
  );
}

export default Mainscreenprofile;
