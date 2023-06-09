import { Outlet } from "react-router-dom";
import SideBer from "../pages/Dashboard/SideBer/SideBer";
import InfoSideBer from "../pages/Dashboard/InfoSideBer/InfoSideBer";

const Dashboard = () => {
    return (
        <div className="md:flex min-h-screen relative">
            <SideBer />
            <div className=" flex-1 md:ml-32">
                <div className="p-6">
                    <Outlet />
                </div>
            </div>
            <InfoSideBer />
        </div>
    );
};

export default Dashboard;