import Swal from "sweetalert2";
import useAuth from "./useAuth";
import DarkLight from "../pages/Shares/NavBer/DarkLight";
import { FcSettings } from "react-icons/fc";
import { GrLogout } from "react-icons/gr";

const DashboardSideFooter = () => {
    const { logOut } = useAuth();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Your logOut success.!',
                    showConfirmButton: false,
                    timer: 1000
                })
            })
    }
    return (
        <div className="border-t-2 border-main_color pt-5">
            <button className="dark_btn">
                <DarkLight></DarkLight>
                <span className="text-lg font-medium md:ml-0 -ml-[90px]">DarkMode</span>
            </button>
            <button className="dark_btn">
                <FcSettings className='w-5 h-5' />
                <span className='mx-4 font-medium'>Setting</span>
            </button>
            <button
                onClick={handleLogOut}
                className='dash_btn'
            >
                <GrLogout className='w-5 h-5' />
                <span className='mx-4 font-medium'>Logout</span>
            </button>
        </div >
    );
};

export default DashboardSideFooter;