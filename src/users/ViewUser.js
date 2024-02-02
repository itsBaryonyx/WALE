import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function ViewUser() {
    const [user, setUser] = useState({
      name: "",
      username: "",
      email: "",
    });
  
    const { id } = useParams();
  
    useEffect(() => {
      loadUser();
    }, []);
  
    const loadUser = async () => {
      const result = await axios.get(`http://localhost:8080/user/${id}`);
      setUser(result.data);
    };
  return (
    <div className="container mx-auto">
      <div className="flex justify-center">
        <div className="w-2/3 border rounded p-4 mt-2 shadow">
          <h1 className="text-black font-bold text-2xl">User Details</h1>
          <div className="card">
            <div className="card-header">
              Details of user id: {user.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Firstname:</b>
                    {user.firstname}
                </li>
                <li className="list-group-item">
                  <b>Lastname:</b>
                    {user.lastname}
                </li>
                <li className="list-group-item">
                  <b>Email:</b>
                    {user.email}
                </li>
              </ul>
            </div>
          </div>
          <Link
            className="btn btn-primary my-2"
            to="/"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
