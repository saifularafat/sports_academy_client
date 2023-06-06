import { Link } from 'react-router-dom';

import logo from './../../../assets/logo-sk.png'

const Logo = () => {
    return (
        <div>
            <Link to='/'>
                <img src={logo} alt="logo" width={100} height={100}/>
            </Link>
        </div>
    );
};

export default Logo;