import React, { Component } from "react"
import firebase from "../firebase.js"
import { Button } from "reactstrap"

class AttendanceDb extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listOfStudents: [],
      numberOfStudents: 0,
    }
  }
  componentDidMount() {
    if (typeof window != "undefined") {
      this.showAttendance()
    }
  }

  markAttendance = () => {
    console.log(localStorage.getItem("studentCountFromImage"))
  }

  showAttendance = () => {
    const students = firebase.database().ref("listOfStudents")
    students.on("value", snapshot => {
      let students = snapshot.val()

      let newState = []
      for (let eachStudent in students) {
        console.log(students[eachStudent].name)
        newState.push({
          name: students[eachStudent].name,
          rollNo: students[eachStudent].rollNo,
        })
      }
      this.setState({
        listOfStudents: newState,
      })
      // console.log("VAL FROM FIREBASE: ", this.state.listOfStudents)
    })
  }

  render() {
    let studentList = this.state.listOfStudents.map((eachStudent, index) => (
      <tr style={{ padding: "30px", textAlign: "center" }}>
        <td>{index + 1}</td>
        <td>{eachStudent.name}</td>
        <td>{eachStudent.rollNo}</td>
      </tr>
    ))
    return (
      <div>
        <Button onClick={this.showAttendance} color="primary">
          Load attendance
        </Button>{" "}
        &nbsp;&nbsp;&nbsp;
        <Button onClick={this.markAttendance} color="success">
          Mark Attendance
        </Button>
        <div>
          <table>
            <tr>
              <th>Serial Number</th>
              <th>Name</th>
              <th>Registration Number</th>
            </tr>
            {studentList}
          </table>
        </div>
      </div>
    )
  }
}

export default AttendanceDb
