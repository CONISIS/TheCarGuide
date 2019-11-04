import React, { Component } from "react";
import Navegacion from "./Components/Navegacion";
import Footer from "./Components/Footer";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Components/Home/statistics";
import ServicesList from './Components/Services/servicesList';
import CarsList from './Components/Cars/carsList';
import CarDetail from './Components/Cars/carDetail';
import UsersList from './Components/Users/usersList';
import CarForm from './Components/Cars/carForm';

export default class app extends Component {
 
  render() {

    return (
      <div>
        <BrowserRouter>
        
        <div id="nav">
          <Navegacion />
        </div>   
        <Route exact path="/" component={Home} />
        <Route path="/cars" component={CarsList} exact/>
        <Route path="/cars/:license" component={CarDetail} exact/>
        <Route path="/services" component={ServicesList} exact/>
        <Route path="/users" component={UsersList} exact/>
        <Route path="/car" component={CarForm} exact/>
        </BrowserRouter>
        <div id="footer">
          <Footer />
        </div> 
      </div>
    );
  }
}