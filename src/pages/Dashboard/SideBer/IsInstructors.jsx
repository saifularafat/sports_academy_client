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
                    <FaReplyAll className='w-6 h-6' />
                    <span className='mx-4 font-medium'>My All Sports</span>
                </Link>
            </li>
            <li>
                <Link
                    to='/dashboard/addSports'
                    className='dash_btn'
                >
                    <MdSportsVolleyball className='w-6 h-6' />
                    <span className='mx-4 font-medium'> Add Sports</span>
                </Link>

            </li>
        </ul>
    );
};

export default IsInstructors;