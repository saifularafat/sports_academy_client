
import SectionTitle from "../../../component/sectionTitle";
import CEO from "./CEO";
import Sports from "./Sports";

const About = () => {
    return (
        <div className="md:mb-20 mb-4 mt-10">
            <SectionTitle
                name='About'
                borderW='w-2/4'
                title='Academy Immersion'
                subTitle='World class academy coaches and player development team of traditional media'
            />
            <Sports />
            <CEO />
        </div>
    );
};

export default About;