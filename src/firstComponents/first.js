import { Component } from "react";
import "./first.css";

class FirstComponents extends Component {
  render() {
    return (
      <div className="f-con">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1hZxkl7aLUy170veFH3FI9uDbkqoSBjMY2A&s"
          className="img-stl"
          alt="_"
        />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting{" "}
          <br />
          industry. Lorem Ipsum has been the industry's standard dummy text ever{" "}
          <br />
          since the 1500s, when an unknown printer took a galley of type and{" "}
          <br />
          scrambled it to make a type specimen book.
        </p>
      </div>
    );
  }
}

export default FirstComponents;
