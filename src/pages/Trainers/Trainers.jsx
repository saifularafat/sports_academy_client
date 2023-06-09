
import banner from './../../assets/slider/bg.png'
const Trainers = () => {
    return (
        <div >
            <div style={{
                backgroundImage: `url(${banner})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: 'cover',
                height: '80vh',
                width: "100"
            }} className='bg-white'>
                <h2 className='page_banner-title text-white md:pt-32 pt-24'>Home/Contact</h2>
            </div>
        </div>
    );
};

export default Trainers;