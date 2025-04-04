import logo from './assets/logo.svg'
import { FaLanguage } from "react-icons/fa6";
import { IoSunny } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { useRef } from 'react';

const Header = () => {
    const myRef = useRef();

    const toggleClass = () => {
        myRef.current.classList.toggle('max-lg:hidden')
    }

    return (
        <div className='
            flex justify-between items-center max-lg:items-start shadow-[7px_2px_20px_#777] px-[2.1rem] py-[.5rem] 
            max-lg:px-[.9rem] max-lg:py-[.9rem]'>
            <div className='
                flex flex-1 gap-14 items-center *:cursor-pointer
                max-lg:flex-col max-lg:items-start max-lg:gap-[2.5rem]'>
                <div className='w-[250px]'>
                    <img src={logo} alt="" />
                </div>
                <div 
                    ref={myRef} 
                    className='
                        flex justify-between flex-1 items-center text-gray-500 
                    max-lg:hidden max-lg:flex-col max-lg:gap-[2.1rem] max-lg:pl-4 max-lg:transition-all max-lg:duration-700'>
                    <div className='
                        flex items-center gap-8 text-[.85rem] 
                        max-lg:flex-col max-lg:gap-[2.1rem] max-lg:items-start max-lg:w-full'>
                        <div className=' max-lg:hover:text-[#009e74]'>Help</div>
                        <div className=' max-lg:hover:text-[#009e74]'>History</div>
                        <div className=' max-lg:hover:text-[#009e74]'>Invoicing Guide</div>
                    </div>
                    <div className='
                        flex gap-10 items-center text-[.85rem] 
                        max-lg:flex-col max-lg:gap-[2.1rem] max-lg:items-start max-lg:w-full'>
                        <div className='flex items-center gap-1 max-lg:hover:text-[#009e74]'>
                            <FaLanguage className='text-[25px] my-0 py-0 max-lg:text-[19px]' />
                            <span className='hidden max-lg:block max-lg:text-[.85rem]'>Change Language</span>
                        </div>
                        <div className='flex items-center gap-1 max-lg:hover:text-[#009e74]'>
                            <IoSunny className='text-[21px] my-0 py-0 max-lg:text-[16px]' />
                            <span className='hidden max-lg:block max-lg:text-[.85rem]'>Enable Dark Mode</span>
                        </div>
                        <div className=' max-lg:hover:text-[#009e74]'>Sign In</div>
                        <div className='
                            bg-emerald-600 opacity-95 text-[.79rem] text-white px-4 py-2 rounded-sm 
                            max-lg:bg-transparent max-lg:opacity-100 max-lg:text-gray-500 max-lg:text-[.85rem]
                            max-lg:pl-0 max-lg:flex-1 max-lg:py-0 max-lg:rounded-none max-lg:hover:text-[#009e74]'>
                            Sign Up
                        </div>
                    </div>
                </div>
            </div>
            <button
                className='
                    lg:hidden rounded-[3px] text-gray-400 border border-neutral-200 *:cursor-pointer'>
                <RxHamburgerMenu
                    className='text-[2.3rem] p-[8px] ' 
                    onClick={toggleClass} 
                    aria-label='Toggle Menu' />
            </button>
        </div>
    );
}

export default Header;