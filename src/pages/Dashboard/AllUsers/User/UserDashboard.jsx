import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { activatesBarChart } from "../../../../component/AllChart"
import DashboardFooter from "../../DashboardFooter";

const UserDashboard = () => {
    const [bar] = useState(activatesBarChart)
    return (
        <div>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
                <div className="shadow-2xl rounded-md text-center p-4">
                    <h3 className="text-lg md:text-2xl font-semibold">Total Enroll</h3>
                    <p className="text-base md:text-lg font-bold">00</p>
                </div>
                <div className="shadow-2xl rounded-md text-center p-4">
                    <h3 className="text-lg md:text-2xl font-semibold">BookMark sports</h3>
                    <p className="text-base md:text-lg font-bold">00</p>
                </div>
                <div className="shadow-2xl rounded-md text-center p-4">
                    <h3 className="text-lg md:text-2xl font-semibold">Coach Name</h3>
                    <input className="text-base md:text-lg font-bold text-center bg-none" disabled placeholder="enroll coach name!" />
                </div>
            </div>
            <div className="shadow-2xl rounded-md text-center p-4 mt-5">
                <h3 className="text-left text-2xl font-semibold">Your Activates</h3>
                <ReactApexChart options={bar.options} series={bar.series} type="bar" height={300} width={"100%"} />
            </div>
            <div className="pt-9">
                <DashboardFooter />
            </div>
        </div>
    );
};

export default UserDashboard;