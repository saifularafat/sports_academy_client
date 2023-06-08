import { MdSportsScore } from "react-icons/md";
import Avatar from "./Avatar";
import { useState } from "react";
import { Link } from "react-router-dom";
import DarkLight from "./DarkLight";
import useAuth from "../../../component/useAuth";
import Swal from "sweetalert2";

const MenuDropDown = () => {
    const { user,logOut } = useAuth();
    const [isOpen, setIsOpen] = useState(false);

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
        <div className="flex md:flex-row flex-row-reverse items-center mr-6 md:mr-0">
            <DarkLight />
            <div className="relative">
                <div
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:border-b-2 rounded-full px-4 py-1 hover:border-green-300 border-white transition duration-200">
                    <div className="flex flex-row items-center cursor-pointer gap-1">
                        <MdSportsScore className="w-7 h-7 text-white hidden md:block hover:animate-spin" />
                        <Avatar />
                    </div>
                </div>

                {/* dashboard Menu */}
                {
                    isOpen && (
                        <div className='absolute rounded-b-xl shadow-md w-[40vw] md:w-[12vw] bg-white overflow-hidden md:right-0 left-0 md:top-[67px] top-16 md:text-lg text-lg'>
                            <div className='flex flex-col cursor-pointer'>

                                {user ? (
                                    <>
                                        <Link
                                            to='/dashboard'
                                            className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                        >
                                            Dashboard
                                        </Link>
                                        <div
                                            onClick={() => {
                                                // setRole(null)
                                                handlerLogOut()
                                            }}
                                            className='px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer'
                                        >
                                            Logout
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <Link
                                            to='/login'
                                            className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                        >
                                            Login
                                        </Link>
                                        <Link
                                            to='/signUp'
                                            className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                        >
                                            Sign Up
                                        </Link>
                                    </>
                                )}
                            </div>
                        </div>
                    )
                }
            </div>
        </div >
    );
};

export default MenuDropDown;