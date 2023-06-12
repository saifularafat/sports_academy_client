import { Helmet } from "react-helmet-async";
import Container from "../../component/Container";
import banner from "./../../assets/slider/bg.png";
import SectionTitle from "../../component/sectionTitle";
import { useAllClasses } from "../../api/useClasses";
import Sport from "./Sport";

const Classes = () => {
  const [Classes, refetch] = useAllClasses();
  const approvedClass = Classes.filter(
    (approved) => approved.status === "Approved"
  );
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${banner})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "60vh",
          width: "100",
        }}
        className="bg-green-300"
      ></div>
      <div className="mb-10">
        <Container>
          <Helmet>
            <title>SK Academy || Classes</title>
          </Helmet>
          <SectionTitle
            name="Classes"
            title="All Classes"
            subTitle="sk academy all class wonderful class"
          />
          <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
            {approvedClass.map((approvedSports) => (
              <Sport
                key={approvedSports._id}
                approvedSports={approvedSports}
                refetch={refetch}
              ></Sport>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Classes;
