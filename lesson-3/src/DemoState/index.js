import React, { Component } from "react";

class DemoState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
      isLoading: false,
      students: [],
    };
  }

  //   Property;
  //   state = {
  //     isAuthenticated: false,
  //     isLoading: false,
  //     students: [],
  //   };

  //method
  onSignInHandler = () => {
    //this.isAuthenticated = true;
    console.log("Hello");
    this.setState({
      isAuthenticated: true,
    });
  };

  onLogout = () => {
    this.setState({
      isAuthenticated: false,
    });
  };

  render() {
    const UI = this.state.isAuthenticated ? (
      <div>
        <h1>Bạn đã đăng nhập thành công</h1>
        <button onClick={this.onLogout}>Đăng xuất</button>
      </div>
    ) : (
      <div>
        <h1>Xin chào mời bạn đăng nhập vào hệ thống của chúng tôi</h1>;
        <button onClick={this.onSignInHandler}>Đăng nhập vào hệ thống</button>
      </div>
    );
    return <div>{UI}</div>;
  }
}

export default DemoState;
//JSX : Javascript XML (Cấu trúc HTML ở trong react)
// method: phương thức (function )

// Method render() được gọi lại khi và chỉ khi state thay đổi.

// Linear => function => Class (Object) => module
// Class compoennt => functional (hooks)
// Angular => Typescript (OOP)
