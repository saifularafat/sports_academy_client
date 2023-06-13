import { Helmet } from "react-helmet-async";
import { useAllPayment } from "../../../api/usePayment";
import DashSectionTitle from "../../../component/DashboardSectionTitle";

const PaymentHistory = () => {
    const [payments] = useAllPayment();
    console.log(payments);
    return (
        <div>
            <Helmet>
                <title>SK Academy || Payment History</title>
            </Helmet>
            <DashSectionTitle
                name='Payment'
                title='Payment History'
                subTitle='All users added Sport and users Enrol the Sports Class!'
            />
            <div
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr className="text-center text-lg">
                            <th>Class</th>
                            <th>userEmail</th>
                            <th>Ins.email</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>transactionId</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payments.map((payment) => <tr key={payment._id}>

                            <td> <span>{payment?.className}</span></td>
                            <td> <span>{payment?.email}</span></td>
                            <td> <span>{payment?.instructorEmail}</span></td>
                            <td> <span>{payment?.price}</span></td>
                            <td> <span>{payment?.date}</span></td>
                            <td> <span>{payment?.transactionId}</span></td>
                        </tr>)}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;