import { FcGoogle } from "react-icons/fc";
import useAuth from "../../../component/useAuth";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SocialSignIn = () => {
    

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