import React from 'react';
import { Link } from 'react-router-dom';
import { FiUser, FiBriefcase, FiShield } from 'react-icons/fi';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">Welcome to Smart College Portal</h1>
        <p className="home-subtitle">Access your academic information, manage attendance, and stay updated with the latest notices.</p>
        
        <div className="role-cards">
          <Link to="/login/student" className="role-card">
            <div className="role-icon student-icon">
              <FiUser size={40} />
            </div>
            <h2>Student Portal</h2>
            <p>View attendance, marks, and timetable</p>
          </Link>
          
          <Link to="/login/faculty" className="role-card">
            <div className="role-icon faculty-icon">
              <FiBriefcase size={40} />
            </div>
            <h2>Faculty Portal</h2>
            <p>Manage student attendance and grades</p>
          </Link>
          
          <Link to="/login/admin" className="role-card">
            <div className="role-icon admin-icon">
              <FiShield size={40} />
            </div>
            <h2>Admin Portal</h2>
            <p>System configuration and management</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
