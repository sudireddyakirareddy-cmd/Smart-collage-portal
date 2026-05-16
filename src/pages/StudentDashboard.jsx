import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { FiBook, FiCheckCircle, FiClock, FiAward } from 'react-icons/fi';
import { fetchNotices } from '../services/api';
import './Dashboard.css';

const StudentDashboard = () => {
  const { user } = useContext(AuthContext);
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getNotices = async () => {
      const data = await fetchNotices();
      setNotices(data);
      setLoading(false);
    };
    getNotices();
  }, []);

  if (loading) return <div className="loader-container"><div className="loader"></div></div>;

  return (
    <div>
      <div className="dashboard-header">
        <div>
          <h1 className="dashboard-greeting">Hello, {user?.name}</h1>
          <p className="dashboard-date">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
      </div>

      <div className="dashboard-stats">
        <div className="stat-card">
          <div className="stat-icon icon-blue"><FiBook /></div>
          <div className="stat-content">
            <h3>Enrolled Courses</h3>
            <p>6</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon icon-green"><FiCheckCircle /></div>
          <div className="stat-content">
            <h3>Overall Attendance</h3>
            <p>85%</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon icon-purple"><FiAward /></div>
          <div className="stat-content">
            <h3>Current CGPA</h3>
            <p>8.4</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon icon-orange"><FiClock /></div>
          <div className="stat-content">
            <h3>Pending Assignments</h3>
            <p>3</p>
          </div>
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-card">
          <div className="card-header">
            <h2 className="card-title">Recent Activity</h2>
          </div>
          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th>Subject</th>
                  <th>Activity</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Data Structures</td>
                  <td>Assignment 2 Submitted</td>
                  <td><span style={{ color: 'var(--success)' }}>Completed</span></td>
                </tr>
                <tr>
                  <td>Database Systems</td>
                  <td>Midterm Exam</td>
                  <td><span style={{ color: 'var(--warning)' }}>Upcoming</span></td>
                </tr>
                <tr>
                  <td>Operating Systems</td>
                  <td>Lab Report</td>
                  <td><span style={{ color: 'var(--danger)' }}>Pending</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="dashboard-card">
          <div className="card-header">
            <h2 className="card-title">Latest Notices</h2>
          </div>
          <div className="notices-list">
            {notices.slice(0, 4).map(notice => (
              <div key={notice.id} className="notice-item">
                <h4 className="notice-title">{notice.title.substring(0, 30)}...</h4>
                <p className="notice-date">{notice.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
