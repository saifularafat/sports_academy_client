import { Link } from "react-router-dom";

const Paragraph = ({ one, two, three, four, coachName, label, adders, colors, coachText, coachTextBar  }) => {

    return (
        <div className='text-white space-y-6 w-full relative left-24 md:left-3/4 items-center mt-16 '>
            <h2 className='banner'>
                {colors}
                <span className="">{one}</span> <br />
                <span className="md:pl-12">{two}</span><br />
                <span className="text-start uppercase">{three}</span><br />
                <span className="md:pl-12">{four}</span>
            </h2>
            <div className="md:flex items-center justify-center">
                <p className={`${coachText} coachName`} style={{ lineHeight: '20px' }}>{coachName}<br /> <span className={`${coachTextBar} text-lg font-normal`}>(Head Coach)</span></p>
                <Link to={adders}
                    className="border-2 hidden md:block border-green-800 hover:border-color-btn text-xl font-mono font-medium rounded-xl py-2 px-5 relative md:inline-flex items-center justify-start overflow-hidden transition-all group">

                    <span className="w-0 h-0 rounded bg-color-btn absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                    <span className="w-full text-white transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                        {label}
                    </span>
                </Link>
            </div>
        </div>

    );
};

export default Paragraph;