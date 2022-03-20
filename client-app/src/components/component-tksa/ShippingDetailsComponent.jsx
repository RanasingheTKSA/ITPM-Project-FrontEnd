import React, { Component, useState } from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import ShippingDetailsService from '../../services/service-tksa/ShippingDetailsService';

class ShippingDetails extends Component {
    constructor(props){
        super(props)

        this.state = {
            shipping_details : []
        }
    }

    componentDidMount(){
        ShippingDetailsService.getShippingDetails().then((res) =>{
            this.setState({shipping_details: res.data})
        })
    }

    
    render() {
        return (
            <div>
                <h2 className='text-center'>SHIPPING & PAYMENT DETAILS</h2> <br/>

                <table className='tablesize' border='2'>
                    <tr>
                        <td>
                            <form class="rounded-top" className='form'>
                                <fieldset>
                                <legend className='legendalign'>SHIPPING DETAILS</legend><br/>
                                    <table className='table'>
                                        <tr>
                                            <td className='tdWidth'> <br/>
                                                <label>CUSTOMER NAME     : </label><br/><br/>
                                                <label>PHONE NUMBER      : </label><br/><br/>
                                                <label>SHIPPING ADDRESS  : </label><br/><br/>
                                                <label>ZIP CODE          : </label><br/><br/>
                                            </td>
                                            <td> <br/>
                                                <input placeholder=' CUSTOMER NAME '></input> <br/><br/>
                                                <input placeholder=' PHONE NUMBER '></input> <br/><br/>
                                                <input placeholder=' SHIPPING ADDRESS '></input> <br/><br/>
                                                <input placeholder=' ZIP CODE '></input> <br/><br/>
                                            </td>
                                            <td className='tdWidth1'>
                                                <div className='aligndiv'>
                                                    <button type="button" class="btn btn-primary">ADD NEW ADDRESS</button> <br/><br/>
                                                    <button type="button" class="btn btn-warning">SELECT ADDRESS</button>
                                                </div>
                                            </td>
                                        </tr>
                                    </table>
                                </fieldset>
                            </form>
                        </td>

                        <td>
                            <form>
                            </form>
                        </td>

                        <td>
                            <form  class="rounded-top" className='form1'>
                                <fieldset>
                                    <legend className='legendalign'>ORDER SUMMARY</legend> <br/>
                                    <table className='table'>
                                        <tr><br/>
                                            <td><br/>
                                                <label> SUB TOTAL : </label> <br/>
                                                <label> SHIPPING FEE :</label> <br/>
                                                <label> TOTAL PRICE :</label> <br/>
                                            </td>
                                            <td><br/>
                                                <input placeholder='SUB TOTAL'></input> <br/>
                                                <input placeholder='SHIPPING FEE'></input> <br/>
                                                <input placeholder='TOTAL PRICE'></input>
                                            </td>
                                        </tr><br/>
                                    </table>

                                    <div className='buttonAlign'>
                                        <button class="btn btn-success">PAY NOW</button>
                                    </div>

                                </fieldset>
                            </form>
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