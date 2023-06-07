
import banner1 from './../../../assets/slider/baseball-cover.jpeg'
import banner2 from './../../../assets/slider/cricket-cover.jpg'
import banner3 from './../../../assets/slider/football-cover.jpg'
import banner4 from './../../../assets/slider/running-cover.jpeg'
import banner5 from './../../../assets/slider/skateboard-cover.jpeg'
import banner6 from './../../../assets/slider/surfing-cover.jpeg'
import Paragraph from './Paragraph'

const Banner = () => {
    return (
        <div className="carousel w-full md:h-[600px] h-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={banner2} className="w-full " />
                <div className="absolute flex items-center left-0 top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">

                    <Paragraph
                        one='WELCOME'
                        two='TO BEST'
                        three='FOOTBALL'
                        four='ACADEMY'
                        coachName='Tom'
                        label='Football'
                        adders='/'
                    />

                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle mr-5 slider_btn1">❮</a>
                    <a href="#slide2" className="btn btn-circle slider_btn2">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={banner1} className="w-full " />
                <div className="absolute flex items-center  left-0 top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">

                    <Paragraph
                        one='WELCOME'
                        two='TO BEST'
                        three='FOOTBALL'
                        four='ACADEMY'
                        coachName='Tom'
                        label='Football'
                        adders='/'
                    />
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle mr-5 slider_btn1">❮</a>
                    <a href="#slide3" className="btn btn-circle slider_btn2">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={banner3} className="w-full " />
                <div className="absolute flex items-center  left-0 top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">

                    <Paragraph
                    colors={'black'}
                        one='WELCOME'
                        two='TO BEST'
                        three='FOOTBALL'
                        four='ACADEMY'
                        coachName='Tom'
                        label='Football'
                        adders='/'
                    />
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle mr-5 slider_btn1">❮</a>
                    <a href="#slide4" className="btn btn-circle slider_btn2">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={banner4} className="w-full " />
                <div className="absolute flex items-center  left-0 top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">

                    <Paragraph
                        one='WELCOME'
                        two='TO BEST'
                        three='FOOTBALL'
                        four='ACADEMY'
                        coachName='Tom'
                        label='Football'
                        adders='/'
                    />
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle mr-5 slider_btn1">❮</a>
                    <a href="#slide5" className="btn btn-circle slider_btn2">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img src={banner5} className="w-full " />
                <div className="absolute flex items-center  left-0 top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <Paragraph
                        one='WELCOME'
                        two='TO BEST'
                        three='FOOTBALL'
                        four='ACADEMY'
                        coachName='Tom'
                        label='Football'
                        adders='/'
                    />
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle mr-5 slider_btn1">❮</a>
                    <a href="#slide6" className="btn btn-circle slider_btn2">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <img src={banner6} className="w-full " />
                <div className="absolute flex items-center  left-0 top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">

                    <Paragraph
                        one='WELCOME'
                        two='TO BEST'
                        three='FOOTBALL'
                        four='ACADEMY'
                        coachName='Tom'
                        label='Football'
                        adders='/'
                    />
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide5" className="btn btn-circle mr-5 slider_btn1">❮</a>
                    <a href="#slide1" className="btn btn-circle slider_btn2">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;