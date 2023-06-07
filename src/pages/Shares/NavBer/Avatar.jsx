import img from '../../../assets/sport-logo.png'
const Avatar = () => {
    return (
        <div>
            <img 
            className='rounded-full'
            title='saiful'
            src={img} 
            alt="profile"
            width={60}
            height={60} />
        </div>
    );
};

export default Avatar;