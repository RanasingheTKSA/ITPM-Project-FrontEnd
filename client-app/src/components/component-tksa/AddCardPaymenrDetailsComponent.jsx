import React, { Component } from "react";
import CardPaymentDetailsService from "../../services/service-tksa/CardPaymentDetailsService";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";

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

class AddCardPaymenrDetailsComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cardHolderName: "",
      cardNumber: "",
      date: "",
      cvv: "",
      startDate: new Date(),

      error: {
        cardHolderName: "",
        cardNumber: "",
        date: "",
        cvv: "",
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);

    this.changeCardHolderNameHandler =
      this.changeCardHolderNameHandler.bind(this);
    this.changeCardNumberHandler = this.changeCardNumberHandler.bind(this);
    this.changeStartDateHandler = this.changeStartDateHandler.bind(this);
    this.saveCardPaymentDetails = this.saveCardPaymentDetails.bind(this);
    this.changeExpirationDateHandler =
      this.changeExpirationDateHandler.bind(this);

    this.changeDateHandler = this.changeDateHandler.bind(this);
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
      case "cardHolderName":
        error.cardHolderName =
          value.length < 5 ? "Name should be 5 or more characaters long" : "";
        break;
      case "cardNumber":
        error.cardNumber =
          value.length < 16
            ? "Card Number should be similler to the xxxx xxxx xxxx xxxx"
            : "";
        break;
      case "date":
        error.date =
          value.length < 7
            ? "Date should 7 characaters long and similler to the yyyy.mm"
            : "";
        break;
      case "cvv":
        error.cvv =
          value.length < 3
            ? "cvv should 3 characaters long and similler to the 123"
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
      date: this.state.date,
      cvv: this.state.cvv,
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
  changeDateHandler = (event) => {
    this.setState({ date: event.target.value });
  };

  changeExpirationDateHandler = (event) => {
    this.setState({ expirationDate: event.target.value });
  };

  cancel() {
    this.props.history.push("/shippingDetails");
  }

  render() {
    const { error } = this.state;
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
                      name="cardHolderName"
                      // className="form-control"
                      value={this.state.cardHolderName}
                      // onChange={this.changeCardHolderNameHandler}
                      onChange={this.formObject}
                      className={
                        error.cardHolderName.length > 0
                          ? "is-invalid form-control"
                          : "form-control"
                      }
                    />
                    {error.cardHolderName.length > 0 && (
                      <span className="invalid-feedback">
                        {error.cardHolderName}
                      </span>
                    )}
                  </div>
                  <br />
                  <div className="form-group">
                    <label> CARD NUMBER </label> <br />
                    <input
                      placeholder=" card number"
                      name="cardNumber"
                      // className="form-control"
                      value={this.state.cardNumber}
                      // onChange={this.changeCardNumberHandler}
                      onChange={this.formObject}
                      className={
                        error.cardNumber.length > 0
                          ? "is-invalid form-control"
                          : "form-control"
                      }
                    />
                    {error.cardNumber.length > 0 && (
                      <span className="invalid-feedback">
                        {error.cardNumber}
                      </span>
                    )}
                  </div>
                  <div className="form-group">
                    <label> CVV NUMBER </label> <br />
                    <input
                      placeholder=" cvv number"
                      name="cvv"
                      // className="form-control"
                      value={this.state.cvv}
                      // onChange={this.changeCardNumberHandler}
                      onChange={this.formObject}
                      className={
                        error.cvv.length > 0
                          ? "is-invalid form-control"
                          : "form-control"
                      }
                    />
                    {error.cvv.length > 0 && (
                      <span className="invalid-feedback">{error.cvv}</span>
                    )}
                  </div>
                  <br />
                  <div className="form-group">
                    <label> EXPIRATION DATE </label> <br />
                    <input
                      placeholder=" date"
                      name="date"
                      // className="form-control"
                      value={this.state.date}
                      // onChange={this.changeDateHandler}
                      onChange={this.formObject}
                      className={
                        error.date.length > 0
                          ? "is-invalid form-control"
                          : "form-control"
                      }
                    />
                    {error.date.length > 0 && (
                      <span className="invalid-feedback">{error.date}</span>
                    )}
                  </div>
                  <br />
                  {/* <div className="form-group">
                    <label> EXPIRATION DATE </label> <br />
                    <DatePicker
                      selected={this.state.startDate}
                      onChange={this.handleChange}
                      name="startDate"
                      dateFormat="MM/dd/yyyy"
                      className="form-control"
                    />
                  </div> */}
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
