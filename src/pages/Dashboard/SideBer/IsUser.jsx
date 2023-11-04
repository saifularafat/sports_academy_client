import { AiFillHome } from "react-icons/ai";
import { BsFillBookmarkPlusFill } from "react-icons/bs";
import { FaWallet } from "react-icons/fa";
import { Link } from "react-router-dom";

const IsUser = () => {
    return (
        <ul className="md:mt-7 mt-4 md:pb-10">
            <li>
                <Link
                    to='/dashboard/'
                    className='dash_btn'
                >
                    <AiFillHome className='w-5 h-5  text-slate-200' />
                    <span className='mx-4 font-medium  text-slate-300'>User Home</span>
                </Link>
            </li>
            <li>
                <Link
                    to='/dashboard/mySelected'
                    className='dash_btn'
                >
                    <BsFillBookmarkPlusFill className='w-5 h-5  text-slate-200' />
                    <span className='mx-4 font-medium  text-slate-300'>My Selected</span>
                </Link>
            </li>
            <li className="">
                <Link
                    to='/dashboard/myAdmission'
                    className='dash_btn'
                >
                    <FaWallet className='w-6 h-6  text-slate-200' />
                    <span className='mx-4 font-medium  text-slate-300'> My Enroll</span>
                </Link>
            </li>
        </ul>
    );
};

export default IsUser;