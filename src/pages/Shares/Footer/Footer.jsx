
import { ImFacebook } from "react-icons/im";
import { FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import { BsInstagram, BsTiktok, BsTwitter, BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";

import logo from '../../../assets/sk-logo.png'
const Footer = () => {
    return (
        <>
            <div className="bg-green-500 p-10">
                <h2 className="md:text-3xl text-xl md:py-4 py-2 text-white font-semibold">Follow Now</h2>
                <div className="grid lg:grid-cols-7 md:grid-cols-4 grid-cols-2 md:gap-10 gap-5 py-5">
                    <div className="fontStyle">
                        <Link>
                            <ImFacebook className="w-6 h-6 mx-auto" />
                            <p className="">Facebook <br /> <span className=" text-xs md:text-base">@skacademy</span></p>
                        </Link>
                    </div>
                    <div className="fontStyle">
                        <Link>
                            <BsInstagram className="w-6 h-6 mx-auto" />
                            <p className="">Instagram <br /> <span className=" text-xs md:text-base">@skacademy</span></p>
                        </Link>
                    </div>
                    <div className="fontStyle">
                        <Link>
                            <BsTwitter className="w-6 h-6 mx-auto" />
                            <p className="">Twitter <br /> <span className=" text-xs md:text-base">@skacademy</span></p>
                        </Link>
                    </div>
                    <div className="fontStyle">
                        <Link><BsYoutube className="w-6 h-6 mx-auto" />
                            <p className="">YouTub <br /> <span className=" text-xs md:text-base">@skacademy</span></p>
                        </Link>
                    </div>
                    <div className="fontStyle">
                        <Link><FaLinkedinIn className="w-6 h-6 mx-auto" />
                            <p className="">Linkedin <br /> <span className=" text-xs md:text-base">@skacademy</span></p>
                        </Link>
                    </div>
                    <div className="fontStyle">
                        <Link><BsTiktok className="w-6 h-6 mx-auto" />
                            <p className="">Tiktok <br /> <span className=" text-xs md:text-base">@skacademy</span></p>
                        </Link>
                    </div>
                    <div className="fontStyle">
                        <Link><FaTelegramPlane className="w-6 h-6 mx-auto" />
                            <p className="">Telegram <br /> <span className=" text-xs md:text-base">@skacademy</span></p>
                        </Link>
                    </div>

                </div>
                <footer className="footer mx-auto pb-5">
                    <div className="mx-auto">
                        <img src={logo} alt="" width={70} height={70} />
                        <p className="text-2xl" style={{ lineHeight: '24px' }}>SK Academe Ltd.<br /><span className="text-base" >The sports club has been producing <br /> good players since 2013.</span></p>
                    </div>
                    <div className="mx-auto">
                        <span className="footer-title">Services</span>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </div>
                    <div className="mx-auto">
                        <span className="footer-title">Company</span>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </div>
                    <div className="mx-auto">
                        <span className="footer-title">Legal</span>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </div>
                </footer>
                <hr  className="bg-black text-black"/>
            <p className="text-center text-main_color pt-2 text-base">@copyright by <a href="#" className="hover:animate-pulse hover:text-color-btn hover:font-semibold">saiful arafat</a> - <span className="text-xs">2023</span></p>
            </div>
        </>
    )
};

export default Footer;