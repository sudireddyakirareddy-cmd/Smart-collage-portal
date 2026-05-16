import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { FiUser, FiMail, FiPhone, FiMapPin, FiBookOpen, FiSave, FiX } from 'react-icons/fi';

const Profile = () => {
  const { user, updateUser } = useContext(AuthContext);
  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || 'user@college.edu',
    phone: user?.phone || '+1 234 567 8900',
    address: user?.address || '123 College Avenue, University City, ST 12345',
    department: user?.department || 'Computer Science and Engineering'
  });

  // Sync state if user context updates from another place
  useEffect(() => {
    setFormData({
      name: user?.name || '',
      email: user?.email || 'user@college.edu',
      phone: user?.phone || '+1 234 567 8900',
      address: user?.address || '123 College Avenue, University City, ST 12345',
      department: user?.department || 'Computer Science and Engineering'
    });
  }, [user]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = () => {
    updateUser(formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData({
      name: user?.name || '',
      email: user?.email || 'user@college.edu',
      phone: user?.phone || '+1 234 567 8900',
      address: user?.address || '123 College Avenue, University City, ST 12345',
      department: user?.department || 'Computer Science and Engineering'
    });
    setIsEditing(false);
  };

  return (
    <div>
      <h1 className="page-title">User Profile</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem' }}>
        <div className="card" style={{ textAlign: 'center' }}>
          <div style={{ 
            width: '120px', 
            height: '120px', 
            borderRadius: '50%', 
            backgroundColor: 'var(--accent-color)', 
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.5rem',
            fontSize: '3rem'
          }}>
            <FiUser />
          </div>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{user?.name || 'User Name'}</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', textTransform: 'capitalize' }}>{user?.role} Portal</p>
          
          {!isEditing ? (
            <button className="btn btn-primary" style={{ width: '100%' }} onClick={() => setIsEditing(true)}>Edit Profile</button>
          ) : (
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button className="btn" style={{ flex: 1, backgroundColor: 'var(--success)', color: 'white' }} onClick={handleSave}>
                <FiSave style={{ marginRight: '0.5rem' }}/> Save
              </button>
              <button className="btn" style={{ flex: 1, backgroundColor: 'var(--danger)', color: 'white' }} onClick={handleCancel}>
                <FiX style={{ marginRight: '0.5rem' }}/> Cancel
              </button>
            </div>
          )}
        </div>
        
        <div className="card">
          <h2 className="card-title" style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>Personal Information</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.3rem' }}>Full Name</p>
              {isEditing ? (
                <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} />
              ) : (
                <p style={{ fontWeight: '500', color: 'var(--text-primary)' }}>{formData.name}</p>
              )}
            </div>
            <div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.3rem' }}>ID Number</p>
              <p style={{ fontWeight: '500', color: 'var(--text-primary)' }}>{user?.role === 'student' ? 'STU12345' : 'EMP98765'}</p>
            </div>
            <div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.3rem' }}>Email Address</p>
              {isEditing ? (
                <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} />
              ) : (
                <p style={{ fontWeight: '500', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><FiMail /> {formData.email}</p>
              )}
            </div>
            <div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.3rem' }}>Phone Number</p>
              {isEditing ? (
                <input type="text" className="form-control" name="phone" value={formData.phone} onChange={handleChange} />
              ) : (
                <p style={{ fontWeight: '500', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><FiPhone /> {formData.phone}</p>
              )}
            </div>
            <div style={{ gridColumn: '1 / -1' }}>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.3rem' }}>Address</p>
              {isEditing ? (
                <input type="text" className="form-control" name="address" value={formData.address} onChange={handleChange} />
              ) : (
                <p style={{ fontWeight: '500', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><FiMapPin /> {formData.address}</p>
              )}
            </div>
            <div style={{ gridColumn: '1 / -1' }}>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.3rem' }}>Department / Course</p>
              {isEditing ? (
                <input type="text" className="form-control" name="department" value={formData.department} onChange={handleChange} />
              ) : (
                <p style={{ fontWeight: '500', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><FiBookOpen /> {formData.department}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
