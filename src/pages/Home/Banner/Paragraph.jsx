import { Link } from "react-router-dom";
import Button from "../../../component/Button";

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
                <Button adders={adders} label={label} />
            </div>
        </div>

    );
};

export default Paragraph;