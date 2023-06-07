import { Link } from 'react-router-dom';

import logo from './../../../assets/sk-logo.png'

const Logo = () => {
    return (
        <Link to='/' className='hidden md:block'>
            <div className='flex items-center'>
                <img
                    src={logo}
                    alt="logo"
                    width={75}
                    height={75} />
                <h2 className='text-white text-4xl pl-2 leading-4 tracking-wider'>
                    <span className=' font-mono font-extrabold text-sky-500'> S<span className='text-red-600'>K</span></span>
                    <br />
                    <span className='text-xl tracking-wider'>Academe</span>
                </h2>
            </div>
        </Link>
    );
};

export default Logo;