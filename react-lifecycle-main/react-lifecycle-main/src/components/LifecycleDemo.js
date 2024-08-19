import React from 'react';

class LifecycleDemo extends React.Component {
  constructor(props) {
    super(props);
    console.log('Constructor: Component is being initialized');
    this.state = {
      counter: 0,
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps: Syncing state with props');
    return null; // Returning null means no change to the state
  }

  componentDidMount() {
    console.log('componentDidMount: Component has been mounted to the DOM');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate: Should component update?');
    return true; // Return true to allow the component to update
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate: Snapshot before the update');
    return null; // Returning null as no snapshot is needed here
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate: Component has been updated');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount: Component is about to be removed from the DOM');
  }

  handleClick = () => {
    this.setState((prevState) => ({ counter: prevState.counter + 1 }));
  };

  render() {
    console.log('Render: Rendering component');
    return (
      <div style={styles.container}>
        <h1>React Lifecycle Demo</h1>
        <p>Counter: {this.state.counter}</p>
        <button onClick={this.handleClick} style={styles.button}>
          Increment Counter
        </button>
      </div>
    );
  }
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
};

export default LifecycleDemo;
