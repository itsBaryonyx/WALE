//import React, { useEffect, useState } from 'react';
//import axios from 'axios';
//import { Link, useParams } from 'react-router-dom';

//export default function AdminHome() {
  //const [users, setUsers] = useState([]);
  //const [currentPage, setCurrentPage] = useState(1);
  //const usersPerPage = 10;

  //const { id } = useParams();

  //useEffect(() => {
  //  loadUsers();
  //}, []);

  //const loadUsers = async () => {
  //  const result = await axios.get('http://localhost:8080/users');
  //  setUsers(result.data);
  //};

  //const deleteUser = async (id) => {
    //await axios.delete(`http://localhost:8080/user/${id}`);
   // loadUsers();
  //};

  // Pagination
  //const indexOfLastUser = currentPage * usersPerPage;
 // const indexOfFirstUser = indexOfLastUser - usersPerPage;
  //const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  //const paginate = (pageNumber) => {
  //  setCurrentPage(pageNumber);
  //};

 // return (
  //  <div className="container">
    //  <div className="h-10"></div>
     // <table className="w-4/5 h-3/4 mx-auto border border-gray-300 shadow-lg">
     //   <thead>
      //    <tr className="border">
      //      <th scope="col">#</th>
      //      <th scope="col">First</th>
       //     <th scope="col">Last</th>
       ///     <th scope="col">Email</th>
        //    <th scope="col">Action</th>
        //  </tr>
        //</thead>
       // <tbody className="min-h-44">
       //   {currentUsers.map((user, index) => (
       //     <tr className="border table-auto" key={index}>
          //    <td>{indexOfFirstUser + index + 1}</td>
        ///      <td>{user.firstname}</td>
            //  <td>{user.lastname}</td>
              //<td>{user.email}</td>
        //      <td>
          //      <Link
            //      className="align-middle bg-blue-700 hover:bg-blue-200 text-white hover:text-black font-bold py-1 px-2 rounded mx-2"
              ///    to={`/viewuser/${user.id}`}
                //>
                //  View
        //        </Link>
          //      <Link
            //      className="align-middle bg-black hover:bg-gray-200 text-white hover:text-black font-bold py-1 px-2 rounded mx-2"
              //    to={`/edituser/${user.id}`}
              //  >
                //  Edit
               // </Link>
        //        <Link
        //          className="align-middle bg-red-700 hover:bg-red-200 text-white hover:text-black font-bold py-1 px-2 rounded mx-2"
        //          onClick={() => deleteUser(user.id)}
        //        >
        ///          Delete
        //        </Link>
         //     </td>
         //   </tr>
        //  ))}
      //  </tbody>
    //  </table>
   //   <div className="h-5"></div>

    //  <nav aria-label="Page navigation example">
    //    <ul className="inline-flex -space-x-px">
      //    <li>
       //     <button
       //       disabled={currentPage === 1}
        //      onClick={() => paginate(currentPage - 1)}
        //      className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        //    >
        //      Previous
         //   </button>
        //  </li>
       //   {Array.from({ length: Math.ceil(users.length / usersPerPage) }, (_, index) => (
        //    <li key={index}>
          //    <button
           //     onClick={() => paginate(index + 1)}
            //    className={`px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
           //       currentPage === index + 1 ? 'text-blue-600 bg-blue-50' : ''
             //   }`}
          //    >
          //      {index + 1}
          //    </button>
          //  </li>
         // ))}
         // <li>
         //   <button
          //    disabled={currentPage === Math.ceil(users.length / usersPerPage)}
         //     onClick={() => paginate(currentPage + 1)}
          //    className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
       //     >
        //      Next
       //     </button>
      //    </li>
      //  </ul>
     // </nav>
  //  </div>
 // );
//}
