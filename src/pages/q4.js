import React, { Component } from "react"
const axios = require("axios")

class Student extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: "",
      result: "",
    }
  }
  updateValue = e => {
    this.setState({
      value: e.target.value,
    })
  }
  guessGender = () => {
    let that = this
    axios
      .get("https://api.genderize.io/?name=" + this.state.value)
      .then(function(response) {
        // handle success
        console.log("gender  " + response.data.gender)
        that.setState({
          result: "Gender is: " + response.data.gender,
        })
      })
      .catch(function(error) {
        // handle error
        console.log(error)
      })
      .finally(function() {
        // always executed
      })
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>HI</h1>
        <input onChange={e => this.updateValue(e)} value={this.state.value} />
        <br />
        {this.state.result}
        <br />
        <button onClick={this.guessGender}>Whats the Gender?</button>
        <button onClick={this.makeNormalCase}>Clear All</button>
      </div>
    )
  }
}
export default Student
