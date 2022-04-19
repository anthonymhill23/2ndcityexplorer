import React from "react";
import { Modal } from "react-bootstrap";

class Errormodal extends React.Component {


  render() {
    return (
      <>
        <Modal
          show={this.props.modalState}
          onClick={this.props.hideModal}
        >
          <Modal.Header closeButton>{this.props.error}</Modal.Header>
          <Modal.Body onClick={this.props.hideModal}>
            <p>{this.props.errorMessage}</p>
          </Modal.Body>
        </Modal> 
      </>
    )
  }
}

export default Errormodal












