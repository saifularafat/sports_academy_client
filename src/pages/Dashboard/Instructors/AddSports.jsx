import { useForm } from "react-hook-form";
import DashSectionTitle from "../../../component/DashboardSectionTitle";
import useAuth from "../../../component/useAuth";
import { PulseLoader } from "react-spinners";
import { Helmet } from "react-helmet-async";
import { useAxiosSecure } from "../../../api/useAxiosSecure";
import Swal from "sweetalert2";

const AddSports = () => {
    const { user, loading } = useAuth();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const [axiosSecure] = useAxiosSecure();

    const hosting_image_url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMG_UPLOAD_KEY}`


    const handleAddSubmit = (data) => {
        const imageUrl = data.image[0];
        const formData = new FormData();
        formData.append('image', imageUrl)
        fetch(hosting_image_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                const imgURL = imageData.data.display_url;
                const { instructorEmail, instructorName, name, price, seat } = data;
                console.log(data);
                const createItem = {
                    email: instructorEmail,
                    instructorName,
                    sportsName:name,
                    seat,
                    price: parseFloat(price),
                    image: imgURL,
                    instructorImage: user?.photoURL,
                    status: 'pending'
                };
                console.log(createItem);
                axiosSecure.post('/classes', createItem)
                    .then(data => {
                        if (data.data.insertedId) {
                            reset();
                            Swal.fire({
                                position: 'top-center',
                                icon: 'success',
                                title: 'New sport item added successfully',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    })
            })

    }

    return (
        <div>
            <Helmet>
                <title>SK Academy || Add a Sports</title>
            </Helmet>
            <DashSectionTitle
                name='Add Sports'
                title='Add A Sports'
                subTitle='Your sports class added now !'
            />
            {/* TODO Title Name  */}
            <div className="flex items-center justify-center ">
                <form
                    onSubmit={handleSubmit(handleAddSubmit)}
                    className="space-y-2"
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                >
                    <div>
                        <label
                            htmlFor='name'
                            className='form_label'>
                            Sport Name*
                        </label>
                        <input
                            type='text'
                            name='name'
                            id='name'
                            placeholder='Enter Your Sport Name '
                            className='input_style'
                            data-temp-mail-org='0'
                            {...register("name", { required: true })}
                        />
                        {errors.name?.type === "required" && (
                            <p className="text-red-600">Please Sport Name</p>
                        )}
                    </div>
                    <div className="flex items-center">
                        <div>
                            <label
                                htmlFor='name'
                                className='form_label'>
                                Instructor Name*
                            </label>
                            <input
                                type='text'
                                name='instructorName'
                                id='name'
                                defaultValue={user?.displayName}
                                placeholder='Enter Your Sport Name '
                                className='input_style'
                                data-temp-mail-org='0'
                                {...register("instructorName", { required: true })}
                            />
                        </div>
                        <div className="ml-5">
                            <label
                                htmlFor='name'
                                className='form_label'>
                                Instructor Email*
                            </label>
                            <input
                                type='text'
                                name='instructorEmail'
                                id='name'
                                defaultValue={user?.email}
                                placeholder='Enter Your Sport Name '
                                className='input_style'
                                data-temp-mail-org='0'
                                {...register("instructorEmail", { required: true })}
                            />
                        </div>
                    </div>
                    <div className="flex items-center gap-x-5">
                        <div className="w-1/2">
                            <label
                                htmlFor='name'
                                className='form_label'>
                                Price*
                            </label>
                            <input
                                type='text'
                                name='price'
                                id='name'
                                placeholder='Enter Your Sport Price '
                                className='input_style'
                                data-temp-mail-org='0'
                                {...register("price", { required: true })}
                            />
                            {errors.price?.type === "required" && (
                                <p className="text-red-600">Please price</p>
                            )}
                        </div>
                        <div className="">
                            <label
                                htmlFor='name'
                                className='form_label'>
                                Available Seats*
                            </label>
                            <input
                                type='text'
                                name='seat'
                                id='name'
                                placeholder='Enter Available Seats'
                                className='input_style'
                                data-temp-mail-org='0'
                                {...register("seat", { required: true })}
                            />
                            {errors.seat?.type === "required" && (
                                <p className="text-red-600">Please your seat</p>
                            )}
                        </div>
                    </div>
                    <div className="">
                        <label
                            htmlFor='seats'
                            className='form_label'>
                            Sports Image*
                        </label>
                        <input
                            type='file'
                            name='image'
                            id='name'
                            placeholder='Enter Available Seats'
                            className='input_style'
                            data-temp-mail-org='0'
                            {...register("image", { required: true })}
                        />
                        {errors.image?.type === "required" && (
                            <p className="text-red-600">Please Your Sport Image</p>
                        )}
                    </div>
                    <div>
                        <button
                            type='submit'
                            className='bg-main_color w-full text-xl font-semibold font-mono uppercase tracking-wider rounded-md py-2 text-white hover:bg-transparent hover:text-main_color border-2 hover:border-main_color border-main_color transition duration-200 mt-3'
                        >
                            {
                                loading ? <PulseLoader className="mx-auto 
                                    animate-pulse"
                                    color="#FF3811"
                                    size={18} />
                                    :
                                    'Add Class'
                            }

                        </button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default AddSports;