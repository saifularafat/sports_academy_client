import DashboardFooter from "../DashboardFooter";
import Marquee from "react-fast-marquee";
const InstructorHome = () => {
    return (
        <div>
            <Marquee pauseOnHover style={{ backgroundColor: 'black', color: "white", border: '2px', padding: "5px" }} >
                This winter enroll start now cricket, football, basketball, hockey, running, badminton, all these admissions are going on. Enroll your favorite sports, otherwise you won't get time to enroll.&nbsp; &nbsp;
            </Marquee>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-5 pt-5">
                <div className="shadow-2xl rounded-md text-center p-4">
                    <h3 className="text-lg md:text-2xl font-semibold">Total Enroll</h3>
                    <p className="text-base md:text-lg font-bold">10</p>
                </div>
                <div className="shadow-2xl rounded-md text-center p-4">
                    <h3 className="text-lg md:text-2xl font-semibold">Total Student</h3>
                    <p className="text-base md:text-lg font-bold">10</p>
                </div>
                <div className="shadow-2xl rounded-md text-center p-4">
                    <h3 className="text-lg md:text-2xl font-semibold">Sports Name</h3>
                    <input className="text-base md:text-lg font-bold text-center bg-none" disabled placeholder="your sports name!" />
                </div>
            </div>
            {/* <div className="shadow-2xl rounded-md text-center p-4 mt-5">
                <h3 className="text-left text-2xl font-semibold">Your Activates</h3>
                <ReactApexChart options={bar.options} series={bar.series} type="bar" height={300} width={"100%"} />
            </div> */}
            <div className="pt-8">
                <DashboardFooter />
            </div>
        </div>
    );
};

export default InstructorHome;