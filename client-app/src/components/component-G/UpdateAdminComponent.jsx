 import React, { Component } from 'react';
import AdminService from '../../services/service-G/AdminService';
const emailValidationStyle = RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/);
const birthdayValidationStyle = RegExp(/([0-9]{2})\/([0-9]{2})\/([0-9]{4})/);

const validation = ({error, ...rest}) =>
{
    let checkValidation = false;

    Object.values(error).forEach((val) =>
    {
        if(val.length > 0){
            checkValidation = false;
        } else{
            checkValidation = true;
        }
    });

    Object.values(error).forEach((val) =>
    {
        if(val==null){
            checkValidation= false;

        }else{
            checkValidation = true;
        }
        });
        return checkValidation;
};


class UpdateAdminComponent extends Component {

    constructor(props){
        super(props)
        this.state={
            id : this.props.match.params.id,
           fullName: '',
           nic: '',
           gender: '', 
           birthday: '',
           address: '',
           email: '',
           phoneNo: '',

           error:{
            fullName: '',
            nic: '',
            gender: '', 
            birthday: '',
            address: '',
            email: '',
            phoneNo: '',

           },
        };
       
        this.updateAdmin = this.updateAdmin.bind(this);
    }

    onFormSubmit = (event) => {
        event.preventDefault();

        if(validation(this.state)){
            console.log(this.state);
        }else{
            console.log("Error occured");
        }
    };

    formObject = (event) => {
        event.preventDefault();

        const{name,value} = event.target;
        let error = {...this.state.error};

        switch(name){
            case "fullName":
                error.fullName = value.length<5
                ? " Name should be more than 5 or more characters long"
                :"";
            break; 
            case "nic":
                error.nic =
                  value.length < 5
                    ? "Nic should be more than 5 or more characaters long"
                    : "";
                break;  
                
                case "birthday":
                  error.birthday =
                    value.length < 10
                      ? "enter date of birth as dd/mm/yyyy"
                      : "";
                  break;

                  case "gender":
                    error.gender =
                      value.length < 10
                        ? "You must select Male or Female"
                        : "";
                    break;


                case "address":
                    error.address =
                      value.length < 10
                        ? "Address should have the Address No, Lane Name, City Name, County Name"
                        : "";
                    break;
                    case "phoneNo":
                        error.phoneNo =
                          value.length < 10
                            ? "Phone Number should be similler to the 0778855430 "
                            : "";
                        break;
                        case "email":
                            error.email =
                              value.length < 5
                                ? "Email should 5 characaters and should be include @ "
                                : "";
                            break;
                    
                          case "email":
                            error.email = emailValidationStyle.test(value)
                              ? ""
                              : "Email is not valid";
                            break;
                          default:
                            break;
        
    }
    this.setState({
        error,
        [name]: value,
      });
    };


    componentDidMount(){
        AdminService.getAdminById(this.state.id).then((res)=>{
            let admin =res.data;
            this.setState({fullName: admin.fullName,
                nic : admin.nic,
                gender : admin.gender,
                birthday : admin.birthday,
                address : admin.address,
                email : admin.email,
                phoneNo : admin.phoneNo

            });
});
    }
    updateAdmin =(e)=>{
e.preventDefault();
let admin ={fullName: this.state.fullName, nic: this.state.nic, gender: this.state.gender, birthday: this.state.birthday, address: this.state.address, email: this.state.email, phoneNo: this.state.phoneNo};
console.log('admin =>'+JSON.stringify(admin ));
AdminService.updateAdmin(admin,this.state.id).then(res =>{
    this.props.history.push('/admins');
});

    }

    changeFullNameHandler= (event) =>  {
        this.setState({fullName: event.target.value});
    }

    changeNICHandler= (event) =>  {
        this.setState({nic: event.target.value});
    }

    changeGenderHandler= (event) =>  {
        this.setState({gender: event.target.value});
    }

    changeBirthdayHandler= (event) =>  {
        this.setState({birthday: event.target.value});
    }
     
    changeAddressHandler= (event) =>  {
        this.setState({address: event.target.value});
    }

    changeEmailHandler= (event) =>  {
        this.setState({email: event.target.value});
    }

    changePhoneNoHandler= (event) =>  {
        this.setState({phoneNo: event.target.value});
    }

    cancel(){
        this.props.history.push('/admins');
    }

    handleValidation(){
        let fields = this.state.fields;
        let error = {};
        let formlsValid = true;

        //Name
        if(!fields["fullName"]){
            formlsValid = false;
            error["fullName"] = "cannot be empty";
        }

        if(typeof fields["fullName"]!== "undefined"){
            if(!fields["fullName"].match(/^[a-zA-Z]+$/)){
                formlsValid= false;
                error["fullName"]="Only letters";
            }
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
          marginLeft: 10,
          height: 1500,
          width: 1400,
          opacity:1,
          backgroundRepeat:"no-repeat",
          backgroundAttachment:"fixed",
          //backgroundPosition:"top",
       
        }}
      ></div>
         <div style={{marginTop:"-1400px"}}></div>
            <div className="bg-red">
                <div className="spacepcus">
                <div className = "container">
                    <div className = "row-1">
                        <a
                            className="btn-register-cus-back"
                            href="http://localhost:3000/admins"
                          >
                              Back <i class="	fa fa-mail-reply"></i>
                         </a> 
  
