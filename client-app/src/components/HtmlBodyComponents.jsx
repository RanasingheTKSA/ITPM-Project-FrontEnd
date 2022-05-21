import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

class HtmlBodyComponent extends Component {
    constructor (porps){
        super(porps)

        this.state = {

        }
    }

    render() {
        return (
            <div>
<>

<a href="#sec2" class="section-one">
            <img src="https://dummyimage.com/1515x800/000/fff"/>
            <div class="mouse_scroll" >

                <div class="mouse">
                    <div class="wheel"></div>
                </div>
                <div>
                    <span class="m_scroll_arrows unu"></span>
                    <span class="m_scroll_arrows doi"></span>
                    <span class="m_scroll_arrows trei"></span>
                </div>
            </div>

        </a>

<div class="slideshow-one" id="sec2">
            <div class="container">
            <OwlCarousel className='owl-theme' loop margin={10} nav   >
                <div class='item'>
                <img src="https://dummyimage.com/400x400/000000/ffffff&text=drag+image+to+view+next+one+++->++//+this+is+img1" alt="" />
                </div>
                <div class='item'>
                <img src="https://dummyimage.com/400x400/000000/ffffff&text=drag+image+to+view+next+one+++->++//+this+is+img1" alt="" />
                </div>
                <div class='item'>
                <img src="https://dummyimage.com/400x400/000000/ffffff&text=drag+image+to+view+next+one+++->++//+this+is+img1" alt="" />
                </div>
                <div class='item'>
                <img src="https://dummyimage.com/400x400/000000/ffffff&text=drag+image+to+view+next+one+++->++//+this+is+img1" alt="" />
                </div>
                <div class='item'>
                <img src="https://dummyimage.com/400x400/000000/ffffff&text=drag+image+to+view+next+one+++->++//+this+is+img1" alt="" />
                </div>
                <div class='item'>
                <img src="https://dummyimage.com/400x400/000000/ffffff&text=drag+image+to+view+next+one+++->++//+this+is+img1" alt="" />
                </div>
            </OwlCarousel>;
            </div>
            
        </div>
<div class="our-srvices">
            <div class="our-sevices-img">
                <img src="https://dummyimage.com/600x400/000/fff" />
            </div>
            <div class="our-services-box-div">
                <div class="our-section-header">
                    <span>
                        OUR SERVICES
                    </span>
                </div>
                <div class="our-services-sub-header">
                    <span>
                       This is a sub header
                    </span>
                </div>
                <div class="our-services-para">
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever
                    </p>
                </div>
                <a class="our-services-link">
                    EXPLORE-MORE &gt;
                </a>
            </div>
        </div>       


        <div class="our-new-products">
            <span class="new-p">
                OUR NEW PRODUCTIONS
            </span>
            <div class="new-product-slider">
                <div class="container">
                    <div class="owl-carousel owl-theme" >
                        <img src="https://dummyimage.com/400x400/000000/ffffff&text=drag+image+to+view+next+one+++->++//+this+is+img1" alt="" />
                        <img src="https://dummyimage.com/400x400/545454/ffffff&text=drag+image+to+view+next+one+++->++//+this+is+img2" alt="" />
                        <img src="https://dummyimage.com/400x400/d4d4d4/000000&text=drag+image+to+view+next+one+++->++//+this+is+img3" alt="" />
                        <img src="https://dummyimage.com/400x400/000000/ffffff&text=drag+image+to+view+next+one+++->++//+this+is+img4" alt="" />
                        <img src="https://dummyimage.com/400x400/545454/ffffff&text=drag+image+to+view+next+one+++->++//+this+is+img5" alt="" />
                        <img src="https://dummyimage.com/400x400/d4d4d4/000000&text=drag+image+to+view+next+one+++->++//+this+is+img6" alt="" />
        
                    </div>
                </div>
            </div>
        </div>

        <div class="best-images">
            <div class="best-images-container">

                <span>
                    BEST IMAGES...
                </span>
                <div class="row-one">
                   <div class="item-box">
                        <img src="https://dummyimage.com/600x400/454545/fff"/>
                   </div>
                   <div class="item-box">
                        <img src="https://dummyimage.com/600x400/454545/fff"/>
                    </div>
                    <div class="item-box">
                        <img src="https://dummyimage.com/600x400/454545/fff"/>
                    </div>
                </div>
                <div class="load-more-img">
                    <a href="">
                        Load More Images {'>>'}
                    </a>
                </div>
            </div>
        </div>
        <div class="featured-solutions">
            <div class="solution-img">
                <img src="https://dummyimage.com/600x400/454545/fff"/>
            </div>
        </div>
        <div class="slution-para">
            <div class="head">
                FEATURED SOLUTIONS
            </div>
            <div class="tag">
                100+ SOLUTIONS
            </div>
            <div class="body">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever
            </div>
        </div>


        <div class="to-whome">
            <div class="boys">
                <div class="header-to-whome">
                    <img src="https://dummyimage.com/600x400/454545/fff"/>
                </div>
                <a href="">
                    CLICK TO EXPLORE {'->'}
                </a>
            </div>
            <div class="boys">
                <div class="header-to-whome">
                    <img src="https://dummyimage.com/600x400/454545/fff"/>
                </div>
                <a href="">
                    CLICK TO EXPLORE {'->'}
                </a>
            </div>
        </div>
       
</>

            </div>

        );
    }
}

export default HtmlBodyComponent;