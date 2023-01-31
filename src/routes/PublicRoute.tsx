import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../services/firebaseConfig";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = () => {
    const [user] = useAuthState(auth)
    return user ? <Navigate to="/"/> : <Outlet/>
}

export default PublicRoute