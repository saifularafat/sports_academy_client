import { Helmet } from "react-helmet-async";
import DashSectionTitle from "../../../../component/DashboardSectionTitle";
import { BookMarkEmailFetch } from "../../../../api/useClasses";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MySelected = () => {
    const [bookMark, refetch] = BookMarkEmailFetch();
    console.log(bookMark);

    const handlerDelete = select => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be Select bookMark delete!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`${import.meta.env.VITE_API_URL}/bookmarks/${select._id}`)
                    .then(data => {
                        console.log(data);
                        if (data.data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your Class has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    const handlerPayment = select => {
        console.log('Delete Handler', select);
    }
    return (
        <div>
            <Helmet><title>Sk Academy | My selected</title></Helmet>
            <DashSectionTitle
                name='Selector'
                title='My Selector'
                subTitle='Your  All select sports!'
            />

            <h1 className="text-3xl">Selected Length: {bookMark.length}</h1>
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
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookMark.map((select, index) => <tr
                                key={select._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="mask mask-squircle w-24 h-24">
                                            <img src={select?.classImage} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span>{select?.instructorName}</span>
                                </td>
                                <td>
                                    <span>{select?.className}</span>
                                </td>
                                <td>$<span>{select?.price}</span> </td>
                                <td className="">
                                    <button
                                        onClick={() => handlerDelete(select)}
                                        className="bg-red-600 py-[6px] px-5 text-white rounded-lg text-base mb-2">Delete</button>
                                    <br />
                                    <Link to={`/dashboard/payment/${select?._id}`}>
                                        <button
                                            onClick={() => handlerPayment(select._id)}
                                            className="bg-green-700 py-[6px] px-[14px] text-white rounded-lg text-base mb-2">Payment
                                        </button>
                                    </Link>
                                </td>
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MySelected;