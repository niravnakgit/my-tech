import Link from 'next/link'
import React from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'

// components
import ImgComponent from '@/components/ImgComponent/ImgCompoenent';

// images
import Logo from '@/assets/images/logo.svg';
import dashboardIcon from '@/assets/images/dashboard-icon.svg';
import ecommerceIcon from '@/assets/images/ecommerce-icon.svg';
import DownArrow from '@/assets/images/down-arrow.svg';
import ProjectIcon from '@/assets/images/project-icon.svg';
import ContactIcon from '@/assets/images/contact-icon.svg';
import FileManagerIcon from '@/assets/images/file-manager-icon.svg';
import ChatIcon from '@/assets/images/chat-icon.svg';
import CalanderIcon from '@/assets/images/calander-icon.svg';

const Sidebar = ({ isSidebarOpen }) => {
  return (
    <div className={`w-[264px] lg:w-[234px] shrink-0 bg-white md:fixed md:left-0 md:top-0 md:z-[999] md:shadow-card-shadow sidebar duration-300 -translate-x-full ${isSidebarOpen ? ' translate-x-0' : ''}`}>
        <div className=' py-6 px-5 text-center'>
            <Link href="/">
                <ImgComponent src={Logo} alt="logo" />
            </Link>
        </div>
        <ul className='py-4 flex flex-col gap-2 sidemenu h-[calc(100dvh-82px)] overflow-y-auto'>
            <li>
                <Link href="#" className=' py-3 px-6 border-l-4 border-l-transparent flex items-center gap-2 text-xxs font-semibold text-black-400 duration-300 capitalize hover:bg-secondary-50 [&.active]:bg-secondary-50 hover:text-secondary-600 [&.active]:text-secondary-600 hover:border-l-secondary-600 [&.active]:border-l-secondary-600 active'>
                    <ImgComponent src={dashboardIcon} alt="dashboard-icon" className=" duration-300"/>
                    Dashboard
                </Link>
            </li>
            <li>
                <Disclosure as="div" defaultOpen={false}>
                    <DisclosureButton className="group py-3 px-6 border-l-4 border-l-transparent flex items-center justify-between gap-2 text-xxs font-semibold text-black-400 duration-300 capitalize hover:bg-secondary-50 [&.active]:bg-secondary-50 hover:text-secondary-600 [&.active]:text-secondary-600 hover:border-l-secondary-600 [&.active]:border-l-secondary-600 w-full">
                        <div className=' flex items-center gap-2'>
                            <ImgComponent src={ecommerceIcon} alt="ecommerce-icon" className=" duration-300"/>
                            E-Commerce
                        </div>
                        <div className=' flex items-center gap-2'>
                            <span className=' inline-block py-0.5 px-1.5 bg-secondary-500 rounded text-[10px] leading-[14px] text-white font-semibold'>2</span>
                            <ImgComponent src={DownArrow} alt="down-arrow" className=" fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180"/>
                        </div>
                    </DisclosureButton>
                    <DisclosurePanel className="mt-2">
                        <ul className='flex flex-col gap-1 sidemenu'>
                            <li>
                                <Link href="#" className=' py-3 px-6 border-l-4 border-l-transparent flex items-center justify-between gap-2 text-xxs font-semibold text-black-400 duration-300 capitalize hover:bg-secondary-50 [&.active]:bg-secondary-50 hover:text-secondary-600 [&.active]:text-secondary-600 hover:border-l-secondary-600 [&.active]:border-l-secondary-600'>
                                Product
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className=' py-3 px-6 border-l-4 border-l-transparent flex items-center justify-between gap-2 text-xxs font-semibold text-black-400 duration-300 capitalize hover:bg-secondary-50 [&.active]:bg-secondary-50 hover:text-secondary-600 [&.active]:text-secondary-600 hover:border-l-secondary-600 [&.active]:border-l-secondary-600'>
                                Categories
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className=' py-3 px-6 border-l-4 border-l-transparent flex items-center justify-between gap-2 text-xxs font-semibold text-black-400 duration-300 capitalize hover:bg-secondary-50 [&.active]:bg-secondary-50 hover:text-secondary-600 [&.active]:text-secondary-600 hover:border-l-secondary-600 [&.active]:border-l-secondary-600'>
                                Orders
                                <span className=' inline-block py-0.5 px-1.5 bg-secondary-500 rounded text-[10px] leading-[14px] text-white font-semibold'>2</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className=' py-3 px-6 border-l-4 border-l-transparent flex items-center justify-between gap-2 text-xxs font-semibold text-black-400 duration-300 capitalize hover:bg-secondary-50 [&.active]:bg-secondary-50 hover:text-secondary-600 [&.active]:text-secondary-600 hover:border-l-secondary-600 [&.active]:border-l-secondary-600'>
                                Customer
                                </Link>
                            </li>
                        </ul>
                    </DisclosurePanel>
                </Disclosure>
            </li>
            <li>
                <Link href="#" className=' py-3 px-6 border-l-4 border-l-transparent flex items-center gap-2 text-xxs font-semibold text-black-400 duration-300 capitalize hover:bg-secondary-50 [&.active]:bg-secondary-50 hover:text-secondary-600 [&.active]:text-secondary-600 hover:border-l-secondary-600 [&.active]:border-l-secondary-600'>
                    <ImgComponent src={ProjectIcon} alt="project-icon" className=" duration-300"/>
                    Project
                </Link>
            </li>
            <li>
                <Disclosure as="div" defaultOpen={false}>
                    <DisclosureButton className="group py-3 px-6 border-l-4 border-l-transparent flex items-center justify-between gap-2 text-xxs font-semibold text-black-400 duration-300 capitalize hover:bg-secondary-50 [&.active]:bg-secondary-50 hover:text-secondary-600 [&.active]:text-secondary-600 hover:border-l-secondary-600 [&.active]:border-l-secondary-600 w-full">
                        <div className=' flex items-center gap-2'>
                            <ImgComponent src={ContactIcon} alt="contact-icon" className=" duration-300"/>
                            Contact
                        </div>
                        <div className=' flex items-center gap-2'>
                            <ImgComponent src={DownArrow} alt="down-arrow" className=" fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180"/>
                        </div>
                    </DisclosureButton>
                    <DisclosurePanel className="mt-2">
                        <ul className='flex flex-col gap-1 sidemenu'>
                            <li>
                                <Link href="#" className=' py-3 px-6 border-l-4 border-l-transparent flex items-center justify-between gap-2 text-xxs font-semibold text-black-400 duration-300 capitalize hover:bg-secondary-50 [&.active]:bg-secondary-50 hover:text-secondary-600 [&.active]:text-secondary-600 hover:border-l-secondary-600 [&.active]:border-l-secondary-600'>
                                Product
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className=' py-3 px-6 border-l-4 border-l-transparent flex items-center justify-between gap-2 text-xxs font-semibold text-black-400 duration-300 capitalize hover:bg-secondary-50 [&.active]:bg-secondary-50 hover:text-secondary-600 [&.active]:text-secondary-600 hover:border-l-secondary-600 [&.active]:border-l-secondary-600'>
                                Categories
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className=' py-3 px-6 border-l-4 border-l-transparent flex items-center justify-between gap-2 text-xxs font-semibold text-black-400 duration-300 capitalize hover:bg-secondary-50 [&.active]:bg-secondary-50 hover:text-secondary-600 [&.active]:text-secondary-600 hover:border-l-secondary-600 [&.active]:border-l-secondary-600'>
                                Orders
                                <span className=' inline-block py-0.5 px-1.5 bg-secondary-500 rounded text-[10px] leading-[14px] text-white font-semibold'>2</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className=' py-3 px-6 border-l-4 border-l-transparent flex items-center justify-between gap-2 text-xxs font-semibold text-black-400 duration-300 capitalize hover:bg-secondary-50 [&.active]:bg-secondary-50 hover:text-secondary-600 [&.active]:text-secondary-600 hover:border-l-secondary-600 [&.active]:border-l-secondary-600'>
                                Customer
                                </Link>
                            </li>
                        </ul>
                    </DisclosurePanel>
                </Disclosure>
            </li>
            <li>
                <Link href="#" className=' py-3 px-6 border-l-4 border-l-transparent flex items-center gap-2 text-xxs font-semibold text-black-400 duration-300 capitalize hover:bg-secondary-50 [&.active]:bg-secondary-50 hover:text-secondary-600 [&.active]:text-secondary-600 hover:border-l-secondary-600 [&.active]:border-l-secondary-600'>
                    <ImgComponent src={FileManagerIcon} alt="file-manager" className=" duration-300"/>
                    File Manager
                </Link>
            </li>
            <li>
                <Link href="#" className=' py-3 px-6 border-l-4 border-l-transparent flex items-center gap-2 text-xxs font-semibold text-black-400 duration-300 capitalize hover:bg-secondary-50 hover:text-secondary-600 hover:border-l-secondary-600'>
                    <ImgComponent src={ChatIcon} alt="chat-manager" className=" duration-300"/>
                    Chat
                </Link>
            </li>
            <li>
                <Link href="#" className=' py-3 px-6 border-l-4 border-l-transparent flex items-center gap-2 text-xxs font-semibold text-black-400 duration-300 capitalize hover:bg-secondary-50 hover:text-secondary-600 hover:border-l-secondary-600'>
                    <ImgComponent src={CalanderIcon} alt="calander-manager" className=" duration-300"/>
                    Calendar
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar
