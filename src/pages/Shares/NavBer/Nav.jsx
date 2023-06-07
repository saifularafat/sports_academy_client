import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <ul className="md:flex items-center gap-x-10 text-white hidden">
                <li>
                    <NavLink to='/'
                        className={({ isActive }) => (isActive ? 'text-red-600 border-b-2 border-red-600' : 'text-white')}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/about'
                        className={({ isActive }) => (isActive ? 'text-red-600 border-b-2 border-red-600' : 'text-white')}
                    >
                        Instructor
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/about'
                        className={({ isActive }) => (isActive ? 'text-red-600 border-b-2 border-red-600' : 'text-white')}
                    >
                        Class
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/'
                        className={({ isActive }) => (isActive ? 'text-red-600 border-b-2 border-red-600' : 'text-white')}
                    >
                        Blog
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/about'
                        className={({ isActive }) => (isActive ? 'text-red-600 border-b-2 border-red-600' : 'text-white')}
                    >
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;