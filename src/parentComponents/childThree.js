import { Component } from "react";

class ChildThree extends Component {
  state = {
    isClicked: false,
    nName: "",
    nGender: "",
    nPhn: "",
    nQualification: "",
  };

  updateName = (event) => {
    this.setState({ nName: event.target.value });
  };

  updateGender = (event) => {
    this.setState({ nGender: event.target.value });
  };

  updatePhn = (event) => {
    this.setState({ nPhn: event.target.value });
  };

  updateQualification = (event) => {
    this.setState({ nQualification: event.target.value });
  };

  upDateDetails = () => {
    this.setState((prevState) => {
      console.log();
      return { isClicked: !prevState.isClicked };
    });
  };

  render() {
    const { name, gender, phn, qualification, collage } = this.props;
    const { isClicked, nName, nGender, nPhn, nQualification } = this.state;
    return (
      <>
        <input
          type="text"
          value={nName}
          onChange={this.updateName}
          placeholder="Enter Your Name"
        />
        <br></br>
        <input
          type="text"
          value={nGender}
          onChange={this.updateGender}
          placeholder="Enter Your Gender"
        />
        <br></br>
        <input
          type="text"
          value={nPhn}
          onChange={this.updatePhn}
          placeholder="Enter Your Phone Number"
        />
        <br></br>

        <input
          type="text"
          value={nQualification}
          onChange={this.updateQualification}
          placeholder="Enter Your Qualification"
        />
        <br></br>

        <button onClick={this.upDateDetails}>Update All Details</button>
        <ul>
          <li>{isClicked ? nName : name}</li>

          <li>{isClicked ? nGender : gender}</li>
          <li>{isClicked ? nPhn : phn}</li>
          <li>{isClicked ? nQualification : qualification}</li>
          <li>{isClicked ? collage : collage}</li>
        </ul>
      </>
    );
  }
}

export default ChildThree;
