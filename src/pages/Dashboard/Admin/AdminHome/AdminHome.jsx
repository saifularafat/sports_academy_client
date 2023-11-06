import { Helmet } from "react-helmet-async";
import TopCategory from "./TopCategory";
import EnrollEarning from "./EnrollEarning";
import Table from "./Table";

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
            <div className="py-5">
                <EnrollEarning />
            </div>
            <div className="rounded-lg shadow-lg overflow-x-scroll">
                <Table />
            </div>
        </div>
    );
};

export default AdminHome;