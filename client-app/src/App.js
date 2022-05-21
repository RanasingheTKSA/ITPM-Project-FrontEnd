import "./App";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import CreateAddItemsComponent from  './components/component-N/CreateAddItemsComponent';
import ListItemComponents from  './components/component-N/ListItemComponents';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from "./components/FooterComponent";
import HtmlBodyComponent from "./components/HtmlBodyComponent";
import UpdateItemComponent from "./components/component-N/UpdateItemComponent";
import ViewItemComponent from "./components/component-N/ViewItemComponent";
import AddtoCart from "./AddtoCart"; 
//import Itemcard from "./components/component-N/addtocartcomponents/Itemcard";
import Cart from "./components/component-N/addtocartcomponents/Cart";
import carthome from "./components/component-N/addtocartcomponents/carthome";
import groomcarthome from "./components/component-N/addtocartcomponents/groomcarthome";
//import cartapp from "./components/component-N/addtocartcomponents/cartapp";
//import data from "./components/component-N/addtocartcomponents/data";
import{CartProvider}from "react-use-cart";
import Contactus from "./components/component-N/Contactus";

function App() {
  return (
    <div>
      <Router>
        <div classname="container">
      <HeaderComponent/>
        
          <Switch>
          <Route path="/"  exact component ={HtmlBodyComponent}/>
          <Route path="/itemlist"  component ={ListItemComponents}/>
          <Route path="/add-item/:id" component ={CreateAddItemsComponent}/> //step1
          <Route path="/view-item/:id" component ={ViewItemComponent}/> 
          <Route path="/update-item/:id" component ={UpdateItemComponent}/>
          <Route path="/addtocart" component ={AddtoCart}/>
          <Route path="/contactus" component ={Contactus}/>
          {/*<Route path="/itemcard" component ={Itemcard}/>*/}
          
          <CartProvider>
          <Route path="/carthome" component ={carthome}/>
          <Route path="/groomcarthome" component ={groomcarthome}/>
          <Route path="/cart" component ={Cart}/>
          {/*<Route path="/cartapp" component ={cartapp}/>*/}
         {/*} <Route path="/data" component ={data}/>*/}
          </CartProvider>
          </Switch>
        <FooterComponent/>
        </div>
        </Router>
    </div>
  );
}

export default App;
