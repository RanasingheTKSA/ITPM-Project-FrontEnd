import React, { Component } from 'react'

class logselector extends Component {

    
   
    render() { 
        return ( 
            <div className="">
                <h1 className="registration-header">
                    Login As ...
                </h1>
                <div class="to-whome">
            <div class="boys">
            <a className='ataglog' href="http://localhost:3000/login">
                <div class="header-to-whome">
                    <img className="our-se-bglog" src="https://res.cloudinary.com/dff4rbfkn/image/upload/v1651217506/63-636235_png-computer-user-simple-pc-user-icon-png_epabaq_m3iyf3.png"/>
                </div>
                
                    Customer {'->'}
                </a>
            </div>
            <div class="boys">
            <a href="http://localhost:3000/login">
                <div class="header-to-whome">
                    <img className="our-se-bglog" src="https://res.cloudinary.com/dff4rbfkn/image/upload/v1651216452/admin-sign-laptop-icon-stock-vector-166205404_tdcyyc.jpg"/>
                </div>
                
                    Admin {'->'}
                </a>
            </div>
        </div>

            </div>
         )
    }
}
export default logselector;