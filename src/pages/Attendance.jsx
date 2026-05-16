import React, { useEffect, useState, useContext } from 'react';
import { fetchStudents } from '../services/api';
import { AuthContext } from '../context/AuthContext';

const Attendance = () => {
  const { user } = useContext(AuthContext);
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const getStudents = async () => {
      const data = await fetchStudents();
      setStudents(data);
      setLoading(false);
    };
    getStudents();
  }, []);

  const handleAttendance = (studentId, isPresent) => {
    setStudents(students.map(student => {
      if (student.id === studentId) {
        // Mock update: change percentage slightly to simulate attendance marking
        let currentAtt = parseInt(student.attendance);
        if (isPresent) {
          currentAtt = Math.min(100, currentAtt + 2);
        } else {
          currentAtt = Math.max(0, currentAtt - 2);
        }
        return { ...student, attendance: currentAtt + '%' };
      }
      return student;
    }));
  };

  const filteredStudents = students.filter(student => 
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    student.rollNo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <div className="loader-container"><div className="loader"></div></div>;

  return (
    <div>
      <h1 className="page-title">Attendance Management</h1>
      
      <div className="card" style={{ marginBottom: '1.5rem' }}>
        <div className="form-group" style={{ marginBottom: 0 }}>
          <input 
            type="text" 
            className="form-control" 
            placeholder="Search students by name or roll number..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="card">
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>Roll No</th>
                <th>Name</th>
                <th>Course</th>
                <th>Current Attendance</th>
                {user?.role !== 'student' && <th>Action</th>}
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map(student => (
                <tr key={student.id}>
                  <td>{student.rollNo}</td>
                  <td>{student.name}</td>
                  <td>{student.course}</td>
                  <td>
                    <span style={{ 
                      color: parseInt(student.attendance) >= 75 ? 'var(--success)' : 'var(--danger)',
                      fontWeight: 'bold'
                    }}>
                      {student.attendance}
                    </span>
                  </td>
                  {user?.role !== 'student' && (
                    <td>
                      <button 
                        className="btn btn-primary" 
                        style={{ marginRight: '0.5rem', padding: '0.3rem 0.6rem' }} 
                        onClick={() => handleAttendance(student.id, true)}
                      >
                        Present
                      </button>
                      <button 
                        className="btn" 
                        style={{ backgroundColor: 'var(--danger)', color: 'white', padding: '0.3rem 0.6rem' }} 
                        onClick={() => handleAttendance(student.id, false)}
                      >
                        Absent
                      </button>
                    </td>
                  )}
                </tr>
              ))}
              {filteredStudents.length === 0 && (
                <tr>
                  <td colSpan={user?.role !== 'student' ? "5" : "4"} style={{ textAlign: 'center' }}>No students found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
