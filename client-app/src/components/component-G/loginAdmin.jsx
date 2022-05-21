import React, { Component } from 'react'

class loginapp extends Component {
   state={
     email:'',
     password:''
   }
   handleChange = (e) => {
     const {name,value}= e.target
     this.setState({[name]:value})

   }

   handleSubmit = (e) => {

   }
    
   
    render() { 
        return ( 
          
<div className="logcontainer">
    <h1 className="registration-header">
        <u>Login As Admins</u> 

    </h1>
            
    <form onSubmit = {this.handleSubmit}>
  
    <input type="email"  name='email' placeholder ='email...'class="form-control" required onChange={this.handleChange}/>
     <input type="password"  name='password' placeholder='password' class="form-control" required onChange={this.handleChange}/>
  
 

  <div class="row mb-4">
    <div class="col d-flex justify-content-center">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
        <label class="form-check-label" for="form2Example31"> Remember me </label>
      </div>
    </div>

    <div class="col">
      <a href="#!">Forgot password?</a>
    </div>
  </div>
  <a href="http://localhost:3000/admins">
  <button onSubmit={this.handleSubmit} type="button" class="btn btn-primary btn-block mb-4" >Log in</button>
</a>
  <div class="text-center">
    <p>Not a member? <a href="#!">Register</a></p>
    <p>or sign up with:</p>
    <button type="button" class="btn btn-link btn-floating mx-1">
      <i class="fab fa-facebook-f"></i>
    </button>

    <button type="button" class="btn btn-link btn-floating mx-1">
      <i class="fab fa-google"></i>
    </button>
  </div>
</form>
</div>
         )
    }
}
export default loginapp;