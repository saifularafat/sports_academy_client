import Container from "./Container";

const SectionTitle = ({ name, title, subTitle, borderW }) => {
    return (
        <Container>
            <div className="py-16">
                <div
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1000"
                    className="flex items-center text-start">
                    <span className="p-[6px] rounded-full bg-accent"></span>
                    <p className="text-base font-medium pl-1">{name}</p>
                </div>
                <div
                    data-aos="flip-up"
                    data-aos-duration="1500"
                    className="flex flex-col items-center">
                    <div className={`${borderW} text-center border-b-2 border-color-btn pb-4 rounded-lg`}>
                        <h3 className="md:text-3xl text-xl font-medium pb-1 uppercase">{title}</h3>
                        <p className="md:text-base text-sm font-normal md:mx-auto text-justify md:text-center">{subTitle}</p>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default SectionTitle;