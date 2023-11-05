import { AiFillHome } from "react-icons/ai";
import { GiTransportationRings } from "react-icons/gi";
import { MdSportsVolleyball } from "react-icons/md";
import { Link } from "react-router-dom";

const IsInstructors = () => {
    return (
        <ul className="md:mt-6 mt-6 md:pb-6">
            <li>
                <Link
                    to='/dashboard/instructorHome'
                    className='dash_btn'
                >
                    <AiFillHome className='w-6 h-6  text-slate-200' />
                    <span className='mx-4 font-medium  text-slate-300'>Home</span>
                </Link>
            </li>
            <li>
                <Link
                    to='/dashboard/instructorsAllClass'
                    className='dash_btn'
                >
                    <GiTransportationRings className='w-6 h-6  text-slate-200' />
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