import DashSectionTitle from "../../../component/DashboardSectionTitle";

const ManageAllUser = () => {
    return (
        <div>
            <DashSectionTitle
                name='Admin'
                title='Manage All Users'
                subTitle='Site all Users and Position!'
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
                            <th>
                                ##
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr className="">
                            <th>
                                1
                            </th>
                            <td>
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                </div>
                            </td>
                            <td>
                                Zemlak, Daniel and Leannon
                            </td>
                            <td>Purple</td>
                            <td className="flex items-center gap-3">
                                <button className="btn btn-ghost btn-xs">MAke Instructor</button>
                                <button className="btn btn-ghost btn-xs">MAke Admin</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllUser;