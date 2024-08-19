import React from 'react';
import { useAuth } from '../AuthContext';

function Dashboard() {
  const { users, currentUser, logout } = useAuth();

  return (
    <div style={styles.container}>
      <h1>Dashboard</h1>
      <p>Welcome, {currentUser.username}!</p>
      <h2>All Logged In Users:</h2>
      <ul style={styles.list}>
        {users.map((user, index) => (
          <li key={index}>{user.username}</li>
        ))}
      </ul>
      <button onClick={logout} style={styles.button}>Logout</button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
    fontSize: '18px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    marginTop: '20px',
  },
};

export default Dashboard;
