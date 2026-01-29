import React, { useState } from 'react';
import { CiUser, CiHeart, CiSearch, CiMenuFries } from 'react-icons/ci';
import { IoClose } from 'react-icons/io5';
import Logo from "../../../public/logo.png"

const menuItems = [
  {
    id: 1,
    title: 'Home',
    url: '/',
    isActive: true,
  },
  {
    id: 2,
    title: 'Properties',
    url: '/properties',
    isActive: false,
  },
  {
    id: 3,
    title: 'Property',
    url: '/property',
    isActive: false,
  },
  {
    id: 4,
    title: 'Blog',
    url: '/blog',
    isActive: false,
  },
  {
    id: 5,
    title: 'Pages',
    url: '/page',
    isActive: false,
  },
  {
    id: 6,
    title: 'Contact',
    url: '/contact',
    isActive: false,
  }
];

const Header = () => {
  const [menu] = useState(menuItems);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(1);

  const toggleMenu = () => {
    setIsMenuOpen(prev=>!prev);
  };

  const handleMenuClick = (id) => {
    setActiveMenu(id);
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <nav className='bg-white shadow-sm sticky top-0 z-50'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center py-4 lg:py-5'>
          
          {/* Logo Section */}
          <div className='flex items-center gap-2 '>
            <div className='w-11 h-9 flex items-center justify-center'>
              <span className='text-white font-bold text-xl'>
                  <img src='../../public/logo.png' alt='logo' className='w-11 h-9 object-cover '/>
              </span>
            </div>
            <h1 className='font-bold font-poppins text-2xl sm:text-3xl text-gray-900'>Quarter</h1>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden lg:flex items-center gap-8'>
            {/* Menu Links */}
            <ul className='flex items-center gap-6'>
              {menu.map((item) => (
                <li key={item.id}>
                  <a 
                    href={item.url}
                    onClick={() => setActiveMenu(item.id)}
                    className={`text-sm font-nunito sm:text-[18px] font-bold transition-colors duration-300 relative group ${
                      activeMenu === item.id 
                        ? 'text-orange-500' 
                        : 'text-gray-700 hover:text-orange-500'
                    }`}
                  >
                    {item.title}
                    <span 
                      className={`absolute -bottom-1 left-0 h-0.5 bg-orange-500 transition-all duration-300 ${
                        activeMenu === item.id 
                          ? 'w-full' 
                          : 'w-0 group-hover:w-full'
                      }`}
                    ></span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Action Icons - Desktop */}
            <div className='flex items-center gap-2'>
              <button 
                className='size-10 flex items-center justify-center rounded-sm bg-gray-100 transition-all duration-300 hover:shadow-md group'
                aria-label='User Profile'
              >
                <CiUser className='w-5 h-5 text-gray-700 cursor-pointer ' />
              </button>
              <button 
                className='w-10 h-10 flex items-center justify-center rounded-sm bg-gray-100 transition-all duration-300 hover:shadow-md group relative'
                aria-label='Favorites'
              >
                <CiHeart className='w-5 h-5 text-gray-700 cursor-pointer' />
                {/* Notification badge */}
                <span className='absolute top-1 right-1 w-2 h-2 bg-orange-500 rounded-full'></span>
              </button>
              <button 
                className='w-10 h-10 flex items-center justify-center rounded-sm bg-gray-100 transition-all duration-300 hover:shadow-md group'
                aria-label='Search'
              >
                <CiSearch className='w-5 h-5 text-gray-700 cursor-pointer' />
              </button>
            </div>
          </div>

          {/* Mobile Right Section */}
          <div className='flex lg:hidden items-center gap-2'>
            {/* Mobile Search Icon */}
            <button 
              className='w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-all'
              aria-label='Search'
            >
              <CiSearch className='w-5 h-5 text-gray-700' />
            </button>

            {/* Hamburger Button */}
            <button
              onClick={toggleMenu}
              className={`size-10 flex items-center justify-center  transition-all duration-300  relative ${
                isMenuOpen 
                  ? 'bg-orange-500 text-white' 
                  : 'hover:bg-orange-500 hover:text-white text-gray-700'
              }`}
              aria-label='Toggle Menu'
              aria-expanded={isMenuOpen}
            >
            
                <CiMenuFries className='w-6 h-6 ' />
            
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
          onClick={toggleMenu}
          aria-hidden={!isMenuOpen}
          role='button'
        ></div>

        {/* Mobile Menu Sidebar */}
        <div 
          className={`fixed top-0 right-0 h-full w-80 max-w-[85%] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden z-40 overflow-y-auto ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Mobile Menu Header */}
          <div className='flex items-center justify-between p-6 border-b border-gray-100'>
            
                <span className='text-white font-bold text-xl'>
                  <img src={Logo} alt='logo' className='w-11 h-9 object-cover '/>
              </span>
              <button
              onClick={toggleMenu}
              className={`size-10 flex items-center justify-center  transition-all duration-300  relative ${
                isMenuOpen 
                  ? 'bg-orange-500 text-white' 
                  : 'hover:bg-orange-500 hover:text-white text-gray-700'
              }`}
              aria-label='Toggle Menu'
              aria-expanded={isMenuOpen}
            >
            
                <IoClose className='size-6' />
            
            </button>
              
            
          </div>

          {/* Mobile Menu Navigation */}
          <div className='p-6'>
            {/* Navigation Links */}
            <div className='mb-8'>
              <p className='text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3'>Navigation</p>
              <ul className='space-y-1'>
                {menu.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.url}
                      onClick={() => handleMenuClick(item.id)}
                      className={`flex font-nunito items-center justify-between px-4 py-3 rounded-lg font-semibold text-base transition-all duration-200 ${
                        activeMenu === item.id
                          ? 'bg-orange-100 text-orange-500'
                          : 'text-gray-700 hover:bg-gray-100 hover:text-orange-500'
                      }`}
                    >
                      <span>{item.title}</span>
                      {activeMenu === item.id && (
                        <span className='w-2 h-2 bg-orange-500 rounded-full'></span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile Action Buttons */}
            <div className='space-y-3 pt-6 border-t border-gray-100'>
              <p className='text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3'>Account</p>
              <button className='w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-500 rounded-lg transition-all duration-200 group'>
                <div className='size-10 flex items-center justify-center bg-gray-100 group-hover:bg-orange-100 rounded-lg transition-colors'>
                  <CiUser className='w-5 h-5' />
                </div>
                <span className='font-semibold'>My Account</span>
              </button>
              <button className='w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-500 rounded-lg transition-all duration-200 group relative'>
                <div className='size-10 flex items-center justify-center bg-gray-100 group-hover:bg-orange-100 rounded-lg transition-colors relative'>
                  <CiHeart className='w-5 h-5' />
                  <span className='absolute top-1 right-1 w-2 h-2 bg-orange-500 rounded-full'></span>
                </div>
                <span className='font-semibold'>Favorites</span>
                <span className='ml-auto bg-orange-500 text-white text-xs px-2 py-1 rounded-full'>3</span>
              </button>
            </div>

           
            
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Header;