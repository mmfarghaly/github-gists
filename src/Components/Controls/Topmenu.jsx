import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from 'axios';
import { Link, NavLink } from "react-router-dom";
import LoginForm from "../User/LoginForm";
import { NONAME } from "dns";
import $ from 'jquery';


class Topmenu extends Component {
  constructor(props) {
    super(props);

  
this.state = {}

  }


  static VisibleMenu='none';

  setVisible(value){
    this.setState({Visible:value});
}





   componentDidMount() {
    /*Start Aside hide and show*/




$('.toggle-aside').on('click', function () {
  $('aside').toggleClass('more-width');
  $('.content-box').toggleClass('padding-content-box');
  $('.toggle-aside i').toggleClass('fa-toggle-on');
  $('.toggle-aside i').toggleClass('fa-toggle-off');
});
$('.showToggle-aside').on('click', function () {
  $('aside').toggleClass('show-aside');
  $('.showToggle-aside i').toggleClass('fa-bars');
  $('.showToggle-aside i').toggleClass('fa-stream');
});
  }


  HideMenu(evt)
  {
    Topmenu.VisibleMenu='none';
  }

  static ShowMenu(evt)
  {
    Topmenu.VisibleMenu='';
  }

  

  render() {
    

    return (
      <div >
 
 <nav className="navbar fixed-top navbar-dark bg-dark" >
        <div className="container-fluid">
          
          <a className="navbar-brand" href="search.html"> <i className="fab fa-github fa-lg"></i> Github</a><span className="toggle-aside mr-auto text-white pl-5"><i className="fas fa-toggle-off fa-lg"></i></span><span className="showToggle-aside"><i className="fas fa-bars fa-lg"></i></span>
          
          <div className="my-2 my-lg-0 d-none d-lg-block d-md-block">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item"><a className="nav-link" href="#"><span className="fa-layers fa-fw"><i className="fas fa-bell fa-lg"></i></span><span className="fa-layers-counter badge badge-primary">99</span></a></li>
              <li className="nav-item"><a className="nav-link" href="#"><span className="fa-layers fa-fw"><i className="fas fa-comments fa-lg"></i></span><span className="fa-layers-counter badge badge-warning">122</span></a></li>
              <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-user fa-lg"></i></a>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown"><a className="dropdown-item" href="#">Action</a><a className="dropdown-item" href="#">Another action</a>
                  <div className="dropdown-divider"></div><a className="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        </div>
    );
  }
}
export default Topmenu;