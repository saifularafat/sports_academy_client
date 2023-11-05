import { allUsers } from "../../../api/useUsers";
import Container from "../../../component/Container";
import SectionTitle from "../../../component/sectionTitle";
import Coach from "./Coach";

const PopularCoach = () => {
    const [users] = allUsers();
    const classTrainer = users.filter(
        (trainers) => trainers.role === "instructor"
    );
    return (
        <div>
            <SectionTitle
                name='Trainers'
                title='Popular Trainers'
                subTitle='Ultimately, our goal is to provide a comprehensive and unparalleled sports content experience that transcends the boundaries of traditional sports content experience that transcends the boundaries of traditional media'
            />
            <Container>
                <div className="grid md:grid-cols-3 grid-cols-1 gap-x-3 gap-y-8 mb-20">
                    {
                        classTrainer.slice(1, 7).map(persons => <Coach
                            key={persons._id}
                            person={persons}
                        ></Coach>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default PopularCoach;