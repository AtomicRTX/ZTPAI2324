import './App.css';
import React, { Component } from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from './pages/HomePage';
import ReservationPage from './pages/ReservationPage';
import ProfilePage from './pages/ProfilePage';
import RestaurantsPage from './pages/RestaurantsPage';
import WelcomePage from './pages/WelcomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import RestaurantPage from './pages/RestaurantPage';

import AuthService from "./services/auth.service";

class App extends Component {
    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);
    
        this.state = {
          currentUser: undefined,
        };
      }
    
      componentDidMount() {
        const user = AuthService.getCurrentUser();
    
        if (user) {
          this.setState({
            currentUser: user,
          });
        }
      }
    
      logOut() {
        AuthService.logout();
        this.setState({
          currentUser: undefined,
        });
      }
render() {
  return (
      <>
          <Routes>
              <Route path={'/'} element={<WelcomePage/>}/>
              <Route path={'/loginPage'} element={<LoginPage/>}/>
              <Route path={'/registerPage'} element={<RegisterPage/>}/>    
              <Route path={'/homePage'} element={<HomePage/>}/>
              <Route path={'/reservationPage'} element={<ReservationPage/>}/>   
              <Route path={'/restaurantPage'} element={<RestaurantsPage/>}/>    
              <Route path={'/profilePage'} element={<ProfilePage/>}/>
              <Route path={'/restaurantPage/id=1'} element={<RestaurantPage/>}/>
              <Route path={'/logout'} element={<WelcomePage/>}/>
          </Routes>
      </>
  );
}
}
export default App;
