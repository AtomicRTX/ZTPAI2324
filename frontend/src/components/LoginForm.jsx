import React from 'react'
import { Link } from 'react-router-dom';
import '../css/loginForm.css';

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
