import { Navigate, useLocation } from "react-router-dom";
import useInstructor from "../api/useInstructor";
import useAuth from "../component/useAuth";
import Loading from "../component/Loading";

const InstructorRouter = ({ children }) => {
    const { user, loading } = useAuth();
    const [isInstructor, isInstructorLoading] = useInstructor();
    const location = useLocation();
    if (loading || isInstructorLoading) {
        return <Loading />
    }
    if (user && isInstructor) {
        return children;
    }
    return <Navigate
        to='/login'
        state={{ from: location }}
        replace>
    </Navigate>
};

export default InstructorRouter;