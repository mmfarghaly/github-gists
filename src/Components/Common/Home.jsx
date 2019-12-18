import React from "react";
import { Form, Input, Select, Textarea, Button } from "react-distributed-forms";
import axios from 'axios';
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
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


class home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  gists:[] };
    this.Search = this.Search.bind(this);
    this.addtofavorite = this.addtofavorite.bind(this);

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

}



addtofavorite(id)
{
  axios.post("http://localhost:3000/favorites/createFavorite",
   {
     gistID : id
   },
   {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem("token") //the token is a variable which holds the token
    }
  }
  ).then(res => {
          debugger;
          //this.setState({gists:res.data.data})
          $(".loader").fadeOut(5000);
          alert("Gist added to favorites")

  });
}


Search()
{
  this.setState({gists:[]});
  $(".loader").show();
  axios.post("http://localhost:3000/favorites/search?per_page=100",
   {
    
   },
   {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem("token") //the token is a variable which holds the token
    }
  }
  ).then(res => {
          debugger;
          this.setState({gists:res.data.data})
          $(".loader").fadeOut(5000);
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
      
     
    <div className="input-group mx-auto w-50" style={{paddingTop:'50px'}}>
            <input className="form-control" type="text" placeholder="Search"/>
            <div className="input-group-append">
              <button className="btn btn-info" type="button" onClick={this.Search}> <i className="fas fa-search"></i></button>
             
            </div>
          </div>


        <div className="content-box">
          <div className="container-fluid">
            <div className="row">
           
              <div className="col-lg-11">

            
              {this.state.gists.map((element, i)=> {   
        return    <div className="media-box">
                  <div className="image"><img className="mr-3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png" alt="..."/></div>
                  <div className="media-body"><span className="icon"><i onClick={()=>this.addtofavorite(element.id)} className="far fa-star fa-2x"></i></span>
              <h5 className="mt-0">{element.description}</h5>

             
            
                    <p></p>
                    
                    <a target="_blank" href={element.html_url}>See Detail</a>
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
export default home;
ReactDOM.render(<home />, document.getElementById("root"));