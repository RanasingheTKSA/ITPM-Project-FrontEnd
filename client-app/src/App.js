import React from "react";  
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import CartItemsComponent from './components/component-tksa/CartItemsComponents';
import ShippingDetailsComponent from "./components/component-tksa/ShippingDetailsComponent";
import AddShippingDetailsComponent from "./components/component-tksa/AddShippingDetailsComponent";
import UpdateShippingDetails from "./components/component-tksa/UpdateShippingDetails";
import FooterComponent from "./components/FooterComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function App() {
  return (
    <div>
      <Router>
          <div className="container">        
            <HeaderComponent/>  
              <div className="container">
                <Switch> http://localhost:3000/
                  <Route path = "/" exact component = {CartItemsComponent}></Route>
                  <Route path = "/cartItems" component = {CartItemsComponent}></Route>
                  <Route path = "/shippingDetails" component = {ShippingDetailsComponent}></Route>
                  <Route path = "/add-shippingDetails" component = {AddShippingDetailsComponent}></Route>
                  <Route path = "/update-shippingDetails/:id" component = {UpdateShippingDetails}></Route>
                </Switch>
              </div>
          </div>
        <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;
