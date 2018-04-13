import React from "react";

class UserName extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="center">
        <h2 className="text-success ml-lg  text-center">Generate username</h2>
        <p className="text-md text-center">Cant find any username </p>
        <p className="text-md text-center">Try this!!!</p>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="form-control"
            placeholder="Enter words Separated by space"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button
            value="Submit"
            onClick={() => this.props.dispatchAction("username",this.state.value)}
            type="submit"
            className="btn btn-success generate text-center"
          >
            Generate
          </button>
        </form>

        <br />
        <input
          type="text"
          className="form-control"
          value={this.props.stateProps.username}
          readonly
        />
      </div>
    );
  }
}
export default UserName;
