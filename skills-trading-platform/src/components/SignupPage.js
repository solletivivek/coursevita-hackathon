import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignupPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/register', {
        firstName,  // Send firstName to backend
        lastName,   // Send lastName to backend
        username,
        password,
      });
      console.log(response.data.message);
      navigate('/login');
    } catch (error) {
      console.error('Error during signup:', error);
      if (error.response) {
        setError(error.response.data.message || 'Signup failed');
      } else {
        setError('Signup failed, please try again');
      }
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundImage: 'linear-gradient(135deg, #ff9966 0%, #ff5e62 100%)', color: '#fff' }}>
      <div className="card p-4 shadow-lg" style={{ width: '400px', backgroundColor: 'rgba(255, 255, 255, 0.85)', borderRadius: '15px' }}>
        <h2 className="text-center mb-4" style={{ color: '#333' }}>Sign Up</h2>
        {error && <div className="alert alert-danger" role="alert">{error}</div>}
        <form onSubmit={handleSignup}>
          <div className="form-group mb-3">
            <label htmlFor="firstName" className="form-label">First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              placeholder="Enter your first name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="lastName" className="form-label">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              placeholder="Enter your last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100 mb-3">Sign Up</button>
        </form>
        <div className="text-center">
          <p>Already have an account?</p>
          <button className="btn btn-secondary" onClick={() => navigate('/login')}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
