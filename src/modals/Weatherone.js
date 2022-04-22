import React from "react";
import { Modal } from "react-bootstrap";
import WeatherDay from './WeatherDay'

class WeatherOne extends React.Component {

  render() {
    return (
      <>
        <Modal
          show={this.props.weatherModal}
          onClick={this.props.hideModal}
          onhide={this.props.hideWeatherModal}
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body onClick={this.props.hideModal}>
          <WeatherDay 
          weather={this.props.weatherResults[0]}/>
          </Modal.Body>
        </Modal> 
      </>
    )
  }
}
    export default WeatherOne;