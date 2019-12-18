import React, { Component } from "react";
// import logo from "./logo.svg";
import { BrowserRouter, Route, Redirect, Switch,NavLink } from "react-router-dom";
import "./App.css";
//import "./Content/CSS/newStyle.css";
//import EratesLogo from "./Content/Images/ERWLogo.png";
import LoginForm from "./Components/User/LoginForm";

import Home from "./Components/Common/Home";
import Details from "./Components/Common/details";
import Topmenu from "./Components/Controls/Topmenu";
import Leftmenu from "./Components/Controls/LeftMenu";


const $ = window.jQuery;
const context =this;
class App extends Component {

  constructor(props) {
    super(props);

    debugger;
this.state = {
                Visible : '' 
             }

  }

   setVisible(value){
    this.setState({Visible:value});
}

  componentDidMount() {

  
  }




  



  render() {

   
    return (
      // <div className="App">
      //   <header className="App-header">
      
     
      <div >

        <React.Fragment>
          <BrowserRouter>
           <div >
     
          



      
            <Switch>
              <Route path="/LoginForm" component={LoginForm} />
              <Route path="/home" >
              <div className="content">
              <Topmenu   />
              <Leftmenu />
              <Home />
              </div>
              </Route> 
              <Route path="/details" >
              <div className="content">
              <Topmenu   />
              <Leftmenu />
              <Details />
              </div>
              </Route> 
              <Route path="/" component={LoginForm} />
            </Switch>


           
     
   
            </div> 
          </BrowserRouter>
        </React.Fragment>
    </div>
    );
  }
}

export default App;
