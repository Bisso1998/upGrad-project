import React, { Component } from "react"

class Student extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: "",
      leftPos: 700,
      topPos: 200,
    }
  }
  onHover = e => {
    this.setState({
      leftPos: this.state.leftPos + Math.floor(Math.random() * 100) + 1,
      topPos: this.state.topPos + Math.floor(Math.random() * 100) + 1,
    })
    if (this.state.leftPos > 1000) {
      this.setState({
        leftPos: this.state.leftPos - Math.floor(Math.random() * 100) + 1,
      })
    }
    if (this.state.topPos > 600) {
      this.setState({
        topPos: this.state.topPos - Math.floor(Math.random() * 100) + 1,
      })
    }
  }

  render() {
    return (
      <div>
        <h1>HI</h1>
        <button
          onMouseOver={this.onHover}
          style={{
            position: "absolute",
            left: `${this.state.leftPos}px`,
            top: `${this.state.topPos}px`,
          }}
        >
          Touch Me?
        </button>
      </div>
    )
  }
}
export default Student
