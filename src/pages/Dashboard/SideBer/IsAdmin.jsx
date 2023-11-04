import { AiFillHome } from "react-icons/ai";
import { BsFillBookmarkPlusFill, BsFillCalendarEventFill } from "react-icons/bs";
import { SiKhanacademy } from "react-icons/si";
import { Link } from "react-router-dom";

const IsAdmin = () => {
    return (
        <ul className="md:mt-3 mt-4 pb-2 shadow-md rounded-lg">
            <li>
                <Link
                    to='/dashboard'
                    className='dash_btn'
                >
                    <AiFillHome className='w-5 h-5 text-slate-200' />
                    <span className='mx-4 font-medium text-slate-300'>Manage Classes</span>
                </Link>
            </li>
            <li>
                <Link
                    to='/dashboard/manageClasses'
                    className='dash_btn'
                >
                    <BsFillBookmarkPlusFill className='w-5 h-5 text-slate-200' />
                    <span className='mx-4 font-medium text-slate-300'>Manage Classes</span>
                </Link>
            </li>
            <li>
                <Link
                    to='/dashboard/manageAllUsers'
                    className='dash_btn'
                >
                    <SiKhanacademy className='w-5 h-5 text-slate-200' />
                    <span className='mx-4 font-medium text-slate-300'> Manage Users</span>
                </Link>

            </li>
            <li>
                <Link
                    to='/dashboard/paymentHistory'
                    className='dash_btn'
                >
                    <BsFillCalendarEventFill className='w-5 h-5 text-slate-200' />
                    <span className='mx-4 font-medium text-slate-300'>Payment History</span>
                </Link>
            </li>
        </ul>
    );
};

export default IsAdmin;