import React, { Component } from "react";

class HeaderComponent extends Component {
  constructor(porps) {
    super(porps);

    this.state = {};
  }

  render() {
    return (
      <div>
        <header>
          <head>
            <link rel="stylesheet" href="./scss.css" />
            <link
              href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@700&family=Dongle:wght@700&family=IBM+Plex+Sans+Thai+Looped:wght@700&family=PT+Sans:wght@400;700&family=Rubik:wght@300;700&display=swap"
              rel="stylesheet"
            />
            <link
              rel="stylesheet"
              href="https://use.fontawesome.com/releases/v5.0.7/css/all.css"
            />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossorigin
            />
          </head>
          <div class="menubar-main-div body-i">
            {/* <div class="logo-n">
                        <img src="https://res.cloudinary.com/dff4rbfkn/image/upload/c_scale,w_100/v1646887829/WhatsApp_Image_2022-03-10_at_9.59.40_AM_b3r1rq.jpg" />
                    </div> */}
            <button class="bar expand-mobile-menu">
              <i class="fas fa-bars" id="#menu-b"></i>
            </button>
            <div class="main-menu">
              <nav>
                <ul>
                  <li>
                    <a href="">HOME</a>
                  </li>
                  <li>
                    <a href="">CONTACT</a>
                  </li>
                  <li>
                    <a href="">ITEM</a>
                  </li>
                  <li>
                    <a href="">ABOUT</a>
                  </li>
                </ul>
              </nav>
              <div class="srchcontact">
                <ul>
                  <li class="item second srch">
                    <a href="" class="nav-a">
                      <i class="fas fa-search"></i>
                    </a>
                  </li>
                  <li class="item second login-header">
                    <a
                      class="menu-button-main second nav-a c-log"
                      href="http://localhost:3000/loginselector"
                    >
                      Login
                    </a>
                  </li>
                  <li class="item second cart-header">
                    <a
                      class="menu-button-main second nav-a cart-c"
                      href="http://localhost:3000/Cart"
                    >
                      <i class="fas fa-shopping-cart"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default HeaderComponent;
