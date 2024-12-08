import React from 'react'


// components
import ImgComponent from '@/components/ImgComponent/ImgCompoenent';
import SummeryCard from '@/components/SummeryCard/SummeryCard';
import TitleCard from '@/components/TitleCard/TitleCard';
import TopPrdCard from '@/components/TopPrdCard/TopPrdCard';
import TopCatCard from '@/components/TopCatCard/TopCatCard';
import Button from '@/components/Button/Button';
import GrowthCard from '@/components/GrowthCard/GrowthCard';

// images
import CalanderIcon from '@/assets/images/calander-icon.svg';
import ProjectBadgeIcon from '@/assets/images/project-badge.svg';
import ProgressBadgeIcon from '@/assets/images/progress-badge.svg';
import FinishedBadgeIcon from '@/assets/images/finished-badge.svg';
import UnfinishedBadgeIcon from '@/assets/images/unfinished-icon.svg';
import TargetChartImg from '@/assets/images/target-chart.png';
import RevenueDownIcon from '@/assets/images/revenue-down-icon.svg';
import RevenueUpIcon from '@/assets/images/revenue-up-icon.svg';
import StaticticsIcon from '@/assets/images/statictics-chart.png';
import SalesChart from '@/assets/images/sales-source-chart.png';
import TopPrdImg from '@/assets/images/top-prd-Img.png';
import SmartphoneImg from '@/assets/images/smartphone-icon.svg';
import TabletImg from '@/assets/images/tablet-icon.svg';
import EarphoneImg from '@/assets/images/earphone-icon.svg';
import LaptopImg from '@/assets/images/laptop-icon.svg';
import MouseImg from '@/assets/images/mouse-img.svg';
import HarddiskImg from '@/assets/images/harddidk-img.svg';
import CameraImg from '@/assets/images/camera-img.svg';
import FilterIcon from '@/assets/images/filter-icon.svg';
import DownArrow from '@/assets/images/down-arrow.svg';
import EyeIcon from '@/assets/images/eye-icon.svg';
import DeleteIcon from '@/assets/images/delete-icon.svg';
import PrevIcon from '@/assets/images/prev-arrow.svg';
import growthChart from '@/assets/images/growth-chart.png';
import CountryImg from '@/assets/images/country-img.png';

