import { Link } from "react-router-dom";

const Button = ({ adders, label }) => {
    return (
        <Link to={adders}
            className="border-2 hidden md:block border-green-800 hover:border-color-btn text-xl font-mono font-medium rounded-xl py-2 px-5 relative md:inline-flex items-center justify-start overflow-hidden transition-all group">

            <span className="w-0 h-0 rounded bg-color-btn absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
            <span className="w-full text-green-800 transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                {label}
            </span>
        </Link>
    );
};

export default Button;