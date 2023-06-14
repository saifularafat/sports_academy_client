import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../component/useAuth";
import Loading from "../component/Loading";
import useAdmin from "../api/useAdmin";

const AdminRouter = ({ children }) => {
    const { user,
        loading, } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation()

    if (loading || isAdminLoading) {
        return <Loading></Loading>
    }
    if (user && isAdmin) {
        return children;
    }
    return <Navigate
        to='/
        '
        state={{ from: location }}
        replace>
    </Navigate>
};

export default AdminRouter;