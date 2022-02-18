import React, { Component } from "react";

class ChangeCarColor extends Component {
  state = {
    carUrl: "black-car.png",
  };

  //   onBlackCarChange = () => {
  //     this.setState({
  //       carUrl: "black-car.png",
  //     });
  //   };
  //   onRedCarChange = () => {
  //     this.setState({
  //       carUrl: "red-car.png",
  //     });
  //   };
  //   onWhiteCarChange = () => {
  //     this.setState({
  //       carUrl: "white-car.png",
  //     });
  //   };

  onColorChange = (color) => {
    this.setState({
      carUrl: color,
    });
  };

  render() {
    console.log("This is render");
    const url = `images/${this.state.carUrl}`;
    return (
      <div>
        <h1 className="text-center">Bài tập đổi màu xe</h1>

        <div className="container">
          <div className="d-flex">
            <div className="car-result">
              <h5>Please choose your's car color</h5>
              <img src={url} />
            </div>
            <div className="car-controller">
              <button
                className="btn btn-black"
                onClick={() => this.onColorChange("black-car.png")}
              >
                Black car
              </button>
              <button
                className="btn btn-red"
                onClick={() => this.onColorChange("red-car.png")}
              >
                Red car
              </button>
              <button
                className="btn btn-white"
                onClick={() => this.onColorChange("white-car.png")}
              >
                White car
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ChangeCarColor;
