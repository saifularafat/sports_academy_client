import { Helmet } from "react-helmet-async";
import DashSectionTitle from "../../../../component/DashboardSectionTitle";
import { userEmailToPayment } from "../../../../api/usePayment";

const MyAdmission = () => {
    const [payments] = userEmailToPayment();
    console.log(payments);
    return (
        <div>
            <Helmet><title>SK Academy || My Enrol</title></Helmet>
            <DashSectionTitle
                name='Admission'
                title='My Admission'
                subTitle='Your sports All Admission Class!'
            />

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-lg">
                            <th>Class</th>
                            <th>InstructorEmail</th>
                            <th>amount</th>
                            <th>TransitionId</th>
                            <th>payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payments.map(pay => <tr key={pay?._id}>

                            <td>
                                <span className="text-base font-medium">{pay?.className}</span>
                            </td>
                            <td>
                                {pay?.instructorEmail}
                            </td>
                            <td>
                                ${pay?.price}
                            </td>
                            <td>
                                ${pay?.transactionId}
                            </td>
                            <td>
                                <p className=" text-sm text-green-500 bg-slate-200 text-center py-2 rounded-lg">confirm</p>
                            </td>
                        </tr>)}

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyAdmission;