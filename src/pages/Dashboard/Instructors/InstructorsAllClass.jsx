import { Helmet } from "react-helmet-async";
import DashSectionTitle from "../../../component/DashboardSectionTitle";

const InstructorsAllClass = () => {
    return (
        <div>
            <Helmet><title>SK Academy || All Classes</title></Helmet>
            <DashSectionTitle
                name='Classes'
                title='My All Classes'
                subTitle='Your interested and health sporting game !'
            />
            <div className="overflow-x-auto">
                <table
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                    className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-xl text-center">
                            <th>Class Id</th>
                            <th>Sports</th>
                            <th>Status</th>
                            <th>Total Student</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr className="bg-base-200 text-lg text-center">
                            <th>1</th>
                            <td>cricket</td>
                            <td>Approved</td>
                            <td>12</td>
                            <td>Edit</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default InstructorsAllClass;