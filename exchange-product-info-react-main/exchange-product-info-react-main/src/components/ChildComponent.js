import React from 'react';

function ChildComponent({ product }) {
  return (
    <div style={styles.container}>
      <h2>Child Component</h2>
      <h3>Product Name: {product.name}</h3>
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
    </div>
  );
}

const styles = {
  container: {
    border: '1px solid #ddd',
    padding: '20px',
    margin: '20px auto',
    width: '50%',
    textAlign: 'left',
  },
};

export default ChildComponent;
