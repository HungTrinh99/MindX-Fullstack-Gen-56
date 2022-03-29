import React, { Component } from "react";
const phoneData = [
  {
    name: "IPhone",
  },
  {
    name: "Samsung",
  },
];
class DemoLifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
      phones: [],
    };

    console.log("Constructor");
  }

  onLoginHandler = () => {
    this.setState({
      isAuthenticated: true,
    });
  };

  onLogoutHandler = () => {
    this.setState({
      isAuthenticated: false,
    });
  };
  getPhoneData = () => {
    // Get phone data logic
    this.setState({
      phones: phoneData,
    });
  };

  render() {
    console.log("Render");
    return (
      <div>
        <h1>Demo Class Component: Lifecycle hook</h1>
        {this.state.isAuthenticated === false ? (
          <button className="btn btn-primary" onClick={this.onLoginHandler}>
            Login
          </button>
        ) : (
          <button className="btn btn-danger" onClick={this.onLogoutHandler}>
            Logout
          </button>
        )}
      </div>
    );
  }

  componentDidMount() {
    console.log("Component did mount");
    // Lan dau tien lay data CALL API
    // this.getPhoneData();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Component did update");
    if (prevState.phones !== this.state.phones) {
      this.getPhoneData();
    }
  }
}

export default DemoLifecycle;

//Lifecycle hook !== React hook

// Mounting: constructor => render => componentDidMount
// Updating: shouldComponentUpdate => render => componentDidUpdate
