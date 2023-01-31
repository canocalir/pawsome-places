import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../services/firebaseConfig";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
    const [user] = useAuthState(auth)
    return user ? <Outlet/> : <Navigate to="login"/>
}

export default PrivateRoute