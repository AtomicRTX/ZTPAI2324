import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/auth/";

class AuthService {
  login(email, password) {
    return axios
      .post(API_URL + "authenticate", {
        email,
        password
      })
      .then(response => {
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(name, surname, email, password) {
    return axios.post(API_URL + "register", {
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