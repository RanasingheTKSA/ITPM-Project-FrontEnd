import React, { Component } from 'react';
import Itemcard from "./Itemcard";
import data from"./data";
//import Itemcard from "./components/component-N/addtocartcomponents/Itemcard";
//import data from "./components/component-N/addtocartcomponents/data";
///class carthome extends Component {
    //render() {
        const carthome =() =>{
      return (
            <>
              <div
        className="App"
        style={{
          backgroundImage: "url(/images/frock.jpg)",
          marginTop: -80,
         // marginLeft: 10,
          height: 1700,
          width: 1400,
          opacity:1,
          backgroundRepeat:"no-repeat",
          backgroundAttachment:"fixed",
          //backgroundPosition:"center",
        }}
    ></div>
    <div style={{marginTop:"-1600px"}} >
    <a href='http://localhost:3000/add-item/_add'>
                                <button className='itmImgBtn' href="http://localhost:3000/add-item/_add" 
                                style={{color:"black",width:200,
                                 marginTop:"-60px",
                                 border:"none",background:"transparent",
                                 marginLeft: 1000}}>
                                   Go To Admin Setting
                                </button>
                                </a>
                                <br>
                                </br>
                                <br></br>
<div  style={{backgroundColor:"pink",width:"300px",marginLeft:40}}>
                                <form style={{ marginTop: -80,marginLeft:30}}>
                                    <h3>Categories</h3>
                                
                                    <div class="vier-profile-home-btn">
            <a href="http://localhost:3000/carthome" class="view-a-button"> Bridal Collection </a>
          </div>
                                <br></br>
                               
                         
                                <div class="vier-profile-home-btn">
            <a href="http://localhost:3000/groomcarthome" class="view-a-button"> Groom Collection </a>
          </div>       
                                
                                </form>
 </div>
            <h1 className="text-center mt-3" style={{fontWeight:"bold"}}>Bridals Wear</h1>
            <div className='itmImgBtn'>
                        

                        
                            </div>
            <section className="py-4 container">
                <div className="row justify-content-center">
                    {data.productData.map((item,index)=>{
    

              return(
                   <Itemcard 
                    img={item.img}
                     title={item.title} 
                     desc={item.desc} 
                     price={item.price} 
                     size={item.size} 
                     color={item.color} 
                      item ={item}
                      key={index}/>
)
                    })}
                            
                </div>
            </section>
            </div>
</>
        );
    };


export default carthome;