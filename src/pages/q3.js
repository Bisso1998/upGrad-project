import React, { Component } from "react"

class Student extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: "",
      listOfFilteredMovies: [],
      listOfMovies: [
        {
          title: "Mad Max: Fury Road",
          genre: ["Action", "Adventure", "Sci-Fi"],
        },
        {
          title: "The Hunger Games: Mockingjay Part 1",
          genre: ["Adventure", "Thriller"],
        },
        {
          title: "Jurassic World",
          genre: ["Action", "Adventure", "Sci-Fi"],
        },
        {
          title: "Everest",
          genre: ["Drama", "Thriller"],
        },
        {
          title: "Insurgent",
          genre: ["Adventure"],
        },
        {
          title: "Sicario",
          genre: ["Action", "Crime", "Drama"],
        },
      ],
    }
  }
  filterMovies = e => {
    this.setState({
      value: e.target.value,
    })
    console.log("value: " + this.state.value)

    var listOfFilteredMovies = this.state.listOfMovies.filter(eachMovie => {
      return eachMovie.genre.includes(this.state.value)
    })
    console.log(listOfFilteredMovies)
    this.setState({
      listOfMovies: listOfFilteredMovies,
    })
  }

  render() {
    return (
      <div>
        <h1>HI</h1>
        <input onChange={e => this.filterMovies(e)} value={this.state.value} />
        {this.state.changedValue} <br />
        {this.state.listOfMovies.map(eachMovie => (
          <div>{eachMovie.title}</div>
        ))}
        <button onClick={this.makeCrazyCase}>crazyCase</button>
        <button onClick={this.makeNormalCase}>Normal Case</button>
      </div>
    )
  }
}
export default Student
