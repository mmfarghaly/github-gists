import React from "react";
import { Form, Input, Select, Textarea, Button } from "react-distributed-forms";
import axios from 'axios';
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
import $ from 'jquery';
import PropTypes from "prop-types";
import App from "../../App";
import "../../Content/css/bootstrap.min.css";
import "../../Content/css/fontAwesome.min.css";
import "../../Content/css/style.css";
import LoginForm from "../User/LoginForm";

var ServiceUrl = "";
const required = (value) => {
  if (!value.toString().trim().length) {
    // We can return string or jsx as the 'error' prop for the validated Component
    return 'require';
  }
};
class details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  gists:[] };


  }
  componentDidMount() {
   
      $("body").css("overflow", "auto");
      $(".loader").fadeOut(5000);
   
    /*End Loading*/
   
   
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


    axios.get("http://localhost:3000/favorites/listFavorites",
    {
     headers: {
       Authorization: 'Bearer ' + localStorage.getItem("token") //the token is a variable which holds the token
     }
   }
   ).then(res => {
           debugger;
            this.setState({gists:res.data});
          //  console.log(res.data);
        //   $(".loader").fadeOut(5000);
           var x="";  
   });

}










  render() {
    return (
     
       
      <div>
        <div className="loader">
      <div className="cube-wrapper">
        <div className="cube-folding">
          <span className="leaf1"></span><span className="leaf2">
            </span><span className="leaf3"></span><span className="leaf4">
              </span></div><span className="loading" data-name="Loading">Loading</span>
      </div>
    </div>
      
     
  

        <div className="content-box">
          <div className="container-fluid">
            <div className="row">
           
              <div className="col-lg-11">

            
              {this.state.gists.map((element, i)=> {   
        return    <div className="media-box">
                  <div className="image"><img className="mr-3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png" alt="..."/></div>
                  <div className="media-body">
              <h5 className="mt-0">{element.description}</h5>

             
            
                    <p></p>
                    
                    <a target="_blank" href={"https://gist.github.com/"+element.gistID}>See Detail</a>
                  </div>
                </div>
              })}

               
               
               
              </div>
            </div>
          </div>
        </div>
        </div>
      
    );
  }
}
export default details;
ReactDOM.render(<details />, document.getElementById("root"));