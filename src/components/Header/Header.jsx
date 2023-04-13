import React from 'react';
import { BeakerIcon, BoltIcon } from '@heroicons/react/24/solid'
import { Link, NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <div className='bg-gray-100 sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-8 md:px-24 px-4 py-5 mx-auto'>
            <div className='flex justify-between items-center'>
                {/* logo section */}
                <Link to='/' className='inline-flex items-center'>
                    <BoltIcon className='h-6 w-6'></BoltIcon>
                    <span>nextPage</span>
                </Link>
                {/* nav section */}
                {/* for desktop */}
                <ul className='lg:flex md:flex hidden justify-center items-center space-x-8'>
                    <li>
                        <NavLink to='/'
                        className={({isActive})=>(isActive?'text-blue-400 hover:text-orange-400':'')}
                        >Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/books'
                        className={({isActive})=>(isActive?'text-blue-400 hover:text-orange-500':'')}
                        >Books</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about'
                        className={({isActive})=>(isActive?'text-blue-600 hover:text-orange-400':'')}
                        >About Us</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;