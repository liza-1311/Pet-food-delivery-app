import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Modal from '../Modal';
import Cart from '../screens/Cart';  // Updated import path

export default function Navbar() {
  const [cartView, setCartView] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-info">
      <div className="container-fluid">
        <Link className="navbar-brand fs-1 fst-italic" to="/">PET FOOD</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2">
            <li className="nav-item">
              <Link className="nav-link active fs-5" to="/">Home</Link>
            </li>
            {localStorage.getItem("authToken") && (
              <li className="nav-item">
                <Link className="nav-link active fs-5" to="/orders">My Orders</Link>
              </li>
            )}
          </ul>

          {!localStorage.getItem("authToken") ? (
            <div className="d-flex">
              <Link className="btn bg-white text-info mx-1" to="/login">Login</Link>
              <Link className="btn bg-white text-info mx-1" to="/createuser">Sign Up</Link>
            </div>
          ) : (
            <div className="d-flex align-items-center">
              <div className="btn bg-white text-info mx-2" onClick={() => setCartView(true)}>
                My Cart
              </div>

              <div className="btn bg-white text-danger mx-2" onClick={handleLogout}>
                Logout
              </div>
            </div>
          )}
        </div>
      </div>

      {cartView && (
        <Modal onClose={() => setCartView(false)}>
          <Cart />
        </Modal>
      )}
    </nav>
  );
}
