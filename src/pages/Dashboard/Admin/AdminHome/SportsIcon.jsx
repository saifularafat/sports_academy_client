
const SportsIcon = ({ Icons, bgIcon, textColor }) => {
    return (
        <div className="">
            <span className={`${bgIcon} ${textColor} w-10 h-10 p-1 flex justify-center items-center rounded-lg`}><Icons className='w-8 h-8'/></span>
        </div>
    );
};

export default SportsIcon;