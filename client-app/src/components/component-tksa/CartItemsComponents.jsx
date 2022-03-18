import React, { Component } from 'react';
import CartItemsService from '../../services/service-tksa/CartItemsService';
import Card from "react-bootstrap/Card";
import { Button} from 'react-bootstrap';

class CartItemsComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
                cart_item : []
        }
    }

    componentDidMount(){
            CartItemsService.getCartItems().then((res) =>{
            this.setState({cart_item: res.data})
        });
    }

    render() {
        return (
            <div>
                <h2 className='text-center'>CART ITEMS</h2>         
                <div className='row'>
                    <table className='table table-striped table-borderd' border = "3">
                        
                        <tr>
                            {
                                 this.state.cart_item.map(
                                    cartitem =>
                                        <Card border="secondary" key = {cartitem.id}>
                                            <Card.Header as="h3">{cartitem.itmeName}</Card.Header>
                                            <Card.Body>
                                                <Card.Text>ITEM DESCRIPTION : {cartitem.itemDescription}</Card.Text>
                                                <Card.Text>ITEM SIZE : {cartitem.itemSize}</Card.Text>
                                                <Card.Text>ITEM COLOUR : {cartitem.itemColour}</Card.Text>
                                                <Card.Text>ITEM PRICE : {cartitem.itemPrice}</Card.Text>
                                                <Button variant="primary">SELECT</Button> 
                                                <Button variant="danger">Danger</Button>
                                            </Card.Body>
                                        </Card>
                                 )
                            }
                        </tr>

                    </table>
                </div>
            </div>
        );
    }
}

export default CartItemsComponent;