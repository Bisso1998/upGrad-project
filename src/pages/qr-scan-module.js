import React, { Component } from "react"
import QrReader from "react-qr-reader"
import firebase from "../firebase.js"
// import firebase from "firebase"

class QrScannerModule extends Component {
  constructor(props) {
    super(props)
    this.state = {
      result: "No result",
      showScanner: false,
      studentName: "",
      studentRollNumber: "",
      isAlreadyPresent: 0,
    }
  }

  componentDidMount() {}
  //

  handleScan = data => {
    if (data) {
      if (data == "k1627mlclass") {
        this.setState({
          result: data,
          showScanner: false,
          isAlreadyPresent: 0,
        })

        const students = firebase.database().ref("listOfStudents")

        students.on("value", snapshot => {
          let students = snapshot.val()
          for (let eachStudent in students) {
            if (this.state.studentRollNumber == students[eachStudent].rollNo) {
              this.setState({
                isAlreadyPresent: 1,
              })
            }
          }
        })
        if (this.state.isAlreadyPresent == 0) {
          this.markAttendance()
        } else {
          alert("Already Marked")
        }
      }
    }
  }
  showQrScanner = () => {
    this.setState({ showScanner: true })
  }

  markAttendance = () => {
    const students = firebase.database().ref("listOfStudents")
    const student = {
      name: this.state.studentName,
      rollNo: this.state.studentRollNumber,
    }
    console.log("Student Details:  ", student)
    students.push(student)
    this.setState({
      showScanner: false,
    })
    document.getElementById("showAttendanceStatus").innerText =
      "Attendance Marked"
  }
  updateStudentName = e => {
    this.setState({
      studentName: e.target.value,
    })
  }
  updateStudentRollNumber = e => {
    this.setState({
      studentRollNumber: e.target.value,
    })
  }
  componentDidMount() {}
  render() {
    return (
      <div>
        {this.state.showScanner && (
          <QrReader
            delay={300}
            onError={this.handleError}
            onScan={this.handleScan}
            style={{ width: "100%" }}
          />
        )}
        <p>{this.state.result}</p>
        <p id="showAttendanceStatus">{this.state.result}</p>
        <input
          type="text"
          placeholder="Enter Student Name..."
          value={this.state.studentName}
          onChange={e => this.updateStudentName(e)}
        />
        <br />
        <br />
        <br />
        <input
          type="number"
          placeholder="Enter Student Roll Number..."
          value={this.state.studentRollNumber}
          onChange={e => this.updateStudentRollNumber(e)}
        />
        <br />
        // <button onClick={this.markAttendance}>Mark me present</button>
        <br />
        <button onClick={this.showQrScanner}>Start Scanning</button>
        <br />
      </div>
    )
  }
}

export default QrScannerModule
