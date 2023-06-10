import { Link } from "react-router-dom";
import useAuth from "../../../component/useAuth";
import avatar from './../../../assets/avater.png'
import { AiFillHome } from "react-icons/ai";
import { Gi3DMeeple } from "react-icons/gi";
import { MdSportsEsports } from "react-icons/md";
const InfoSideBer = () => {
    const { user } = useAuth()
    return (
        <div className="p-5 bg-gray-500 w-60 hidden md:block">
            <div className="pt-16">
                <div className="text-center">
                    {
                        user ? <img
                            src={user?.photoURL}
                            alt="profile"
                            className="w-28 h-28 mx-auto rounded-full border-2 border-main_color" />
                            :
                            <img
                                src={avatar}
                                alt="profile"
                                className="w-28 h-28 mx-auto rounded-full border-2 border-main_color" />
                    }
                    <h2 className="mt-2 text-lg font-medium text-slate-900">{user?.displayName}</h2>
                    {/* {
                        user?.role === 'Instructors ' ? <h2 className="text-sm text-slate-800 cursor-pointer">CEO </h2> : <h2 className="text-sm text-slate-800 cursor-pointer">{user?.email}</h2>
                    }
                    {
                        user?.role === 'Instructors ' ? <h2 className="text-sm text-slate-800 cursor-pointer">Instructors </h2> : <h2 className="text-sm text-slate-800 cursor-pointer">{user?.email}</h2>
                    } */}
                    <h2 className="text-sm text-slate-800 cursor-pointer">{user?.email}</h2>

                </div>

                <div className="mt-5">
                    <div className="flex items-center justify-center gap-x-4 border-b-2 border-main_color pb-7">
                        <Link
                            to='/'
                        >
                            <div className="bg-main_color text-white p-3 rounded-full">
                                <AiFillHome className="w-6 h-6" />
                            </div>
                        </Link>
                        <Link
                            to='/trainers'
                        >
                            <div className="bg-main_color text-white p-3 rounded-full">
                                <Gi3DMeeple className="w-6 h-6" />
                            </div>
                        </Link>
                        <Link
                            to='/sports'
                        >
                            <div className="bg-main_color text-white p-3 rounded-full">
                                <MdSportsEsports className="w-6 h-6" />
                            </div>
                        </Link>
                    </div>
                    <div className="mt-6">
                        <div className=" p-[6px] bg-main_color w-1 h-1  flex flex-row items-center">
                            <p className="ml-4">
                                About
                            </p>
                        </div>
                        <p className="mt-2 text-sm ml-3"> <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, numquam?</span></p>
                    </div>
                    <div className="mt-6 text-center">
                        <h2 className="text-xl bg-main_color rounded-xl py-5 text-white font-semibold">Ads</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoSideBer;