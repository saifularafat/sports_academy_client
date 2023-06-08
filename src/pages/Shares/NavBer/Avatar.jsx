import img from '../../../assets/sport-logo.png'
import useAuth from '../../../component/useAuth';
const Avatar = () => {
    const { user } = useAuth();
    return (
        <img src={user && user?.photoURL ?
            user?.photoURL : img}
            className="rounded-full"
            referrerPolicy="no-referrer"
            alt="Profile photo"
            width='50'
            height='50' />
    );
};

export default Avatar;