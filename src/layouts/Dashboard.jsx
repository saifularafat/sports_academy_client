import { Outlet } from "react-router-dom";

import useAuth from "../component/useAuth";
import SideBerTop from "../component/SideBerTop";
import IsUser from "../pages/Dashboard/SideBer/IsUser";
import DashboardSideFooter from "../component/DashboardSideFooter";
import IsAdmin from "../pages/Dashboard/SideBer/IsAdmin";
import IsInstructors from "../pages/Dashboard/SideBer/IsInstructors";

const Dashboard = () => {
    const { user } = useAuth();
    const isAdmin = true;
    // const [isAdmin] = useAdmin();
    return (
        <div className="max-w-7xl">
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content md:ml-10 ml-0 md:pt-12 pt-5">
                    <label htmlFor="my-drawer-2" className="bg-main_color py-2 w-full text-right text-white text-2xl font-medium drawer-button lg:hidden">+=</label>
                    {/* Page content here */}
                    <Outlet />

                </div>
                <div className="drawer-side ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-green-500 md:pt-6 pt-3">
                        {/* Sidebar content here */}
                        <SideBerTop />
                        {/* {
                            user?.role === 'IsAdmin' ? 'IsAdmin' : <IsUser />
                        }
                        {
                            user?.role === 'Instructors ' ? 'IsInstructors ' : <IsUser />
                        } */}
                        {
                            isAdmin ? <IsAdmin /> : <IsUser />
                        }
                        {/* <IsUser /> */}
                        <DashboardSideFooter />
                    </ul>

                </div>
            </div>
        </div>
    );




    // <div className="md:flex min-h-screen relative">
    //     <InfoSideBer />
    //     <div className=" flex-1">
    //         <div className="p-6">
    //             <Outlet />
    //         </div>
    //     </div>
    //     <SideBer />
    // </div>
    // );
};

export default Dashboard;