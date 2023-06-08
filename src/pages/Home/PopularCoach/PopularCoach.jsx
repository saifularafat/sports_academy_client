// import { useAllCoach } from "../../../api/useCoach";
import Container from "../../../component/Container";
import SectionTitle from "../../../component/sectionTitle";

const PopularCoach = () => {
    // const [ coach ] = useAllCoach();
    return (
        <div>
            <SectionTitle
                name='Coach'
                title='Popular Coach'
                subTitle='Ultimately, our goal is to provide a comprehensive and unparalleled sports content experience that transcends the boundaries of traditional mediaUltimately, our goal is to comprehensive and unparalleled sports content experience that transcends the boundaries of traditional media'
            />
            <Container>
                <div className="grid md:grid-cols-3  grid-cols-1 gap-5">
                    {/* {
                        coach.map(person => <p
                        key={person._id}
                        >{parent.length}</p>)
                    } */}
                </div>
            </Container>
        </div>
    );
};

export default PopularCoach;