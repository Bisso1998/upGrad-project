import React, { Component } from "react"

class Student extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: "",
      changedValue: "",
    }
  }
  updateInputBoxValue = e => {
    this.setState({
      value: e.target.value,
    })
    console.log(this.state.value)
  }
  makeCrazyCase = () => {
    console.log(this.state.value.split(""))
    let changedStr = []
    this.state.value.split("").map(eachValue => {
      if (eachValue == eachValue.toUpperCase()) {
        eachValue = eachValue.toLowerCase()
      } else if (eachValue == eachValue.toLowerCase()) {
        eachValue = eachValue.toUpperCase()
      }
      changedStr.push(eachValue)
    })
    console.log("changedStr", changedStr.join(""))
    this.setState({
      changedValue: "crazyCase is: " + changedStr.join(""),
    })
  }
  makeNormalCase = () => {
    this.setState({
      changedValue: "Normal case is " + this.state.value,
    })
  }
  render() {
    return (
      <div>
        <h1>HI</h1>
        <input
          onChange={e => this.updateInputBoxValue(e)}
          value={this.state.value}
        />
        {this.state.changedValue} <br />
        <button onClick={this.makeCrazyCase}>crazyCase</button>
        <button onClick={this.makeNormalCase}>Normal Case</button>
      </div>
    )
  }
}
export default Student
