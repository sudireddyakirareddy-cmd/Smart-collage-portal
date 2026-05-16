import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { FiUsers, FiFileText, FiCalendar, FiMessageSquare } from 'react-icons/fi';
import './Dashboard.css';

const FacultyDashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <div className="dashboard-header">
        <div>
          <h1 className="dashboard-greeting">Welcome, Prof. {user?.name}</h1>
          <p className="dashboard-date">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
      </div>

      <div className="dashboard-stats">
        <div className="stat-card">
          <div className="stat-icon icon-blue"><FiUsers /></div>
          <div className="stat-content">
            <h3>Total Students</h3>
            <p>120</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon icon-green"><FiFileText /></div>
          <div className="stat-content">
            <h3>Assignments to Grade</h3>
            <p>45</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon icon-purple"><FiCalendar /></div>
          <div className="stat-content">
            <h3>Classes Today</h3>
            <p>3</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon icon-orange"><FiMessageSquare /></div>
          <div className="stat-content">
            <h3>Unread Messages</h3>
            <p>12</p>
          </div>
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-card">
          <div className="card-header">
            <h2 className="card-title">Today's Schedule</h2>
          </div>
          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Course</th>
                  <th>Room</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>09:00 AM - 10:30 AM</td>
                  <td>CS301 - Data Structures</td>
                  <td>Room 302</td>
                  <td><button className="btn btn-primary" style={{padding: '0.2rem 0.5rem'}}>Mark Attd</button></td>
                </tr>
                <tr>
                  <td>11:00 AM - 12:30 PM</td>
                  <td>CS305 - Algorithms</td>
                  <td>Lab 2</td>
                  <td><button className="btn btn-primary" style={{padding: '0.2rem 0.5rem'}}>Mark Attd</button></td>
                </tr>
                <tr>
                  <td>02:00 PM - 03:30 PM</td>
                  <td>CS401 - Database Systems</td>
                  <td>Room 105</td>
                  <td><button className="btn btn-primary" style={{padding: '0.2rem 0.5rem'}}>Mark Attd</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyDashboard;
