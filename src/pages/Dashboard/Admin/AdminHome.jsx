import { Helmet } from "react-helmet-async";

const AdminHome = () => {
    return (
        <div>
            <Helmet>
                <title>SK Academy || Dashboard Home</title>
            </Helmet>
            <div
                className="flex items-center text-start">
                <span className="p-[6px] rounded-full bg-primary"></span>
                <p className="text-base font-medium pl-2">Admin Home</p>
            </div>
        </div>
    );
};

export default AdminHome;