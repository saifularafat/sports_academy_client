import ReactApexChart from "react-apexcharts";
import DashboardFooter from "../DashboardFooter";
import Marquee from "react-fast-marquee";
import { useState } from "react";
import { classActivateChart } from "../../../component/AllChart";
const InstructorHome = () => {
    const [bar] = useState(classActivateChart)
    return (
        <div>
            <Marquee pauseOnHover style={{ backgroundColor: 'black', color: "white", border: '2px', padding: "5px" }} >
                This winter enroll start now cricket, football, basketball, hockey, running, badminton, all these admissions are going on.
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-5">
                <div className="col-span-2 shadow-2xl rounded-xl">
                    <ReactApexChart options={bar.options} series={bar.series} type="bar"/>
                </div>
                <div className="shadow-2xl rounded-xl px-3 space-y-5 py-2 text-center md:text-left">
                    <h2 className="text-center text-xl font-semibold pt-3">Class Time </h2>
                    <p className="md:text-sm text-xs font-normal"><span className="md:text-lg text-base font-medium">Saturday</span> - 02:30 PM - 5:30 Pm</p>
                    <p className="md:text-sm text-xs font-normal"><span className="md:text-lg text-base font-medium">Sunday</span> - 08:30 AM - 1:00 Pm</p>
                    <p className="md:text-sm text-xs font-normal"><span className="md:text-lg text-base font-medium">Monday</span> - 09:00 AM - 12:30 Pm</p>
                    <p className="md:text-sm text-xs font-normal"><span className="md:text-lg text-base font-medium">Tuesday</span> - 11:00 AM - 3:30 Pm</p>
                    <p className="md:text-sm text-xs font-normal"><span className="md:text-lg text-base font-medium">Wednesday</span> - 08:30 AM - 1:00 Pm</p>
                    <p className="md:text-sm text-xs font-normal"><span className="md:text-lg text-base font-medium">Thursday</span> - 01:30 PM - 4:30 Pm</p>
                    <p className="md:text-sm text-xs font-normal"><span className="md:text-lg text-base font-medium">Friday</span> - 09:00 AM - 12:00 Pm</p>
                </div>
            </div>
            <div className="pt-2">
                <DashboardFooter />
            </div>
        </div>
    );
};

export default InstructorHome;