import React from "react";  
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import CartItemsComponent from './components/component-tksa/CartItemsComponents';
import ShippingDetailsComponent from "./components/component-tksa/ShippingDetailsComponent";

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
                <Route path = "/shippingDetails" component = {ShippingDetailsComponent}></Route>
              </Switch>
            </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
