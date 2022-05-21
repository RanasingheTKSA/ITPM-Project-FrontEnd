import "./App";
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import CartItemsComponent from './components/component-tksa/CartItemsComponents';
import AdminComponent from './components/component-G/AdminComponents';
import HeaderComponent from './components/HeaderComponent';
import HtmlBodyComponent from "./components/HtmlBodyComponents";
import CreateAdminComponent from "./components/component-G/CreateAdminComponent";
import UpdateAdminComponent from "./components/component-G/UpdateAdminComponent";
import ViewAdminComponent from "./components/component-G/ViewAdminComponent";
import FooterComponent from "./components/FooterComponent";
import logselector from "./components/component-G/LoginSelector";
import loginapp from "./components/component-G/loginAdmin";

function App() {
  return (
    <div>
      <Router>
         <div className="">
      <HeaderComponent/>
        <div className="">
          <Switch> 
              <Route path = "/" exact component = {HtmlBodyComponent}></Route>
              <Route path = "/admins" component = {AdminComponent}></Route>
              <Route path = "/loginselector" component = {logselector}></Route>
              <Route path="/login" component={loginapp} />
              <Route path = "/Admin-Registration" component = {CreateAdminComponent}></Route>
              <Route path = "/view-admin/:id" component = {ViewAdminComponent}></Route>
              <Route path = "/update-Registration/:id" component = {UpdateAdminComponent}></Route>
       
          </Switch>
        </div>
        <FooterComponent/>
        </div>
        </Router>
    </div>
  );
}

export default App;
