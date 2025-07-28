import React, { useEffect } from 'react'
import {assets} from '../assets/assets'

function Navbar() {
    const [showMobileMenu, setShowMobileMenu] = React.useState(false);

    useEffect(() => {
        if(showMobileMenu){
            document.body.style.overflaw = 'hidden';
        }else{
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        }
    }, [showMobileMenu])
  return (
    <div className='absolute top-0 left-0 w-full z-10 flex items-center justify-between px-6 py-4 bg-gray-800 h-16'>
        <div className = 'container mx-auto flex items-center justify-between py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
            <a href="#Header" className='cursor-pointer hover:text-gray-400 text-white flex items-center gap-2 mb-2 font-bold'><img  src={assets.ozone_logo} alt="Logo" className="h-8 w-8" />OZONE</a>
            
        <ul className="hidden md:flex space-x-8">
            <li><a href="#Header" className='cursor-pointer hover:text-gray-400 text-white'>Home</a></li>
            <li><a href="#About" className='cursor-pointer hover:text-gray-400 text-white'>About</a></li>
            <li><a href="#Projects" className='cursor-pointer hover:text-gray-400 text-white'>Projects</a></li>
            <li><a href="#Testimonials" className='cursor-pointer hover:text-gray-400 text-white'>Testimonials</a></li>
        </ul>
        <button className='hidden md:block bg-white px-8 py-2 rounded-full text-black font-medium hover:bg-gray-100 transition-colors'>
            Sign Up
        </button>
        <img onClick={() => setShowMobileMenu(true)} src={assets.menu_icon} className="md:hidden w-7" alt="" />
        </div>
        {/* ----------Mobile - Menu --------------- */}
        <div className={`md:hidden  ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0'} fixed w-full right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
            <div className = ' flex justify-end p-6 cursor-pointer'>
                <img onClick={() => setShowMobileMenu(false)} src={assets.cross_icon} alt="" className='w-6' />
            </div>
            <ul className = 'flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                <a onClick={() => setShowMobileMenu(false)} href="#Header" className='cursor-pointer hover:text-gray-400 '>Home</a>
                <a onClick={() => setShowMobileMenu(false)} href="#About" className='cursor-pointer hover:text-gray-400'>About</a>
                <a onClick={() => setShowMobileMenu(false)} href="#Projects" className='cursor-pointer hover:text-gray-400 '>Projects</a>
                <a onClick={() => setShowMobileMenu(false)} href="#Testimonials" className='cursor-pointer hover:text-gray-400'>Testimonials</a>
            </ul>
        </div>
    </div>
  )
}

export default Navbar