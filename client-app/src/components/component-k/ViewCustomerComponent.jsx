import React, { Component } from 'react';
import CustomerService from '../../services/service-k/CustomerService';
import Pdf from "react-to-pdf";

const ref = React.createRef();

class ViewCustomerComponent extends Component {
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
        <div className='spacepcus'>
        <img className='img-view-cus' src='https://res.cloudinary.com/dff4rbfkn/image/upload/v1630895843/2048px-User_icon_2.svg_fvrwk5.png'></img>
     
        <div className="Pdfprecus">
            <div className='cusdph'>
                <div className='profile-hdr'><u>Customer Profile</u></div>
                <div className='btnprofcus'>
                <a className='profile-btn-cus' href="http://localhost:3000/customer">Back to AllCustomer Page</a>
                <a className='profile-btn-cus' href="http://localhost:3000/customer">Update Profile</a>
                <a className='profile-btn-cus' href="http://localhost:3000/customer">Delete Profile</a>
                <a className='profile-btn-cus' href="http://localhost:3000/customer">Print Page</a>
                </div>
                
                
            </div>
            <div className='cusdptwo'>

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

            </div>

            </div>
            <br></br>

            <br></br>
            <br></br>
            <hr></hr>
            <center>
            <h4 className='centercus'>PDF Preview</h4>
            </center>
            <div className='cusabcpdf'>
            <div className="pdvssacus" ref={ref}>
            <div className="Pdfprecus">
                <div className='pdfdatacus'>
                    <h3>Hi, I'm { this.state.customer.cfullName } </h3>
                    <br></br>
                    <h5 className='cuslogdata'>Personal-Data</h5>
                    <hr></hr>
                    <div className='spaceforcuspdf'><i class="fa fa-at"></i> Email  : <b> { this.state.customer.cemail }</b> </div>
                    <div className='spaceforcuspdf'><i class="fas fa-user-alt"></i> Address: <b> { this.state.customer.caddress }</b> </div>
                    <div className='spaceforcuspdf'><i class="fas fa-phone"></i> Phone  : <b> { this.state.customer.cphone } </b></div>
                    <br></br>
                    <h5 className='cuslogdata'>Login-Data</h5>
                    <hr></hr>
                    <div className='spaceforcuspdf'><i class="fas fa-key"></i> UserName: <b> { this.state.customer.cuserName }</b> </div>
                    <div className='spaceforcuspdf'><i class="fas fa-key" ></i> Password:<b> { this.state.customer.cpassword }</b> </div>
                </div>
                <div className='pdfimgcus'>
                    <img src="https://res.cloudinary.com/dff4rbfkn/image/upload/v1651826630/logo_gd13oe.png"/>
                </div>
                </div>
            </div> 
            <div className='cuspdfss'>
            <Pdf targetRef={ref} filename="customerDetails.pdf">
            {({ toPdf }) => <button className='profile-btn-cus' onClick={toPdf}>Generate Pdf</button>}
        </Pdf>    
        </div>       
        </div>
        </div>
    </div>
)}}

export default ViewCustomerComponent;