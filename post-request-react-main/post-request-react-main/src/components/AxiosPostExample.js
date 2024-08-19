import React, { useState } from 'react';
import axios from 'axios';

function AxiosPostExample() {
  const [data, setData] = useState({
    name: '',
    job: '',
  });
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://reqres.in/api/users', data)
      .then((res) => {
        setResponse(res.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div style={styles.container}>
      <h2>Axios POST Request</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={data.name}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="text"
          name="job"
          placeholder="Job"
          value={data.job}
          onChange={handleChange}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Submit</button>
      </form>
      {response && (
        <div style={styles.response}>
          <h3>Response:</h3>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
  },
  input: {
    margin: '10px',
    padding: '10px',
    fontSize: '16px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
  response: {
    marginTop: '20px',
    textAlign: 'left',
    whiteSpace: 'pre-wrap',
    wordWrap: 'break-word',
  },
};

export default AxiosPostExample;
