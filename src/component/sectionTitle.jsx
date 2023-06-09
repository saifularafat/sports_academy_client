import Container from "./Container";

const SectionTitle = ({ name, title, subTitle }) => {
    return (
        <Container>
            <div className="py-16">
                <div
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1000"
                    className="flex items-center text-start">
                    <span className="p-[6px] rounded-full bg-main_color"></span>
                    <p className="text-base font-medium text-main_color pl-1">{name}</p>
                </div>
                <div
                    data-aos="flip-up"
                    data-aos-duration="1500"
                    className="flex flex-col items-center">
                    <div className="text-center border-b-2 border-color-btn pb-4">
                        <h3 className="text-3xl font-medium text-main_color pb-1 uppercase">{title}</h3>
                        <p className="text-base font-normal text-green-700 md:w-[620px] md:mx-auto">{subTitle}</p>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default SectionTitle;