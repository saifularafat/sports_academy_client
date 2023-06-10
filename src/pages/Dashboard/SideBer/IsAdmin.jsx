import { BsFillBookmarkPlusFill, BsFillCalendarEventFill } from "react-icons/bs";
import { SiKhanacademy } from "react-icons/si";
import { Link } from "react-router-dom";

const IsAdmin = () => {
    return (
        <ul className="md:mt-12 mt-6 md:pb-20">
        <li>
            <Link
                to='/dashboard/mySelected'
                className='dash_btn'
            >
                <BsFillBookmarkPlusFill className='w-5 h-5' />
                <span className='mx-4 font-medium'>Manage Sports</span>
            </Link>
        </li>
        <li>
            <Link
                to='/dashboard/myAdmission'
                className='dash_btn'
            >
                <SiKhanacademy className='w-5 h-5' />
                <span className='mx-4 font-medium'> Manage Users</span>
            </Link>

        </li>
        <li>
            <Link
                to='/dashboard/payment'
                className='dash_btn'
            >
                <BsFillCalendarEventFill className='w-5 h-5' />
                <span className='mx-4 font-medium'>Payment History</span>
            </Link>
        </li>
    </ul>
    );
};

export default IsAdmin;