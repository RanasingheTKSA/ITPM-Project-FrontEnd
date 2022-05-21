import React, { Component } from 'react';
const mystyle={
    
}
class Contactus extends Component {
    render() {
        return (
            <div>
                 <div
        className="App"
        style={{
          backgroundImage: "url(/images/frock.jpg)",
          marginTop: -80,
          marginLeft: 10,
          height: 1500,
          width: 1400,
          opacity:1,
          backgroundRepeat:"no-repeat",
          backgroundAttachment:"fixed",
         // backgroundPosition:"left",
       
        }}
      ></div>
                <div class="container" style={{
                    maxwidth:"400px",
                    width:"100%",
                    margin: "auto",
                    position:"relative",
                    marginTop:"-1400px"
                }}>  
                <h1 style= {{color:"#414141",textAlign:"center",fontWeight:"bold"}}>Luxury Wedding Wears</h1>
  <form id="contact" action="" method="post"style={{
	fontfamily:"Open Sans Helvetica Arial",
	fontweight:"300",
	fontsize: "12px",
	lineheight:"30px",
  width:"700px",
	color:"black",
	background:"#F0A1AA",

}}>
  {/*#F07A88,#F07A88,*/}  
    <h3>Quick Contact</h3>
    <h5>Contact us today, and get reply with in 24 hours!</h5>
    <fieldset style={{
        border:" medium none" ,
        margin:"50px",
        minwidth: "200px",
        padding: "10px",
        width: "200px",
        height:"50px",
    }}>
      <input placeholder="Your name" type="text" tabindex="1" required autofocus  style={{width: 400,height:50,borderRadius:10}}/>
    </fieldset>
    <fieldset
    style={{
        border:" medium none" ,
        margin:"50px",
        minwidth: "100%",
        padding: "10px",
        width: "100%",
        height:"50px",
    }}>
      <input placeholder="Your Email Address" type="email" tabindex="2"style={{width: 400,height:50,borderRadius:10}} required/>
    </fieldset>
    <fieldset
    style={{
        border:" medium none" ,
        margin:"50px",
        minwidth: "100%",
        padding: "10px",
        width: "100%",
    }}>
      <input placeholder="Your Phone Number" type="tel" tabindex="3"style={{width: 400,height:50,borderRadius:10}} required/>
    </fieldset>
    <fieldset
    style={{
        border:" medium none" ,
        margin:"50px",
        minwidth: "100%",
        padding: "10px",
        width: "100%",
    }}>
      <textarea placeholder="Type your Message Here...." tabindex="5" style={{width: 400,height:100,borderRadius:10}}required></textarea>
    </fieldset>
    <fieldset style={{
        border:" medium none" ,
        margin:"30px",
        minwidth: "100%",
        padding:"10px",
        width: "100%",
    }}>
      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending" 
      style={{
            fontSize: 20,
            color: "White",
            backgroundColor: "#29C5F6",
            borderRadius: 10,
            marginLeft: 30,
            marginTop: -1000,
            height: 50,
            width: 100,
          }}>Submit</button>
    </fieldset>
  </form>
 
  
</div>
            </div>
        );
    }
}

export default Contactus;