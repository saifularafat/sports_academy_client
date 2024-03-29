
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CheckOutFrom from "./CheckoutForm ";
import { Helmet } from "react-helmet-async";
import DashSectionTitle from "../../../../component/DashboardSectionTitle";

pay
const Payment = () => {
    const { id } = useParams();
    const [payment, setPayment] = useState({});
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/singleBookMarks/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setPayment(data);
            });
    }, [id]);
    return (
        <>
            <Helmet>
                <title>SK Academy || Payment</title>
            </Helmet>
            <DashSectionTitle
                name='payment'
                title='Make Payment'
                subTitle='your payment information to form' />

            <div className="w-1/2 m-8">
                <Elements stripe={stripePromise}>
                    <CheckOutFrom payment={payment}></CheckOutFrom>
                </Elements>
            </div>
        </>
    );
};

export default Payment;