const Dashboard = () => {

const SummuryData = [
    {id: '1', title: "Total Project", total: '6,784', img: ProjectBadgeIcon, perentage: '10', increase: '150'},
    {id: '2', title: "In Progress", total: '1,920', img: ProgressBadgeIcon, perentage: '10', increase: '150'},
    {id: '3', title: "Finished", total: '4,412', img: FinishedBadgeIcon, perentage: '10', increase: '150'},
    {id: '4', title: "Unfinished", total: '329', img: UnfinishedBadgeIcon, perentage: '10', increase: '150'}
]

const TopProducts= [
    {id: '1', producTitle: "Logic+ Wireless Mouse", ProductType:"Mouse", productPrice: "$1,240", productImg: TopPrdImg},
    {id: '2', producTitle: "PS Wireless Controller", ProductType:"Smartphone", productPrice: "$1,189", productImg: TopPrdImg},
    {id: '3', producTitle: "Ximi Mechanical Keyboard", ProductType:"Smartphone", productPrice: "$1,100", productImg: TopPrdImg},
    {id: '4', producTitle: "Audia Tech Earphone", ProductType:"Earphone", productPrice: "$908", productImg: TopPrdImg},
    {id: '5', producTitle: "Sams S14 Pro", ProductType:"Tablet", productPrice: "$900", productImg: TopPrdImg},
    {id: '6', producTitle: "Sams A13 5G", ProductType:"Smartphone", productPrice: "$870", productImg: TopPrdImg},
    {id: '7', producTitle: "Jsound P01 TWS", ProductType:"Earphone", productPrice: "$870", productImg: TopPrdImg},
]

const TopCategories= [
    {id: '1', CaegoryTitle: "Smartphone", RevenuePercent:"+12%", categoryPrice: "1,509", categoryImg: SmartphoneImg, type:"smartphone"},
    {id: '2', CaegoryTitle: "Tablet", RevenuePercent:"-5%", categoryPrice: "1,460", categoryImg: TabletImg, type:"tablet"},
    {id: '3', CaegoryTitle: "Earphone", RevenuePercent:"0%", categoryPrice: "1,229", categoryImg: EarphoneImg, type:"earphone"},
    {id: '4', CaegoryTitle: "Laptop & PC", RevenuePercent:"+19%", categoryPrice: "982", categoryImg: LaptopImg, type:"laptop"},
    {id: '5', CaegoryTitle: "Mouse", RevenuePercent:"-25%", categoryPrice: "791", categoryImg: MouseImg, type:"mouse"},
    {id: '6', CaegoryTitle: "Hardisk & USB Drive", RevenuePercent:"+11%", categoryPrice: "679", categoryImg: HarddiskImg, type:"harddisk"},
    {id: '7', CaegoryTitle: "Camera", RevenuePercent:"+11%", categoryPrice: "679", categoryImg: CameraImg, type:"camera"},
]

const GrowthList= [
    {id: '1', countryTitle: "USA", countryCustomer:"1,240 Customers", growthPercent: "80", countryImg: CountryImg},
    {id: '2', countryTitle: "Japan", countryCustomer:"1,240 Customers", growthPercent: "60", countryImg: CountryImg},
    {id: '3', countryTitle: "France", countryCustomer:"1,240 Customers", growthPercent: "49", countryImg: CountryImg},
    {id: '4', countryTitle: "Germany", countryCustomer:"1,240 Customers", growthPercent: "100", countryImg: CountryImg},
    {id: '5', countryTitle: "South Korea", countryCustomer:"1,240 Customers", growthPercent: "50", countryImg: CountryImg},
]


  return (
    <>
        <div className=' flex flex-col gap-6 xl:gap-4'>
            <div className=' flex xs:flex-col items-end xs:items-start xs:gap-3 justify-between'>
                <div>
                    <h1 className='text-lg xl:text-md xs:text-sm text-black-700 capitalize'>Welcome Back Jenil</h1>
                    <p className=' mt-2 xl:mt-1 text-sm xl:text-xs xs:text-xxxs text-black-300'>Lorem ipsum dolor si amet welcome back jenil</p>
                </div>
                <button className=' py-2.5 px-3 inline-flex items-center gap-2 border border-gray-100 rounded-lg text-xxs text-black-400 duration-300 capitalize hover:bg-black-400/10'>
                    <ImgComponent src={CalanderIcon} alt="calander-manager" className=" duration-300"/>Select Dates
                </button>
            </div>
            <div className=' grid grid-cols-4 lg:grid-cols-2 xs:grid-cols-1 gap-6 xl:gap-4'>
                {SummuryData.map((data) => {
                    return (
                        <SummeryCard 
                            CardTitle={data.title} 
                            CardTotal={data.total} 
                            CardImg={data.img} 
                            CardPercent={data.perentage} 
                            TodayIncrease={data.increase}
                        />
                    );
                })}
            </div>
            <div className='flex xs:flex-col gap-6 xl:gap-4'>
                <TitleCard title="Target" subtitle="Revenue Target" className="w-[32%] xs:w-full shrink-0">
                    <ImgComponent src={TargetChartImg} alt=" target-chart" className=" block mx-auto"/>
                    <p className='mt-4 mb-2 text-xxs text-gray-500 text-center'>You succeed earn <span className='text-black-500'>$240</span> today, its higher than yesterday</p>
                    <div className=' flex justify-center gap-5'>
                        <div className=' flex flex-col gap-1 text-center'>
                            <p className=' text-xxxs font-medium text-gray-500 capitalize'>Target</p>
                            <p className=' text-base xl:text-sm lg:text-xs font-semibold text-black-500 inline-flex'>$20k <ImgComponent src={RevenueDownIcon} alt="revenue-down-icon" /></p>
                        </div>
                        <div className=' flex flex-col gap-1 text-center'>
                            <p className=' text-xxxs font-medium text-gray-500 capitalize'>Revenue</p>
                            <p className=' text-base xl:text-sm lg:text-xs font-semibold text-black-500 inline-flex'>$16k <ImgComponent src={RevenueUpIcon} alt="revenue-up-icon" /></p>
                        </div>
                        <div className=' flex flex-col gap-1 text-center'>
                            <p className=' text-xxxs font-medium text-gray-500 capitalize'>Today</p>
                            <p className=' text-base xl:text-sm lg:text-xs font-semibold text-black-500 inline-flex'>$1.5k <ImgComponent src={RevenueUpIcon} alt="revenue-up-icon" /></p>
                        </div>
                    </div>
                </TitleCard>
                <TitleCard title="Statistic" subtitle="Revenue and Sales" isMoreOption={false} className="grow">
                    <ImgComponent src={StaticticsIcon} alt="stactics-chart" />
                </TitleCard>
            </div>
            <div className='grid grid-cols-3 lg:grid-cols-1 gap-6 xl:gap-4'>
                <TitleCard title="Sales Source">
                    <ImgComponent src={SalesChart} alt="sales-chart" className=" block mx-auto"/>
                    <div className=' mt-4 flex flex-col gap-3.5'>
                        <div className=' flex justify-between'>
                            <div className='flex items-center gap-2'>
                                <div className=' w-3 h-3 rounded-full bg-secondary-600 shrink-0'></div>
                                <p className=' text-xxs font-medium text-black-400 capitalize'>Official Website</p>
                            </div>
                            <p className=' text-xs font-medium text-black-500'>$10,000</p>
                        </div>
                        <div className=' flex justify-between'>
                            <div className='flex items-center gap-2'>
                                <div className=' w-3 h-3 rounded-full bg-secondary-500 shrink-0'></div>
                                <p className=' text-xxs font-medium text-black-400 capitalize'>Offline Store</p>
                            </div>
                            <p className=' text-xs font-medium text-black-500'>$10,000</p>
                        </div>
                        <div className=' flex justify-between'>
                            <div className='flex items-center gap-2'>
                                <div className=' w-3 h-3 rounded-full bg-secondary-300 shrink-0'></div>
                                <p className=' text-xxs font-medium text-black-400 capitalize'>Amazon Store</p>
                            </div>
                            <p className=' text-xs font-medium text-black-500'>$10,000</p>
                        </div>
                        <div className=' flex justify-between'>
                            <div className='flex items-center gap-2'>
                                <div className=' w-3 h-3 rounded-full bg-secondary-100 shrink-0'></div>
                                <p className=' text-xxs font-medium text-black-400 capitalize'>Reseller</p>
                            </div>
                            <p className=' text-xs font-medium text-black-500'>$10,000</p>
                        </div>
                    </div>
                </TitleCard>
                <TitleCard title="Top Product" subtitle="Top Product in This Month">
                    <div className=' flex flex-col gap-4'>
                        {TopProducts.map((data) => {
                            return (
                                <TopPrdCard producTitle={data.producTitle} ProductType={data.ProductType} productPrice={data.productPrice} productImg={data.productImg}/>
                            )
                        })}
                    </div>
                </TitleCard>
                <TitleCard title="Top Category" subtitle="Top Category in This Month">
                    <div className=' flex flex-col gap-4'>
                        {TopCategories.map((data) => {
                            return (
                                <TopCatCard CaegoryTitle={data.CaegoryTitle} RevenuePercent={data.RevenuePercent} categoryPrice={data.categoryPrice} categoryImg={data.categoryImg} type={data.type}/>
                            )
                        })}
                    </div>
                </TitleCard>
            </div>
            <div className='flex lg:flex-wrap gap-6 xl:gap-4'>
                <div className=' w-[66%] lg:w-full'>
                    <div className=' flex xs:flex-col xs:items-start items-center justify-between py-4 xs:py-2 px-6 xs:px-2 xs:gap-3 bg-white shadow-card-shadow rounded'>
                        <div className=' flex items-center gap-2'>
                            <h6 className=" text-base xl:text-sm text-black-500 font-semibold capitalize">Recent Orders</h6>
                            <p className="py-0.5 px-1.5 rounded-md text-xxxs font-semibold  bg-[#E9FAF7] text-[#1A9882]">+2 Orders</p>
                        </div>
                        <div className=' flex xs:flex-wrap gap-3'>
                            <button className=' py-2.5 px-3 inline-flex items-center gap-2 border border-gray-100 rounded-lg text-xxs text-black-400 duration-300 capitalize hover:bg-black-400/10'>
                                <ImgComponent src={CalanderIcon} alt="calander-manager" className=" duration-300"/>Select Dates
                            </button>
                            <button className=' py-2.5 px-3 inline-flex items-center gap-2 border border-gray-100 rounded-lg text-xxs text-black-400 duration-300 capitalize hover:bg-black-400/10'>
                                <ImgComponent src={FilterIcon} alt="filter-icon" className=" duration-300"/>Filters
                            </button>
                            <Button href="#">See All</Button>
                        </div>
                    </div>
                    <div className=' overflow-x-auto'>
                        <table className=' common-table w-full'>
                            <thead>
                                <tr>
                                    <th>
                                        <div className='flex justify-between items-center'>
                                            <p className='text-xxs text-black-500 font-medium capitalize'>Product</p>
                                            <button>
                                                <ImgComponent src={DownArrow} alt="down-arrow" />
                                            </button>
                                        </div>
                                    </th>
                                    <th>
                                        <div className='flex justify-between items-center'>
                                            <p className='text-xxs text-black-500 font-medium capitalize'>customer</p>
                                        </div>
                                    </th>
                                    <th>
                                        <div className='flex justify-between items-center'>
                                            <p className='text-xxs text-black-500 font-medium capitalize'>total</p>
                                            <button>
                                                <ImgComponent src={DownArrow} alt="down-arrow" />
                                            </button>
                                        </div>
                                    </th>
                                    <th>
                                        <div className='flex justify-between items-center'>
                                            <p className='text-xxs text-black-500 font-medium capitalize'>status</p>
                                            <button>
                                                <ImgComponent src={DownArrow} alt="down-arrow" />
                                            </button>
                                        </div>
                                    </th>
                                    <th>
                                        <div className='flex justify-between items-center'>
                                            <p className='text-xxs text-black-500 font-medium capitalize'>action</p>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className=' flex items-center gap-3 xl:flex-wrap'>
                                                <ImgComponent src={TopPrdImg} alt="prd-img" className=" w-10 shrink-0"/>
                                                <div className=' flex flex-col gap-0.5'>
                                                    <p className=' text-xxs font-medium capitalize text-black-500 truncate'>Handmade Pouch</p>
                                                    <p className=' text-xxxs text-gray-500 capitalize'>+3 other products</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className=' flex flex-col gap-0.5'>
                                                <p className=' text-xxs font-medium capitalize text-black-500 truncate'>John Bushmill</p>
                                                <p className=' text-xxxs text-gray-500 capitalize'>Johnb@mail.com</p>
                                            </div>
                                        </td>
                                        <td>
                                            <p className=' text-xxs font-medium capitalize text-gray-500 truncate'>$121.00</p>
                                        </td>
                                        <td>
                                            <p className="py-0.5 px-1.5 rounded-md text-xxxs font-semibold  bg-[#FFF0EA] text-[#EB3D4D] text-center">Processing</p>
                                        </td>
                                        <td>
                                            <div className=' flex gap-3'>
                                                <button>
                                                    <ImgComponent src={EyeIcon} alt="eye-icon" />
                                                </button>
                                                <button>
                                                    <ImgComponent src={DeleteIcon} alt="delete-icon" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className=' flex items-center gap-3 xl:flex-wrap'>
                                                <ImgComponent src={TopPrdImg} alt="prd-img" className=" w-10 shrink-0"/>
                                                <div className=' flex flex-col gap-0.5'>
                                                    <p className=' text-xxs font-medium capitalize text-black-500 truncate'>Smartwatch E2</p>
                                                    <p className=' text-xxxs text-gray-500 capitalize'>+1 other products</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className=' flex flex-col gap-0.5'>
                                                <p className=' text-xxs font-medium capitalize text-black-500 truncate'>Ilham Budi Agung</p>
                                                <p className=' text-xxxs text-gray-500 capitalize'>ilahmbudi@mail.com</p>
                                            </div>
                                        </td>
                                        <td>
                                            <p className=' text-xxs font-medium capitalize text-gray-500 truncate'>$590.00</p>
                                        </td>
                                        <td>
                                            <p className="py-0.5 px-1.5 rounded-md text-xxxs font-semibold  bg-[#FFF0EA] text-[#EB3D4D] text-center">Processing</p>
                                        </td>
                                        <td>
                                            <div className=' flex gap-3'>
                                                <button>
                                                    <ImgComponent src={EyeIcon} alt="eye-icon" />
                                                </button>
                                                <button>
                                                    <ImgComponent src={DeleteIcon} alt="delete-icon" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className=' flex items-center gap-3 xl:flex-wrap'>
                                                <ImgComponent src={TopPrdImg} alt="prd-img" className=" w-10 shrink-0"/>
                                                <div className=' flex flex-col gap-0.5'>
                                                    <p className=' text-xxs font-medium capitalize text-black-500 truncate'>Smartwatch E1</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className=' flex flex-col gap-0.5'>
                                                <p className=' text-xxs font-medium capitalize text-black-500 truncate'>Ilham Budi Agung</p>
                                                <p className=' text-xxxs text-gray-500 capitalize'>ilahmbudi@mail.com</p>
                                            </div>
                                        </td>
                                        <td>
                                            <p className=' text-xxs font-medium capitalize text-gray-500 truncate'>$590.00</p>
                                        </td>
                                        <td>
                                            <p className="py-0.5 px-1.5 rounded-md text-xxxs font-semibold  bg-[#EAF8FF] text-[#2BB2FE] text-center">Shiped</p>
                                        </td>
                                        <td>
                                            <div className=' flex gap-3'>
                                                <button>
                                                    <ImgComponent src={EyeIcon} alt="eye-icon" />
                                                </button>
                                                <button>
                                                    <ImgComponent src={DeleteIcon} alt="delete-icon" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className=' flex items-center gap-3 xl:flex-wrap'>
                                                <ImgComponent src={TopPrdImg} alt="prd-img" className=" w-10 shrink-0"/>
                                                <div className=' flex flex-col gap-0.5'>
                                                    <p className=' text-xxs font-medium capitalize text-black-500 truncate'>Smartwatch E2</p>
                                                    <p className=' text-xxxs text-gray-500 capitalize'>+1 other products</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className=' flex flex-col gap-0.5'>
                                                <p className=' text-xxs font-medium capitalize text-black-500 truncate'>Ilham Budi Agung</p>
                                                <p className=' text-xxxs text-gray-500 capitalize'>ilahmbudi@mail.com</p>
                                            </div>
                                        </td>
                                        <td>
                                            <p className=' text-xxs font-medium capitalize text-gray-500 truncate'>$590.00</p>
                                        </td>
                                        <td>
                                            <p className="py-0.5 px-1.5 rounded-md text-xxxs font-semibold  bg-[#FFF0EA] text-[#EB3D4D] text-center">Processing</p>
                                        </td>
                                        <td>
                                            <div className=' flex gap-3'>
                                                <button>
                                                    <ImgComponent src={EyeIcon} alt="eye-icon" />
                                                </button>
                                                <button>
                                                    <ImgComponent src={DeleteIcon} alt="delete-icon" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className=' flex items-center gap-3 xl:flex-wrap'>
                                                <ImgComponent src={TopPrdImg} alt="prd-img" className=" w-10 shrink-0"/>
                                                <div className=' flex flex-col gap-0.5'>
                                                    <p className=' text-xxs font-medium capitalize text-black-500 truncate'>Smartwatch E1</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className=' flex flex-col gap-0.5'>
                                                <p className=' text-xxs font-medium capitalize text-black-500 truncate'>Ilham Budi Agung</p>
                                                <p className=' text-xxxs text-gray-500 capitalize'>ilahmbudi@mail.com</p>
                                            </div>
                                        </td>
                                        <td>
                                            <p className=' text-xxs font-medium capitalize text-gray-500 truncate'>$590.00</p>
                                        </td>
                                        <td>
                                            <p className="py-0.5 px-1.5 rounded-md text-xxxs font-semibold  bg-[#EAF8FF] text-[#2BB2FE] text-center">Shiped</p>
                                        </td>
                                        <td>
                                            <div className=' flex gap-3'>
                                                <button>
                                                    <ImgComponent src={EyeIcon} alt="eye-icon" />
                                                </button>
                                                <button>
                                                    <ImgComponent src={DeleteIcon} alt="delete-icon" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                        </table>
                    </div>
                    <div className=' p-6 bg-white flex xs:flex-col xs:gap-3 justify-between items-center'>
                        <p className=' text-xxs font-medium capitalize text-gray-500 truncate'>Showing 1-5 from 100</p>
                        <ul className=' flex gap-2 pagination'>
                            <li>
                                <button className=' w-8 h-8 group rounded-lg bg-[#EAF8FF] hover:bg-[#2086BF] [&.active]:bg-[#2086BF] text-xxs font-medium text-[#2086BF] hover:text-[#EAF8FF] [&.active]:text-[#EAF8FF] flex justify-center items-center duration-300'>
                                    <ImgComponent src={PrevIcon} alt="prev-icon" className="  duration-300 group-hover:brightness-[600]"/>
                                </button>
                            </li>
                            <li>
                                <button className=' w-8 h-8 group rounded-lg bg-[#EAF8FF] hover:bg-[#2086BF] [&.active]:bg-[#2086BF] text-xxs font-medium text-[#2086BF] hover:text-[#EAF8FF] [&.active]:text-[#EAF8FF] flex justify-center items-center duration-300'>1</button>
                            </li>
                            <li>
                                <button className=' w-8 h-8 group rounded-lg bg-[#EAF8FF] hover:bg-[#2086BF] [&.active]:bg-[#2086BF] text-xxs font-medium text-[#2086BF] hover:text-[#EAF8FF] [&.active]:text-[#EAF8FF] flex justify-center items-center duration-300'>2</button>
                            </li>
                            <li>
                                <button className=' w-8 h-8 group rounded-lg bg-[#EAF8FF] hover:bg-[#2086BF] [&.active]:bg-[#2086BF] text-xxs font-medium text-[#2086BF] hover:text-[#EAF8FF] [&.active]:text-[#EAF8FF] flex justify-center items-center duration-300'>3</button>
                            </li>
                            <li>
                                <button className=' w-8 h-8 group rounded-lg bg-[#EAF8FF] hover:bg-[#2086BF] [&.active]:bg-[#2086BF] text-xxs font-medium text-[#2086BF] hover:text-[#EAF8FF] [&.active]:text-[#EAF8FF] flex justify-center items-center duration-300'>...</button>
                            </li>
                            <li>
                                <button className=' w-8 h-8 group rounded-lg bg-[#EAF8FF] hover:bg-[#2086BF] [&.active]:bg-[#2086BF] text-xxs font-medium text-[#2086BF] hover:text-[#EAF8FF] [&.active]:text-[#EAF8FF] flex justify-center items-center duration-300'>
                                    <ImgComponent src={PrevIcon} alt="prev-icon" className="  duration-300 group-hover:brightness-[600] -scale-x-[1]"/>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='w-[32%] lg:w-full shrink-0'>
                    <TitleCard title="Customer Growth" subtitle="Based on Country">
                        <ImgComponent src={growthChart} alt="growth-chart" />
                        <div className='mt-5 flex flex-col gap-4'>
                            {GrowthList.map((data) => {
                                return (
                                    <GrowthCard countryTitle={data.countryTitle} countryCustomer={data.countryCustomer} growthPercent={data.growthPercent} countryImg={data.countryImg}/>
                                )})}
                        </div>
                    </TitleCard>
                </div>
            </div>
        </div>
    </>
  )
}

export default Dashboard