                        <div className =  "card col-md-6 offset-md-3 offset-md-3">
                             <h3 className="text-center">Update Profile</h3>
                             <div className = "container">
                             <div className="row">
                <div className="">
                  <form onSubmit={this.onFormSubmit}>
                    <div className="form-group">
                      <label className="crate-form">
                        <i class="fas fa-user-alt"></i> Full Name{" "}
                      </label>
                      <input
                        placeholder="Full Name"
                        //name="cfullName"
                        //className="frmcus form-control "
                        className={
                          error.fullName.length > 0
                            ? "is-invalid form-control"
                            : "form-control"
                        }
                        value={this.state.fullName}
                        //onChange={this.changeFullNameHandler}
                        type="text"
                        name="fullName"
                        onChange={this.formObject}
                        aria-required="true"
                        data-ok="false"
                      />
                      {error.fullName.length > 0 && (
                        <span className="invalid-feedback">
                          {error.fullName}
                        </span>
                      )}
                    </div>{" "}

                    <div className="form-group">
                      <label className="crate-form">
                        {" "}
                        <i class="far fa-address-card"></i> NIC
                      </label>

                      <input
                        placeholder="NIC"
                        //name="caddress"
                        //className="form-control"
                        className={
                          error.nic.length > 0
                            ? "is-invalid form-control"
                            : "form-control"
                        }
                        value={this.state.nic}
                        //onChange={this.changeCAddressHandler}
                        required
                        type="text"
                        name="nic"
                        onChange={this.formObject}
                      />
                      {error.nic.length > 0 && (
                        <span className="invalid-feedback">
                          {error.nic}
                        </span>
                      )}
                      </div>{" "}

                      <div className="form-group">
                      <label className="crate-form">
                        <i class="fas fa-calendar-alt"></i> Birthday
                      </label>
                      <input
                        placeholder="Birthday"
                        //name="cphone"
                        //className="form-control"
                        className={
                          error.birthday.length > 0
                            ? "is-invalid form-control"
                            : "form-control"
                        }
                        value={this.state.cphone}
                        //onChange={this.changeCPhoneHandler}
                        required
                        type="text"
                        name="birthday"
                        onChange={this.formObject}
                      />
                      {error.birthday.length > 0 && (
                        <span className="invalid-feedback">{error.birthday}</span>
                      )}
                    </div>

                    <div className="form-group-add-i">
                                    <label className='item-add-lbl'>Gender</label>
                                    {/*<input placeholder="Enter Size" name=" size" className="form-control"
                                    value={this.state.gender} onChange={this.changeSizeHandler} required/>*/}
                                    <select value={this.state.value} onChange={this.changeGenderHandler} style={{width:510 ,height:50}} required>
                                    <option value="gender">Gender</option> 
                                    <option value="Male">Male</option>  
                                    <option value="Female">Female</option>
                                  
                                    </select>
                                </div>

                    <div className="form-group">
                      <label className="crate-form">
                        {" "}
                        <i class="fa fa-home"></i> Address
                      </label>

                      <input
                        placeholder="Address"
                        //name="caddress"
                        //className="form-control"
                        className={
                          error.address.length > 0
                            ? "is-invalid form-control"
                            : "form-control"
                        }
                        value={this.state.address}
                        //onChange={this.changeCAddressHandler}
                        required
                        type="text"
                        name="address"
                        onChange={this.formObject}
                      />
                      {error.address.length > 0 && (
                        <span className="invalid-feedback" >
                          {error.address}
                        </span> 
                      )}
                    </div>

                    <div className="form-group">
                      <label className="crate-form">
                        <i class="fas fa-phone"></i> Phone No
                      </label>
                      <input
                        placeholder="Phone No"
                        //name="cphone"
                        //className="form-control"
                        className={
                          error.phoneNo.length > 0
                            ? "is-invalid form-control"
                            : "form-control"
                        }
                        value={this.state.phoneNo}
                        //onChange={this.changeCPhoneHandler}
                        required
                        type="number"
                        name="phoneNo"
                        onChange={this.formObject}
                      />
                      {error.phoneNo.length > 0 && (
                        <span className="invalid-feedback">{error.phoneNo}</span>
                      )}
                    </div>
          
                    <div className="form-group">
                      <label className="crate-form">
                        <i class="fas fa-envelope-open"></i> Email
                      </label>
                      <input
                        placeholder="Email"
                        //name="email"
                        //className="form-control"
                        className={
                          error.email.length > 0
                            ? "is-invalid form-control"
                            : "form-control"
                        }
                        value={this.state.email}
                        //onChange={this.changeCEmailHandler}
                        required
                        type="email"
                        name="email"
                        onChange={this.formObject}
                      />
                      {error.email.length > 0 && (
                        <span className="invalid-feedback" >{error.email}</span>
                      )}
                    </div>
                                                       
              <button className="upd-itm-suc" onClick={this.updateAdmin}>Save <i class="fa fa-check-square-o"></i></button>
              
              <button className="upd-itm-fai"onClick={this.cancel.bind(this)}style={{marginLeft:"10px"}}>cancel <i class="fa fa-times-rectangle-o"></i></button>
                      
                    </form>
                    </div>

                        </div>
                </div>

               </div>
           </div> 
           </div>
           </div>
           </div>
           </div>
        );
    }
}
          
        
    



export default UpdateAdminComponent;