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
                    <table border ='5'>
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
                                <div class="card">

                                    <h5 className='OrderSummary' >ORDER SUMMARY</h5>
                                    <div class="card-body">
                                            
                                        <table className='tableCenter' border = '2'>
                                            <tr>
                                                <label className='label'> SUB TOTAL : </label>
                                                <td> DISPLAY PRICE</td>
                                            </tr>
                                            <br/>
                                            
                                            <tr>
                                                <label className='label'> SHIPPING FEE : </label>
                                                <td> DISPLAY VALUE</td>
                                            </tr>
                                            <br/>
                                            <tr>
                                                <label className='label'> SUB TOTAL : </label>
                                                <td> DISPLAY VALUE</td>
                                            </tr>
                                        </table>
                                        <br/>

                                        <div className='buttonCenter'>
                                            <button type="button" className='button' class="btn btn-success" onClick={this.shippingDetails}>PAY NOW</button>
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