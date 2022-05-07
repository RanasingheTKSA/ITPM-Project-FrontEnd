import React, { Component } from 'react';
import CustomerService from '../../services/service-k/CustomerService';
import Pdf from "react-to-pdf";

const ref = React.createRef();

class PdfForKaw extends Component {
constructor (porps){
    super(porps)
        this.state = {
            id:this.props.match.params.id,
            customer:{}
    };
}
componentDidMount(){
    CustomerService.getCustomerById(this.state.id).then( res => {
    this.setState({customer: res.data});
    })
}
render() {
return (
<div className='bg-red-prf'>
    <div className='pdf-centralizer'>
        <Pdf targetRef={ref} filename="code-example.pdf">
            {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
        </Pdf>
    </div>
    <div ref={ref}>
        <div className='spacepcus'>
            <h2 className='profile-hdr'><u>Customer Profile</u></h2>
            <img className='img-view-cus' src='https://res.cloudinary.com/dff4rbfkn/image/upload/v1630895843/2048px-User_icon_2.svg_fvrwk5.png'></img>
            <div className='card-body'>
                <div className='row'>
                    <div className='flex-cus-view'>
                        <label className='view-lbl'>Customer Name :</label>
                        <div className='view-div-flx'>{ this.state.customer.cfullName }</div>
                    </div>
                    <div className='flex-cus-view'>
                        <label className='view-lbl'>Customer Address :</label>
                        <div className='view-div-flx'>{ this.state.customer.caddress }</div>
                    </div>
                    <div className='flex-cus-view'>
                        <label className='view-lbl'>Customer Phone :</label>
                        <div className='view-div-flx'>{ this.state.customer.cphone }</div>
                    </div>
                    <div className='flex-cus-view'>
                        <label className='view-lbl'>Customer Email :</label>
                        <div className='view-div-flx'>{ this.state.customer.cemail }</div>
                    </div>
                    <div className='flex-cus-view'>
                        <label className='view-lbl'>Customer UserName :</label>
                        <div className='view-div-flx'>{ this.state.customer.cuserName }</div>
                    </div>
                    <div className='flex-cus-view'>
                        <label className='view-lbl'>Customer Password :</label>
                        <div className='view-div-flx'>{ this.state.customer.cpassword }</div>
                    </div>
                </div>
            </div>
            <br></br>
            <div className='flx-prof-cus'>
                <a className='profile-btn-cus' href="http://localhost:3000/customer">Back to AllCustomer Page</a>
                <a className='profile-btn-cus' href="http://localhost:3000/customer">Update Profile</a>
                <a className='profile-btn-cus' href="http://localhost:3000/customer">Delete Profile</a>
                <a className='profile-btn-cus' href="http://localhost:3000/customer">Print Page</a>
            </div>
        </div>
    </div>
</div>
)}}

export default PdfForKaw;