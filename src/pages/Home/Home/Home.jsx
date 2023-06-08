import About from "../About/About";
import Banner from "../Banner/Banner";
import PopularCoach from "../PopularCoach/PopularCoach";
import PopularSports from "../PopularSports/PopularSports";

const Home = () => {

    return (
        <div>
            <Banner />
            <About />
            <PopularSports />
            <PopularCoach />
        </div>
    );
};

export default Home;