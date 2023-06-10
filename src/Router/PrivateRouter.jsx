import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../component/useAuth";

const PrivateRouter = ({ children }) => {
    const location = useLocation();
    const {
        user,
        loading,
    } = useAuth();

    if (loading) {
        return <p>Loading.....</p>
    }
    if (user) {
        return children
    }

    return <Navigate
        to='/login'
        state={{ from: location }}
        replace>
    </Navigate>
};

export default PrivateRouter;