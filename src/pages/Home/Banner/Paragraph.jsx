import { Link } from "react-router-dom";
import Button from "../../../component/Button";

const Paragraph = ({ one, two, three, four, oneColor, twoColor, threeColor, fourColor, coachName, label, adders, colors, coachText, coachTextBar, btnTextColor, btnBorderColor  }) => {

    return (
        <div className='space-y-6 w-full relative left-24 md:left-3/4 items-center mt-16 '>
            <h2 className='banner'>
                {colors}
                <span className={`${oneColor}`}>{one}</span> <br />
                <span className={`${twoColor} md:pl-12`}>{two}</span><br />
                <span className={`${threeColor} text-start uppercase`}>{three}</span><br />
                <span className={`${fourColor} md:pl-12`}>{four}</span>
            </h2>
            <div className="md:flex items-center justify-center">
                <p className={`${coachText} coachName`} style={{ lineHeight: '20px' }}>{coachName}<br /> <span className={`${coachTextBar} text-lg font-normal`}>(Head Coach)</span></p>
                <Button adders={adders} label={label} btnBorderColor={btnBorderColor} btnTextColor={btnTextColor} />
            </div>
        </div>

    );
};

export default Paragraph;