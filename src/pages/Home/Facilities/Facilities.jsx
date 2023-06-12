import Container from "../../../component/Container";
import SectionTitle from "../../../component/sectionTitle";
import swimming from "../../../assets/Facilities/pool.jpeg";
import rest from "../../../assets/Facilities/rest.jpeg";
import gym from "../../../assets/Facilities/gym.jpeg";
import indoor from "../../../assets/Facilities/indoor.jpeg";
import food from "../../../assets/Facilities/food.jpeg";
import hospital from "../../../assets/Facilities/hospital.jpg";
import coach from "../../../assets/Facilities/coach.jpeg";
import field from "../../../assets/Facilities/field.jpg";
const Facilities = () => {
  return (
    <div className="py-16">
      <Container>
        <SectionTitle
          name="Facilities"
          title="Academy Facilities"
          subTitle="our goal is to provide a comprehensive and unparalleled sports content experience that transcends the boundaries of traditional sports content experience that transcends."
        />
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2000"
          className="grid md:grid-cols-4 grid-cols-2 gap-6 relative"
        >
          <div className="relative">
            <img src={swimming} alt="" className="h-44 w-full hover:scale-110 transition duration-200" />
            <h2 className="absolute text-slate-900 top-2 left-6 text-xl font-medium">
              Academy Swimming
            </h2>
          </div>
          <div className="relative">
            <img src={rest} alt="" className="h-44  w-full  hover:scale-110 transition duration-200" />
            <h2 className="absolute text-slate-900 top-2 left-6 text-xl font-medium">
              Academy Rest Room
            </h2>
          </div>
          <div className="relative">
            <img src={gym} alt="" className="h-44  w-full  hover:scale-110 transition duration-200" />
            <h2 className="absolute text-slate-900 top-2 left-6 text-xl font-medium">
              Academy Gym
            </h2>
          </div>
          <div className="relative">
            <img src={indoor} alt="" className="h-44  w-full  hover:scale-110 transition duration-200" />
            <h2 className="absolute text-slate-900 top-2 left-6 text-xl font-medium">
              Academy IndoorField
            </h2>
          </div>
          <div className="relative">
            <img src={food} alt="" className="h-44  w-full  hover:scale-110 transition duration-200" />
            <h2 className="absolute text-sky-400 top-0 left-6 text-xl font-medium">
              Academy Food
            </h2>
          </div>
          <div className="relative">
            <img src={hospital} alt="" className="h-44  w-full  hover:scale-110 transition duration-200" />
            <h2 className="absolute text-slate-900 top-2 left-6 text-xl font-medium">
              Academy Hospital
            </h2>
          </div>
          <div className="relative">
            <img src={coach} alt="" className="h-44  w-full  hover:scale-110 transition duration-200" />
            <h2 className="absolute text-slate-900 top-2 left-6 text-xl font-medium">
              Academy Coach
            </h2>
          </div>
          <div className="relative">
            <img src={field} alt="" className="h-44  w-full  hover:scale-110 transition duration-200" />
            <h2 className="absolute text-slate-900 top-2 left-6 text-xl font-medium">
              Academy Field Outdoor
            </h2>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Facilities;
