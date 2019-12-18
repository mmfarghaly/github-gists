import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from 'axios';
import { Link, NavLink, Redirect, BrowserRouter as Router,
  Switch,withRouter  } from "react-router-dom";
import LoginForm from "../User/LoginForm";
import Topmenu from  "../Controls/Topmenu"
import { NONAME } from "dns";
const $ = window.jQuery;
var Context=this;
class Leftmenu extends Component {
  constructor(props) {
    super(props);

    this.Logout = this.Logout.bind(this);

  }


  








   componentDidMount() {
    
  }


  HideMenu(evt)
  {
    Topmenu.VisibleMenu='none';
  }

  Logout()
  {
    debugger;
    try
    {
    localStorage.setItem("token", "");
    }catch(e){}
  this.props.history.push("/");
  }

  

  render() {


    return (
      
      
        <aside >
<ul className="list-group"><NavLink className="list-group-item " to="/home">
  <i className="fas fa-home fa-lg fa-fw pt-1"></i><span> Home</span></NavLink>

<NavLink className="list-group-item" to="/details"><i className="fas fa-star fa-lg fa-fw pt-1"> </i><span> Favorite</span></NavLink>

<a className="list-group-item" onClick={this.Logout}> <i className="fas fa-address-book fa-lg fa-fw pt-1"></i><span> Log out</span></a></ul>
</aside>
 
 
    );
  }
}
export default withRouter(Leftmenu);