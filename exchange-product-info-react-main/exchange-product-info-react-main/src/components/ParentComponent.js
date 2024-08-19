import React from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const product = {
    name: 'Laptop',
    price: 1200,
    description: 'A high-performance laptop with 16GB RAM and 512GB SSD.',
  };

  return (
    <div style={styles.container}>
      <h1>Parent Component</h1>
      <ChildComponent product={product} />
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
  },
};

export default ParentComponent;
