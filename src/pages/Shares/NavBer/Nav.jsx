import { NavLink } from "react-router-dom";
import Profile from "./Profile";
import useAuth from "../../../component/useAuth";
import Swal from "sweetalert2";
import DarkLight from "./DarkLight";
import useAdmin from "../../../api/useAdmin";
import useInstructor from "../../../api/useInstructor";

const Nav = () => {
    const { user, logOut } = useAuth();
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();

    // const admin = users.filter(
    //     (admin) => admin.role === "admin"
    // );
    // const instructor = users.filter(
    //     (trainers) => trainers.role === "instructor"
    // );
    // const student = users.filter(
    //     (student) => student.role === "student"
    // );
    // console.log(instructor, 'This ', admin, "Aaaaaaa", student)

    const handlerLogOut = () => {
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
        <nav>
            <ul className="md:flex items-center gap-x-2 text-white hidden">
                <li>
                    <NavLink to='/'
                        className={({ isActive }) => (isActive ? 'active' : 'default')}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/trainers'
                        className={({ isActive }) => (isActive ? 'active' : 'default')}
                    >
                        TRAINERS
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/classes'
                        className={({ isActive }) => (isActive ? 'active' : 'default')}
                    >
                        Classes
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/blog'
                        className={({ isActive }) => (isActive ? 'active' : 'default')}
                    >
                        Blog
                    </NavLink>
                </li>
                {
                    user && (
                        <li className="">
                            {
                                isAdmin ?
                                    <NavLink to='/dashboard/adminHome'
                                        className={({ isActive }) => (isActive ? 'active' : 'default')}
                                    >
                                        Dashboard
                                    </NavLink>
                                    :
                                    isInstructor ?
                                        <NavLink to='/dashboard/instructorHome'
                                            className={({ isActive }) => (isActive ? 'active' : 'default')}
                                        >
                                            Dashboard
                                        </NavLink>
                                        : <NavLink to='/dashboard/studentHome'
                                            className={({ isActive }) => (isActive ? 'active' : 'default')}
                                        >
                                            Dashboard
                                        </NavLink>
                            }

                        </li>
                    )
                }

                {/* dark  and light mode*/}
                <div className="">
                    <DarkLight textW="w-8" textH="h-8" onColor="text-white/50" offColor=" text-slate-200" />
                </div>
                {
                    user ?
                        <span className="flex items-center gap-x-2">
                            <button
                                className='bg-white/30 text-white shadow-slate-500 shadow-2xl py-2 px-4 text-base font-medium uppercase rounded-lg tracking-wide hover:bg-white/20 hover:text-white duration-200 transition-all'
                                onClick={handlerLogOut}>
                                Log Out
                            </button>
                            <span className=' '>
                                <Profile />
                            </span>
                        </span>
                        :
                        <div className='flex items-center gap-x-2'>
                            <NavLink
                                to='login'
                                className='bg-white/30 text-white shadow-slate-500 shadow-2xl py-2 px-4 text-base font-medium uppercase rounded-lg tracking-wide hover:bg-white/20 hover:text-white duration-200 transition-all'>
                                Login
                            </NavLink>
                            <Profile />
                        </div>
                }
            </ul>
        </nav>
    );
};

export default Nav;