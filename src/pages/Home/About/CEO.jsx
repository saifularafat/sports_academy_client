import Container from '../../../component/Container';
import ceo from './../../../assets/ceo.jpg'
const CEO = () => {
    return (
        <div className="bg-main_color p-8 mt-12">
            <Container>
                <div 
                data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                    className="md:flex flex-row items-center justify-between gap-14">
                    <div className='mb-6'>
                        <img src={ceo} alt="ceo" className='md:h-96 md:w-[1240px]' />
                    </div>
                    <div className=''>
                        <h2 className='text-xl text-white font-semibold font-mono border-b-2 border-b-color-btn pb-6'>"One of our proudest achievements has been the successful launch of our latest product line, designed to revolutionize the way athletes train and compete. By combining cutting-edge technology, expert craftsmanship, and an unwavering commitment to performance, we have created a range of products that truly empowers athletes to push boundaries and exceed their potential."</h2>
                        <h3 className='pt-5 text-2xl font-bold text-white'>
                            Son Peterson <br /><span className='text-lg font-medium'>CEO, Sports Kings Academy Ltd.
                            </span>
                        </h3>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default CEO;