import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/v1/restaurant/';

class RestaurantService {
  createRestaurant(res_logo, res_name, res_location, res_map, start_hour, end_hour) {
    return axios.post(API_URL + `create`,{
      res_logo, 
      res_name, 
      res_map, 
      start_hour,
      end_hour
  }, { headers: authHeader() })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error('Error fetching restaurant:', error);
      throw error;
    });
  }
  getRestaurant(restaurantID) {
    return axios.get(API_URL + `${restaurantID}`, { headers: authHeader() })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error('Error fetching restaurant:', error);
      throw error;
    });
  }
  likeRestaurant(restaurantID) {
    return axios.post(API_URL + `${restaurantID}/like`, {}, { headers: authHeader() })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error('Error fetching restaurant:', error);
      throw error;
    });
  }
  getBestRestaurants() {
    return axios.get(API_URL + `best`, { headers: authHeader() })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error('Error fetching restaurant:', error);
      throw error;
    });
  }
  getRestaurants() {
    return axios.get(API_URL + `all`, { headers: authHeader() })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error('Error fetching restaurant:', error);
      throw error;
    });
  }
}

const restaurantServiceInstance = new RestaurantService();

export default restaurantServiceInstance;