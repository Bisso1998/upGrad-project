import React, { Component } from "react"
import AttendanceDb from "../components/attendance-track-from-db.js"
import { Button, Container, Row, Col } from "reactstrap"

import Camera from "react-html5-camera-photo"
import "react-html5-camera-photo/build/css/index.css"
import * as faceapi from "face-api.js"
import Header from "../components/header"
class HeadCount extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imageUrl: "",
      numberOfPeople: null,
      isModuleLoaded: false,
      imageProcessingLoader: false,
      imageProcessingStage: "not_started",
      dataUri: "",
    }
  }

  componentDidMount() {
    Promise.all([faceapi.nets.ssdMobilenetv1.loadFromUri("/models")]).then(
      this.start
    )
  }

  start = () => {
    console.log("Successfully loaded all data from start")
    this.setState({
      isModuleLoaded: true,
    })
  }

  analyzeImage() {
    const input = document.getElementById("myImg")
    let fullFaceDescriptions = faceapi.detectAllFaces(input)
    console.log("input", input)
    console.log("fullFaceDescriptions", fullFaceDescriptions)
  }
  onTakePhoto(dataUri) {
    // Do stuff with the dataUri photo...
    console.log("takePhoto")
    this.setState({
      dataUri,
    })
    setTimeout(() => {
      this.handleCameraClick()
    }, 300)
  }
  handleCameraClick = () => {
    let imageToProcess = document.getElementById("imageToProcess")
    this.setState({
      imageUrl: null,
      imageProcessingStage: "image_processing",
      imageToProcess,
    })
    console.log(this.state.imageProcessingStage)
    let that = this

    console.log("imageToProcess", imageToProcess)
    async function f() {
      // const analysisImage = await faceapi.bufferToImage(
      //   that.state.imageToProcess
      // )
      const detections = await faceapi.detectAllFaces(that.state.imageToProcess)
      console.log("Number of people in image " + detections.length)
      that.setState({
        numberOfPeople: detections.length,
        imageProcessingStage: "image_processing_complete",
      })

      localStorage.setItem("studentCountFromImage", detections.length)
    }
    f()
  }
  handleChange = event => {
    let tmpAddress = URL.createObjectURL(event.target.files[0])
    this.setState({
      dataUri: null,
      imageUrl: tmpAddress,
      imageProcessingStage: "image_processing",
    })
    let that = this
    async function f() {
      const imageUpload = document.getElementById("imageUpload")
      console.log("imageUpload", imageUpload.files[0])
      const analysisImage = await faceapi.bufferToImage(imageUpload.files[0])
      console.log("analysisImage", analysisImage)
      const detections = await faceapi.detectAllFaces(analysisImage)
      console.log("Number of people in image " + detections.length)
      that.setState({
        numberOfPeople: detections.length,
        imageProcessingStage: "image_processing_complete",
      })
      localStorage.setItem("studentCountFromImage", that.state.numberOfPeople)
    }
    f()
  }

  render() {
    return (
      <div>
        <Header title="Teacher's Dashboard" />
        <Row>
          <Col>
            {this.state.isModuleLoaded && (
              <div style={{}}>
                <img
                  src={this.state.imageUrl || this.state.dataUri}
                  heigth="200"
                  width="400"
                  id="imageToProcess"
                  style={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "50%",
                  }}
                />
                {this.state.imageProcessingStage ==
                  "image_processing_complete" && (
                  <h1 style={{ textAlign: "center" }}>
                    {" "}
                    Number of people detected {this.state.numberOfPeople}{" "}
                  </h1>
                )}
                <b> Upload a picture or click real time pictures.</b>
                <input
                  type="file"
                  id="imageUpload"
                  onChange={this.handleChange}
                />
                <Camera
                  onTakePhoto={dataUri => {
                    this.onTakePhoto(dataUri)
                  }}
                />
                <div className="App"></div>
                {this.state.imageProcessingStage == "image_processing" && (
                  <div>
                    <h1 id="showImageStatusHere"> Processing the image... </h1>
                  </div>
                )}
              </div>
            )}
            {!this.state.isModuleLoaded && (
              <img
                style={{}}
                src="https://www.downgraf.com/wp-content/uploads/2019/05/Loader-animation-principle-freebie.gif"
              />
            )}
          </Col>
          <Col>
            <AttendanceDb />
          </Col>
        </Row>
      </div>
    )
  }
}

export default HeadCount
