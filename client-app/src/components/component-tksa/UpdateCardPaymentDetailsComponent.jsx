import React, { Component } from "react";
import CardPaymentDetailsService from "../../services/service-tksa/CardPaymentDetailsService";

class UpdateCardPaymentDetailsComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      cardHolderName: "",
      cardNumber: "",
      expirationDate: "",
    };
    this.changeCardHolderNameHandler =
      this.changeCardHolderNameHandler.bind(this);
    this.changeCardNumberHandler = this.changeCardNumberHandler.bind(this);
    this.changeExpirationDateHandler =
      this.changeExpirationDateHandler.bind(this);

    this.updateCardDetail = this.updateCardDetail.bind(this);
  }

  componentDidMount() {
    CardPaymentDetailsService.getCardDetailsById(this.state.id).then((res) => {
      let updateCardDetails = res.data;
      this.setState({
        cardHolderName: updateCardDetails.cardHolderName,
        cardNumber: updateCardDetails.cardNumber,
        expirationDate: updateCardDetails.expirationDate,
      });
    });
  }

  updateCardDetail = (e) => {
    e.preventDefault();
    let updateCardDetails = {
      cardHolderName: this.state.cardHolderName,
      cardNumber: this.state.cardNumber,
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
  changeExpirationDateHandler = (event) => {
    this.setState({ expirationDate: event.target.value });
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
              <h3 className="text-center"> UPDATE CARD PAYMENT DETAILS</h3>

              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label> CARD HOLDER NAME </label> <br />
                    <input
                      placeholder=" card holder name"
                      name="cardHolderName"
                      className="form-control"
                      value={this.state.cardHolderName}
                      onChange={this.changeCardHolderNameHandler}
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <label> CARD NUMBER </label> <br />
                    <input
                      placeholder=" card number"
                      name="cardNumber"
                      className="form-control"
                      value={this.state.cardNumber}
                      onChange={this.changeCardNumberHandler}
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <label> EXPIRATIOH DATE</label> <br />
                    <input
                      placeholder=" expiration date"
                      name="expirationDate"
                      className="form-control"
                      value={this.state.expirationDate}
                      onChange={this.changeExpirationDateHandler}
                    />
                  </div>{" "}
                  <br />
                  <div>
                    <button
                      className="btn btn-success"
                      onClick={this.updateCardDetail}
                    >
                      {" "}
                      UPDATE{" "}
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
