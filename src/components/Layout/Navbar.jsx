import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { FiSun, FiMoon, FiLogOut, FiUser } from 'react-icons/fi';
import './Layout.css';

const Navbar = () => {
  const { user, logout, theme, toggleTheme } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2>{user?.role === 'admin' ? 'Admin Portal' : user?.role === 'faculty' ? 'Faculty Portal' : 'Student Portal'}</h2>
      </div>
      <div className="navbar-right">
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
        </button>
        <div className="user-profile">
          <FiUser size={20} />
          <span>{user?.name || 'User'}</span>
        </div>
        <button className="btn btn-primary btn-logout" onClick={handleLogout}>
          <FiLogOut /> Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
