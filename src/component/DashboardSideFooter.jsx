import Swal from "sweetalert2";
import useAuth from "./useAuth";
import DarkLight from "../pages/Shares/NavBer/DarkLight";
import { FcSettings } from "react-icons/fc";
import { BiLogIn } from "react-icons/bi";

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
        <div className="border-t-2 border-main_color/60 shadow-sm rounded-xl pt-5">
            <button className="dark_btn">
                <DarkLight textW="w-6" textH="h-6" onColor="text-slate-300" offColor="text-slate-400" />
                <span className="text-lg font-medium md:ml-0 -ml-[90px] text-slate-400">DarkMode</span>
            </button>
            <button className="dark_btn">
                <FcSettings className='w-5 h-5 text-slate-300' />
                <span className='mx-4 font-medium text-slate-400'>Setting</span>
            </button>
            <button
                onClick={handleLogOut}
                className='dash_btn'
            >
                <BiLogIn className='w-6 h-6 text-slate-400' />
                <span className='mx-4 font-medium text-slate-400'>Logout</span>
            </button>
        </div >
    );
};

export default DashboardSideFooter;