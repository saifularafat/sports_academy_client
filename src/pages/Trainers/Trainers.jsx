
import Container from '../../component/Container';
import banner from './../../assets/slider/bg.png'
const Trainers = () => {
    return (
        <div className=''>
            <div style={{
                backgroundImage: `url(${banner})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: 'cover',
                height: '80vh',
                width: "100"
            }} className='bg-white'>
            </div>
            <Container>
                <h2 className='py-12'></h2>
            </Container>
        </div>
    );
};

export default Trainers;