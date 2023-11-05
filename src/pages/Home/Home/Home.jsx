import { Helmet } from "react-helmet-async";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Facilities from "../Facilities/Facilities";
import PopularCoach from "../PopularCoach/PopularCoach";
import PopularSports from "../PopularSports/PopularSports";

const Home = () => {

    return (
        <div>
            <Helmet>
                <title>SK Academy </title>
            </Helmet>
            <Banner />
            <About />
            <PopularSports />
            <PopularCoach />
            <Facilities />
        </div>
    );
};

export default Home;