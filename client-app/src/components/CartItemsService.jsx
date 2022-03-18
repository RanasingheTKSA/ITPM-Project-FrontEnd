import React, { Component } from 'react';
import CartItemsService from '../services/CartItemsService';

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
                    <table className='table table-striped table-borderd'>
                        
                        <thead>
                            <tr>
                                <th>ITEM NAMES</th>
                                <th>ITEM DESCRIPTION</th>
                                <th>ITEM SIZE</th>
                                <th>ITEM COLOUR</th>
                                <th>ITEM PRICE</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.cart_item.map(
                                    cartitem =>
                                        <tr key = {cartitem.id}>
                                            <td>{cartitem.itmeName}</td>
                                            <td>{cartitem.itemDescription}</td>
                                            <td>{cartitem.itemSize}</td>
                                            <td>{cartitem.itemColour}</td>
                                            <td>{cartitem.itemPrice}</td>
                                        </tr>
                                )
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        );
    }
}

export default CartItemsComponent;