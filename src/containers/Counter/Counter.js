import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
  state = {
    counter: 0,
  };

  counterChangedHandler = (action, value) => {
    switch (action) {
      case 'inc':
        this.setState((prevState) => {
          return { counter: prevState.counter + 1 };
        });
        break;
      case 'dec':
        this.setState((prevState) => {
          return { counter: prevState.counter - 1 };
        });
        break;
      case 'add':
        this.setState((prevState) => {
          return { counter: prevState.counter + value };
        });
        break;
      case 'sub':
        this.setState((prevState) => {
          return { counter: prevState.counter - value };
        });
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label='Increment'
          clicked={this.props.onIncreementClicked}
        />
        <CounterControl
          label='Decrement'
          clicked={this.props.onDecreementClicked}
        />
        <CounterControl label='Add 10' clicked={this.props.onAdditionClicked} />
        <CounterControl
          label='Subtract 15'
          clicked={this.props.onSubtractionClicked}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncreementClicked: () => {
      dispatch({ type: 'INCREEMENT' });
    },
    onDecreementClicked: () => {
      dispatch({ type: 'DECREEMENT' });
    },
    onAdditionClicked: () => {
      dispatch({ type: 'ADD', value: 10 });
    },
    onSubtractionClicked: () => {
      dispatch({ type: 'SUBTRACT', value: 15 });
    },
  };
};

const mapStateToProps = (state) => {
  return {
    ctr: state.counter,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
