import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
    };
  }

  render() {
    const { count } = this.state;

    return (
      <div>
        <button>-</button>
        <span>{count}</span>
        <button>+</button>
      </div>
    );
  }
}

export default Counter;
