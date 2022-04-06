import React, { Component, useState } from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import ShippingDetailsService from '../../services/service-tksa/ShippingDetailsService';
import { Button, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ShippingDetails extends Component {
    constructor(props){
        super(props)

        this.state = {
            shipping_details : []
        }
        this.addShippingDetails = this.addShippingDetails.bind(this);
        this.updateShippingDetails = this.updateShippingDetails.bind(this);
    }

    componentDidMount(){
        ShippingDetailsService.getShippingDetails().then((res) => {
            this.setState({shipping_details: res.data})
        })
    }

    addShippingDetails(){
        this.props.history.push('/add-shippingDetails');
    }

    updateShippingDetails(id){
        this.props.history.push(`/update-shippingDetails/${id}`);
    }    

    
    render() {
        return (
            <div className='a'>
                <h2 className='text-center'>SHIPPING & PAYMENT DETAILS</h2> <br/>

                <div class="row1">
                    <div class="column">
                        <div className='alignment'>
                            <table className='tableWidth'>
                                <tr className='trHeading'>
                                    SHIPPING DETAILS
                                </tr>
                                <tr>
                                    <td>
                                        <label className='alignPadding'>CUSTOMER NAME     : </label><br/>
                                        <label className='alignPadding'>PHONE NUMBER      : </label><br/>
                                        <label className='alignPadding'>SHIPPING ADDRESS  : </label><br/>
                                        <label className='alignPadding'>ZIP CODE          : </label><br/>
                                    </td>
                                    <td>
                                        {
                                            this.state.shipping_details.map(
                                                shipping_details =>
                                                <td className='tdWidth' key = {shipping_details.id}>
                                                        <label>{shipping_details.ownerName}</label> <br/>
                                                        <label>{shipping_details.phoneNumber}</label> <br/>
                                                        <label>{shipping_details.shippingAddress}</label> <br/>
                                                        <label>{shipping_details.zipCode}</label> <br/>
                                                </td>
                                            )                                                                                                   
                                        }
                                    </td>
                                    
                                    <td>
                                        {/* <button type="button" class="btn btn-primary" onClick={this.addShippingDetails}>ADD NEW ADDRESS</button> <br/><br/> */}
                                        <i class="fa-solid fa-square-plus fa-2x" onClick={this.addShippingDetails}></i> <br/>
                                        <i class="fa-solid fa-square-pen fa-2x" onClick={ () => this.updateShippingDetails(ShippingDetails.id)}></i>
                                        {/* <button type="button" class="btn btn-warning" 
                                                onClick={ () => this.updateShippingDetails(ShippingDetails.id)} 
                                                className="btn btn-info" >UPDATE ADDRESS</button> */}
                                    </td>
                                </tr>
                                
                                <hr/>
                                {/* card details */}
                                <tr className='trHeading'>
                                    <td>CARD DETAILS </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label className='alignPadding'>CARD HOLDERNAME     : </label><br/>
                                        <label className='alignPadding'>CARD NUMBER      : </label><br/>
                                        <label className='alignPadding'>EXPIRATION DATE      : </label><br/>
                                    </td>
                                    <td>
                                        <form class="rounded-top" className='form' >
                                            <input placeholder='CARD HOLDERNAME'></input><br/>
                                            <input placeholder='CARD NUMBER '></input><br/> 
                                            <input placeholder='EXPIRATION DATE '></input><br/>
                                        </form>
                                    </td>
                                    <td>
                                        
                                        {/* <button type="button" class="btn btn-primary">ADD PAYMENT METHOD</button> <br/> */}
                                        <i class="fa-solid fa-square-plus fa-2x"></i>
                                    </td>
                                </tr>

                            </table>
                        </div>
                    </div>

                    <div class="column" >
                        <div className= "container">
                            <div className= "row">
                                <div className= "card col-md-6 offset-md-3 offset-md-3">
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
                            </div>
                        </div>
                    </div>

                </div><br/><br/>

                
            </div>
        );
    }
}

export default ShippingDetails;