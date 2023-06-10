import DashSectionTitle from "../../../component/DashboardSectionTitle";

const ManageClasses = () => {
    return (
        <div>
            <DashSectionTitle
                name='Classes'
                title='Manage Classes'
                subTitle='All Instructors added by all Classes!'
            />
            <div
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-center text-lg">
                            <th>Image</th>
                            <th>Class Name</th>
                            <th>name</th>
                            <th>Available Seat</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr className="">
                            <td>
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                </div>
                            </td>
                            <td>
                                BasketBall,
                            </td>
                            <td><p> name <br /> <span>email</span></p></td>
                            <td>A.Seat</td>
                            <td>price</td>
                            <td className=" text-center">
                                <button className="btn btn-ghost btn-xs">Approved</button>
                                <button className="btn btn-ghost btn-xs">Pending</button> <br />
                                <button className="btn btn-ghost btn-xs">FeedBack</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageClasses;