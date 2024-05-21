import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


function Navbar() {
  const auth = localStorage.getItem('User')
  const Navigate = useNavigate()

  const logout = () => {
    Navigate('/singup')
    localStorage.clear()

  }
  return (
    <div className='fixed-top'>
      <nav className="navbar navbar-expand-lg bg-info body-tertiary-light ">
        <div className="container-fluid">
          <img className="navbar-brand rounded-circle img" src="./ecom.jpg" alt="logo.." />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">

          {auth ?

            <ul className="navbar-nav mx-5  ">
              <li className="nav-item mx-2 ">
                <Link className="nav-link active" aria-current="page" to="/">Products</Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="addProducts">Add Products </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/updates">Update Products</Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="profil">Profile</Link>
              </li>

              <li className="nav-item mx-2"><Link className="nav-link" onClick={logout} to="singup">Logout ({JSON.parse(auth).name})</Link> 

              </li>
             
            </ul>:
            <ul className="navbar-nav mx-5  ">
            <li className="nav-item mx-2"> <Link className="nav-link " to="singup">Sign Up</Link>

</li>
            <li className="nav-item mx-2"> <Link className="nav-link" to="login">Log-in</Link>

</li>
            </ul>}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
