import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../../actions/index';

class IncrementTest extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { counter, increment, decrement } = this.props;

    return (
      <div>
        <button onClick={increment}>
          Increment
        </button>
        <button onClick={decrement}>
          Decrement
        </button>
        <h2>{counter}</h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment(10)),
    decrement: () => dispatch(decrement(5)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IncrementTest);