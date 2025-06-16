import { Component } from "react";

class ChildTwo extends Component {
  render() {
    const { qualification, collage } = this.props;
    return (
      <>
        <ul>
          <li>{qualification}</li>
          <li>{collage}</li>
        </ul>
      </>
    );
  }
}

export default ChildTwo;
