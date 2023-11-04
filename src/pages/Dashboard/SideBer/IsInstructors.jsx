import { FaReplyAll } from "react-icons/fa";
import { MdSportsVolleyball } from "react-icons/md";
import { Link } from "react-router-dom";

const IsInstructors = () => {
    return (
        <ul className="md:mt-12 mt-6 md:pb-16">
            <li>
                <Link
                    to='/dashboard/instructorsAllClass'
                    className='dash_btn'
                >
                    <FaReplyAll className='w-6 h-6  text-slate-200' />
                    <span className='mx-4 font-medium  text-slate-300'>My All Sports</span>
                </Link>
            </li>
            <li>
                <Link
                    to='/dashboard/addSports'
                    className='dash_btn'
                >
                    <MdSportsVolleyball className='w-6 h-6  text-slate-200' />
                    <span className='mx-4 font-medium text-slate-300'> Add Sports</span>
                </Link>

            </li>
        </ul>
    );
};

export default IsInstructors;