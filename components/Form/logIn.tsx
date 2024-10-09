'use client'
import React, { useState, FormEvent } from 'react';

// Define styles with React.CSSProperties
const styles: { [key: string]: React.CSSProperties } = {
  loginPage: {
    fontFamily: "'Roboto', sans-serif",
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff', // White
    color: '#1E90FF', // Dodger Blue
  },
  formContainer: {
    backgroundColor: '#F5F5F7', // Light Gray
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    width: '400px',
  },
  formHeading: {
    fontSize: '2rem',
    marginBottom: '20px',
    textAlign: 'center',
  },
  formGroup: {
    marginBottom: '20px',
  },
  label: {
    marginBottom: '5px',
    display: 'block',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    outline: 'none',
  },
  submitButton: {
    backgroundColor: '#1E90FF', // Dodger Blue
    color: '#ffffff', // White
    padding: '12px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '100%',
    transition: 'background-color 0.3s',
  },
  link: {
    marginTop: '20px',
    textAlign: 'center',
  },
};

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Logging in:', { email, password });
  };

  return (
    <div style={styles.loginPage}>
      <div style={styles.formContainer}>
        <h2 style={styles.formHeading}>Login</h2>
        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          <button type="submit" style={styles.submitButton}>
            Login
          </button>
        </form>
        <div style={styles.link}>
          <a href="/signup" style={{ color: '#1E90FF' }}>
            Don't have an account? Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
