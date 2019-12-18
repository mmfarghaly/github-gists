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
import Topmenu from "../Controls/Topmenu"

var ServiceUrl = "";
const required = (value) => {
  if (!value.toString().trim().length) {
    // We can return string or jsx as the 'error' prop for the validated Component
    return 'require';
  }
};
class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      UserLogin:{
        username: "",
        Password:""
      },
      NewUser:{
      Username: "",
      Password:"" ,
      ConfirmPassword:"" ,
      ErrorMessage:"", 
      EmailforForgetPassword:"" 
      },
      logvisible:'',
      accountvisible:'none',
      forgetvisible:'none'
    };
    this.AddLogin = this.AddLogin.bind(this);
    this.createUser = this.createUser.bind(this);
    this.displayLogin = this.displayLogin.bind(this);
    this.displayForget = this.displayForget.bind(this);
    this.displayAccount = this.displayAccount.bind(this);
  }

  
  componentDidMount() {
    
  }

  displayForget()
  {
    this.setState({
      forgetvisible:'',
      logvisible:'none',
      accountvisible:'none',
    })
  }

  displayLogin()
  {
    this.setState({
      forgetvisible:'none',
      logvisible:'',
      accountvisible:'none',
    })
  }

  displayAccount()
  {
    this.setState({
      forgetvisible:'none',
      logvisible:'none',
      accountvisible:'',
    })
  }



  AddLogin(evt) {
    debugger;

        axios.post("http://localhost:3000/users/login",
        {
          email : this.state.UserLogin.username,
          password : this.state.UserLogin.Password  
        }
        )
        .then(res => {
          debugger;

          if(!res.data.token)
          {

            if(this.state.ErrorMessage === "")
               this.setState({ErrorMessage:"UserName or password is not correct!."})  ;
               alert(res.data.error);
          }
          else
          {
            localStorage.setItem("token", res.data.token);
            this.props.history.push(`/home`);
          }
        })

    }




  createUser()
  {
    axios.post("http://localhost:3000/users",
    {
      email : this.state.NewUser.Username,
      password : this.state.NewUser.Password
    }
    )
    .then(res => {
      debugger;

      if(!res.data._id)
      {

        if(this.state.ErrorMessage === "")
           this.setState({ErrorMessage:"UserName or password is not correct!."})  ;
           alert(res.data.error);
      }
      else
      {
       alert("User Created");
        this.displayLogin();
      }
    })
}
  

  GetLoginValue(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }


  render() {
    return (
        <div className="bg">
        <div className="login-box " style={{display:this.state.logvisible}}>
          <div className="title"> 
            <h1>Login</h1>
          </div>
          <Form binding={[this,"UserLogin"]}>
            <form>
            <div className="form-groub">
              <Input className="input-control" type="text" id="Usernamelog" name="username"/>
              <label >Email</label><span className="icon"><i className="fa fa-envelope"></i></span>
              <p className="massError">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="form-groub">
              <Input className="input-control password" type="password" id="Passwordloglog" name="Password"/>
              <label >Password</label><span className="icon"><i className="fa fa-key"></i></span><span className="show"><i className="fa fa-eye-slash"></i></span>
              <p className="massError">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="form-checkbox">
              <Input className="checkbox-control" type="checkbox" id="RememberMe"/>
              <label >Remember Me</label>
            </div>  
            <div className="clareBoth"></div>
            <button onClick={this.AddLogin} className="buttton-submit" type="button">Login</button><span className="creatAccount">Don’t have an account? <span onClick={this.displayAccount}>Sign up</span></span>
            </form></Form>
        </div>
        <div className="login-box " style={{display:this.state.forgetvisible}}>
          <div className="title"> 
            <h1>Forget Password</h1>
          </div>
          <form action="">
            <div className="form-groub">
              <input className="input-control" type="text" id="Email"/>
              <label >Email</label><span className="icon"><i className="fa fa-envelope"></i></span>
              <p className="massError">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <button className="buttton-submit" type="submit">Send</button>
          </form>
        </div>
        <div className="login-box " style={{display:this.state.accountvisible}}>
          <div className="title"> 
            <h1>Create Account</h1>
          </div>

          <Form binding={[this,"NewUser"]} >
          <form>
           
            <div className="form-groub">
              <Input className="input-control" type="text" id="EmailReg" name="Username"/>
              <label >Email</label><span className="icon"><i className="fa fa-envelope"></i></span>
              <p className="massError">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="form-groub">
              <Input className="input-control password" type="password" id="PasswordReg" name="Password"/>
              <label >Password</label><span className="icon"><i className="fa fa-key"></i></span><span className="show"><i className="fa fa-eye-slash"></i></span>
            </div>
            <div className="form-groub">
              <Input className="input-control password" type="password" id="ConfirmPassword" name="ConfirmPassword"/>
              <label >Confirm Password</label><span className="icon"><i className="fa fa-key"></i></span><span className="show"><i className="fa fa-eye-slash"></i></span>
              <p className="massError">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <button className="buttton-submit" onClick={this.createUser} type="button">Sign up</button>
            <span className="login" onClick={this.displayLogin}>have an account? <span>Login </span></span>
          </form>
          </Form>
        </div>
        </div>
    );
  }
}
export default LoginForm;
ReactDOM.render(<LoginForm />, document.getElementById("root"));