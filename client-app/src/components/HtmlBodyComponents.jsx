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
            <img className=' mng-bg' src="https://res.cloudinary.com/dff4rbfkn/image/upload/v1649843065/nathan-dumlao-5BB_atDT4oA-unsplash_zqw671.jpg"/>
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
                <img className='repeter-img' src="https://res.cloudinary.com/dff4rbfkn/image/upload/v1649662515/108169871_726609814825827_2947056605602678813_n_pgq8sp.jpg" alt="" />
                </div>
                <div class='item'>
                <img className='repeter-img' src="https://res.cloudinary.com/dff4rbfkn/image/upload/v1649843208/luis-tosta-MEZDyn98La8-unsplash_ievxb1.jpg" alt="" />
                </div>
                <div class='item'>
                <img  className='repeter-img' src="https://res.cloudinary.com/dff4rbfkn/image/upload/v1649662515/108169871_726609814825827_2947056605602678813_n_pgq8sp.jpg" alt="" />
                </div>
                <div class='item'>
                <img className='repeter-img' src="https://res.cloudinary.com/dff4rbfkn/image/upload/v1649843208/luis-tosta-MEZDyn98La8-unsplash_ievxb1.jpg" alt="" />
                </div>
                <div class='item'>
                <img className='repeter-img' src="https://res.cloudinary.com/dff4rbfkn/image/upload/v1649843208/luis-tosta-MEZDyn98La8-unsplash_ievxb1.jpg" alt="" />
                </div>
                <div class='item'>
                <img className='repeter-img' src="https://res.cloudinary.com/dff4rbfkn/image/upload/v1649662515/108169871_726609814825827_2947056605602678813_n_pgq8sp.jpg" alt="" />
                </div>
            </OwlCarousel>;
            </div>
            
        </div>
<div class="our-srvices">
            <div class="our-sevices-img">
                <img clasName="our-se-bg" src="https://res.cloudinary.com/dff4rbfkn/image/upload/v1649900891/jeremy-wong-weddings-464ps_nOflw-unsplash_jtq5yu.jpg" />
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
                        <img className='repeter-img' src="https://res.cloudinary.com/dff4rbfkn/image/upload/v1649843208/luis-tosta-MEZDyn98La8-unsplash_ievxb1.jpg" alt="" />
                        <img className='repeter-img' src="https://res.cloudinary.com/dff4rbfkn/image/upload/v1649662515/108169871_726609814825827_2947056605602678813_n_pgq8sp.jpg" alt="" />
                        <img className='repeter-img' src="https://res.cloudinary.com/dff4rbfkn/image/upload/v1649843208/luis-tosta-MEZDyn98La8-unsplash_ievxb1.jpg" alt="" />
                        <img className='repeter-img' src="https://res.cloudinary.com/dff4rbfkn/image/upload/v1649662515/108169871_726609814825827_2947056605602678813_n_pgq8sp.jpg" alt="" />
                        <img className='repeter-img' src="https://res.cloudinary.com/dff4rbfkn/image/upload/v1649843208/luis-tosta-MEZDyn98La8-unsplash_ievxb1.jpg" alt="" />
                        <img className='repeter-img' src="https://res.cloudinary.com/dff4rbfkn/image/upload/v1649662515/108169871_726609814825827_2947056605602678813_n_pgq8sp.jpg" alt="" />
        
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
                        <img clasName="our-se-bg" src="https://res.cloudinary.com/dff4rbfkn/image/upload/v1649662515/108169871_726609814825827_2947056605602678813_n_pgq8sp.jpg"/>
                   </div>
                   <div class="item-box">
                        <img clasName="our-se-bg" src="https://res.cloudinary.com/dff4rbfkn/image/upload/v1649662515/108169871_726609814825827_2947056605602678813_n_pgq8sp.jpg"/>
                    </div>
                    <div class="item-box">
                        <img clasName="our-se-bg" src="https://res.cloudinary.com/dff4rbfkn/image/upload/v1649662515/108169871_726609814825827_2947056605602678813_n_pgq8sp.jpg"/>
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
                <img className="our-se-bg" src="https://res.cloudinary.com/dff4rbfkn/image/upload/v1649900891/jeremy-wong-weddings-464ps_nOflw-unsplash_jtq5yu.jpg"/>
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
                    <img className="our-se-bg" src="https://res.cloudinary.com/dff4rbfkn/image/upload/v1649901647/soroush-karimi-4tAHleLnMWA-unsplash_fwgmo7.jpg"/>
                </div>
                <a href="">
                    CLICK TO EXPLORE {'->'}
                </a>
            </div>
            <div class="boys">
                <div class="header-to-whome">
                    <img className="our-se-bg" src="https://res.cloudinary.com/dff4rbfkn/image/upload/v1649901647/muesli-cWv4Bxvqt_c-unsplash_lgvdu1.jpg"/>
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