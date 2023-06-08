import useAuth from '../../../component/useAuth';
import img from '../../../assets/avater.png'
const Avatar = () => {
    const { user } = useAuth();
    return (
        <img src={user && user?.photoURL ?
            user?.photoURL : img}
            title= {user?.displayName}
            className="rounded-full"
            referrerPolicy="no-referrer"
            alt="Profile photo"
            width='40'
            height='40' />
    );
};

export default Avatar;