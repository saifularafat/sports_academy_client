import { Link } from "react-router-dom";
import Container from "../../../component/Container";
import Logo from "./Logo";
import MenuDropDown from "./MenuDropDown";
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { useState } from "react";
import Nav from "./Nav";

const NavBer = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)



    return (
        <div className="bg-opacity-80 bg-main_color py-2 w-full fixed shadow-lg top-0 z-10">
            <Container>
                <div className="flex flex-row items-center justify-between">
                        <Logo />
                        <Nav />
                        <div>
                            <MenuDropDown />
                        </div>

                    {/* Mobile Menu */}
                    <div className='md:hidden px-2'>
                        <button
                            title='Open Menu'
                            onClick={() => setIsMenuOpen(true)}>
                            <Bars3BottomRightIcon className="h-8 w-8 text-white" />
                        </button>
                        {
                            isMenuOpen && (
                                <div className='absolute top-0 left-0 w-full z-10'>
                                    <div className='flex justify-between items-center px-2 py-2 bg-main_color shadow-lg'>
                                        {/* logo and close ber section */}
                                        <div>
                                            <Link to='/'>
                                                <MenuDropDown />
                                            </Link>
                                        </div>
                                        <div>
                                            <button
                                                title='Close Menu'
                                                onClick={() => setIsMenuOpen(false)}>
                                                <XMarkIcon
                                                    className='h-8 w-8 text-white ' />
                                            </button>
                                        </div>
                                    </div>
                                    <hr />
                                    {/* menu dropdown section */}
                                    <nav>
                                        <ul
                                            className='space-y-3 py-6
                                         bg-green-600
                                         text-white w-full'>
                                            <li className='p-2
                                            hover:bg-orange-400 
                                            '>
                                                <Link to='/' className='default hover:text-white'>
                                                    Home
                                                </Link>
                                            </li>
                                            <li className='p-2
                                            hover:bg-orange-400'>
                                                <Link to='allToys' className='default hover:text-white'>
                                                    All Toys
                                                </Link>
                                            </li>

                                            <li className='p-2
                                            hover:bg-orange-400'>
                                                <Link to='blog' className='default hover:text-white'>
                                                    Blog
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>

                                </div>
                            )
                        }
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default NavBer;