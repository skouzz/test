import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signin.css';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const navigate = useNavigate();

  // Check if the user is already authenticated
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
      navigate('/dashboard');
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Token:', data.token);
        
        // Store the token in local storage
        localStorage.setItem('token', data.token);
        localStorage.setItem('isAuth',true)    
        navigate('/dashboard');
      } else {
        throw new Error('Login failed');
      }
    } catch (error) {
      setError('Invalid email or password');
      console.error('Login failed', error);
    }
  };

  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      {error && <div className="error">{error}</div>}
      {isAuthenticated && <div className="success">You are already authenticated.</div>}
      {!isAuthenticated && (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit">Sign In</button>
        </form>
      )}
    </div>
  );
}

export default SignIn;
