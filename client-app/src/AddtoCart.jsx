import React, { Component } from 'react';

class AddtoCart extends Component {
    render() {
        return (
            <div>
               {/*} <div
        className="App"
        style={{
          backgroundImage: "url(/images/frock.jpg)",
          marginTop: -80,
          marginLeft: 10,
          height: 1700,
          width: 1400,
          opacity:1,
          backgroundRepeat:"no-repeat",
          //backgroundAttachment:"fixed",
          //backgroundPosition:"center",
        }}
    ></div>*/}
                <h3  style={{ textAlign:"center",fontSize:"40px"}}><b>Bridal Wear</b></h3>
                <div className='itmImgBtn'>
                        <a href='http://localhost:3000/add-item/_add'>
                                <button className='itmImgBtn' href="http://localhost:3000/add-item/_add">
                                   Go To Settings
                                </button>
                                </a>
                            </div>

                <div className='imageGridItem'  style={{marginTop:"50px"}} >
                    <div className='imageItemBox'>

                        <div className='ImageItemImg'>
                           <img className='ImageItemImg' src="../images/frock3.jpg"></img>
                        </div>
                        <div className='itmImgBtn'>
                        <a href='http://localhost:3000/carthome'>
                                <button className='itmImgBtn'  href="http://localhost:3000/carthome">
                                    
                                    View More
                                    
                                </button>
                                </a>
                            </div>
                    </div>

                    <div className='imageItemBox'>

                        <div className='ImageItemImg'>
                           <img  className='ImageItemImg' src="../images/frock1.jpg"></img>
                        </div>
                        <div className='itmImgBtn'>
                        <a href='http://localhost:3000/carthome'>
                                <button className='itmImgBtn' href="http://localhost:3000/carthome">
                                   View More
                                </button>
                                </a>
                            </div>
                    </div>

                    <div className='imageItemBox'>

                        <div className='ImageItemImg'>
                           <img className='ImageItemImg' src="../images/frock 2.jpg"></img>
                        </div>
                        <div className='itmImgBtn'>
                        <a href='http://localhost:3000/carthome'>
                                <button className='itmImgBtn' href="http://localhost:3000/carthome">
                                    View More
                                </button>
                                </a>
                            </div>
                    </div>
                </div>
                <div className='imageGridItem'>
                    <div className='imageItemBox'>

                        <div className='ImageItemImg'>
                           <img className='ImageItemImg' src="../images/frock4.jpg"></img>
                        </div>
                        <div className='itmImgBtn'>
                        <a href='http://localhost:3000/carthome'>
                                <button className='itmImgBtn' href='http://localhost:3000/carthome'>
                                    View More
                                </button>
                                </a>
                            </div>
                    </div>

                    <div className='imageItemBox'>

                        <div className='ImageItemImg'>
                           <img  className='ImageItemImg' src="../images/frock5.jpg"></img>
                        </div>
                        <div className='itmImgBtn'>
                        <a href='http://localhost:3000/carthome'>
                                <button className='itmImgBtn' href='http://localhost:3000/carthome'>
                                    View More
                                </button>
                                </a>
                            </div>
                    </div>

                    <div className='imageItemBox'>

                        <div className='ImageItemImg'>
                           <img className='ImageItemImg' src="../images/frock6.jpg"></img>
                        </div>
                        <div className='itmImgBtn'>
                        <a href='http://localhost:3000/carthome'>
                                <button className='itmImgBtn' href='http://localhost:3000/carthome'>
                                    View More
                                </button>
                                </a>
                            </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddtoCart;
        
    
