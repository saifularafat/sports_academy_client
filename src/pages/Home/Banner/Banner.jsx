
import bannerCricket from './../../../assets/slider/cricket.webp'
import bannerFootball from './../../../assets/slider/football.webp'
import bannerBaseball from './../../../assets/slider/baseball.webp'
import bannerHokey from './../../../assets/slider/hokey.webp'
import bannerRunning from './../../../assets/slider/runing.webp'
import bannerSurfing from './../../../assets/slider/surfing.webp'
import Paragraph from './Paragraph'

const Banner = () => {
    return (
        <div className="carousel w-full md:h-[600px] h-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={bannerCricket} className="w-full object-cover" />
                <div className=" absolute flex items-center left-0 top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">

                    <Paragraph
                        one='WELCOME'
                        two='TO BEST'
                        three='CRICKET'
                        four='ACADEMY'
                        oneColor="text-slate-800"
                        twoColor="text-gray-700"
                        threeColor="text-slate-900"
                        fourColor="text-gray-800"
                        coachName='Salahuddin Ahmed'
                        label='Cricket'
                        btnBorderColor="border-green-800"
                        btnTextColor="text-slate-900"
                        adders='/'
                        coachText="text-yellow-700"
                        coachTextBar="text-slate-800"
                    />

                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle mr-5 slider_btn1">❮</a>
                    <a href="#slide2" className="btn btn-circle slider_btn2">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={bannerFootball} className="w-full object-cover" />
                <div className="absolute flex items-center  left-0 top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">

                    <Paragraph
                    one='WELCOME'
                    two='TO BEST'
                    three='Football'
                    four='ACADEMY'
                    oneColor="text-slate-900"
                    twoColor="text-gray-800"
                    threeColor="text-slate-900"
                    fourColor="text-gray-700"
                    coachName='Alan Doe'
                    label='Football'
                    btnBorderColor="border-green-800"
                    btnTextColor="text-blue-700"
                    adders='/'
                    coachText="text-slate-100"
                    coachTextBar="text-slate-700"
                        // one='WELCOME'
                        // two='TO BEST'
                        // three='Surfing'
                        // four='ACADEMY'
                        // coachText="text-slate-300"
                        // coachTextBar="text-orange-300"
                        // coachName='Alan Doe'
                        // label='Surf'
                        // adders='/'
                    />
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle mr-5 slider_btn1">❮</a>
                    <a href="#slide3" className="btn btn-circle slider_btn2">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={bannerBaseball} className="w-full object-cover" />
                <div className="absolute flex items-center  left-0 top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">

                    <Paragraph
                        one='WELCOME'
                        two='TO BEST'
                        three='BaseBall'
                        four='ACADEMY'
                        oneColor="text-green-600"
                        twoColor="text-green-700"
                        threeColor="text-green-600"
                        fourColor="text-green-700"
                        coachName='Watson Sen'
                        coachText="text-green-900"
                        coachTextBar="text-green-900"
                        btnBorderColor="border-green-800"
                        btnTextColor="text-green-600"
                        label='Baseball'
                        adders='/'
                    />
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle mr-5 slider_btn1">❮</a>
                    <a href="#slide4" className="btn btn-circle slider_btn2">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={bannerHokey} className="w-full object-cover" />
                <div className=" absolute flex items-center  left-0 top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">

                    <Paragraph
                        one='WELCOME'
                        two='TO BEST'
                        three='Hokey'
                        four='ACADEMY'
                        oneColor="text-green-600"
                        twoColor="text-green-100"
                        threeColor="text-green-800"
                        fourColor="text-green-100"
                        coachName='Nill Sam'
                        coachText="text-slate-800"
                        coachTextBar="text-white"
                        btnTextColor="text-white"
                        btnBorderColor="border-green-600"
                        label='Running'
                        adders='/'
                    />
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle mr-5 slider_btn1">❮</a>
                    <a href="#slide5" className="btn btn-circle slider_btn2">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img src={bannerRunning} className="w-full object-cover" />
                <div className=" absolute flex items-center  left-0 top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <Paragraph
                        one='WELCOME'
                        two='TO BEST'
                        three='Running'
                        four='ACADEMY'
                        oneColor="text-green-500"
                        twoColor="text-green-300"
                        threeColor="text-green-500"
                        fourColor="text-green-300"
                        coachName='Peter Son'
                        coachText="text-slate-200"
                        coachTextBar="text-red-600"
                        btnTextColor="text-white"
                        btnBorderColor="border-green-600"
                        label='Running'
                        adders='/'
                    />
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle mr-5 slider_btn1">❮</a>
                    <a href="#slide6" className="btn btn-circle slider_btn2">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <img src={bannerSurfing} className="w-full object-cover " />
                <div className="absolute flex items-center  left-0 top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">

                    <Paragraph
                        one='WELCOME'
                        two='TO BEST'
                        three='Skying'
                        four='ACADEMY'
                        oneColor="text-green-500"
                        twoColor="text-green-500"
                        threeColor="text-green-800"
                        fourColor="text-green-700"
                        coachName='Sen Wood'
                        coachText="text-green-800"
                        coachTextBar="text-slate-900"
                        btnTextColor="text-green-500"
                        btnBorderColor="border-green-600"
                        label='Surfing'
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