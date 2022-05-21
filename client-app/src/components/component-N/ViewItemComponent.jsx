import React, { Component } from 'react';
import ListitemService from '../../services/service-tksa/ListitemService';



class ViewItemComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
             id: this.props.match.params.id,
             items: {}
        }
    }

    componentDidMount(){
        ListitemService.getAddItemById(this.state.id).then( res => {
              this.setState({items: res.data});
          })
    }
    render() {
        return (
            <div>
                <div
        className="App"
        style={{
          backgroundImage: "url(/images/frock.jpg)",
          marginTop: -80,
          marginLeft: 10,
          height: 1500,
          width: 1400,
          opacity:1,
          backgroundRepeat:"no-repeat",
          backgroundAttachment:"fixed",
         // backgroundPosition:"left",
       
        }}
      ></div>
                <br></br>
                <div className="pdvssacus"style={{marginTop:"-1400px"}} >
                <div className='card col-md-6 offset-md-3' style={{backgroundColor:"#fbd2d7"}} >
                <h3 className='text-center'> View Item  Details</h3 >
                <div className='card-body' style={{color:"#6e6e6e"}}>
                    <div className='row' >
                        <lable className="adm-lbl"><b>Item Name: </b></lable>
                        <div className="adm-lbl-out"> { this.state.items.itemname} </div>
                    </div>
                    <br></br>
                    
                    <div className='row'>
                        <lable className="adm-lbl"><b>Product Id: </b></lable>
                        <div className="adm-lbl-out"> { this.state.items.productid} </div>
                    </div>
                    <br></br>
                    <div className='row'>
                        <lable className="adm-lbl"><b>Description: </b></lable>
                        <div className="adm-lbl-out"> { this.state.items.description} </div>
                    </div>
                    <br></br>
                    <div className='row'>
                        <lable className="adm-lbl"><b>Price:</b></lable>
                        <div className="adm-lbl-out"> { this.state.items.size} </div>
                    </div>
                    <br></br>
                    <div className='row'>
                        <lable className="adm-lbl"><b>Color: </b></lable>
                        <div className="adm-lbl-out"> {this.state.items.color} </div>
                    </div>
                    <br></br>
                    <div className='row'>
                        <lable className="adm-lbl"><b>Category: </b></lable>
                        <div className="adm-lbl-out"> {this.state.items.category} </div>
                    </div>
                    <br></br>
                    <div className='row'>
                        <lable className="adm-lbl"><b>Published Date: </b></lable>
                        <div className="adm-lbl-out"> {this.state.items.publisheddate} </div>
                    </div>
                    

                </div>
                </div>
                </div>
                {/*<Pdf targetRef={ref} filename="customerDetails.pdf">
                    {({ toPdf }) => <button className='profile-btn-cus' onClick={toPdf}>Generate Pdf</button>}
        </Pdf> */} 
                
                <div className='space-admin'>

                </div>
            </div>
        );
    }
}

export default ViewItemComponent;