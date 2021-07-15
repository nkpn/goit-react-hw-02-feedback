import React, { Component } from 'react';
import Controls from './Controls';
// import PropTypes from 'prop-types';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  goodIncrement = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  neutralIncrement = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  badIncrement = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  render() {
    return (
      <>
        <h1>Please leave feedback</h1>

        <Controls
          onGood={this.goodIncrement}
          onNeutral={this.neutralIncrement}
          onBad={this.badIncrement}
        />

        <h2>Statistics</h2>
        <div>
          <p>Good: {}</p>
        </div>
      </>
    );
  }
}

export default App;
