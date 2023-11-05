import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
    };

    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleDecrement() {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  }

  handleIncrement() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  render() {
    const { count } = this.state;
    const date = new Date();
    date.setDate(date.getDate() + count);

    return (
      <div>
        <button onClick={this.handleDecrement}>-</button>
        <span>
          {date.toDateString()} [{count}]
        </span>
        <button onClick={this.handleIncrement}>+</button>
      </div>
    );
  }
}

export default Counter;
