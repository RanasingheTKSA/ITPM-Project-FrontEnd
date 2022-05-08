import React, { Component } from "react";
import { Button, Table, Form, Modal, ModalTitle } from "react-bootstrap";

class ThankYouModalComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div className="a">
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title className="modalTextAlignment">
              THANK YOU VERY MUCH!
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p className="modalParaAlignment">
              {" "}
              The payment was completed successfully, and the payment report was
              delivered to the email address provided. We offer excellent client
              service and the highest quality goods as requested.
              <br />
              <br />
              Please stay with us.
              <br />
              <br />
              Thank you so much for getting in touch with us!
            </p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="primary" class="btn btn-success">
              Save changes
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
        <br />
        <br />
      </div>
    );
  }
}

export default ThankYouModalComponent;
