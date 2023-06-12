import { Helmet } from "react-helmet-async";
import { allUsers } from "../../api/useUsers";
import Container from "../../component/Container";
import banner from "./../../assets/slider/bg.png";
import TrainerInstructor from "./TrainerInstructor";
import SectionTitle from "../../component/sectionTitle";
const Trainers = () => {
  const [users] = allUsers();
  //   console.log(users);
  const classTrainer = users.filter(
    (trainers) => trainers.role === "instructor"
  );
  return (
    <div className="">
      <div
        style={{
          backgroundImage: `url(${banner})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "70vh",
          width: "100",
        }}
        className="bg-white"
      ></div>
      <div className="py-16">
        <Container>
          <Helmet>
            <title>SK Academy || Trainers </title>
          </Helmet>
          <SectionTitle
            name="Trainers"
            title="All Trainers"
            subTitle="sk academy all class wonderful class"
          />
          <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
            {classTrainer.map((trainer) => (
              <TrainerInstructor
                key={trainer._id}
                trainer={trainer}
              ></TrainerInstructor>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Trainers;
