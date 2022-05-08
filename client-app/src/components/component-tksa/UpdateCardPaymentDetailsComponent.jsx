import React, { Component } from "react";
import CardPaymentDetailsService from "../../services/service-tksa/CardPaymentDetailsService";

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

class UpdateCardPaymentDetailsComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      cardHolderName: "",
      cardNumber: "",
      date: "",
      expirationDate: "",

      error: {
        cardHolderName: "",
        cardNumber: "",
        date: "",
      },
    };
    this.changeCardHolderNameHandler =
      this.changeCardHolderNameHandler.bind(this);
    this.changeCardNumberHandler = this.changeCardNumberHandler.bind(this);
    this.changeExpirationDateHandler =
      this.changeExpirationDateHandler.bind(this);

    this.updateCardDetail = this.updateCardDetail.bind(this);
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
      default:
        break;
    }

    this.setState({
      error,
      [name]: value,
    });
  };

  componentDidMount() {
    CardPaymentDetailsService.getCardDetailsById(this.state.id).then((res) => {
      let updateCardDetails = res.data;
      this.setState({
        cardHolderName: updateCardDetails.cardHolderName,
        cardNumber: updateCardDetails.cardNumber,
        date: updateCardDetails.date,
        expirationDate: updateCardDetails.expirationDate,
      });
    });
  }

  updateCardDetail = (e) => {
    e.preventDefault();
    let updateCardDetails = {
      cardHolderName: this.state.cardHolderName,
      cardNumber: this.state.cardNumber,
      date: this.state.date,
      expirationDate: this.state.expirationDate,
    };

    console.log("CardDetails => " + JSON.stringify(updateCardDetails));
    CardPaymentDetailsService.updateCardDetail(
      updateCardDetails,
      this.state.id
    ).then((res) => {
      this.props.history.push("/shippingDetails");
    });
  };

  changeCardHolderNameHandler = (event) => {
    this.setState({ cardHolderName: event.target.value });
  };
  changeCardNumberHandler = (event) => {
    this.setState({ cardNumber: event.target.value });
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
              <h3 className="text-center"> UPDATE CARD PAYMENT DETAILS</h3>

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
                  <br />
                  <div className="form-group">
                    <label> EXPIRATIOH DATE</label> <br />
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
                  <div>
                    <button
                      className="btn btn-success"
                      onClick={this.updateCardDetail}
                    >
                      UPDATE
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

export default UpdateCardPaymentDetailsComponent;
