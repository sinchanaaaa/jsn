import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={styles.container}>
      <h1>Home Page</h1>
      <p>Welcome to the React App. This is a public page accessible by anyone.</p>
      <Link to="/login" style={styles.link}>Login to Access Dashboard</Link>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
  },
  link: {
    textDecoration: 'none',
    color: '#007bff',
    fontSize: '20px',
  },
};

export default Home;
