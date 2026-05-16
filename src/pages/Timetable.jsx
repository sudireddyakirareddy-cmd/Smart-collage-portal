import React from 'react';

const Timetable = () => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const times = ['09:00 - 10:00', '10:00 - 11:00', '11:00 - 12:00', '12:00 - 13:00', '14:00 - 15:00', '15:00 - 16:00'];

  return (
    <div>
      <h1 className="page-title">Weekly Timetable</h1>
      
      <div className="card">
        <div className="table-container">
          <table className="table" style={{ textAlign: 'center' }}>
            <thead>
              <tr>
                <th>Day / Time</th>
                {times.map(time => <th key={time}>{time}</th>)}
              </tr>
            </thead>
            <tbody>
              {days.map(day => (
                <tr key={day}>
                  <td style={{ fontWeight: 'bold' }}>{day}</td>
                  <td>Data Structures<br/><small>Room 301</small></td>
                  <td>Operating Systems<br/><small>Room 302</small></td>
                  <td>Database Systems<br/><small>Room 303</small></td>
                  <td style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-secondary)' }}>Lunch Break</td>
                  <td>Lab Session<br/><small>Lab 1</small></td>
                  <td>Lab Session<br/><small>Lab 1</small></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Timetable;
