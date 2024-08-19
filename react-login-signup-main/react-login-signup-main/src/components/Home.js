import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={styles.container}>
      <h1>Home Page</h1>
      <Link to="/login" style={styles.link}>Login</Link>
      <Link to="/signup" style={styles.link}>Sign Up</Link>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
  },
  link: {
    display: 'block',
    margin: '10px 0',
    textDecoration: 'none',
    color: '#007bff',
    fontSize: '20px',
  },
};

export default Home;
