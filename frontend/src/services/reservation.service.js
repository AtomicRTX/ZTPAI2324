import axios from "axios";

import authHeader from '../services/auth-header';

const API_URL = "http://localhost:8080/api/v1/reservation/";

class ReservationService {
    makeReservation(user_id, restaurant_id, date, hour, number_of_people) {
        return axios.post(API_URL + "add", {
            user_id,
            restaurant_id,
            date,
            hour,
            number_of_people
        }, { headers: authHeader() });
    }
}

export default new ReservationService();