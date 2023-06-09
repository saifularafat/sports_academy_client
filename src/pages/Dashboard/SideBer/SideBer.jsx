import { MdDashboardCustomize } from "react-icons/md";
import { GrLogout } from "react-icons/gr";
import useAuth from "../../../component/useAuth";
import Swal from "sweetalert2";
import { Link, NavLink } from "react-router-dom";
import { FcSettings } from "react-icons/fc";
import DarkLight from "../../Shares/NavBer/DarkLight";
const SideBer = () => {
    const { user, logOut } = useAuth();
    console.log(user);
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
        <div className="bg-slate-300 md:w-56 ">
            <div className="">
                <div className="md:mt-3 p-[10px] bg-green-200">
                    <h2 className=" text-slate-800 flex items-center gap-3 md:pl-3">
                        <Link to='/'>
                            <MdDashboardCustomize className="w-5 h-5" />
                        </Link>
                        <span className="md:text-2xl text-xl font-medium"> Dashboard</span>
                    </h2>
                </div>
            </div>
            <div className="md:hidden block pt-5 pb-2 bg-orange-300">
                <div className="text-center">
                    <img src={user?.photoURL} alt="profile" className="w-12 h-12 mx-auto rounded-full" />
                    <div className="">
                        <p className="text-base font-mono font-semibold">{user?.displayName}</p>
                        <p>{user?.email}</p>
                    </div>
                </div>
            </div>

            {/* dashboard */}
            <div className="md:mt-12 mt-6 md:pb-20">
                <NavLink
                    to='/'
                    className='dash_btn'
                >
                    <GrLogout className='w-5 h-5' />
                    <span className='mx-4 font-medium'>All Select</span>
                </NavLink>
                <NavLink
                    to='/'
                    className='dash_btn'
                >
                    <GrLogout className='w-5 h-5' />
                    <span className='mx-4 font-medium'>Admission</span>
                </NavLink>
                <NavLink
                    to='/'
                    className='dash_btn'
                >
                    <GrLogout className='w-5 h-5' />
                    <span className='mx-4 font-medium'>Payment</span>
                </NavLink>
            </div>

            {/* Dashboard Bottom section */}
            <div className="mt-6">
                <div className="border-t-2 border-main_color pt-5">
                    <button className="dark_btn">
                        <DarkLight></DarkLight>
                        <span className="text-lg font-medium md:ml-0 -ml-[90px]">DarkMode</span>
                    </button>

                    <NavLink
                        // to='/dashboard/profile'
                        className={({ isActive }) =>
                            `dash_btn  ${isActive ? '' : ''
                            }`
                        }
                    >
                        <FcSettings className='w-5 h-5' />
                        <span className='mx-4 font-medium'>Setting</span>
                    </NavLink>
                    <button
                        onClick={handleLogOut}
                        className='dash_btn'
                    >
                        <GrLogout className='w-5 h-5' />

                        <span className='mx-4 font-medium'>Logout</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SideBer;