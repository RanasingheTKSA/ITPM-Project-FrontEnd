import React, { Component, useState } from "react";
import CardPaymentDetailsService from "../../services/service-tksa/CardPaymentDetailsService";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";

class AddCardPaymenrDetailsComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cardHolderName: "",
      cardNumber: "",
      startDate: new Date(),
    };
    this.handleChange = this.handleChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);

    this.changeCardHolderNameHandler =
      this.changeCardHolderNameHandler.bind(this);
    this.changeCardNumberHandler = this.changeCardNumberHandler.bind(this);
    this.changeStartDateHandler = this.changeStartDateHandler.bind(this);
    this.saveCardPaymentDetails = this.saveCardPaymentDetails.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date,
    });
    console.log(this.state.startDate);
  }

  onFormSubmit(e) {
    e.preventDefault();
    console.log(this.state.startDate);
  }

  saveCardPaymentDetails = (e) => {
    e.preventDefault();
    let cardPaymentDetails = {
      cardHolderName: this.state.cardHolderName,
      cardNumber: this.state.cardNumber,
      startDate: this.state.startDate,
    };

    console.log("cardPaymentDetails =>" + JSON.stringify(cardPaymentDetails));
    CardPaymentDetailsService.addCardDetails(cardPaymentDetails).then((res) => {
      this.props.history.push("/shippingDetails");
    });
  };

  changeCardHolderNameHandler = (event) => {
    this.setState({ cardHolderName: event.target.value });
  };

  changeCardNumberHandler = (event) => {
    this.setState({ cardNumber: event.target.value });
  };

  changeStartDateHandler = (event) => {
    this.setState({ startDate: event.target.value });
  };
  cancel() {
    this.props.history.push("/shippingDetails");
  }

  render() {
    return (
      <div className="a">
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <br />
              <h3 className="text-center"> ADD CARD DETAILS</h3>

              <div className="card-body">
                <form onSubmit={this.onFormSubmit}>
                  <div className="form-group">
                    <label> CARD HOLDER NAME </label> <br />
                    <input
                      placeholder=" card holder name"
                      name="card-holder-name"
                      className="form-control"
                      value={this.state.cardHolderName}
                      onChange={this.changeCardHolderNameHandler}
                    />
                  </div>{" "}
                  <br />
                  <div className="form-group">
                    <label> CARD NUMBER </label> <br />
                    <input
                      placeholder=" card number"
                      name="card-number"
                      className="form-control"
                      value={this.state.cardNumber}
                      onChange={this.changeCardNumberHandler}
                    />
                  </div>
                  <br />
                  {/* <div className="form-group">
                                        <label> EXPIRATION DATE </label> <br/>
                                        <input 
                                            placeholder=' expiration date'
                                            name='expiration-date'
                                            className='form-control'
                                            value={this.state.expirationDate}
                                            onChange = {this.changeExpirationDateHandler}
                                            />
                                    </div> <br/> */}
                  <div className="form-group">
                    <label> EXPIRATION DATE </label> <br />
                    <DatePicker
                      selected={this.state.startDate}
                      onChange={this.handleChange}
                      name="startDate"
                      dateFormat="MM/dd/yyyy"
                      className="form-control"
                    />
                  </div>
                  <br />
                  <div>
                    <button
                      className="btn btn-success"
                      onClick={this.saveCardPaymentDetails}
                    >
                      SAVE
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={this.cancel.bind(this)}
                      style={{ marginLeft: "10px" }}
                    >
                      CANCEL
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default AddCardPaymenrDetailsComponent;
