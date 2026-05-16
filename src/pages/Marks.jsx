import React from 'react';

const Marks = () => {
  return (
    <div>
      <h1 className="page-title">Marks & Grades</h1>
      
      <div className="card">
        <h2 className="card-title" style={{ marginBottom: '1.5rem' }}>Semester 4 Results</h2>
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>Course Code</th>
                <th>Course Name</th>
                <th>Credits</th>
                <th>Grade</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>CS301</td>
                <td>Data Structures</td>
                <td>4</td>
                <td>A</td>
                <td><span style={{ color: 'var(--success)' }}>Pass</span></td>
              </tr>
              <tr>
                <td>CS302</td>
                <td>Operating Systems</td>
                <td>4</td>
                <td>B+</td>
                <td><span style={{ color: 'var(--success)' }}>Pass</span></td>
              </tr>
              <tr>
                <td>CS303</td>
                <td>Database Management</td>
                <td>3</td>
                <td>A-</td>
                <td><span style={{ color: 'var(--success)' }}>Pass</span></td>
              </tr>
              <tr>
                <td>MA301</td>
                <td>Discrete Mathematics</td>
                <td>3</td>
                <td>B</td>
                <td><span style={{ color: 'var(--success)' }}>Pass</span></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: 'var(--bg-primary)', borderRadius: '8px', display: 'flex', justifyContent: 'space-between' }}>
          <strong>SGPA: 8.4</strong>
          <strong>CGPA: 8.2</strong>
        </div>
      </div>
    </div>
  );
};

export default Marks;
