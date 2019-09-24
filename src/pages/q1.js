import React, { Component } from "react"

class Hello extends Component {
  constructor(props) {
    super(props)
    this.state = {
      textHeight: 10,
      textColor: "black",
      bgColor: "white",
    }
  }
  increaseText = () => {
    console.log("Inc text " + this.state.textHeight)
    this.setState({
      textHeight: this.state.textHeight + 2,
    })
  }
  decreaseText = () => {
    console.log("dec text " + this.state.textHeight)

    this.setState({
      textHeight: this.state.textHeight - 2,
    })
  }
  increaseContrast = () => {
    this.setState({
      textColor: "white",
      bgColor: "black",
    })
  }
  decreaseContrast = () => {
    this.setState({
      textColor: "black",
      bgColor: "white",
    })
  }
  handleClick() {
    alert("I am clicked")
  }
  render() {
    return (
      <div className="hello">
        <button onClick={this.increaseText}>Increase Text</button>
        <button onClick={this.decreaseText}>Decrease Text</button>
        <button onClick={this.increaseContrast}>High Contrast</button>
        <button onClick={this.decreaseContrast}>Low Contrast</button>

        <p
          style={{
            fontSize: `${this.state.textHeight}px`,
            color: `${this.state.textColor}`,
            backgroundColor: `${this.state.bgColor}`,
          }}
        >
          lorem ispum lorem ispum
        </p>
      </div>
    )
  }
}
export default Hello
