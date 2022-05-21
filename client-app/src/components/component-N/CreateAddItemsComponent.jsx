import React, { Component } from 'react';
import ListitemService from '../../services/service-tksa/ListitemService';
const validation = ({ error, ...rest }) => {
    let checkValidation = false;
  
    Object.values(error).forEach((val) => {
      if (val.length > 0) {
        checkValidation = false;
      } else {
        checkValidation = true;
      }
    });
  
    Object.values(rest).forEach((val) => {
      if (val === null) {
        checkValidation = false;
      } else {
        checkValidation = true;
      }
    });
  
    return checkValidation;
  };
class CreateAddItemsComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            id:this.props.match.params.id,
            itemname:'',
            productid:'',
            description:'',
            price:'',
            size:'',
            color:'',
            category:'',
            publisheddate:'',

            error: {
                itemname:'',
                productid:'',
                description:'',
                price:'',
                size:'',
                color:'',
                category:'',
                publisheddate:'',
                  },
        }
        this. changeItemNameHandler=this.changeItemNameHandler.bind(this);
        this. changeProductIDHandler=this.changeProductIDHandler.bind(this);
        this. changeDescriptionHandler=this.changeDescriptionHandler.bind(this);
        this. changePriceHandler=this.changePriceHandler.bind(this);
        this.changeSizeHandler =this.changeSizeHandler.bind(this);
        this. changeColorHandler =this. changeColorHandler.bind(this);
        this.changeCategoryHandler =this.changeCategoryHandler.bind(this);
        this.changePublishedDateHandler =this.changePublishedDateHandler.bind(this);
        this.saveorUpdateAddItem=this.saveorUpdateAddItem.bind(this);

    }
    onFormSubmit = (event) => {
        event.preventDefault();
    
        if (validation(this.state)) {
          console.log(this.state);
        } else {
          console.log("Error occured");
        }
      };
    
      formObject = (event) => {
        event.preventDefault();
    
        const { name, value } = event.target;
        let error = { ...this.state.error };
    
        switch (name) {
            case "itemname":
                error.itemname=
                  value.length < 5
                    ? "Name should be more than 5 or more characaters long"
                    : "";
                break;
            case "productid":
        error.productid =
          value.length < 5
            ? "ItemId should be more than 5 or more characaters long"
            : "";
        break;
        case "description":
        error.description =
          value.length < 10
            ? "Description should be more than 5 or more characaters long"
            : "";
        break;
        case "price":
        error.price =
          value.length < 5
            ? "Price should have only numbers"
            : "";
        break;
        case "size":
        error.size =
          value.length < 5
            ? "Please select a size"
            : "";
        break;
        case "color":
        error.color =
          value.length < 0
            ? "Please enter a color"
            : "";
        break;
        case "category":
        error.category =
          value.length < 0
            ? "Please select a category"
            : "";
        break;
        case "publisheddate":
        error.publisheddate =
          value.length < 4
            ? "Please Enter a Date"
            : "";
        break;
        default:
        break;
        }
        this.setState({
            error,
            [name]: value,
          });
        };
    //step3
    componentDidMount(){
        //step4
        if(this.state.id === '_add'){
            return
        }else{
        ListitemService.getAddItemById(this.state.id).then((res)=>{
            let additem =res.data;
            this.setState({itemname:additem.itemname,
               productid : additem.productid,
               description : additem.description,
               price : additem.price,
               size : additem.size,
               color : additem.color,
               category : additem.category,
               publisheddate : additem.publisheddate
            });
});
        }
    }
    saveorUpdateAddItem =(e)=>{
e.preventDefault();
let additem={itemname:this.state.itemname,productid:this.state.productid,description:this.state.description,price:this.state.price,size:this.state.size,color:this.state.color,category:this.state.category,publisheddate:this.state.publisheddate};
console.log('additem =>'+JSON.stringify(additem));
//step5
if(this.state.id === '_add'){
    ListitemService.createAdditem(additem).then(res =>{
        this.props.history.push('/itemlist');
        //alert (' New Item Added Successfully ..!');
    });
       
}else{
    ListitemService.updateAddItem(additem,this.state.id).then(res =>{
        this.props.history.push('/itemlist');
    });

}

 }

    changeItemNameHandler=(event)=>{
        this.setState({itemname:event.target.value});
    }
    changeProductIDHandler=(event)=>{
        this.setState({productid:event.target.value});
    }
    changeDescriptionHandler=(event)=>{
        this.setState({description:event.target.value});
    }
    changePriceHandler=(event)=>{
        this.setState({price:event.target.value});
    }
    changeSizeHandler=(event)=>{
        this.setState({size:event.target.value});
    }
    changeColorHandler=(event)=>{
        this.setState({color:event.target.value});
    }
    changeCategoryHandler=(event)=>{
        this.setState({category:event.target.value});
    }
    changePublishedDateHandler=(event)=>{
        this.setState({publisheddate:event.target.value});
    }

    cancel(){
        this.props.history.push('/itemlist');
    }
    getTitle(){
        if(this.state.id === '_add'){
            return  <h3  className="add-item-header"><u>Add New Item </u></h3>
        }else{
             return<h3  className="add-item-header"><u> Update Item </u></h3>
        }
    }
    handleValidation() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
    
        //Name
        if (!fields["itemname"]) {
          formIsValid = false;
          errors["itemname"] = "Cannot be empty";
        }
    
        if (typeof fields["productid"] !== "undefined") {
            formIsValid = false;
            errors["productid"] = "Cannot be empty";
        }
        if (typeof fields["description"] !== "undefined") {
            formIsValid = false;
            errors["description"] = "Cannot be empty";
        }
        if (typeof fields["price"] !== "undefined") {
            formIsValid = false;
            errors["price"] = "Cannot be empty";
        }
        if (typeof fields["size"] !== "undefined") {
            formIsValid = false;
            errors["size"] = "Cannot be empty";
        }
        if (typeof fields["color"] !== "undefined") {
            formIsValid = false;
            errors["color"] = "Cannot be empty";
        }
        if (typeof fields["category"] !== "undefined") {
            formIsValid = false;
            errors["category"] = "Cannot be empty";
        }
        if (typeof fields["publisheddate"] !== "undefined") {
            formIsValid = false;
            errors["publisheddate"] = "Cannot be empty";
        }
      }
    render() {
        const { error } = this.state;
        return (

            
            <div>
              
      <div
        className="App"
        style={{
          backgroundImage: "url(/images/frock.jpg)",
          marginTop: -80,
          marginLeft: 20,
          height: 1700,
          width: 6800,
          opacity:1,
          backgroundRepeat:"no-repeat",
          backgroundAttachment:"fixed",
          ///backgroundPosition:"center",
       
        }}
      ></div>   
               <div className ="container" style={{marginTop:"-1650px"}}>
                <div className ="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3 list-im-mr-b" style={{backgroundColor:"#fbd2d7"}}>
                       {
                           this.getTitle()
                       }
                        <div className ="card-body" >
                            <form onSubmit={this.saveorUpdateAddItem} style={{fontWeight:"bold"}}>
                                <div className="form-group-add-i">
                                    <label className='item-add-lbl'> Item Name </label>
                                    <input placeholder="Enter Item Name" name="itemname" className={error.itemname.length > 0
                            ? "is-invalid form-control"
                            : "form-control"}
                                    value={this.state.itemname} onChange={this.formObject}aria-required="true"
                                    data-ok="false" required/>
                                    {error.itemname.length > 0 && (
                        <span className="invalid-feedback">
                          {error.itemname}
                        </span>
                      )}
                             
                                </div>
                                <div className="form-group-add-i">
                                    <label className='item-add-lbl'> Item ID </label>
                                    <input placeholder="Enter Item ID" name="productid" className={error.productid.length > 0
                            ? "is-invalid form-control"
                            : "form-control"}
                                    value={this.state.productid} onChange={this.formObject} aria-required="true"
                                    data-ok="false"required/>
                                    {error.productid.length > 0 && (
                        <span className="invalid-feedback">
                          {error.productid}
                        </span>
                      )}
                                </div>
                                <div className="form-group-add-i">
                                    <label className='item-add-lbl'> Description</label>
                                    <input placeholder="Enter Description" name="description" className={error.description.length > 0
                            ? "is-invalid form-control"
                            : "form-control"}
                                    value={this.state.description} onChange={this.formObject} aria-required="true"
                                    data-ok="false"required/>
                                    {error.description.length > 0 && (
                        <span className="invalid-feedback">
                          {error.description}
                        </span>
                      )}
                                </div>
                                <div className="form-group-add-i">
                                    <label className='item-add-lbl'> Price  (Rs.) </label>
                                    <input placeholder="Enter Item Price" name="price" className={error.price.length > 0
                            ? "is-invalid form-control"
                            : "form-control"}
                                    value={this.state.price} onChange={this.formObject} aria-required="true"
                                    data-ok="false"required/>
                                    {error.price.length > 0 && (
                        <span className="invalid-feedback">
                          {error.price}
                        </span>
                      )}
                                </div>
                                <div className="form-group-add-i">
                                    <label className='item-add-lbl'>Size</label>
                                    {/*<input placeholder="Enter Size" name=" size" className="form-control"
                                    value={this.state.size} onChange={this.changeSizeHandler} required/>*/}
                                    <select value={this.state.value} onChange={this.changeSizeHandler} style={{width:510 ,height:50}} required>
                                    <option value="Select Size">Select Size</option> 
                                    <option value="Large">Large</option>  
                                    <option value="Medium">Medium</option>
                                    <option value="Small">Small</option>
                                    
                                    </select>
                                </div>
                                <div className="form-group-add-i">
                                    <label className='item-add-lbl'> Color </label>
                                    <input placeholder="Enter Color" name="color" className={error.color.length > 0
                            ? "is-invalid form-control"
                            : "form-control"}
                                    value={this.state.color} onChange={this.formObject} aria-required="true"
                                    data-ok="false"required/>
                                    {error.color.length > 0 && (
                        <span className="invalid-feedback">
                          {error.color}
                        </span>
                      )}
                                </div>
                                <div className="form-group-add-i">
                                    <label className='item-add-lbl'> Category </label><br></br>
                                    {/*<input placeholder=" Enter Category" name="category" className="form-control"
                                    value={this.state.category} onChange={this.changeCategoryHandler}required/>*/}
                                    <select value={this.state.value} onChange={this.changeCategoryHandler} style={{width:510 ,height:50}} required>
                                    <option value="Select Category">Select Category</option>  
                                    <option value="Bridal Wears">Bridal Wears</option>
                                    <option value="Groom Wears">Groom Wears</option>
                                    </select>
                                </div>
                                <div className="form-group-add-i">
                                    <label className='item-add-lbl'> Published Date</label>
                                    <input placeholder="Enter Published Date" name="publisheddate" className={error.publisheddate.length > 0
                            ? "is-invalid form-control"
                            : "form-control"}
                                    value={this.state.publisheddate} onChange={this.formObject} aria-required="true"
                                    data-ok="false"required/>
                                    {error.publisheddate.length > 0 && (
                        <span className="invalid-feedback">
                          {error.publisheddate
                          }
                        </span>
                      )}
                                </div>

              <button className="add-itm-suc"style={{backgroundColor:"#29C5F6",width:100}} onClick={this.saveorUpdateAddItem}>Save</button>
              
              <button className="add-itm-fai"  type="submit" id="submit" data-submit="...Sending"  onClick={this.cancel.bind(this)}style={{marginLeft:"10px",width:100}}>cancel</button>
              <button className="add-itm-suc"style={{backgroundColor:"99C68E",width:100}} onClick={(event) => (window.location.href = "/itemlist")}
          >View</button>         
                            </form>

                        </div>
                </div>

               </div>
           </div> 
           </div>
        );
    }
}

export default CreateAddItemsComponent;