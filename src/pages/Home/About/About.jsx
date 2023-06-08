
import SectionTitle from "../../../component/sectionTitle";
import CEO from "./CEO";
import Sports from "./Sports";

const About = () => {
    return (
        <div className="mb-20 mt-10">
            <SectionTitle
                name='About'
                title='Academy Immersion'
                subTitle='World class academy coaches and player development team'
            />
            <Sports />
            <CEO />
        </div>
    );
};

export default About;