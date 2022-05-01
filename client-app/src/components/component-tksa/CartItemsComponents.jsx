import React, { Component } from "react";
import CartItemsService from "../../services/service-tksa/CartItemsService";
import Card from "react-bootstrap/Card";
import { Button, CardImg, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class CartItemsComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cart_item: [],
      subTotalPrice: 0.0,
      oderShippingFee: 200,
    };
    this.deleteCartItem = this.deleteCartItem.bind(this);
    this.shippingDetails = this.shippingDetails.bind(this);
  }

  //detele cart item method
  deleteCartItem(id) {
    CartItemsService.deleteCartItem(id).then((res) => {
      this.setState({
        cart_item: this.state.cart_item.filter(
          (cartitem) => cartitem.id !== id
        ),
      });
    });
  }

  //shipping details page mathod
  shippingDetails() {
    this.props.history.push("/shippingDetails");
  }

  //get cartitems
  componentDidMount() {
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

  render() {
    return (
      <div>
        <div className="a">
          <h2 className="text-center">CART ITEMS</h2>

          <div className="row">
            <div className="sddivcolour">
              <table className="tablesize">
                <tr>
                  <td>
                    <Table
                      striped
                      bordered
                      hover
                      size="sm"
                      className="shipping-d-div"
                    >
                      <tbody>
                        <tr>
                          {this.state.cart_item.map((cartitem) => (
                            <Card border="secondary" key={cartitem.id}>
                              <Card.Header as="h3">
                                {cartitem.itmeName}
                              </Card.Header>
                              <Card.Body>
                                <table className="tablealign">
                                  <tr>
                                    <td className="imageAlign">
                                      <Card.Img />
                                    </td>
                                    <td className="colunmSize">
                                      <Card.Text className="textAlign">
                                        ITEM DESCRIPTION :{" "}
                                        {cartitem.itemDescription}
                                      </Card.Text>
                                      <Card.Text className="textAlign">
                                        ITEM SIZE : {cartitem.itemSize}
                                      </Card.Text>
                                      <Card.Text className="textAlign">
                                        ITEM COLOUR : {cartitem.itemColour}
                                      </Card.Text>
                                      <Card.Text className="textAlign">
                                        ITEM PRICE : {cartitem.itemPrice}
                                      </Card.Text>
                                    </td>
                                    <td className="buttonAlign">
                                      <i
                                        class="fa fa-trash fa-2x"
                                        aria-hidden="true"
                                        onClick={() =>
                                          this.deleteCartItem(cartitem.id)
                                        }
                                      ></i>
                                    </td>
                                  </tr>
                                </table>
                              </Card.Body>
                            </Card>
                          ))}
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
                              class="btn btn-warning"
                              onClick={this.shippingDetails}
                            >
                              CHECK-OUT
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
        </div>
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default CartItemsComponent;
