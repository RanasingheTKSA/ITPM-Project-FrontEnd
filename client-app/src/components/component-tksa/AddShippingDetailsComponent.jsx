import React, { Component } from "react";
import ShippingDetailsService from "../../services/service-tksa/ShippingDetailsService";

class AddShippingDetailsComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ownerName: "",
      phoneNumber: "",
      shippingAddress: "",
      zipCode: "",
    };
    this.changeOwnerNameHandler = this.changeOwnerNameHandler.bind(this);
    this.changePhoneNumberHandler = this.changePhoneNumberHandler.bind(this);
    this.changeShippingAddressHandler =
      this.changeShippingAddressHandler.bind(this);
    this.changeZipCodeHandler = this.changeZipCodeHandler.bind(this);

    this.saveShippingAddress = this.saveShippingAddress.bind(this);
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
    return (
      <div className="a">
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center"> ADD NEW SHIPPING ADDRESS</h3>

              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label> CUSTOMER NAME </label> <br />
                    <input
                      placeholder=" customer name"
                      name="customer-name"
                      className="form-control"
                      value={this.state.ownerName}
                      onChange={this.changeOwnerNameHandler}
                      required
                    />
                  </div>{" "}
                  <br />
                  <div className="form-group">
                    <label> PHONE NUMBER </label> <br />
                    <input
                      placeholder=" phone number"
                      name="phone-number"
                      className="form-control"
                      value={this.state.phoneNumber}
                      onChange={this.changePhoneNumberHandler}
                      required
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <label> SHIPPING ADDRESS </label> <br />
                    <input
                      placeholder=" shipping address"
                      name="shipping-address"
                      className="form-control"
                      value={this.state.shippingAddress}
                      onChange={this.changeShippingAddressHandler}
                      required
                    />
                  </div>{" "}
                  <br />
                  <div className="form-group">
                    <label> ZIP CODE </label>
                    <br />
                    <input
                      placeholder="zip code"
                      name="zip-code"
                      className="form-control"
                      value={this.state.zipCode}
                      onChange={this.changeZipCodeHandler}
                      required
                    />
                  </div>{" "}
                  <br />
                  <div>
                    <button
                      className="btn btn-success"
                      onClick={this.saveShippingAddress}
                    >
                      {" "}
                      SAVE{" "}
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

export default AddShippingDetailsComponent;
