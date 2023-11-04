import useAuth from './useAuth';
import avatar from './../assets/avater.png'
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { Gi3DMeeple } from 'react-icons/gi';
import { MdSportsEsports } from 'react-icons/md';
import { useAdmin, useInstructors } from '../api/useRoleDashboard';
const SideBerTop = () => {
    const { user } = useAuth()
    const [isAdmin] = useAdmin();
    const [isInstructors] = useInstructors();
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
                <h2 className="mt-1 text-lg font-semibold text-slate-100">{user?.displayName}</h2>
                <h2 className="text-sm text-slate-100 cursor-pointer hover:underline hover:text-slate-400 duration-200 transition-all pb-2">{user?.email}</h2>
                {
                    isAdmin ? <span className='text-sm bg-white/10 py-1 px-3 rounded-full text-slate-100 font-serif tracking-wide '>Admin</span> :
                        <>
                            {
                                isInstructors ? <span className='text-sm bg-white/10 py-1 px-3 rounded-full text-slate-100 font-serif tracking-wide'>Instructors</span> :
                                    <span className='text-sm bg-white/10 py-1 px-3 rounded-full text-slate-100 font-serif tracking-wide'>User</span>
                            }
                        </>
                }
            </div>
            <div className="flex items-center justify-center gap-x-4 border-b-2 border-main_color pb-5 pt-2">
                <Link
                    to='/'
                >
                    <div className="bg-main_color text-white p-2 hover:text-white/80 duration-200 transition-all rounded-full">
                        <AiFillHome className="w-5 h-5" />
                    </div>
                </Link>
                <Link
                    to='/trainers'
                >
                    <div className="bg-main_color text-white p-2 hover:text-white/80 duration-200 transition-all rounded-full">
                        <Gi3DMeeple className="w-5 h-5" />
                    </div>
                </Link>
                <Link
                    to='/classes'
                >
                    <div className="bg-main_color text-white p-2 hover:text-white/80 duration-200 transition-all rounded-full">                        <MdSportsEsports className="w-5 h-5" />
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default SideBerTop;