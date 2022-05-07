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
            <footer class="footer-02">

                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-10 col-lg-6">
                            <div class="subscribe mb-5">

                            <form action="#" class="subscribe-form">
                                <div class="form-group d-flex">
                                    <input type="text" class="form-control rounded-left" placeholder="Enter email address"></input>
                                    <input type="submit" value="Subscribe" class="form-control submit px-3"></input>
                                </div>
                            </form>
                                
                                
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-4 col-lg-5">
                            <div class="row">
                                <div class="col-md-12 col-lg-8 mb-md-0 mb-4">
                                    <h2 class="footer-heading"><a href="#" class="logo">WEDDIGN WARES</a></h2>
                                    <p>Mainly focuses on the luxurious wedding wear for the groom and his bridal.
                                    Mainly focuses on the luxurious wedding wear for the groom and his bridal. </p>
                                    <a href="#">read more <span class="ion-ios-arrow-round-forward"></span></a>
                                    {/* go to the read more file */}
                                </div>
                            </div>
                        </div>
                        <div class="col-md-8 col-lg-7">
                            <div class="row">
                                
                                <div class="col-md-3 mb-md-0 mb-4 border-left">
                                    <h2 class="footer-heading">About</h2>
                                    <ul class="list-unstyled">
                                        <li><a href="#" class="py-1 d-block">Staff</a></li>
                                        <li><a href="#" class="py-1 d-block">Team</a></li>
                                        <li><a href="#" class="py-1 d-block">Careers</a></li>
                                        <li><a href="#" class="py-1 d-block">Blog</a></li>
                                    </ul>
                                </div>
                                
                                <div class="col-md-3 mb-md-0 mb-4 border-left footer-sosial-test">
                                    <h2 class="footer-heading">Social</h2>
                                    <ul class="list-unstyled ">
                                        <li><a href="#" class="py-1 d-block">Facebook</a></li>
                                        <li><a href="#" class="py-1 d-block">Twitter</a></li>
                                        <li><a href="#" class="py-1 d-block">Instagram</a></li>
                                        <li><a href="#" class="py-1 d-block">Googleplus</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  

            </footer> 
        </div>
        );
    }
}

export default FooterComponent;