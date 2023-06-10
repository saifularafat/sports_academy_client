import { BsFillBookmarkPlusFill } from "react-icons/bs";
import { SiKhanacademy } from "react-icons/si";
import { Link } from "react-router-dom";

const IsInstructors = () => {
    return (
        <ul className="md:mt-12 mt-6 md:pb-20">
            <li>
                <Link
                    to='/dashboard/mySelected'
                    className='dash_btn'
                >
                    <BsFillBookmarkPlusFill className='w-5 h-5' />
                    <span className='mx-4 font-medium'>My All Sports</span>
                </Link>
            </li>
            <li>
                <Link
                    to='/dashboard/myAdmission'
                    className='dash_btn'
                >
                    <SiKhanacademy className='w-5 h-5' />
                    <span className='mx-4 font-medium'> Add Sports</span>
                </Link>

            </li>
        </ul>
    );
};

export default IsInstructors;