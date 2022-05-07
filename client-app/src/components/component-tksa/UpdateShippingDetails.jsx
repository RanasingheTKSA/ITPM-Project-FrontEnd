import React, { Component } from "react";
import ShippingDetailsService from "../../services/service-tksa/ShippingDetailsService";

const emailValidationStyle = RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/);
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

class UpdateShippingDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      ownerName: "",
      phoneNumber: "",
      email: "",
      shippingAddress: "",
      zipCode: "",

      error: {
        ownerName: "",
        phoneNumber: "",
        email: "",
        shippingAddress: "",
        zipCode: "",
      },
    };
    this.changeOwnerNameHandler = this.changeOwnerNameHandler.bind(this);
    this.changePhoneNumberHandler = this.changePhoneNumberHandler.bind(this);
    this.changeShippingAddressHandler =
      this.changeShippingAddressHandler.bind(this);
    this.changeZipCodeHandler = this.changeZipCodeHandler.bind(this);

    this.updateShippingAddress = this.updateShippingAddress.bind(this);
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
      case "email":
        error.email = emailValidationStyle.test(value)
          ? ""
          : "Email is not valid";
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
    ShippingDetailsService.getShippingDetailsById(this.state.id).then((res) => {
      let shippingDetails = res.data;
      this.setState({
        ownerName: shippingDetails.ownerName,
        phoneNumber: shippingDetails.phoneNumber,
        email: shippingDetails.email,
        shippingAddress: shippingDetails.shippingAddress,
        zipCode: shippingDetails.zipCode,
      });
    });
  }

  updateShippingAddress = (e) => {
    e.preventDefault();
    let shippingDetails = {
      ownerName: this.state.ownerName,
      phoneNumber: this.state.phoneNumber,
      email: this.state.email,
      shippingAddress: this.state.shippingAddress,
      zipCode: this.state.zipCode,
    };

    console.log("shippingDetails =>" + JSON.stringify(shippingDetails));
    ShippingDetailsService.updateShippingAddress(
      shippingDetails,
      this.state.id
    ).then((res) => {
      this.props.history.push("/shippingDetails");
    });
  };

  changeOwnerNameHandler = (event) => {
    this.setState({ ownerName: event.target.value });
  };

  changePhoneNumberHandler = (event) => {
    this.setState({ phoneNumber: event.target.value });
  };

  changeEmailAddressHandler = (event) => {
    this.setState({ email: event.target.value });
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
              <br />
              <h3 className="text-center"> UPDATE SHIPPING ADDRESS</h3>

              <div className="card-body">
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
                  {/* <div className="form-group">
                    <label> EMAIL ADDRESS </label> <br />
                    <input
                      placeholder=" email address "
                      value={this.state.email}
                      required
                      type="text"
                      name="email"
                      onChange={this.formObject}
                      className={
                        error.email.length > 0
                          ? "is-invalid form-control"
                          : "form-control"
                      }
                    />
                    {error.email.length > 0 && (
                      <span className="invalid-feedback">{error.email}</span>
                    )}
                  </div>
                  <br /> */}
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
                      <span className="invalid-feedback">{error.zipCode}</span>
                    )}
                  </div>{" "}
                  <br />
                  <div>
                    <button
                      className="btn btn-success"
                      onClick={this.updateShippingAddress}
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

export default UpdateShippingDetails;
