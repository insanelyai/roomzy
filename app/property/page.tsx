'use client'; // This tells Next.js that the component is a Client Component

import React, { useState, FormEvent } from 'react';

// Define styles with React.CSSProperties
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)',
  },
  input: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  button: {
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
    backgroundColor: '#705C53',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    margin: '10px 0',
  },
};

const LogIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Simple form validation
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    // Clear error
    setError('');

    // Handle login logic here
    console.log('Logging in with', { email, password });
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit}>
        <input
          style={styles.input}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          style={styles.input}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p style={styles.error}>{error}</p>}
        <button style={styles.button} type="submit">
          Log In
        </button>
      </form>
    </div>
  );
};

export default LogIn;
