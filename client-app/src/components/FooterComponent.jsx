import React, { Component } from 'react';
 
class FooterComponent extends Component {
    constructor (porps){
        super(porps)
 
        this.state = {
 
        }
    }
 
    render() {
        return (
            <div>
            <footer>
                        <div class="footer">
                            <div class="left-rows">
                                <div class="left-row-one">
                                    <div class="row-itms">
                                        <a href="">
                                            Contact Us
                                        </a>
                                        <a href="">
                                            About Us
                                        </a>
                                        <a href="">
                                            Our Mission
                                        </a>
                                        <a href="">
                                            Location
                                        </a>
                                    </div>
                                </div>
                                <div class="left-row-two">
                                    <div class="row-itms">
                                        <a href="">
                                            New Productions
                                        </a>
                                        <a href="">
                                            Trending
                                        </a>
                                        <a href="">
                                            Offers
                                        </a>
                                        <a href="">
                                            Payments
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
            
                        <div>
                        
                        </div>
                    </footer>
            </div>
 
        );
    }
}
 
export default FooterComponent;