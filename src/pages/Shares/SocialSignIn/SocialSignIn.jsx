import { FcGoogle } from "react-icons/fc";
import useAuth from "../../../component/useAuth";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SocialSignIn = () => {
    const navigate = useNavigate();
    const location = useLoaderData();
    const from = location.state?.from?.pathname || "/";

    const { setLoading, googleSignIn, githubSignIn } = useAuth();

    const handlerGoogleLogin = () => {
        googleSignIn()
        .then(result => {
            console.log(result);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your SignUp Successful',
                showConfirmButton: false,
                timer: 1500
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

    const handlerGitHubLogin = () => {
        githubSignIn()
        .then(result => {
            console.log(result);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your SignUp Successful',
                showConfirmButton: false,
                timer: 1500
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
        <div>
            <div
                onClick={handlerGoogleLogin}
                className='social_style'>
                <FcGoogle size={32} />
                <p>Continue with Google</p>
            </div>
            <div
                onClick={handlerGitHubLogin}
                className='social_style'>
                <FcGoogle size={32} />
                <p>Continue with Google</p>
            </div>
        </div>
    );
};

export default SocialSignIn;