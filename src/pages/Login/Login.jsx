import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../component/useAuth";
import SocialSignIn from "../Shares/SocialSignIn/SocialSignIn";
import { PulseLoader } from "react-spinners";
import { AiOutlineEye } from "react-icons/ai";
import { handleShowPass } from "../../api/ShowPassword";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Login = () => {
    const {
        loading,
        setLoading,
        login,
    } = useAuth();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


    const handlerLogin = data => {
        login(data.email, data.password)
            .then(result => {
                const logged = result.user;
                console.log(logged);
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Your SignUp Successful',
                    showConfirmButton: false,
                    timer: 1300
                })
                navigate(from, { replace: true })
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${error.message}`,
                })
                setLoading(false)
            })

    }


    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
                <div className='mb-8 text-center'>
                    <h1 className='my-3 text-4xl font-bold'>Log In</h1>
                    <p className='text-sm text-gray-400'>
                        Sign in to access your account
                    </p>
                </div>
                <form
                    onSubmit={handleSubmit(handlerLogin)}
                    noValidate=''
                    action=''
                    className='space-y-6 ng-untouched ng-pristine ng-valid'
                >
                    <div className='space-y-4'>
                        <div>
                            <label htmlFor='email' className='form_label'>
                                Email address
                            </label>
                            <input
                                type='email'
                                name='email'
                                id='email'
                                required
                                placeholder='Enter Your Email Here'
                                className='input_style'
                                data-temp-mail-org='0'
                                {...register("email", { required: true })}
                            />
                            {errors.email?.type === "required" && (
                                <p className="text-red-600">Email is required</p>
                            )}
                        </div>
                        <div>
                            <div className='flex justify-between'>
                                <label htmlFor='password' className='form_label'>
                                    Password*
                                </label>
                            </div>
                            <div className="relative">
                                <input
                                    type='password'
                                    name='password'
                                    id='password'
                                    required
                                    placeholder='*******'
                                    className='input_style'
                                    {...register("password", { required: true })}
                                />
                                {errors.password?.type === 'required' &&
                                    <p className="text-red-600 mt-1">Password is required</p>
                                }

                                <AiOutlineEye
                                    onClick={handleShowPass}
                                    className="absolute top-3 right-3 cursor-pointer text-lg"
                                ></AiOutlineEye>
                            </div>

                        </div>
                    </div>

                    <div>
                        <button
                            type='submit'
                            className='bg-main_color w-full text-xl font-semibold font-mono uppercase tracking-wider rounded-md py-3 text-white hover:bg-transparent hover:text-main_color border-2 hover:border-main_color border-main_color transition duration-200'
                        >
                            {
                                loading ? 
                                <PulseLoader className="mx-auto 
                                    animate-pulse"
                                    color="#FF3811"
                                    size={18} />
                                    :
                                    'Login'
                            }

                        </button>
                    </div>
                </form>
                <div className='flex items-center pt-4 space-x-1'>
                    <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                    <p className='px-3 text-sm dark:text-gray-400'>
                        Login with social accounts
                    </p>
                    <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                </div>

                {/* social component */}
                <SocialSignIn />
                <p className='px-6 text-sm text-center text-gray-400'>
                    Do not have an account yet?{' '}
                    <Link
                        to='/signUp'
                        className='hover:underline hover:text-color-btn text-teal-900 font-medium'
                    >
                        SignUp
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;