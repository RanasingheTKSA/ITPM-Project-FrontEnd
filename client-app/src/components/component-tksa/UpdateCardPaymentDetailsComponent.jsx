import React, { Component } from 'react';

class UpdateCardPaymentDetailsComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            id: this.props.match.params.id,
            cardHolderName: '',
            cardNumber: '',
            expirationDate: ''
        }
        this.changeCardHolderNameHandler = this.changeCardHolderNameHandler.bind(this);
    }

    render() {
        return (
            <div className='a'>

<div className= "container">
                    <div className= "row">
                        <div className= "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className= "text-center"> UPDATE CARD PAYMENT DETAILS</h3>
                            
                            <div className= "card-body">
                                <form>
                                    <div className="form-group">
                                        <label> CARD HOLDER NAME </label> <br/>
                                        <input 
                                            placeholder=' card holder name'
                                            name='card-holder-name'
                                            className='form-control'
                                            value={this.state.cardHolderName}
                                            onChange = {this.changecardHolderNameHandler}
                                            />
                                    </div> <br/>
                                    <div className="form-group">
                                        <label> CARD NUMBER </label> <br/>
                                        <input 
                                            placeholder=' card number'
                                            name='card-number'
                                            className='form-control'
                                            value={this.state.cardNumber}
                                            onChange = {this.changecardNumberHandler}
                                            />
                                    </div><br/>
                                    <div className="form-group">
                                        <label> EXPIRATIOH DATE</label> <br/>
                                        <input 
                                            placeholder=' expiration date'
                                            name='expiration-date'
                                            className='form-control'
                                            value={this.state.expirationDate}
                                            onChange = {this.changeexpirationDateHandler}
                                            />
                                    </div> <br/>
                                    <div>
                                        <button className= "btn btn-success" onClick = {this.updateShippingAddress}> UPDATE </button>
                                        <button className= "btn btn-danger" onClick={this.cancel.bind(this)} style = {{marginLeft : "10px"}}>CANCEL</button>
                                    </div>
                                    
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default UpdateCardPaymentDetailsComponent;