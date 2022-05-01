import React, { Component, useState } from "react";

import "react-datepicker/dist/react-datepicker.css";
import ShippingDetailsService from "../../services/service-tksa/ShippingDetailsService";
import CardPaymentDetailsService from "../../services/service-tksa/CardPaymentDetailsService";
import CartItemsService from "../../services/service-tksa/CartItemsService";

import { Button, Table, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ShippingDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shipping_details: [],
      card_payment_details: [],
      subTotalPrice: 0.0,
      oderShippingFee: 500,
    };
    this.addShippingDetails = this.addShippingDetails.bind(this);
    this.updateShippingDetails = this.updateShippingDetails.bind(this);

    this.addCardPaymentDetailsPage = this.addCardPaymentDetailsPage.bind(this);
    this.updateCardPaymentDetails = this.updateCardPaymentDetails.bind(this);

    this.thankYouPage = this.thankYouPage.bind(this);
  }

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

  render() {
    return (
      <div>
        <div className="a">
          <h2 className="text-center">SHIPPING & PAYMENT DETAILS</h2> <br />
          <div className="row">
            <div className="sddivcolour">
              <table className="tablesize ">
                <tr>
                  <td>
                    <h4 className="shipping-d-div">SHIPPING DETAILS</h4>
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
                                  class="fa-solid fa-square-plus fa-2x"
                                  onClick={this.addShippingDetails}
                                ></i>
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
                        </tr>
                      </tbody>
                    </Table>
                    <br />
                    <br />

                    <h4 className="shipping-d-div">PAYMENT DETAILS</h4>
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
                                  class="fa-solid fa-square-plus fa-2x"
                                  onClick={this.addCardPaymentDetailsPage}
                                ></i>

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
