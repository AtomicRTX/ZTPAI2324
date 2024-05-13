import { Outlet, Navigate } from "react-router-dom";
import AuthService from "../services/auth.service";

const Unlogged = () => {
    return !AuthService.getCurrentUser() ? <Outlet /> : <Navigate to="/homePage" replace/>;
};

export default Unlogged;