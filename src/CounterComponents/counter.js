import { Component } from "react";
import "./counter.css";

class Counter extends Component {
  state = { count: 0 };

  onIncrement = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };

  onDecrement = () => {
    this.setState((prevSTate) => {
      return { count: prevSTate.count - 1 };
    });
  };

  render() {
    const { count } = this.state;
    return (
      <div className="container">
        <h1>Counter</h1>
        <p>
          <span className="count-el">{count}</span>
        </p>
        <button onClick={this.onIncrement}>Increase</button>
        <button onClick={this.onDecrement}>Decrease</button>
      </div>
    );
  }
}

export default Counter;
