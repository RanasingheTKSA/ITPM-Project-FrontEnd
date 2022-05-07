import React from 'react';
import './App.css';
import {BrowserRouter as Router , Switch ,Route} from 'react-router-dom'
import CartItemsComponent from './components/component-tksa/CartItemsComponents';
import CustomerComponents from './components/component-k/CustomerComponents';
import HtmlBodyComponent from './components/HtmlBodyComponents';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateCustomerComponent from './components/component-k/CreateCustomerComponent';
import UpdateCustomerComponent from './components/component-k/UpdateCustomerComponent';
import ViewCustomerComponent from './components/component-k/ViewCustomerComponent';
import loginapp from './containers/LoginPage';
import logselector from './containers/LoginSelector';
import PdfForKaw from './components/component-k/PdfForKaw';


function App() {
  return (
    <div>
      <Router>
        <div className="">
          <HeaderComponent/>
            <div className="">
              <Switch>
                <Route path="/" exact  component = {HtmlBodyComponent} />
                <Route path="/customer"  component  = {CustomerComponents}/>
                <Route path="/login"  component  = {loginapp}/>
                <Route path="/loginselector"  component  = {logselector}/>
                <Route path="/add-customer"  component  = {CreateCustomerComponent}/>
                <Route path="/update-customer/:id"  component  = {UpdateCustomerComponent}/>
                <Route path="/view-customer/:id"  component  = {ViewCustomerComponent}/>
                <Route path="/cart" component  = {CartItemsComponent} />
                <Route path="/pdfcustomer" component  = {PdfForKaw} />
              </Switch>
            </div>
        </div>   
        <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;
