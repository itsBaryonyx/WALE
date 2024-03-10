import React, { useState, useEffect } from 'react';
import '../02. Admin components CSS/msalist.css';
import { db } from '../../index';
import { collection, getDocs, updateDoc, doc, deleteDoc, addDoc } from 'firebase/firestore';
// addDoc, deleteDoc, updateDoc

export function MSAList() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5); // Number of users per page

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersCollection = collection(db, 'users');
        const usersSnapshot = await getDocs(usersCollection);
        const usersData = usersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setUsers(usersData);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  // Logic to handle pagination
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const handleAddUser = async () => {
    try {
      // Add your logic to get the user data from input fields or wherever it's stored
      const newUser = {
        firstname: 'New',
        lastname: 'User',
        email: 'newuser@example.com',
        address: 'New Address',
        contact: '1234567890'
      };
  
      // Create a reference to the users collection in Firestore
      const usersCollection = collection(db, 'users');
      // Add the new user document to Firestore
      await addDoc(usersCollection, newUser);
  
      // Fetch the updated list of users from Firestore and update the state
      const updatedUsersSnapshot = await getDocs(usersCollection);
      const updatedUsersData = updatedUsersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setUsers(updatedUsersData);
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  const handleEditUser = (userId) => {
    // Find the index of the user in the users array
    const userIndex = users.findIndex(user => user.id === userId);
    // Create a copy of the users array
    const updatedUsers = [...users];
    // Update the user's editable state to true
    updatedUsers[userIndex].editable = true;
    // Update the users state with the modified array
    setUsers(updatedUsers);
  };
  
  const handleSaveEdit = async (userId) => {
    try {
      // Find the index of the user in the users array
      const userIndex = users.findIndex(user => user.id === userId);
      // Create a reference to the user document in Firestore
      const userRef = doc(db, 'users', userId);
      // Update the user document with the new data
      await updateDoc(userRef, {
        firstname: users[userIndex].firstname,
        lastname: users[userIndex].lastname,
        address: users[userIndex].address,
        contact: users[userIndex].contact
      });
      // Set the editable state to false
      const updatedUsers = [...users];
      updatedUsers[userIndex].editable = false;
      setUsers(updatedUsers);
    } catch (error) {
      console.error('Error saving user details:', error);
    }
  };
  

  const handleDeleteUser = async (userId) => {
    try {
      // Create a reference to the user document in Firestore
      const userRef = doc(db, 'users', userId);
      // Delete the user document
      await deleteDoc(userRef);
      // Update the users state by removing the deleted user
      const updatedUsers = users.filter(user => user.id !== userId);
      setUsers(updatedUsers);
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="mainscreenincontainer-bg1">
      <table>
        <thead>
          <tr  className="table-headers">
            <th className="table-header">First Name</th>
            <th className="table-header">Last Name</th>
            <th className="table-header">Email</th>
            <th className="table-header">Address</th>
            <th className="table-header">Contact</th>
            <th className="table-header">Actions</th>
          </tr>
        </thead>
        <tbody>
        {currentUsers.map((user, index) => (
  <tr key={index}>
    <td className="table-cell">
      {user.editable ? (
        <input
          type="text"
          value={user.firstname}
          onChange={(e) => {
            const updatedUsers = [...users];
            updatedUsers[index].firstname = e.target.value;
            setUsers(updatedUsers);
          }}
        />
      ) : (
        user.firstname
      )}
    </td>
    <td className="table-cell">
      {user.editable ? (
        <input
          type="text"
          value={user.lastname}
          onChange={(e) => {
            const updatedUsers = [...users];
            updatedUsers[index].lastname = e.target.value;
            setUsers(updatedUsers);
          }}
        />
      ) : (
        user.lastname
      )}
    </td>
    <td className="table-cell">{user.email}</td>
    <td className="table-cell">
      {user.editable ? (
        <input
          type="text"
          value={user.address}
          onChange={(e) => {
            const updatedUsers = [...users];
            updatedUsers[index].address = e.target.value;
            setUsers(updatedUsers);
          }}
        />
      ) : (
        user.address
      )}
    </td>
    <td className="table-cell">
      {user.editable ? (
        <input
          type="text"
          value={user.contact}
          onChange={(e) => {
            const updatedUsers = [...users];
            updatedUsers[index].contact = e.target.value;
            setUsers(updatedUsers);
          }}
        />
      ) : (
        user.contact
      )}
    </td>
    <td className="table-cell">
      {user.editable ? (
        <button className="save-button" onClick={() => handleSaveEdit(user.id)}>Save</button>
      ) : (
        <>
          <button className="edit-button" onClick={() => handleEditUser(user.id)}>Edit</button>
          <button className="delete-button" onClick={() => handleDeleteUser(user.id)}>Delete</button>
        </>
      )}
    </td>
  </tr>
))}

        </tbody>
      </table>
      <button className="add-button" onClick={handleAddUser}>Add User</button>

      {/* Pagination */}
      <div className="pagination">
        {[...Array(Math.ceil(users.length / usersPerPage)).keys()].map(number => (
          <button key={number} className="page-button" onClick={() => paginate(number + 1)}>
            {number + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MSAList;
