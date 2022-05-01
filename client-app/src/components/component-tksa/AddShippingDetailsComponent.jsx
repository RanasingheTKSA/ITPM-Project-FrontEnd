import React, { Component } from "react";
import ShippingDetailsService from "../../services/service-tksa/ShippingDetailsService";

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

class AddShippingDetailsComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
    };
    this.changeOwnerNameHandler = this.changeOwnerNameHandler.bind(this);
    this.changePhoneNumberHandler = this.changePhoneNumberHandler.bind(this);
    this.changeShippingAddressHandler =
      this.changeShippingAddressHandler.bind(this);
    this.changeZipCodeHandler = this.changeZipCodeHandler.bind(this);

    this.saveShippingAddress = this.saveShippingAddress.bind(this);
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
      <div className="a">
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center"> ADD NEW SHIPPING ADDRESS</h3>

              <div className="card-body">
                <form onSubmit={this.onFormSubmit}>
                  <div className="form-group">
                    <label> CUSTOMER NAME </label> <br />
                    <input
                      placeholder=" customer name"
                      //name="customer_name"
                      //className="form-control"
                      value={this.state.ownerName}
                      //onChange={this.changeOwnerNameHandler}
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
                      //name="phone_number"
                      //className="form-control"
                      value={this.state.phoneNumber}
                      //onChange={this.changePhoneNumberHandler}
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
                      //name="shipping_address"
                      //className="form-control"
                      value={this.state.shippingAddress}
                      //onChange={this.changeShippingAddressHandler}
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
                      //name="zip_code"
                      //className="form-control"
                      value={this.state.zipCode}
                      //onChange={this.changeZipCodeHandler}
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
                      <span className="invalid-feedback">{error.zipCode}</span>
                    )}
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
