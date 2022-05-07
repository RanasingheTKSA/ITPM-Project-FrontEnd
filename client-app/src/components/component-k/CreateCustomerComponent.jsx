import React, { Component } from "react";
import CustomerService from "../../services/service-k/CustomerService";

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

class CreateCustomerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cfullName: "",
      caddress: "",
      cphone: "",
      cemail: "",
      cuserName: "",
      cpassword: "",

      error: {
        cfullName: "",
        caddress: "",
        cphone: "",
        cemail: "",
        cuserName: "",
        cpassword: "",
      },
    };

    this.changeFullNameHandler = this.changeFullNameHandler.bind(this);
    this.changeCEmailHandler = this.changeCEmailHandler.bind(this);
    this.saveCustomer = this.saveCustomer.bind(this);
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    if (validation(this.state)) {
      console.log(this.state);
    } else {
      console.log("Error occured");
    }
  };

  saveCustomer = (e) => {
    e.preventDefault();
    let customer = {
      cfullName: this.state.cfullName,
      caddress: this.state.caddress,
      cphone: this.state.cphone,
      cemail: this.state.cemail,
      cuserName: this.state.cuserName,
      cpassword: this.state.cpassword,
    };

    console.log("customer => " + JSON.stringify(customer));
    CustomerService.createCustomer(customer).then((res) => {
      this.props.history.push("/customer");
    });
  };

  changeFullNameHandler = (event) => {
    this.setState({ cfullName: event.target.value });
  };

  changeCAddressHandler = (event) => {
    this.setState({ caddress: event.target.value });
  };

  changeCPhoneHandler = (event) => {
    this.setState({ cphone: event.target.value });
  };

  changeCEmailHandler = (event) => {
    this.setState({ cemail: event.target.value });
  };

  changeUserNameHandler = (event) => {
    this.setState({ cuserName: event.target.value });
  };

  changeCPasswordHandler = (event) => {
    this.setState({ cpassword: event.target.value });
  };

  cancelCustomer() {
    this.props.history.push("/customer");
  }

  render() {
    return (
      <div className="body-create bg-red">
        <div className="spacepcus">
          <h1 className="registration-header">
            <u>Customer Registration</u>
          </h1>
          <div className="reg-body">
            <div className="container">
              <div className="row">
                <div className="">
                  <form width="5205">
                    <div className="form-group">
                      <label className="crate-form">
                        <i class="fas fa-user-alt"></i> Full Name{" "}
                      </label>
                      <input
                        placeholder="Full Name"
                        name="cfullName"
                        className="frmcus form-control "
                        value={this.state.cfullName}
                        onChange={this.changeFullNameHandler}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="crate-form">
                        {" "}
                        <i class="fas fa-user-alt"></i> Address
                      </label>
                      <input
                        placeholder="Address"
                        name="caddress"
                        className="form-control"
                        value={this.state.caddress}
                        onChange={this.changeCAddressHandler}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="crate-form">
                        <i class="fas fa-phone"></i> Phone Number
                      </label>
                      <input
                        placeholder="Phone number"
                        name="cphone"
                        className="form-control"
                        value={this.state.cphone}
                        onChange={this.changeCPhoneHandler}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="crate-form">
                        <i class="fas fa-envelope-open"></i> Email
                      </label>
                      <input
                        placeholder="Email"
                        name="cemail"
                        className="form-control"
                        value={this.state.cemail}
                        onChange={this.changeCEmailHandler}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="crate-form">
                        <i class="fas fa-robot"></i> User Name
                      </label>
                      <input
                        placeholder="cuserName"
                        name="cuserName"
                        className="form-control"
                        value={this.state.cuserName}
                        onChange={this.changeUserNameHandler}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="crate-form">
                        <i class="fas fa-key"></i> Password
                      </label>
                      <input
                        placeholder="Password"
                        name="cpassword"
                        className="form-control"
                        value={this.state.cpassword}
                        onChange={this.changeCPasswordHandler}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="crate-form">
                        <i class="fas fa-lock-open"></i> Confirm Password
                      </label>
                      <input
                        placeholder="Re-Enter pasword"
                        name="confirmCPassword"
                        className="form-control"
                        required
                      />
                    </div>
                    <button
                      className="btn-add-cus-reg"
                      onClick={this.saveCustomer}
                    >
                      Register
                    </button>
                    <button
                      className="btn-cancus"
                      onClick={this.cancelCustomer.bind(this)}
                    >
                      Cancel
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CreateCustomerComponent;
