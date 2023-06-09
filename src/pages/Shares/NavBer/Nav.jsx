import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <ul className="md:flex items-center gap-x-4 text-white hidden">
                <li>
                    <NavLink to='/'
                        className={({ isActive }) => (isActive ? 'active' : 'default')}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/trainers'
                        className={({ isActive }) => (isActive ? 'active' : 'default')}
                    >
                        TRAINERS
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/sports'
                        className={({ isActive }) => (isActive ? 'active' : 'default')}
                    >
                        Sports
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/blog'
                        className={({ isActive }) => (isActive ? 'active' : 'default')}
                    >
                        Blog
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/contact'
                        className={({ isActive }) => (isActive ? 'active' : 'default')}
                    >
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;