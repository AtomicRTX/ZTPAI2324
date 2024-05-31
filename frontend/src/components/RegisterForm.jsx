import React, { Component } from 'react';
import { Link, Navigate } from 'react-router-dom';
import '../css/registerForm.css';

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { isEmail } from "validator"


import AuthService from "../services/auth.service";

const required = value => {
    if (!value) {
        return (
            <div className="message" role="alert">
                This field is required!
            </div>
        );
    }
};

const email = value => {
    if (!isEmail(value)) {
        return (
            <div className="message" role="alert">
                This is not a valid email.
            </div>
        );
    }
};
  
const vpassword = value => {
    if (value.length < 6 || value.length > 20) {
        return (
            <div className="message" role="alert">
                The password must be between 6 and 20 characters.
            </div>
        );
    }
};

export default class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.handleRegister = this.handleRegister.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeSurname = this.onChangeSurname.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeConfirmedPassword = this.onChangeConfirmedPassword.bind(this);
  
        this.state = {
            name: "",
            surname: "",
            email: "",
            password: "",
            confirmedPassword: "",
            successful: false,
            message: ""
        };
    }
  
    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }
    
    onChangeSurname(e) {
        this.setState({
            surname: e.target.value
        });
    }
  
    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }
  
    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    onChangeConfirmedPassword(e) {
        this.setState({
            confirmedPassword: e.target.value
        });
    }
  
    handleRegister(e) {
        e.preventDefault();
  
        this.setState({
            message: "",
            successful: false
        });
  
        this.form.validateAll();
  
        if (this.state.password !== this.state.confirmedPassword) {
            this.setState({
                successful: false,
                message: "Confirmed password must match the password."
            });
            return;
        }

        if (this.checkBtn.context._errors.length === 0) {
            AuthService.register(
                this.state.name,
                this.state.surname,
                this.state.email,
                this.state.password
            ).then(
                response => {
                    this.setState({
                        message: response.data.message,
                        successful: true
                    });

                    setTimeout(() => {
                        this.setState({ redirectToLogin: true });
                    }, 2000);
                },
          error => {
              const resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
              this.setState({
                  successful: false,
                  message: resMessage
              });
          }
        );
      }
    }

    render() {

        if (this.state.redirectToLogin) {
            return <Navigate to="/loginPage" />;
        }

        return (
            <div className="register-container">
                <Form onSubmit={this.handleRegister} ref={c => {this.form = c;}}>
                        <div className="form-group">
                            <Input className="form-control" name="name" type="text" placeholder="Name" value={this.state.name} onChange={this.onChangeName}/>
                            <Input className="form-control" name="surname" type="text" placeholder="Surname" value={this.state.surname} onChange={this.onChangeSurname}/>
                            <Input className="form-control" name="email" type="text" placeholder="E-mail" value={this.state.email} onChange={this.onChangeEmail} validations={[required, email]}/>
                            <Input className="form-control" name="password" type="password" placeholder="Password" value={this.state.password} onChange={this.onChangePassword} validations={[required, vpassword]}/>
                            <Input className="form-control" name="confirmedPassword" type="password" placeholder="Confirmed password" value={this.state.confirmedPassword} onChange={this.onChangeConfirmedPassword}/>
                            <button type="submit" className="Up">Sign Up</button>
                        </div>
                    {this.state.message && (
                        <div className="message">
                            <div
                            className={
                                this.state.successful
                                ? "alert alert-success"
                                : "alert alert-danger"
                            }
                            role="alert"
                            >
                            {this.state.message}
                            </div>
                        </div>
                    )}
                    <CheckButton style={{ display: "none" }} ref={c => { this.checkBtn = c; }} />
                </Form>
                {this.state.successful && (
                <div className="message">
                    <p>Register successful</p>
                </div>
                )}

                <div className="loginr">
                    <p>You already have an account ?</p>
                </div>
                <Link to="/loginPage" className='loginLink'>
                    <button className="In">Sign in</button>
                </Link>
            </div>
        )
    }
}