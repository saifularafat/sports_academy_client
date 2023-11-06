import { Helmet } from "react-helmet-async";
import TopCategory from "./TopCategory";

const AdminHome = () => {
    return (
        <div className="">
            <Helmet>
                <title>SK Academy || Dashboard Home</title>
            </Helmet>
            <div
                className="flex items-center text-start">
                <span className="p-[6px] rounded-full bg-primary"></span>
                <p className="text-base font-medium pl-2">Admin Home</p>
            </div>
            <div className="py-4">
                <TopCategory />
            </div>
        </div>
    );
};

export default AdminHome;