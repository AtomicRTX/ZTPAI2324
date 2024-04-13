import './App.css';
import {Route, Routes} from "react-router-dom";
import HomePage from './pages/HomePage';
import ReservationPage from './pages/ReservationPage';
import ProfilePage from './pages/ProfilePage';
import RestaurantsPage from './pages/RestaurantsPage';
import WelcomePage from './pages/WelcomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
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
          </Routes>
      </>
  );
}

export default App;
