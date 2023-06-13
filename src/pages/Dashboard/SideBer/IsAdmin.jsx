import { BsFillBookmarkPlusFill, BsFillCalendarEventFill } from "react-icons/bs";
import { SiKhanacademy } from "react-icons/si";
import { Link } from "react-router-dom";

const IsAdmin = () => {
    return (
        <ul className="md:mt-8 mt-4 pb-7">
            <li>
                <Link
                    to='/dashboard/manageClasses'
                    className='dash_btn'
                >
                    <BsFillBookmarkPlusFill className='w-5 h-5' />
                    <span className='mx-4 font-medium'>Manage Classes</span>
                </Link>
            </li>
            <li>
                <Link
                    to='/dashboard/manageAllUsers'
                    className='dash_btn'
                >
                    <SiKhanacademy className='w-5 h-5' />
                    <span className='mx-4 font-medium'> Manage Users</span>
                </Link>

            </li>
            <li>
                <Link
                    to='/dashboard/paymentHistory'
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