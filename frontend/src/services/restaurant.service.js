import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/v1/restaurant/';

class RestaurantService {
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

}

export default new RestaurantService();