import React, { Component, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import ShippingDetailsService from "../../services/service-tksa/ShippingDetailsService";
import CardPaymentDetailsService from "../../services/service-tksa/CardPaymentDetailsService";
import CartItemsService from "../../services/service-tksa/CartItemsService";

import { Button, Table, Form, Modal } from "react-bootstrap";
import jsPDF from "jspdf";
import "jspdf-autotable";

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
      email: "",
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
    this.paymentComplete = this.paymentComplete.bind(this);

    this.deleteShippingDetails = this.deleteShippingDetails.bind(this);
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
    this.props.history.push("/");
  }

  cancel() {
    this.props.history.push("/shippingDetails");
  }

  deleteShippingDetails(id) {
    ShippingDetailsService.deleteShippingDetails(id).then((res) => {
      this.setState({
        shipping_details: this.state.shipping_details.filter(
          (shipping_details) => shipping_details.id !== id
        ),
      });
    });
  }

  //generate PDF file
  exportPDF = () => {
    const unit = "pt";
    const size = "A4";
    const orientation = "portrait";

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);
    doc.setFontSize(15);

    const title = "LIST OF THE ITEMS";
    const headers = [["ITEM NAME", "DESCRIPTION", "SIZE", "COLOUR", "PRICE"]];
    const data = this.state.cart_item.map((CPDF) => [
      CPDF.itmeName,
      CPDF.itemDescription,
      CPDF.itemSize,
      CPDF.itemColour,
      CPDF.itemPrice,
    ]);

    let content = {
      startY: 50,
      head: headers,
      body: data,
    };

    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.save("ItemList.pdf");
  };

  render() {
    const { error } = this.state;
    return (
      <div>
        <div className="a">
          <h2 className="text-center">SHIPPING & PAYMENT DETAILS</h2> <br />
          <div className="row1">
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
                    {/* <div ref={ref}> */}
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
                          {/* <th>EMAIL ADDRESS</th> */}
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
                                <label>{shipping_details.ownerName}</label>
                                <br />
                              </td>
                            )
                          )}

                          {this.state.shipping_details.map(
                            (shipping_details) => (
                              <td className="tdWidth" key={shipping_details.id}>
                                <label>{shipping_details.phoneNumber}</label>
                                <br />
                              </td>
                            )
                          )}

                          {this.state.shipping_details.map(
                            (shipping_details) => (
                              <td className="tdWidth" key={shipping_details.id}>
                                <label>
                                  {shipping_details.shippingAddress}
                                </label>
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
                                <i
                                  class="fa fa-trash fa-2x"
                                  aria-hidden="true"
                                  onClick={() =>
                                    this.deleteShippingDetails(
                                      shipping_details.id
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
                    {/* </div> */}
                    {/* <Pdf targetRef={ref} filename="code-example.pdf">
                      {({ toPdf }) => (
                        <button onClick={toPdf}>Generate Pdf</button>
                      )}
                    </Pdf> */}
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
                                <label>{card_payment_details.date}</label>
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
                            <Modal.Header closeButton>
                              <h4> THANK YOU! </h4>
                            </Modal.Header>
                            <Modal.Body>
                              <p className="modalParaAlignment">
                                The payment was completed. We offer excellent
                                client service and the highest quality goods as
                                requested. Please stay with us. Thank you so
                                much for getting in touch with us!
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
                                className="btn btn-dark"
                                onClick={() => this.exportPDF()}
                              >
                                PDF LIST
                              </Button>
                              <Button
                                class="btn btn-success"
                                onClick={() => {
                                  this.paymentComplete();
                                }}
                              >
                                COMPLETE
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
