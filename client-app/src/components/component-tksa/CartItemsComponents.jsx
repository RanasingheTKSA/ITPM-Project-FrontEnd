import React, { Component } from 'react';
import CartItemsService from '../../services/service-tksa/CartItemsService';
import Card from "react-bootstrap/Card";
import { Button, CardImg} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
                    <div className='sddivcolour'>
                    <table className='tablesize'>
                    <br/> <br/> 
                        
                        <tr> 
                            <td className='td_size'>
                            {
                                this.state.cart_item.map(
                                    cartitem =>
                                        <Card border="secondary" key = {cartitem.id} >
                                            <Card.Header as="h3">{cartitem.itmeName}</Card.Header>
                                            <Card.Body>
                                                <table className='tablealign'>
                                                    <tr>
                                                        <td className='imageAlign'>
                                                            <Card.Img />
                                                        </td>
                                                        <td className='colunmSize'>
                                                            <Card.Text className='textAlign' >ITEM DESCRIPTION : {cartitem.itemDescription}</Card.Text>
                                                            <Card.Text className='textAlign' >ITEM SIZE : {cartitem.itemSize}</Card.Text>
                                                            <Card.Text className='textAlign' >ITEM COLOUR : {cartitem.itemColour}</Card.Text>
                                                            <Card.Text className='textAlign' >ITEM PRICE : {cartitem.itemPrice}</Card.Text>
                                                        </td>
                                                        <td className='buttonAlign'>
                                                                {/* <Button variant="danger"
                                                                    onClick={() => this.deleteCartItem(cartitem.id)}
                                                                    className = "btn btn-danger">
                                                                        DELETE</Button> <br/> */}
                                                                        <i class="fa fa-trash fa-2x" aria-hidden="true" onClick={() => this.deleteCartItem(cartitem.id)}></i>
                                                        </td>
                                                    </tr>
                                                </table>
                                               
                                            </Card.Body>
                                        </Card> 
                                )
                            }  <br/> <br/>
                            </td> 
                            <td>
                               
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
                <br/><br/><br/>
            </div>
        );
    }
}

export default CartItemsComponent;