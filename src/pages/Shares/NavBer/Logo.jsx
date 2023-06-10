import { Link } from 'react-router-dom';

import logo from './../../../assets/sk-logo.png'

const Logo = () => {
    return (
        <Link to='/' className=''>
            <div className='flex items-center'>
                <img
                    src={logo}
                    alt="logo"
                    width={75}
                    height={75}
                    className='hidden md:block' />
                <img
                    src={logo}
                    alt="logo"
                    width={50}
                    height={50}
                    className='md:hidden block' />
                <h2 className='text-white md:text-4xl text-3xl pl-2 leading-4 tracking-wider'>
                    <span className=' font-mono font-extrabold text-sky-500'> S<span className='text-red-600'>K</span></span>
                    {/* <br /> */}
                    <span className='md:text-base text-sm tracking-wider'>Academy</span>
                </h2>
            </div>
        </Link>
    );
};

export default Logo;