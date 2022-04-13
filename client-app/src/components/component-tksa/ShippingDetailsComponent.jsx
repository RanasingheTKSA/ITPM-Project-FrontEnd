import React, { Component, useState } from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import ShippingDetailsService from '../../services/service-tksa/ShippingDetailsService';
import CardPaymentDetailsService from '../../services/service-tksa/CardPaymentDetailsService';

import { Button, Table, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ShippingDetails extends Component {
    constructor(props){
        super(props)

        this.state = {
            shipping_details : [],
            card_payment_details : []
        }
        this.addShippingDetails = this.addShippingDetails.bind(this);
        this.updateShippingDetails = this.updateShippingDetails.bind(this);

        this.addCardPaymentDetailsPage =this.addCardPaymentDetailsPage.bind(this);
        this.updateCardPaymentDetails = this.updateCardPaymentDetails.bind(this);
    }

    componentDidMount(){
        ShippingDetailsService.getShippingDetails().then((res) => {
            this.setState({shipping_details: res.data})
        })

        CardPaymentDetailsService.getCardDetails().then((res) => {
            this.setState({ card_payment_details: res.data})
        })
    }

    addShippingDetails(){
        this.props.history.push('/add-shippingDetails');
    }
    updateShippingDetails(id){
        this.props.history.push(`/update-shippingDetails/${id}`);
    }

    addCardPaymentDetailsPage(){
        this.props.history.push('/add-cardPaymentDetails')
    }
    updateCardPaymentDetails(id){
        this.props.history.push(`/update-cardPaymentDetails/${id}`);
    }
    

    
    render() {
        return (
            <div>
                <div className='a'>
                <h2 className='text-center'>SHIPPING & PAYMENT DETAILS</h2> <br/>

                <div className='row'>
                    <div className='sddivcolour'>
                    <table className='tablesize '>
                        <tr>
                            <td>
                                <h4  className='shipping-d-div'>SHIPPING DETAILS</h4>
                                <Table striped bordered hover size="sm"  className='shipping-d-div'>
                                    <thead>
                                        <tr>
                                            <th>CUSTOMER NAME</th>
                                            <th>PHONE NUMBER</th>
                                            <th>SHIPPING ADDRESS</th>
                                            <th>ZIP CODE</th>
                                            <th>ACTION</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            {
                                                this.state.shipping_details.map(
                                                    shipping_details =>
                                                    <td className='tdWidth' key = {shipping_details.id}>
                                                            <label>{shipping_details.ownerName}</label> <br/>
                                                    </td>
                                                )                                                                                                                                             
                                            }

                                            {
                                                this.state.shipping_details.map(
                                                    shipping_details =>
                                                    <td className='tdWidth' key = {shipping_details.id}>
                                                            <label>{shipping_details.phoneNumber}</label> <br/>
                                                    </td>
                                                )                                                                                                                                             
                                            }

                                            {
                                                this.state.shipping_details.map(
                                                    shipping_details =>
                                                    <td className='tdWidth' key = {shipping_details.id}>
                                                            <label>{shipping_details.shippingAddress}</label> <br/>
                                                    </td>
                                                )                                                                                                                                             
                                            }

                                            {
                                                this.state.shipping_details.map(
                                                    shipping_details =>
                                                    <td className='tdWidth' key = {shipping_details.id}>
                                                            <label>{shipping_details.zipCode}</label> <br/>
                                                    </td>
                                                )                                                                                                                                             
                                            }

                                            {
                                                this.state.shipping_details.map(
                                                    shipping_details =>
                                                    <td className='tdWidth' key = {shipping_details.id}>
                                                            <i class="fa-solid fa-square-pen fa-2x" 
                                                                onClick={ () => this.updateShippingDetails(shipping_details.id)} 
                                                                style = {{ marginLeft: "25px" }}>
                                                            </i>
                                                    </td>
                                                )                                                                                                                                             
                                            }
                                        
                                        </tr>
                                    </tbody>
                                </Table>
                                <br/><br/>


                                <h4  className='shipping-d-div'>PAYMENT DETAILS</h4>
                                <Table striped bordered hover size="sm"  className='shipping-d-div'>
                                    <thead>
                                        <tr>
                                            <th>CARD HOLDER NAME</th>
                                            <th>CARD NUMBER</th>
                                            <th>EXPIRATION DATE</th>
                                            <th>ACTION</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            {
                                                this.state.card_payment_details.map(
                                                    card_payment_details =>
                                                    <td className='tdWidth' key = {card_payment_details.id}>
                                                            <label>{card_payment_details.cardHolderName}</label> <br/>
                                                    </td>
                                                )                                                                                                                                             
                                            }

                                            {
                                                this.state.card_payment_details.map(
                                                    card_payment_details =>
                                                    <td className='tdWidth' key = {card_payment_details.id}>
                                                            <label>{card_payment_details.cardNumber}</label> <br/>
                                                    </td>
                                                )                                                                                                                                             
                                            }

                                            {
                                                this.state.card_payment_details.map(
                                                    card_payment_details =>
                                                    <td className='tdWidth' key = {card_payment_details.id}>
                                                            <label>{card_payment_details.expirationDate}</label> <br/>
                                                    </td>
                                                )                                                                                                                                             
                                            }

                                            {
                                                this.state.card_payment_details.map(
                                                    card_payment_details =>
                                                    <td className='tdWidth' key = {card_payment_details.id}>
                                                            <i class="fa-solid fa-square-pen fa-2x" 
                                                                onClick = { () => this.updateCardPaymentDetails(card_payment_details.id)}>
                                                            </i>

                                                            <i class="fa-solid fa-square-plus fa-2x" onClick = {this.addCardPaymentDetailsPage} style = { {marginLeft: "5px"} }></i>
                                                    </td>
                                                )                                                                                                                                             
                                            }
                                        </tr>
                                    </tbody>
                                </Table>
                            </td>


                            <td>
                                <div className= "card  offset-md-3 offset-md-3"><br/>
                                    <h5 className= "text-center"> ORDER SUMMARY </h5>

                                        <div className= "card-body">
                                            <form>
                                                <div className="form-group">
                                                    <label> SUB TOTAL </label>
                                                    <input 
                                                        placeholder=' SUB TOTAL'
                                                        name='sub-total'
                                                        className='form-control'/>
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

                                                <div className='buttonAlign'>
                                                    <button class="btn btn-success">PAY NOW</button>
                                                </div>
                                            </form>
                                        </div>

                                </div>
                            </td>
                        </tr>
                    </table>
                    </div>
                    
                </div><br/><br/>

                </div>
            </div>
        );
    }
}

export default ShippingDetails;