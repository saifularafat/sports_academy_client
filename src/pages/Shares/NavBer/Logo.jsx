import { Link } from 'react-router-dom';

import logo from './../../../assets/sks_logo.png'

const Logo = () => {
    return (
        <Link to='/' className=''>
            <div className='flex items-center'>
                <img
                    src={logo}
                    alt="logo"
                    width={100}
                    height={160}
                    className='hidden md:block' />
                <img
                    src={logo}
                    alt="logo"
                    width={50}
                    height={50}
                    className='md:hidden block' />
            </div>
        </Link>
    );
};

export default Logo;