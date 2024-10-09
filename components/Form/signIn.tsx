"use client"
import React, { useState, FormEvent } from 'react';

// Define styles with React.CSSProperties
const styles: { [key: string]: React.CSSProperties } = {
  signupPage: {
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

const SignUpPage: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle sign-up logic here
    console.log('Signing up:', { username, email, password });
  };

  return (
    <div style={styles.signupPage}>
      <div style={styles.formContainer}>
        <h2 style={styles.formHeading}>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={styles.input}
              required
            />
          </div>
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
            Sign Up
          </button>
        </form>
        <div style={styles.link}>
          <a href="/login" style={{ color: '#1E90FF' }}>
            Already have an account? Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
