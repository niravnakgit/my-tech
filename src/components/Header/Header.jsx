import React from 'react'
import Link from 'next/link';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

// components
import ImgComponent from '@/components/ImgComponent/ImgCompoenent';

// images
import searchIcon from '@/assets/images/search-icon.svg';
import CalIcon from '@/assets/images/calander-icon.svg';
import NotificationIcon from '@/assets/images/notification-icon.svg';
import EnvelopIcon from '@/assets/images/envelop-icon.svg';
import DownArrow from '@/assets/images/down-arrow.svg';
import HamburgerIcon from '@/assets/images/hamburger.png';
import CloseIcon from '@/assets/images/close.png';

const Header = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <header className={`mb-6 pr-6 xl:pr-4 flex items-center justify-between ${isSidebarOpen ? 'open-header' : ''}`}>
        <div className=' relative grow'>
            <input type="text" className=' py-2 pr-2 pl-10 xs:pl-7 w-full xs:w-[106px] outline-none bg-transparent placeholder:text-xxs placeholder:text-gray-400 placeholder:capitalize placeholder:font-medium text-xxs text-black-700 font-medium' placeholder='Search'/>
            <ImgComponent src={searchIcon} alt="search-icon" className=" absolute top-1/2 left-2 xs:left-1 -translate-y-1/2 xs:w-4"/>
        </div>
        <ul className=' flex items-center gap-8 xs:gap-3'>
            <li className=' shrink-0'>
                <Link href="#">
                    <ImgComponent src={CalIcon} alt="calander-icon" />
                </Link>
            </li>
            <li className=' relative shrink-0'>
                <Link href="#">
                    <ImgComponent src={NotificationIcon} alt="notification-icon" />
                </Link>
                <span className=' inline-block py-0.5 px-1.5 bg-secondary-500 rounded text-[10px] leading-[14px] text-white font-semibold absolute -top-2.5 -right-2.5'>2</span>
            </li>
            <li className=' relative shrink-0'>
                <Link href="#">
                    <ImgComponent src={EnvelopIcon} alt="envelop-icon" />
                </Link>
                <span className=' inline-block py-0.5 px-1.5 bg-secondary-500 rounded text-[10px] leading-[14px] text-white font-semibold absolute -top-2.5 -right-2.5'>2</span>
            </li>
            <li className=' relative shrink-0'>
                <Link href="#" className=' w-7 h-7 rounded-full bg-[#E0E2E7] block'></Link>
            </li>
            <li className=' shrink-0 leading-[0px]'>
                 <Menu>
                    <MenuButton className="inline-flex items-center gap-3 pl-4 xs:pl-2 border-l border-l-gray-50">
                        <div className=' w-8 h-8 xs:w-7 xs:h-7 rounded-full bg-[#E0E2E7] relative before:w-2.5 before:h-2.5 before:rounded-full before:bg-[#22CAAD] before:border-2 before:border-white before:absolute before:bottom-0 before:right-0 before:block shrink-0'></div>
                        <div className=' flex flex-col items-start gap-0.5 xs:hidden'>
                            <p className=' text-xxs text-black-500 font-medium capitalize max-w-20 truncate'>Jenil Patel</p>
                            <p className=' text-xxxs text-black-400 font-medium capitalize max-w-20 truncate'>Manager</p>
                        </div>
                        <ImgComponent src={DownArrow} alt="down-arrow" className=" xs:hidden"/>
                    </MenuButton>

                    <MenuItems
                    transition
                    anchor="bottom end"
                    className="mt-2 w-52 origin-top-right bg-white rounded-xl border border-white/5 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 shadow"
                    >
                    <MenuItem>
                        <button className="group text-black-500 text-xxs flex w-full items-center gap-2 py-1 px-3 duration-300 hover:bg-gray-100 capitalize">
                        Edit
                        </button>
                    </MenuItem>
                    <MenuItem>
                        <button className="group text-black-500 text-xxs flex w-full items-center gap-2 py-1 px-3 duration-300 hover:bg-gray-100 capitalize">
                        Duplicate
                        </button>
                    </MenuItem>
                    <MenuItem>
                        <button className="group text-black-500 text-xxs flex w-full items-center gap-2 py-1 px-3 duration-300 hover:bg-gray-100 capitalize">
                        Archive
                        </button>
                    </MenuItem>
                    <MenuItem>
                        <button className="group text-black-500 text-xxs flex w-full items-center gap-2 py-1 px-3 duration-300 hover:bg-gray-100 capitalize">
                        logout
                        </button>
                    </MenuItem>
                    </MenuItems>
                </Menu>
            </li>
            <li className=' hidden md:inline-block shrink-0 leading-[0px]'>
                <button className='relative menu-btn' onClick={toggleSidebar}>
                    <ImgComponent
                    src={isSidebarOpen ? CloseIcon : HamburgerIcon}
                    alt={isSidebarOpen ? 'Close' : 'Hamburger'}
                    className="w-6"
                    />
                </button>
            </li>
        </ul>
    </header>
  )
}

export default Header
