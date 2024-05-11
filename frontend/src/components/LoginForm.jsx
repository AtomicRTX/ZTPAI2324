import React from 'react'
import { Link } from 'react-router-dom';
import '../css/loginForm.css';

import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import AuthService from "../services/auth.service";

import { withRouter } from '../common/with-router';

const required = value => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };




  
const LoginForm = () => {
  return (
            <div className="login-container">
                <form className="login" action="login" method="POST">
                    <input name="email" type="text" placeholder="E-mail"/>
                    <input name="password" type="password" placeholder="Password"/>
                    <Link to="#"><button type="submit" className="In">Sign in</button></Link>
                </form>
                <div className="register">You don't have an account ?</div>
                <Link to="/registerPage" className="linkUp">
                    <button className="Up">Sign up</button>
                </Link>
            </div>
    
  )
}

export default LoginForm;
