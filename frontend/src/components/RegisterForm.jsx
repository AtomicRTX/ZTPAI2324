import React from 'react';
import { Link } from 'react-router-dom';
import '../css/registerForm.css';

const RegisterForm = () => {
  return (
    <div className="register-container">
        <form action="/register" method="POST">
            <input name="name" type="text" placeholder="Name"/>
            <input name="surname" type="text" placeholder="Surname"/>
            <input name="email" type="text" placeholder="E-mail"/>
            <input name="password" type="password" placeholder="Password"/>
            <input name="confirmedPassword" type="password" placeholder="Confirmed password"/>
            <input name="phoneNumber" type="text" placeholder="Phone number"/>
            <Link to="#">
                <button type="submit" className="Up">
                    Sign Up
                </button>
            </Link>
            <div className="loginr">
                <p>You already have an account ?</p>
            </div>
        </form>
        <Link to="/loginPage">
            <button className="In">Sign in</button>
        </Link>
    </div>
  )
}

export default RegisterForm;
