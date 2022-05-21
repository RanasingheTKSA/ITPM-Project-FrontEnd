import React, { Component } from 'react';
import ListitemService from '../../services/service-tksa/ListitemService';
import Pdf from "react-to-pdf";

const ref = React.createRef();
class ListItemComponents extends Component {
    constructor(props){
        super(props) 

            this.state = {
                 add_items: []
            }
            this.createAdditem= this.createAdditem.bind(this);
            this.editAddItem = this.editAddItem.bind(this);
            this.deleteAdditem = this.deleteAdditem.bind(this);
    }
 
    deleteAdditem(id){
        ListitemService.deleteAdditem(id).then( res => {
            
           this.setState({add_items: this.state.add_items.filter(items=> items.id !== id)});
           alert ('Item Deleted Successfully..!');
        });
    }
    

    viewItem(id){
        this.props.history.push(`/view-item/${id}`);
    }
    editAddItem(id){
       this.props.history.push(`/update-item/${id}`);
}

    componentDidMount(){
        ListitemService.getAddItems().then((res) => {
          
             this.setState({add_items: res.data});
             
        });
    }
    
    createAdditem(){
        this.props.history.push('/add-item/_add');
    }

    render() {
        return (
            <div >
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
          //backgroundPosition:"top",
       
        }}
      ></div>   
                <div style={{marginTop:"-1400px"}}>
               
      
               <h2 className="text-center bb adm-hdr-main">Items List</h2> 
               <div className = "">
                    <button className = "add-ad" onClick={this.createAdditem} style={{marginLeft:"10px",backgroundColor:"blue",width:"200px",height:"40px",borderRadius:"5px"}}> <b>Add New Item</b></button>
               </div>
               <div className="box-add-details-all">
                     <table className="table table-striped table-bordered">
                         <thead style={{textAlign:"left"}}>
                              <tr>
                               
                               <th>ITEM NAME</th>
                                <th>ITEM ID</th>
                                <th>DESCRIPTION</th>
                                <th>PRICE(Rs.)</th>
                                <th>SIZE</th>
                                <th>COLOR</th>
                                <th>CATEGORY</th>
                                <th>PUBLISHED DATE</th>
                                <th>ACTIONS</th>
                              </tr>
                         </thead>
                             <tbody>
                                 {
                                     this.state.add_items.map(
                                        items  =>
                                        <tr key= {items.id}>
                                        <td>{items.itemname}</td>
                                        <td style={{width:"150px"}} >{items.productid}</td>
                                        <td style={{width:"300px"}} >{items.description}</td>
                                        <td>{items.price}</td>
                                        <td>{items.size}</td>
                                        <td>{items.color}</td>
                                        <td>{items.category}</td>
                                        <td style={{width:"150px"}} >{items.publisheddate}</td>
                                        <td style={{display:"flex"}}>
                                                  <button style={{marginLeft:"10px"}} onClick={ () => this.editAddItem(items.id)} className="btn btn-info">Update</button>
                                                  <button  style={{marginLeft:"10px",backgroundColor:"red",width:"75px",height:"40px",borderRadius:"5px"}} onClick={ () => this.deleteAdditem(items.id)}className="btn-btn-danger"> Delete</button>
                                                  <button  style={{marginLeft:"15px",marginBottom:"500 px",backgroundColor:"#99C68E",width:"75px",height:"40px",borderRadius:"5px"}} onClick = {() => this.viewItem(items.id)} className="btn-btn-info"> View</button>
                                              </td>

                                         </tr>
                                     )
                                 }
                             </tbody>
                     </table>
               </div>
               
</div>
<br></br>

<br></br>

<div className='itm-pdf-div'>
<br></br>
<center>
<Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf}  style={{marginLeft:"10px",backgroundColor:"blue",width:"200px",height:"40px",borderRadius:"5px"}}><b>Generate Pdf</b></button>}
      </Pdf></center>
      <br></br>
      <div style={{}} ref={ref}>
<center><h3 style={{height:"50px",color:"red"}}><b>PDF REVIEW</b></h3></center>
<br></br>
<br></br>
<div style={{}} ref={ref}>
<div className="box-add-details-all-two">
                     <table className="table table-striped table-bordered" width={"80%"}>
                         <thead>
                              <tr>
                               
                               <th>Item Name</th>
                                <th>Product ID</th>
                                <th>Price</th>
                                <th>size</th>
                                <th>Color</th>
                               
                                
                              </tr>
                         </thead>
                             <tbody>
                                 {
                                     this.state.add_items.map(
                                        items  =>
                                        <tr key= {items.id}>
                                        <td>{items.itemname}</td>
                                        <td>{items.productid}</td>
                                        <td>{items.price}</td>
                                        <td>{items.size}</td>
                                        <td>{items.color}</td>
                                       
                                        

                                         </tr>
                                     )
                                 }
                             </tbody>
                     </table>

            </div>
            </div>
            </div>
            </div>

            </div>
        );
    }
}

export default ListItemComponents;