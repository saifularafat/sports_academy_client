
const DashSectionTitle = ({ name, title, subTitle, borderW }) => {
    return (
        <>
            <div className="py-0">
                <div
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1000"
                    className="flex items-center text-start">
                    <span className="p-[6px] rounded-full bg-primary"></span>
                    <p className="text-base font-medium pl-2">{name}</p>
                </div>
                <div
                    data-aos="flip-up"
                    data-aos-duration="1500"
                    className="flex flex-col items-center">
                    <div className={`${borderW} text-center mx-auto border-b-2 border-color-btn rounded-2xl pb-4`}>
                        <h3 className="text-3xl font-medium pb-1 uppercase">{title}</h3>
                        <p className="text-base font-normal md:mx-auto">{subTitle}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashSectionTitle;