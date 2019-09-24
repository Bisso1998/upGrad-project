import React, { Component } from "react"
// import { graphql } from "gatsby"
// import axios from "axios"
import "bootstrap/dist/css/bootstrap.min.css"

import HeadCount from "./headcount-module"
class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <HeadCount />
      </div>
    )
  }
}

export default HomePage
