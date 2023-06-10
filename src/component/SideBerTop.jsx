import useAuth from './useAuth';
import avatar from './../assets/avater.png'
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { Gi3DMeeple } from 'react-icons/gi';
import { MdSportsEsports } from 'react-icons/md';
const SideBerTop = () => {
    const { user } = useAuth()
    return (
        <div>
            <div className="text-center">
                {
                    user ? <img
                        src={user?.photoURL}
                        alt="profile"
                        className="w-20 h-20 mx-auto rounded-full border-2 border-main_color" />
                        :
                        <img
                            src={avatar}
                            alt="profile"
                            className="w-20 h-20 mx-auto rounded-full border-2 border-main_color" />
                }
                <h2 className="mt-1 text-lg font-medium text-slate-900">{user?.displayName}</h2>
                {/* {
            user?.role === 'Instructors ' ? <h2 className="text-sm text-slate-800 cursor-pointer">CEO </h2> : <h2 className="text-sm text-slate-800 cursor-pointer">{user?.email}</h2>
            }
             {
            user?.role === 'Instructors ' ? <h2 className="text-sm text-slate-800 cursor-pointer">Instructors </h2> : <h2 className="text-sm text-slate-800 cursor-pointer">{user?.email}</h2>
             } */}
                <h2 className="text-sm text-slate-800 cursor-pointer">{user?.email}</h2>
            </div>
            <div className="flex items-center justify-center gap-x-4 border-b-2 border-main_color pb-5 pt-2">
                <Link
                    to='/'
                >
                    <div className="bg-main_color text-white p-2 rounded-full">
                        <AiFillHome className="w-5 h-5" />
                    </div>
                </Link>
                <Link
                    to='/trainers'
                >
                    <div className="bg-main_color text-white p-2 rounded-full">
                        <Gi3DMeeple className="w-5 h-5" />
                    </div>
                </Link>
                <Link
                    to='/sports'
                >
                    <div className="bg-main_color text-white p-2 rounded-full">
                        <MdSportsEsports className="w-5 h-5" />
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default SideBerTop;