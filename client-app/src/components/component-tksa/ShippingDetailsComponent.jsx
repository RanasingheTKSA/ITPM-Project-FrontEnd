import React, { Component, useState } from "react";

import "react-datepicker/dist/react-datepicker.css";
import ShippingDetailsService from "../../services/service-tksa/ShippingDetailsService";
import CardPaymentDetailsService from "../../services/service-tksa/CardPaymentDetailsService";
import CartItemsService from "../../services/service-tksa/CartItemsService";

import { Button, Table, Form, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const validation = ({ error, ...rest }) => {
  let checkValidation = false;

  Object.values(error).forEach((val) => {
    if (val.length > 0) {
      checkValidation = false;
    } else {
      checkValidation = true;
    }
  });

  Object.values(rest).forEach((val) => {
    if (val === null) {
      checkValidation = false;
    } else {
      checkValidation = true;
    }
  });

  return checkValidation;
};

class ShippingDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shipping_details: [],
      card_payment_details: [],
      subTotalPrice: 0.0,
      oderShippingFee: 500,

      ownerName: "",
      phoneNumber: "",
      shippingAddress: "",
      zipCode: "",

      error: {
        ownerName: "",
        phoneNumber: "",
        shippingAddress: "",
        zipCode: "",
      },

      show: false,
    };
    this.addShippingDetails = this.addShippingDetails.bind(this);
    this.updateShippingDetails = this.updateShippingDetails.bind(this);

    this.addCardPaymentDetailsPage = this.addCardPaymentDetailsPage.bind(this);
    this.updateCardPaymentDetails = this.updateCardPaymentDetails.bind(this);

    this.thankYouPage = this.thankYouPage.bind(this);
    this.saveShippingAddress = this.saveShippingAddress.bind(this);

    this.paymentComplete = this.paymentComplete.bind(this);
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    if (validation(this.state)) {
      console.log(this.state);
    } else {
      console.log("Error occured");
    }
  };

  formObject = (event) => {
    event.preventDefault();

    const { name, value } = event.target;
    let error = { ...this.state.error };

    switch (name) {
      case "ownerName":
        error.ownerName =
          value.length < 5 ? "Name should be 5 or more characaters long" : "";
        break;
      case "phoneNumber":
        error.phoneNumber =
          value.length < 10
            ? "Phone Number should be similler to the 0112xxxxxx"
            : "";
        break;
      case "shippingAddress":
        error.shippingAddress =
          value.length < 10
            ? "Address should have the Address No, Lane Name, City Name, County Name"
            : "";
        break;
      case "zipCode":
        error.zipCode =
          value.length < 5
            ? "Zip Code should 5 characaters long and similler to the 10xxx"
            : "";
        break;
      default:
        break;
    }

    this.setState({
      error,
      [name]: value,
    });
  };

  componentDidMount() {
    ShippingDetailsService.getShippingDetails().then((res) => {
      this.setState({ shipping_details: res.data });
    });

    CardPaymentDetailsService.getCardDetails().then((res) => {
      this.setState({ card_payment_details: res.data });
    });

    CartItemsService.getCartItems()
      .then((res) => {
        this.setState({ cart_item: res.data });
      })
      .then((res) => {
        let allItemsPrice = this.calculateSubTotalAmount(this.state.cart_item);
        this.setState({ subTotalPrice: allItemsPrice });
      });
  }
  calculateSubTotalAmount(cartItems) {
    console.log(cartItems);
    let totalPrice = 0;

    for (let index = 0; index < cartItems.length; index++) {
      totalPrice += cartItems[index].itemPrice;
    }
    return totalPrice;
  }

  addShippingDetails() {
    this.props.history.push("/add-shippingDetails");
  }

  updateShippingDetails(id) {
    this.props.history.push(`/update-shippingDetails/${id}`);
  }

  addCardPaymentDetailsPage() {
    this.props.history.push("/add-cardPaymentDetails");
  }

  updateCardPaymentDetails(id) {
    this.props.history.push(`/update-cardPaymentDetails/${id}`);
  }

  thankYouPage() {
    this.props.history.push("/thankYouPage");
  }

  handleModel() {
    this.setState({ show: !this.state.show });
  }
  paymentComplete() {
    this.props.history.push("/cartItems");
  }

  saveShippingAddress = (e) => {
    e.preventDefault();
    let shippingDetails = {
      ownerName: this.state.ownerName,
      phoneNumber: this.state.phoneNumber,
      shippingAddress: this.state.shippingAddress,
      zipCode: this.state.zipCode,
    };

    console.log("shippingDetails =>" + JSON.stringify(shippingDetails));
    ShippingDetailsService.addShippingDetails(shippingDetails).then((res) => {
      this.props.history.push("/shippingDetails");
    });
  };

  changeOwnerNameHandler = (event) => {
    this.setState({ ownerName: event.target.value });
  };

  changePhoneNumberHandler = (event) => {
    this.setState({ phoneNumber: event.target.value });
  };
  changeShippingAddressHandler = (event) => {
    this.setState({ shippingAddress: event.target.value });
  };
  changeZipCodeHandler = (event) => {
    this.setState({ zipCode: event.target.value });
  };

  cancel() {
    this.props.history.push("/shippingDetails");
  }

  render() {
    const { error } = this.state;
    return (
      <div>
        <div className="a">
          <h2 className="text-center">SHIPPING & PAYMENT DETAILS</h2> <br />
          <div className="row">
            <div className="sddivcolour">
              <table className="tablesize ">
                <tr>
                  <td>
                    <label className="shipping-d-div" class="labelHeader">
                      SHIPPING DETAILS
                    </label>

                    <i
                      class="fa-solid fa-square-plus fa-2x"
                      onClick={this.addShippingDetails}
                      style={{ marginLeft: "25px" }}
                    ></i>

                    <Table
                      striped
                      bordered
                      hover
                      size="sm"
                      className="shipping-d-div"
                    >
                      <thead>
                        <tr>
                          <th>CUSTOMER NAME</th>
                          <th>PHONE NUMBER</th>
                          <th>SHIPPING ADDRESS</th>
                          <th>ZIP CODE</th>
                          <th>ACTION</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          {this.state.shipping_details.map(
                            (shipping_details) => (
                              <td className="tdWidth" key={shipping_details.id}>
                                <label>{shipping_details.ownerName}</label>{" "}
                                <br />
                              </td>
                            )
                          )}

                          {this.state.shipping_details.map(
                            (shipping_details) => (
                              <td className="tdWidth" key={shipping_details.id}>
                                <label>{shipping_details.phoneNumber}</label>{" "}
                                <br />
                              </td>
                            )
                          )}

                          {this.state.shipping_details.map(
                            (shipping_details) => (
                              <td className="tdWidth" key={shipping_details.id}>
                                <label>
                                  {shipping_details.shippingAddress}
                                </label>{" "}
                                <br />
                              </td>
                            )
                          )}

                          {this.state.shipping_details.map(
                            (shipping_details) => (
                              <td className="tdWidth" key={shipping_details.id}>
                                <label>{shipping_details.zipCode}</label> <br />
                              </td>
                            )
                          )}

                          {this.state.shipping_details.map(
                            (shipping_details) => (
                              <td className="tdWidth" key={shipping_details.id}>
                                <i
                                  class="fa-solid fa-square-pen fa-2x"
                                  onClick={() =>
                                    this.updateShippingDetails(
                                      shipping_details.id
                                    )
                                  }
                                  style={{ marginLeft: "5px" }}
                                ></i>
                              </td>
                            )
                          )}

                          {/* add new address in shipping details page */}
                          {/* <Modal
                            show={this.state.show}
                            onHide={() => this.handleModel()}
                          >
                            <Modal.Header closeButton>
                              <h4> ADD NEW SHIPPING ADDRESS</h4>
                            </Modal.Header>
                            <Modal.Body>
                              <form onSubmit={this.onFormSubmit}>
                                <div className="form-group">
                                  <label> CUSTOMER NAME </label> <br />
                                  <input
                                    placeholder=" customer name"
                                    value={this.state.ownerName}
                                    required
                                    type="text"
                                    name="ownerName"
                                    onChange={this.formObject}
                                    className={
                                      error.ownerName.length > 0
                                        ? "is-invalid form-control"
                                        : "form-control"
                                    }
                                  />
                                  {error.ownerName.length > 0 && (
                                    <span className="invalid-feedback">
                                      {error.ownerName}
                                    </span>
                                  )}
                                </div>{" "}
                                <br />
                                <div className="form-group">
                                  <label> PHONE NUMBER </label> <br />
                                  <input
                                    placeholder=" phone number"
                                    value={this.state.phoneNumber}
                                    required
                                    type="text"
                                    name="phoneNumber"
                                    onChange={this.formObject}
                                    className={
                                      error.phoneNumber.length > 0
                                        ? "is-invalid form-control"
                                        : "form-control"
                                    }
                                  />
                                  {error.phoneNumber.length > 0 && (
                                    <span className="invalid-feedback">
                                      {error.phoneNumber}
                                    </span>
                                  )}
                                </div>
                                <br />
                                <div className="form-group">
                                  <label> SHIPPING ADDRESS </label> <br />
                                  <input
                                    placeholder=" shipping address"
                                    value={this.state.shippingAddress}
                                    required
                                    type="text"
                                    name="shippingAddress"
                                    onChange={this.formObject}
                                    className={
                                      error.shippingAddress.length > 0
                                        ? "is-invalid form-control"
                                        : "form-control"
                                    }
                                  />
                                  {error.shippingAddress.length > 0 && (
                                    <span className="invalid-feedback">
                                      {error.shippingAddress}
                                    </span>
                                  )}
                                </div>{" "}
                                <br />
                                <div className="form-group">
                                  <label> ZIP CODE </label>
                                  <br />
                                  <input
                                    placeholder="zip code"
                                    value={this.state.zipCode}
                                    required
                                    type="text"
                                    name="zipCode"
                                    onChange={this.formObject}
                                    className={
                                      error.zipCode.length > 0
                                        ? "is-invalid form-control"
                                        : "form-control"
                                    }
                                  />
                                  {error.zipCode.length > 0 && (
                                    <span className="invalid-feedback">
                                      {error.zipCode}
                                    </span>
                                  )}
                                </div>{" "}
                                <br />
                                <div></div>
                              </form>
                            </Modal.Body>
                            <Modal.Footer>
                              <Button
                                className="btn btn-danger"
                                onClick={() => {
                                  this.handleModel();
                                }}
                              >
                                CANCEL
                              </Button>
                              <button
                                className="btn btn-success"
                                onClick={this.saveShippingAddress}
                              >
                                {" "}
                                SAVE{" "}
                              </button>
                            </Modal.Footer>
                          </Modal> */}
                        </tr>
                      </tbody>
                    </Table>
                    <br />
                    <br />

                    <label className="shipping-d-div" class="labelHeader">
                      PAYMENT DETAILS
                    </label>

                    <i
                      class="fa-solid fa-square-plus fa-2x"
                      onClick={this.addCardPaymentDetailsPage}
                      style={{ marginLeft: "25px" }}
                    ></i>
                    <Table
                      striped
                      bordered
                      hover
                      size="sm"
                      className="shipping-d-div"
                    >
                      <thead>
                        <tr>
                          <th>CARD HOLDER NAME</th>
                          <th>CARD NUMBER</th>
                          <th>EXPIRATION DATE</th>
                          <th>ACTION</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          {this.state.card_payment_details.map(
                            (card_payment_details) => (
                              <td
                                className="tdWidth"
                                key={card_payment_details.id}
                              >
                                <label>
                                  {card_payment_details.cardHolderName}
                                </label>{" "}
                                <br />
                              </td>
                            )
                          )}

                          {this.state.card_payment_details.map(
                            (card_payment_details) => (
                              <td
                                className="tdWidth"
                                key={card_payment_details.id}
                              >
                                <label>{card_payment_details.cardNumber}</label>{" "}
                                <br />
                              </td>
                            )
                          )}

                          {this.state.card_payment_details.map(
                            (card_payment_details) => (
                              <td
                                className="tdWidth"
                                key={card_payment_details.id}
                              >
                                <label>
                                  {card_payment_details.expirationDate}
                                </label>{" "}
                                <br />
                              </td>
                            )
                          )}

                          {this.state.card_payment_details.map(
                            (card_payment_details) => (
                              <td
                                className="tdWidth"
                                key={card_payment_details.id}
                              >
                                <i
                                  class="fa-solid fa-square-pen fa-2x"
                                  onClick={() =>
                                    this.updateCardPaymentDetails(
                                      card_payment_details.id
                                    )
                                  }
                                  style={{ marginLeft: "5px" }}
                                ></i>
                              </td>
                            )
                          )}
                        </tr>
                      </tbody>
                    </Table>
                  </td>
                  {/* oder summary section */}
                  <td>
                    <div className="card  offset-md-3 offset-md-3">
                      <br />
                      <h5 className="text-center"> ORDER SUMMARY </h5>

                      <div className="card-body">
                        <form>
                          <div className="form-group">
                            <label> SUB TOTAL </label>
                            <input
                              placeholder=" SUB TOTAL"
                              name="sub-total"
                              className="form-control"
                              value={this.state.subTotalPrice}
                            />
                          </div>
                          <br />

                          <div className="form-group">
                            <label> SHIPPING FEE </label>
                            <input
                              placeholder=" SHIPPING FEE"
                              name="shipping-fee"
                              className="form-control"
                              value={this.state.oderShippingFee}
                            />
                          </div>
                          <br />

                          <div className="form-group">
                            <label> TOTAL PRICE </label>
                            <input
                              placeholder="TOTAL FEE"
                              name="total-price"
                              className="form-control"
                              value={
                                this.state.subTotalPrice +
                                this.state.oderShippingFee
                              }
                            />
                          </div>
                          <br />

                          <div className="buttonAlign">
                            <button
                              class="btn btn-success"
                              onClick={this.thankYouPage}
                            >
                              PAY NOW
                            </button>
                          </div>
                          {/* <i
                            class="fa-solid fa-square-plus fa-2x"
                            onClick={() => {
                              this.handleModel();
                            }}
                            style={{ marginLeft: "5px" }}
                          ></i> */}
                          <div className="buttonAlign">
                            <Button
                              class="btn btn-success"
                              onClick={() => {
                                this.handleModel();
                              }}
                            >
                              PAY NOW
                            </Button>
                          </div>
                          <Modal
                            show={this.state.show}
                            onHide={() => this.handleModel()}
                          >
                            <Modal.Header>
                              <h4> THANK YOU! </h4>
                            </Modal.Header>
                            <Modal.Body>
                              <p className="modalParaAlignment">
                                The payment was completed successfully, and the
                                payment report was delivered to the email
                                address provided. We offer excellent client
                                service and the highest quality goods as
                                requested.
                                <br />
                                <br />
                                Please stay with us.
                                <br />
                                <br />
                                Thank you so much for getting in touch with us!
                              </p>
                            </Modal.Body>
                            <Modal.Footer>
                              <Button
                                class="btn btn-success"
                                onClick={() => {
                                  this.paymentComplete();
                                }}
                              >
                                HOME
                              </Button>
                            </Modal.Footer>
                          </Modal>
                        </form>
                      </div>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default ShippingDetails;
