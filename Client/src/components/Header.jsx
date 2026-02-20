import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserStore } from "../store/useUserStore";

const Header = () => {
  const { user, logout } = useUserStore();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    logout();
    setIsOpen(false); // close menu on logout
    navigate("/");
  };

  const closeMenu = () => setIsOpen(false); // close menu when a link is clicked

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark shadow-sm"
      style={{ backgroundColor: "#09637E" }}
    >
      <div className="container">

        {/* Brand */}
        <Link className="navbar-brand fw-bold" to="/" onClick={closeMenu}>
          AuthApp
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={() => setIsOpen(!isOpen)} 
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}> 
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/" onClick={closeMenu}>
                Home
              </Link>
            </li>
            {user && (
              <li className="nav-item">
                <Link className="nav-link text-white" to="/dashboard" onClick={closeMenu}>
                  Dashboard
                </Link>
              </li>
            )}
          </ul>

          <div className="d-flex align-items-center gap-2">
            {user ? (
              <>
                <span className="fw-semibold" style={{ color: "#EBF4F6" }}>
                  {user.name}
                </span>
                <button
                  onClick={handleLogout}
                  className="btn btn-sm"
                  style={{ backgroundColor: "#7AB2B2", color: "#fff" }}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="btn btn-sm fw-semibold"
                  onClick={closeMenu}
                  style={{ backgroundColor: "#088395", color: "#fff" }}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="btn btn-sm fw-semibold"
                  onClick={closeMenu}
                  style={{ backgroundColor: "#7AB2B2", color: "#fff" }}
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Header;