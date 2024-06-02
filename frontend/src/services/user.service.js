import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/v1/user/';

class UserService {
  getUser() {
    return axios.get(API_URL + 'current', { headers: authHeader() })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error('Error fetching user:', error);
      throw error;
    });
  }
  getAllUsers() {
    return axios.get(API_URL + 'all', { headers: authHeader() })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error('Error fetching user:', error);
      throw error;
    });
  }
  updateUser(name, surname, photo, phone){
    return axios.post(API_URL + 'edit', {
      name, 
      surname, 
      photo, 
      phone
  }, { headers: authHeader() })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error('Error fetching user:', error);
      throw error;
    });
  }
  isAdmin(){
    return axios.get(API_URL + 'admin', { headers: authHeader() })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error('Error fetching user:', error);
      throw error;
    });
  }
  deleteUser(user_id){
    return axios.delete(API_URL + 'delete', { data: {user_id: user_id}, headers: authHeader() })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error('Error fetching user:', error);
      throw error;
    });
  }
}

export default new UserService();
