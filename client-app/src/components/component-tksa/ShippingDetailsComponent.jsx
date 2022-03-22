import React, { Component, useState } from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import ShippingDetailsService from '../../services/service-tksa/ShippingDetailsService';
import { Button, Table } from 'react-bootstrap';

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
            <div>
                <h2 className='text-center'>SHIPPING & PAYMENT DETAILS</h2> <br/>

                {/* <Table striped bordered hover>
                    <thead>
                        <th>SHIPPING DETAILS</th>
                        <tr>
                            <th>CUSTOMER NAME</th>
                            <th>PHONE NUMBER</th>
                            <th>SHIPPING ADDRESS</th>
                            <th>ZIP CODE</th>
                            <th>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.shipping_details.map(
                                shipping_details =>

                                <tr key = {shipping_details.id}>
                                    <td>{shipping_details.ownerName}</td>
                                    <td>{shipping_details.phoneNumber}</td>
                                    <td>{shipping_details.shippingAddress}</td>
                                    <td>{shipping_details.zipCode}</td>
                                    <td>
                                        <button type="button" class="btn btn-primary" onClick={this.addShippingDetails}>ADD NEW ADDRESS</button> <br/><br/>
                                        <button type="button" class="btn btn-warning" 
                                                onClick={ () => this.updateShippingDetails(ShippingDetails.id)} 
                                                className="btn btn-info" >UPDATE ADDRESS</button>
                                    </td>
                                </tr>
                            )
                        }
                        
                    </tbody>
                </Table> */}

                <table className='tablesize' >
                    <tr>
                        <td>
                            <form class="rounded-top" className='form'>
                                <fieldset>
                                <legend className='legendalign'>SHIPPING DETAILS</legend><br/>
                                    <table className='table'>
                                        <tr>
                                            <td className='tdWidth'> <br/>
                                                <label>CUSTOMER NAME     : </label><br/>
                                                <label>PHONE NUMBER      : </label><br/>
                                                <label>SHIPPING ADDRESS  : </label><br/>
                                                <label>ZIP CODE          : </label><br/>
                                            </td>

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

                                            
                                            <td className='tdWidth1'>
                                                <div className='aligndiv'>
                                                    <button type="button" class="btn btn-primary" onClick={this.addShippingDetails}>ADD NEW ADDRESS</button> <br/><br/>
                                                    <button type="button" class="btn btn-warning" 
                                                            onClick={ () => this.updateShippingDetails(ShippingDetails.id)} 
                                                            className="btn btn-info" >UPDATE ADDRESS</button>
                                                </div>
                                            </td>
                                        </tr>
                                    </table>
                                </fieldset>
                            </form>
                        </td>

                        <td> <br/>
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
                                                <div className='buttonAlign'>
                                                    <button class="btn btn-success">PAY NOW</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr><br/>

                    <tr>
                        <td>
                            <form class="rounded-top" className='form' >
                                <fieldset><br/>
                                <legend className='legendalign'>PAYMENT DETAILS</legend><br/>

                                <table className='table' >
                                        <tr>
                                            <td className='tdWidth'> <br/>
                                                <label>CARD HOLDERNAME     : </label><br/><br/>
                                                <label>CARD NUMBER      : </label><br/><br/>
                                                <label>EXPIRATION DATE      : </label><br/><br/>
                                            </td>

                                            <td className='tdWidth1'> <br/>
                                                <input placeholder='CARD HOLDERNAME'></input><br/><br/>
                                                <input placeholder='CARD NUMBER '></input><br/><br/>
                                                {/* <DatePicker>
                                                    selected = {selectedDate}
                                                    onChange = { date => setSelectedDate (date) }
                                                </DatePicker> */}
                                                <input placeholder='EXPIRATION DATE '></input><br/><br/>
                                            </td>
                                            <td className='tdWidth1'>
                                                <div className='aligndiv'>
                                                    <button type="button" class="btn btn-primary">ADD PAYMENT METHOD</button> <br/><br/>
                                                </div>
                                            </td>
                                        </tr>
                                </table>
                                </fieldset>  
                            </form>
                        </td>
                    </tr>

                </table>
            </div>
        );
    }
}

export default ShippingDetails;