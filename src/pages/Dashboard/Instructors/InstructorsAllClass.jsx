import { Helmet } from "react-helmet-async";
import DashSectionTitle from "../../../component/DashboardSectionTitle";
import { instructorsFetch } from "../../../api/useClasses";
import { Link } from "react-router-dom";

const InstructorsAllClass = () => {
    const [instructor, refetch] = instructorsFetch();
    console.log(instructor);
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
                            <th>Image</th>
                            <th>Sports</th>
                            <th>Status</th>
                            <th>Total Student</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {instructor.map(item => <tr
                            key={item._id}
                            className="bg-base-200 text-lg text-center">
                            <td>
                                <div className="mask mask-squircle w-20 h-16">
                                    <img src={item?.image} alt="Avatar Tailwind CSS Component" className="w-full" />
                                </div>
                            </td>
                            <td>{item?.sportsName}</td>
                            <td>{item?.status}</td>
                            <td>{item?.seat}</td>
                            <td>
                            <Link to={`/Edit/${item?._id}`}>
                                    <button>
                                        Edit
                                    </button>
                                </Link>
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default InstructorsAllClass;