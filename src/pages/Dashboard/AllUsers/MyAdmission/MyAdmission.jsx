import DashSectionTitle from "../../../../component/DashboardSectionTitle";

const MyAdmission = () => {
    return (
        <div>
            <DashSectionTitle
                name='Admission'
                title='My Admission'
                subTitle='Your sports All Admission Class!'
            />

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>image</th>
                            <th>Name</th>
                            <th>sport name</th>
                            <th>amount</th>
                            <th>payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <td>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </td>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                            </td>
                            <td>
                                Hare pater
                            </td>
                            <td>
                                Football
                            </td>
                            <td>$ 123 </td>
                            <td>
                                <p className=" text-sm text-green-500 bg-slate-200 text-center py-2 rounded-lg">confirm</p>
                            </td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyAdmission;