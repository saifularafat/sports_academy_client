import { Outlet } from "react-router-dom";

import SideBerTop from "../component/SideBerTop";
import IsUser from "../pages/Dashboard/SideBer/IsUser";
import DashboardSideFooter from "../component/DashboardSideFooter";
import IsAdmin from "../pages/Dashboard/SideBer/IsAdmin";
import IsInstructors from "../pages/Dashboard/SideBer/IsInstructors";
import { useAdmin, useInstructors } from "../api/useRoleDashboard";

const Dashboard = () => {
    // const isAdmin = true;
    const [isAdmin] = useAdmin();
    const [isInstructors] = useInstructors();
    return (
        <div className="max-w-7xl">
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content md:ml-6 ml-0 md:pt-12">
                    <label htmlFor="my-drawer-2" className="bg-main_color py-2 w-full text-right text-white text-2xl font-medium drawer-button lg:hidden">Dashboard</label>
                    {/* Page content here */}
                    <Outlet />

                </div>
                <div className="drawer-side ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-7 w-80 bg-green-500">
                        {/* Sidebar content here */}
                        <SideBerTop />
                        {
                            isAdmin ? <IsAdmin /> :
                                <>
                                    {
                                        isInstructors ? <IsInstructors /> : <IsUser />
                                    }
                                </>
                        }

                        {/* {
                            isInstructors && <IsInstructors />
                        } */}
                        {/* {
                            user?.role === 'Instructors ' ? 'IsInstructors ' : <IsUser />
                        } */}
                        {/* {
                            isAdmin ? <IsInstructors /> : <IsUser />
                        } */}
                        <DashboardSideFooter />
                    </ul>

                </div>
            </div>
        </div >
    );
};

export default Dashboard;