import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CartItemsComponent from "./components/component-tksa/CartItemsComponents";
import CustomerComponents from "./components/component-k/CustomerComponents";
import HtmlBodyComponent from "./components/HtmlBodyComponents";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import CreateCustomerComponent from "./components/component-k/CreateCustomerComponent";
import UpdateCustomerComponent from "./components/component-k/UpdateCustomerComponent";
import ViewCustomerComponent from "./components/component-k/ViewCustomerComponent";
import loginapp from "./containers/LoginPage";
import logselector from "./containers/LoginSelector";
import PdfForKaw from "./components/component-k/PdfForKaw";

import ShippingDetailsComponent from "./components/component-tksa/ShippingDetailsComponent";
import AddShippingDetailsComponent from "./components/component-tksa/AddShippingDetailsComponent";
import UpdateShippingDetails from "./components/component-tksa/UpdateShippingDetails";

import UpdateCardPaymentDetailsComponent from "./components/component-tksa/UpdateCardPaymentDetailsComponent";
import ThankYouModalComponent from "./components/component-tksa/ThankYouModalComponent";
import AddCardPaymenrDetailsComponent from "./components/component-tksa/AddCardPaymenrDetailsComponent";

function App() {
  return (
    <div>
      <Router>
        <div className="">
          <HeaderComponent />
          <div className="">
            <Switch>
              <Route path="/" exact component={HtmlBodyComponent} />
              <Route path="/customer" component={CustomerComponents} />
              <Route path="/login" component={loginapp} />
              <Route path="/loginselector" component={logselector} />
              <Route path="/add-customer" component={CreateCustomerComponent} />
              <Route
                path="/update-customer/:id"
                component={UpdateCustomerComponent}
              />
              <Route
                path="/view-customer/:id"
                component={ViewCustomerComponent}
              />
              <Route path="/cart" component={CartItemsComponent} />
              <Route path="/pdfcustomer" component={PdfForKaw} />
              {/* </Switch> */}
              {/* </div>
        </div>
        <FooterComponent /> */}
              {/* <div className="container">
          <HeaderComponent />
          <div className="container">
            <Switch> */}
              <Route path="/cartItems" component={CartItemsComponent}></Route>
              <Route
                path="/shippingDetails"
                component={ShippingDetailsComponent}
              ></Route>
              <Route
                path="/add-shippingDetails"
                component={AddShippingDetailsComponent}
              ></Route>
              <Route
                path="/add-cardPaymentDetails"
                component={AddCardPaymenrDetailsComponent}
              ></Route>
              <Route
                path="/update-shippingDetails/:id"
                component={UpdateShippingDetails}
              ></Route>
              <Route
                path="/update-cardPaymentDetails/:id"
                component={UpdateCardPaymentDetailsComponent}
              ></Route>
              <Route
                path="/thankYouPage"
                component={ThankYouModalComponent}
              ></Route>
            </Switch>
          </div>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
