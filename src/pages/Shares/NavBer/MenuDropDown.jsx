import { FiMenu } from "react-icons/fi";
import Avatar from "./Avatar";
import { useState } from "react";
import { Link } from "react-router-dom";

const MenuDropDown = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            <div 
            onClick={() => setIsOpen(!isOpen)}
            className="md:border-b-2 rounded-full px-4 py-1 hover:border-green-300 border-white transition duration-200">
                <div className="flex flex-row items-center cursor-pointer">
                    <FiMenu className="w-5 h-5 text-white hidden md:block" />
                    <Avatar />
                </div>
            </div>

            {/* dashboard Menu */}
            {
                isOpen && (
                    <div className='absolute rounded-xl shadow-md w-[40vw] md:w-[12vw] bg-white overflow-hidden md:right-0 left-0 md:top-20 top-16 md:text-lg text-lg'>
                        <div className='flex flex-col cursor-pointer'>
                            
                            {/* {user ? ( */}
                            {/* <> */}
                            <Link
                                to='/dashboard'
                                className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                            >
                                Dashboard
                            </Link>
                            <div
                                // onClick={() => {
                                //     setRole(null)
                                //     handlerLogOut()
                                // }}
                                className='px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer'
                            >
                                Logout
                            </div>
                            {/* </> */}
                            {/* ) : ( */}
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
                            {/* )} */}
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default MenuDropDown;