import img from '../../../assets/sport-logo.png'
const Avatar = () => {
    return (
        <div>
            <img 
            src={img} 
            alt="profile"
            width={50}
            height={50} />
        </div>
    );
};

export default Avatar;