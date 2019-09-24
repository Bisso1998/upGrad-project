import React, { Component } from "react"
// import { graphql } from "gatsby"
// import axios from "axios"
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from "gatsby"

class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>Biswarup Banerjee </h1>
        <h3>
          <Link to="/q1">Question 1</Link>
          <br />
          <Link to="/q2">Question 2</Link>
          <br />

          <Link to="/q3">Question 3</Link>
          <br />

          <Link to="/q4">Question 4</Link>
          <br />

          <Link to="/q5">Question 5</Link>
          <br />
        </h3>
      </div>
    )
  }
}

export default HomePage
