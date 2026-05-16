import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { 
  FiHome, FiCalendar, FiCheckSquare, 
  FiFileText, FiBell, FiUser 
} from 'react-icons/fi';
import './Layout.css';

const Sidebar = () => {
  const { user } = useContext(AuthContext);

  const navLinks = [
    { name: 'Dashboard', path: `/${user?.role}/dashboard`, icon: <FiHome /> },
    { name: 'Attendance', path: '/attendance', icon: <FiCheckSquare /> },
    ...(user?.role === 'student' ? [{ name: 'Marks/Grades', path: '/marks', icon: <FiFileText /> }] : []),
    { name: 'Timetable', path: '/timetable', icon: <FiCalendar /> },
    { name: 'Notices', path: '/notices', icon: <FiBell /> },
    { name: 'Profile', path: '/profile', icon: <FiUser /> },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <h1>NXT Portal</h1>
      </div>
      <ul className="sidebar-nav">
        {navLinks.map((link) => (
          <li key={link.name} className="nav-item">
            <NavLink 
              to={link.path} 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              <span className="nav-icon">{link.icon}</span>
              <span className="nav-text">{link.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
