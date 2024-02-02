import React from 'react'
import { Link } from 'react-router-dom'


export function AdminNavbar() {
  return (

    
    <div>
 <nav className="bg-gray-900 py-4 px-6 flex justify-between items-center">
  <div>
    <Link className="text-white font-bold text-xl" to={"/"}>
      Fullstack Application
    </Link>
  </div>
  <div>
    <Link className="text-white font-bold text-x05 border  bg-gray-900 hover:bg-white hover:text-black py-2 px-3 rounded" to="/adduser">
      Add User
    </Link>
  </div>
</nav>
</div>


  )
}
