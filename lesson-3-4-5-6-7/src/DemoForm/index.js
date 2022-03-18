import React, { Component } from "react";
const initialUserInfo = {
  account: "",
  password: "",
};
export default class DemoForm extends Component {
  state = {
    user: initialUserInfo,
    isAuthenticated: false,
  };

  onChangeHandler = (e) => {
    const { value, name } = e.target;
    this.setState({
      user: {
        ...this.state.user, // spread operator
        [name]: value, // dynamic key in object
      },
    });
  };

  onSubmitHandler = (e) => {
    e.preventDefault();
    const { account, password } = this.state.user;
    // Kiem tra account .....
    if (account === "admin" && password === "admin") {
      this.setState({
        isAuthenticated: true,
      });
    }
  };

  onLogOut = () => {
    this.setState({
      isAuthenticated: false,
      user: initialUserInfo,
    });
  };
  render() {
    if (this.state.isAuthenticated) {
      return (
        <div>
          <h1>Hello I am Trinh Vu Minh Hung</h1>
          <button className="btn btn-success" onClick={this.onLogOut}>
            Log out
          </button>
        </div>
      );
    }

    return (
      <div className="container">
        <h1>Demo form</h1>
        <div className="row py-4">
          <form onSubmit={this.onSubmitHandler}>
            <div className="form-group">
              <label htmlFor="account">Account</label>
              <input
                type="text"
                className="form-control"
                name="account"
                id="account"
                aria-describedby="helpId"
                placeholder="account"
                onChange={this.onChangeHandler}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="text"
                className="form-control"
                name="password"
                id="password"
                aria-describedby="helpId"
                placeholder="password"
                onChange={this.onChangeHandler}
              />
            </div>
            <button type="submit" className="btn btn-primary mt-2">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}
