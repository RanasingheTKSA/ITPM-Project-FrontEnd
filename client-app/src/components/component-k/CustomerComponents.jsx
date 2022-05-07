import React, { Component } from "react";
import CustomerService from "../../services/service-k/CustomerService";
//import CartItemsService from '../../services/service-tksa/CartItemsService';
class CustomerComponents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customer: [],
    };
    this.addCustomer = this.addCustomer.bind(this);
    this.editCustomer = this.editCustomer.bind(this);
    this.deleteCustomer = this.deleteCustomer.bind(this);
    this.viewCustomer = this.viewCustomer.bind(this);
  }
  deleteCustomer(id) {
    CustomerService.deleteCustomer(id).then((res) => {
      this.setState({
        customer: this.state.customer.filter((customer) => customer.id !== id),
      });
    });
  }
  viewCustomer(id) {
    this.props.history.push(`/view-customer/${id}`);
  }
  editCustomer(id) {
    this.props.history.push(`/update-customer/${id}`);
  }
  componentDidMount() {
    CustomerService.getCustomer().then((res) => {
      this.setState({ customer: res.data });
    });
  }
  addCustomer() {
    this.props.history.push("/add-customer");
  }
  render() {
    return (
      <div className="bg-red">
        <div className="spacepcus">
          <h2 className="text-center bb">All Customres</h2>
          <div className="row-1">
            <a className="btn-register-cus-back" href="http://localhost:3000/">
              Back
            </a>
            <button className="btn-register-cus" onClick={this.addCustomer}>
              Register
            </button>
          </div>
          <div className="">
            {/* <img className="profile-photo" src="https://res.cloudinary.com/dff4rbfkn/image/upload/v1630895843/2048px-User_icon_2.svg_fvrwk5.png"/> */}
            <h4 className="status-profile">Status : Customer</h4>
            <div className="allcus-table">
              <table class="basic-table table-headers table table-hover">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Action</th>
                  </tr>
                  <tr></tr>
                </thead>
                <tbody>
                  {this.state.customer.map((customer) => (
                    <tr key={customer.id}>
                      <td>{customer.id}</td>
                      <td>{customer.cfullName}</td>
                      <td>{customer.cuserName}</td>
                      <td>
                        <button
                          onClick={() => this.editCustomer(customer.id)}
                          className="cus-update"
                        >
                          Update
                        </button>
                        <button
                          onClick={() => this.deleteCustomer(customer.id)}
                          className="cus-delete"
                        >
                          Delete
                        </button>
                        <button
                          onClick={() => this.viewCustomer(customer.id)}
                          className="cus-view"
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CustomerComponents;
