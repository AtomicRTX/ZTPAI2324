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

    getActualReservations() {
        return axios.get(API_URL + 'actual', { headers: authHeader() })
            .then(response => {
                return response.data;
        })
    }

    getPastReservations() {
            return axios.get(API_URL + 'past', { headers: authHeader() })
                .then(response => {
                    return response.data;
            })
        }
}

export default new ReservationService();