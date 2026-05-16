import React, { useEffect, useState } from 'react';
import { fetchNotices } from '../services/api';

const Notices = () => {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getNotices = async () => {
      const data = await fetchNotices();
      // Add a few more mock notices for better UI look
      const extendedData = [
        ...data,
        { id: 101, title: 'Annual Sports Meet 2026', content: 'Registrations are open for the annual sports meet. Please register by next week.', date: '2026-05-18' },
        { id: 102, title: 'Holiday Declaration', content: 'The college will remain closed on Friday due to local elections.', date: '2026-05-15' },
        { id: 103, title: 'Library Book Returns', content: 'All students must return their library books before the end of the semester.', date: '2026-05-10' }
      ];
      setNotices(extendedData);
      setLoading(false);
    };
    getNotices();
  }, []);

  if (loading) return <div className="loader-container"><div className="loader"></div></div>;

  return (
    <div>
      <h1 className="page-title">College Notices</h1>
      
      <div className="notices-grid" style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))' }}>
        {notices.map(notice => (
          <div key={notice.id} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <h2 className="card-title" style={{ margin: 0, fontSize: '1.1rem', flex: 1 }}>{notice.title}</h2>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginLeft: '1rem', whiteSpace: 'nowrap' }}>{notice.date}</span>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.5', flex: 1 }}>{notice.content}</p>
            <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
              <button className="btn btn-primary" style={{ padding: '0.4rem 0.8rem', fontSize: '0.9rem' }}>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notices;
