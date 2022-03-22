import React, { Component } from 'react';
import CartItemsService from '../../services/service-tksa/CartItemsService';
import Card from "react-bootstrap/Card";
import { Button, CardImg} from 'react-bootstrap';

class CartItemsComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
                cart_item : []
        }
        this.deleteCartItem = this.deleteCartItem.bind(this);
        this.shippingDetails = this.shippingDetails.bind(this);
    }

    //detele cart item method
    deleteCartItem(id){
        CartItemsService.deleteCartItem(id).then(res => {
            this.setState({cart_item: this.state.cart_item.filter(cartitem => cartitem.id !== id)});
        });
    }

    //shipping details page mathod
    shippingDetails(){
        this.props.history.push('/shippingDetails');
    }

    //get cartitems
    componentDidMount(){
            CartItemsService.getCartItems().then((res) =>{
            this.setState({cart_item: res.data})
        });
    }
    
    render() {
        return (
            <div>
                <div className='a'>
                <h2 className='text-center'>CART ITEMS</h2>         
                <div className='row'>
                    <table className='tablesize'>
                        <tr>
                            <td className='td_size'>
                            {
                                this.state.cart_item.map(
                                    cartitem =>
                                        <Card border="secondary" key = {cartitem.id}>
                                            <Card.Header as="h3">{cartitem.itmeName}</Card.Header>
                                            <Card.Body>
                                                <img src='.../../Asset/7.jpg'></img>
                                                <Card.Text>ITEM DESCRIPTION : {cartitem.itemDescription}</Card.Text>
                                                <Card.Text>ITEM SIZE : {cartitem.itemSize}</Card.Text>
                                                <Card.Text>ITEM COLOUR : {cartitem.itemColour}</Card.Text>
                                                <Card.Text>ITEM PRICE : {cartitem.itemPrice}</Card.Text>
                                                <div className='d'>
                                                    <Button variant="danger"
                                                            onClick={() => this.deleteCartItem(cartitem.id)}
                                                            className = "btn btn-danger">
                                                                DELETE</Button>
                                                </div>
                                                
                                            </Card.Body>
                                        </Card>
                                )
                            }
                            </td>
                            <td>
                                <br/><br/><br/>
                                <div className= "container">
                                    <div className= "row">
                                        <div className= "card col-md-6 offset-md-3 offset-md-3"><br/>
                                            <h6 className= "text-center"> ORDER SUMMARY </h6>

                                            <div className= "card-body">
                                                <form>
                                                    <div className="form-group">
                                                        <label> SUB TOTAL </label>
                                                        <input 
                                                            placeholder=' SUB TOTAL'
                                                            name='sub-total'
                                                            className='form-control'
                                                            />
                                                    </div><br/>
                                                    <div className="form-group">
                                                        <label> SHIPPING FEE </label>
                                                        <input 
                                                            placeholder=' SHIPPING FEE'
                                                            name='shipping-fee'
                                                            className='form-control'/>
                                                    </div><br/>
                                                    <div className="form-group">
                                                        <label> TOTAL PRICE </label>
                                                        <input 
                                                            placeholder='TOTAL FEE'
                                                            name='total-price'
                                                            className='form-control'/>
                                                    </div><br/>

                                                    <div className='buttonCenter'>
                                                        <button type="button" className='button' class="btn btn-success" onClick={this.shippingDetails}>PAY NOW</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </td>

                            
                        </tr>
                    </table>
                    
                </div>
                </div>
            </div>
        );
    }
}

export default CartItemsComponent;