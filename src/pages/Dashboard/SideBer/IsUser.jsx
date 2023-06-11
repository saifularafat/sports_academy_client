import { BsFillBookmarkPlusFill } from "react-icons/bs";
import { SiKhanacademy } from "react-icons/si";
import { Link } from "react-router-dom";

const IsUser = () => {
    return (
        <ul className="md:mt-6 mt-4 md:pb-3">
            <li>
                <Link
                    to='/dashboard/mySelected'
                    className='dash_btn'
                >
                    <BsFillBookmarkPlusFill className='w-5 h-5' />
                    <span className='mx-4 font-medium'>My Selected</span>
                </Link>
            </li>
            <li>
                <Link
                    to='/dashboard/myAdmission'
                    className='dash_btn'
                >
                    <SiKhanacademy className='w-5 h-5' />
                    <span className='mx-4 font-medium'> My Enroll</span>
                </Link>
            </li>
        </ul>
    );
};

export default IsUser;