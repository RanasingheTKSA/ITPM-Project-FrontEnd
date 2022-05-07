import React, { Component } from 'react'

class loginapp extends Component {

    
   
    render() { 
        return ( 
<div className="logcontainer">
    <h1 className="registration-header">
        <u>Login As Customers</u> 

    </h1>
            <form>
  <div class="form-outline mb-4">
    <input type="text" id="form2Example1" class="form-control" required/>
    <label class="form-label" for="form2Example1">User Name</label>
  </div>

  <div class="form-outline mb-4">
    <input type="password" id="form2Example2" class="form-control" required/>
    <label class="form-label" for="form2Example2">Password</label>
  </div>

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
  <a href="http://localhost:3000/customer">
  <button type="button" class="btn btn-primary btn-block mb-4" >Sign in</button>
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