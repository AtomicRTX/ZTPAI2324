import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../css/loginForm.css';

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import AuthService from "../services/auth.service";
import { withRouter } from '../common/with-router';

  class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
  
        this.state = {
            email: "",
            password: "",
            loading: false,
            message: ""
        };
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
  
    handleLogin(e) {
        e.preventDefault();
  
        this.setState({
            message: "",
            loading: true
        });
  
        this.form.validateAll();
  
        if (this.checkBtn.context._errors.length === 0) {
            AuthService.login(this.state.email, this.state.password).then(
            () => {
                this.props.router.navigate("/homePage");
                window.location.reload();
            },
            error => {
                const resMessage =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
    
                this.setState({
                loading: false,
                message: resMessage
                });
            }
            );
        } else {
            this.setState({
            loading: false
            });
        }
        }



    render() {
        return (
            <div className="login-container">
                <Form className="login" onSubmit={this.handleLogin} ref={c => {this.form = c;}}>
                    <Input className="form-control" name="email" type="text" placeholder="E-mail" value={this.state.email} onChange={this.onChangeEmail}/>
                    <Input className="form-control" name="password" type="password" placeholder="Password" value={this.state.password} onChange={this.onChangePassword}/>
                   <button type="submit" className="In" disabled={this.state.loading}>{this.state.loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Sign In</span></button>
                    {this.state.message && (
                    <div className="form-group">
                        <div className="alert alert-danger" role="alert">
                        {this.state.message}
                        </div>
                    </div>
                    )}
                    <CheckButton
                    style={{ display: "none" }}
                    ref={c => {
                        this.checkBtn = c;
                    }}
                    />
                </Form>
                <div className="register">You don't have an account ?</div>
                <Link to="/registerPage" className="registerLink">
                    <button className="Up">Sign up</button>
                </Link>
            </div>

  )
}

}

export default withRouter(LoginForm);