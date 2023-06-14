
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import './CheckOut.css';
import { useAxiosSecure } from "../../../../api/useAxiosSecure";
import useAuth from "../../../../component/useAuth";
import Swal from "sweetalert2";

const CheckOutFrom = ({ payment }) => {
    const { price, className, _id, instructorEmail, classImage } = payment;
    console.log("payment 11", payment);
    const stripe = useStripe();
    const elements = useElements();
    const [axiosSecure] = useAxiosSecure();
    const { user } = useAuth();
    const [cardError, setCardError] = useState("");
    const [clientSecret, setClientSecret] = useState("");
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState("");

    useEffect(() => {
        if (price > 0) {
            axiosSecure.post("/create-payment-intent", { price }).then((res) => {
                setClientSecret(res.data.clientSecret);
            });
        }
    }, [price, axiosSecure]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card,
        });

        if (error) {
            console.log("[error]", error);
            setCardError(error.message);
        } else {
            setCardError("");
            console.log("[PaymentMethod]", paymentMethod);
        }
        setProcessing(true);
        const { paymentIntent, error: confirmError } =
            await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || "unknown",
                        name: user?.displayName || "anonymous",
                    },
                },
            });
        if (confirmError) {
            console.log(confirmError);
        }
        setProcessing(false);
        console.log("payment intent", paymentIntent);
        if (paymentIntent.status === "succeeded") {
            setTransactionId(paymentIntent.id);
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price: price,
                date: new Date(),
                className: className,
                classImage: classImage,
                bookedId: _id,
                instructorEmail: instructorEmail,
            };
            axiosSecure.post("/payments", payment).then((res) => {

                if (res.data.insertResult.insertedId) {
                    fetch(`${import.meta.env.VITE_API_URL}/paymentBookMaker/${_id}`,
                        {
                            method: "PUT",
                        }
                    )
                        .then((res) => res.json())
                        .then((data) => {
                            Swal.fire({
                                position: 'top-center',
                                icon: 'success',
                                title: 'payment successful',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        });
                }
            });
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="w-10/12 mx-auto">
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: "16px",
                                color: "#424770",
                                "::placeholder": {
                                    color: "#aab7c4",
                                },
                            },
                            invalid: {
                                color: "#9e2146",
                            },
                        },
                    }}
                />
                <button
                    className="bg-main_color py-2 px-5 text-white text-base rounded-xl mt-3"
                    type="submit"
                    disabled={!stripe || !clientSecret || processing}
                >
                    Pay
                </button>
            </form>

            {cardError && <p className="text-red-600">{cardError}</p>}
            {transactionId && (
                <p className="text-green-600 ml-8">
                    Your  TransactionId : {transactionId}
                </p>
            )}
        </>
    );
};

export default CheckOutFrom;