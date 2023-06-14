import { popularSixClasses } from "../../../api/usePopularClass";
import Container from "../../../component/Container";
import SectionTitle from "../../../component/sectionTitle";
import Sports from "./Sports";

const PopularSports = () => {
    const [classes] = popularSixClasses()
    // console.log(classes);
    return (
        <div>
            <SectionTitle
                name='Sports'
                title='Popular Sports Category'
                subTitle='Ultimately, our goal is to provide a comprehensive and unparalleled sports content experience that transcends the boundaries of traditional mediaUltimately, our goal is to comprehensive and unparalleled sports content experience that transcends the boundaries of traditional media' />
            <Container>
                <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
                    {
                        classes.slice(0, 6).map(popular => <Sports
                            key={popular._id}
                            popular={popular}
                        ></Sports>)
                    }
                </div>
            </Container>

        </div>
    );
};

export default PopularSports;