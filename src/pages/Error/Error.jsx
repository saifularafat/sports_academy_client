
import Lottie from "lottie-react";
import error from './../../assets/error/error.json'
import { Link } from "react-router-dom";
const Error = () => {
    return (
        <div className="bg-slate-200 ">
            <div className="max-w-6xl mx-auto">
                <Lottie
                    animationData={error}
                    loop={true}
                    className="md:h-[540px] h-[240px]"
                />
                <div>
                    <img src={error} alt="" />
                    <div className="flex items-center justify-center md:mt-3 mt-2 md:pb-7 pb-3">
                        <Link to='/'>
                            <button className="error_btn">Go Back</button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Error;