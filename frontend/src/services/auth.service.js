import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/v1/";

class AuthService {
  login(email, password) {
    return axios
      .post(API_URL + "authenticate", {
        email,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  //logout() {
  //  localStorage.removeItem("user");
  //}

  register(name, surname, email, password) {
    return axios.post(API_URL + "signup", {
      name,
      surname,
      email,
      password
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();