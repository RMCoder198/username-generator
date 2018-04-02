import React from "react";

class PassWord extends React.Component {
  render() {
    return (
      <div className="center">
        <h2 className="text-success ml-lg  text-center">Generate password</h2>
        <p className="text-md text-center">Cant find any strong password </p>
        <p className="text-md text-center">Try this!!!!</p>
        <input
          type="text"
          className="form-control"
          placeholder="Enter words Separated by space"
        />
        <button  type="button" className="btn btn-success generate text-center">Generate</button>
         
        <br />
        <input
          type="text"
          className="form-control"
          value={this.props.stateProps.password}
          readonly
        />
      </div>
    );
  }
}
export default PassWord;
