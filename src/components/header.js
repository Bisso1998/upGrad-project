import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "Default",
    }
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <header
          style={{
            background: `rebeccapurple`,
            marginBottom: `1.45rem`,
          }}
        >
          <div>
            <h1>
              <Link
                to="/"
                style={{
                  color: `white`,
                  textDecoration: `none`,
                  padding: "30px",
                  margin: "10px",
                }}
              >
                {this.props.title}
              </Link>
            </h1>
          </div>
        </header>
      </div>
    )
  }
}

export default Header
