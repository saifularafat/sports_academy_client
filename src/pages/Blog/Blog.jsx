import { Helmet } from "react-helmet-async";
import SectionTitle from "../../component/sectionTitle";
import Container from "../../component/Container";
import banner from '../../assets/Facilities/field.jpeg'
const Blog = () => {
    return (
        <div>
            <div
                style={{
                    backgroundImage: `url(${banner})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    height: "70vh",
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
                        name="Blog"
                        title="Academy Blog"
                        subTitle="sk academy all class wonderful class"
                    />
                    <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
                        <div
                            data-aos="zoom-in"
                            data-aos-duration="1500"
                            className="card md:w-96 bg-base-100 shadow-xl">
                            <figure>
                                <img src="https://i.ibb.co/QbhXGHQ/football-champion.jpg" alt="Champion" className="h-56 w-full" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    SK Academy Hosts On Campus 2023 Academic College Fair
                                </h2>
                                <p>Choose a specific sports niche: Determine which sport or sports you want to focus on in your blog. It could be a general sports blog or one that specializes in a particular sport, league, or championship.?</p>

                            </div>
                        </div>
                        <div
                            data-aos="zoom-in-up"
                            data-aos-duration="1500"
                            className="card md:w-96 bg-base-100 shadow-xl">
                            <figure>
                                <img src="https://i.ibb.co/k2Rjpmm/champion-3.jpg" alt="Champion" className="h-56 w-full" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    Celebrating 2023 National Girls & Women in Sports Day.
                                </h2>
                                <p>Define your target audience: Identify the type of audience you want to attract with your blog. Are you targeting casual sports fans, hardcore enthusiasts, or a specific demographic?</p>

                            </div>
                        </div>
                        <div
                            data-aos="zoom-in"
                            data-aos-duration="1500"
                            className="card md:w-96 bg-base-100 shadow-xl">
                            <figure>
                                <img src="https://i.ibb.co/QbDQzNS/champion-5.jpg" alt="Champion" className="h-56 w-full" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    Celebrating 2023 National Girls & Women in Sports Day.
                                </h2>
                                <p>Define your target audience: Identify the type of audience you want to attract with your blog. Are you targeting casual sports fans, hardcore enthusiasts, or a specific demographic?</p>

                            </div>
                        </div>
                        <div
                            data-aos="zoom-in-up"
                            data-aos-duration="1500"
                            className="card md:w-96 bg-base-100 shadow-xl">
                            <figure>
                                <img src="https://i.ibb.co/W57FQ8B/rackbe-champion.jpg" alt="Champion" className="h-56 w-full" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    SK Academy Discusses Athlete Wellness with Muscle & Fitness
                                </h2>
                                <p>Define your target audience: Identify the type of audience you want to attract with your blog. Are you targeting casual sports fans, hardcore enthusiasts, or a specific demographic?</p>

                            </div>
                        </div>
                        <div
                            data-aos="zoom-in" data-aos-duration="1500"
                            className="card md:w-96 bg-base-100 shadow-xl">
                            <figure>
                                <img src="https://i.ibb.co/Kmc4k9V/champion-4.jpg" alt="Champion" className="h-56 w-full" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    Academy Announces 2022 Inaugural Women In Sports Committee Scholarship Class.
                                </h2>
                                <p>Define your target audience: Identify the type of audience you want to attract with your blog. Are you targeting casual sports fans, hardcore enthusiasts, or a specific demographic?</p>

                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Blog;