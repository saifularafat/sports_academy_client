import ReactApexChart from "react-apexcharts";
import { bookingBarChart, earningPieChart, sportStudentLineChart } from "../../../../component/AllChart";
import { useState } from "react";

const EnrollEarning = () => {
    const [line] = useState(sportStudentLineChart);
    const [bar] = useState(bookingBarChart);
    const [donut] = useState(earningPieChart)
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-secondary-content">
            <div className="shadow-2xl rounded-lg py-1 px-2 bg-neutral-focus">
                <h3 className="text-xl font-semibold">Sports</h3>
                <ReactApexChart options={line.options} series={line.series} type="line" width={"100%"} height={140} />
            </div>
            <div className="shadow-2xl rounded-lg py-1 px-2 bg-neutral-focus">
                <h3 className="text-xl font-semibold">Monthly Profit</h3>
                <ReactApexChart options={bar.options} series={bar.series} type="bar" width={"100%"} height={140} />
            </div>
            <div className="md:col-span-2 grid grid-cols-5 col-span-full shadow-2xl rounded-lg py-1 px-2 bg-neutral-focus">
                <div className="col-span-2">
                    <h3 className="md:text-xl text-sm font-semibold">Student Analytics</h3>
                    <div className="grid grid-cols-2 gap-1 pt-2">
                        <div className="flex items-center gap-2">
                            <span className="bg-[#58FFC5] md:w-3 md:h-3 w-2 h-2 rounded-full"></span>
                            <span className="md:text-base text-xs">Football</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="bg-[#58BDFF] md:w-3 md:h-3 w-2 h-2 rounded-full"></span>
                            <span className="md:text-base text-xs">Cricket</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="bg-[#FF788F] md:w-3 md:h-3 w-2 h-2 rounded-full"></span>
                            <span className="md:text-base text-xs">Hockey</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="bg-[#0068B9] md:w-3 md:h-3 w-2 h-2 rounded-full"></span>
                            <span className="md:text-base text-xs">Archer</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="bg-[#554298] md:w-3 md:h-3 w-2 h-2 rounded-full"></span>
                            <span className="md:text-base text-xs">Tennis</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="bg-[#BB800D] md:w-3 md:h-3 w-2 h-2 rounded-full"></span>
                            <span className="md:text-base text-xs">Baseball</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="bg-[#00A76D] md:w-3 md:h-3 w-2 h-2 rounded-full"></span>
                            <span className="md:text-base text-xs">Basketball</span>
                        </div>
                    </div>
                </div>
                <div className="col-span-3">
                    <ReactApexChart options={donut.options} series={donut.series} type="donut" height={200} />
                </div>
            </div>
        </div>
    );
};

export default EnrollEarning;