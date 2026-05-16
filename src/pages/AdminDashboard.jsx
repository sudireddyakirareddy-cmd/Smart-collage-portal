import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { FiUsers, FiBriefcase, FiAlertCircle, FiSettings } from 'react-icons/fi';
import './Dashboard.css';

const AdminDashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <div className="dashboard-header">
        <div>
          <h1 className="dashboard-greeting">Admin Overview</h1>
          <p className="dashboard-date">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
      </div>

      <div className="dashboard-stats">
        <div className="stat-card">
          <div className="stat-icon icon-blue"><FiUsers /></div>
          <div className="stat-content">
            <h3>Total Students</h3>
            <p>1,250</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon icon-green"><FiBriefcase /></div>
          <div className="stat-content">
            <h3>Total Faculty</h3>
            <p>85</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon icon-purple"><FiAlertCircle /></div>
          <div className="stat-content">
            <h3>Active Issues</h3>
            <p>7</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon icon-orange"><FiSettings /></div>
          <div className="stat-content">
            <h3>System Status</h3>
            <p>99.9%</p>
          </div>
        </div>
      </div>
      
      <div className="dashboard-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
        <div className="dashboard-card">
           <div className="card-header">
            <h2 className="card-title">System Metrics</h2>
          </div>
          <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-secondary)' }}>
            [System Activity Graph Placeholder]
          </div>
        </div>
        
        <div className="dashboard-card">
           <div className="card-header">
            <h2 className="card-title">Recent Registrations</h2>
          </div>
          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Role</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>John Smith</td>
                  <td>Student</td>
                  <td>Today</td>
                </tr>
                <tr>
                  <td>Dr. Emily Chen</td>
                  <td>Faculty</td>
                  <td>Yesterday</td>
                </tr>
                <tr>
                  <td>Michael Brown</td>
                  <td>Student</td>
                  <td>Yesterday</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
