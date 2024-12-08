import React from 'react'

// components
import ImgComponent from '../ImgComponent/ImgCompoenent';

const TopCatCard = (props) => {
    const {CaegoryTitle, RevenuePercent, categoryPrice, categoryImg, type} = props;
  return (
    <div className='flex justify-between items-center gap-3'>
        <div className=' flex items-center gap-3'>
            <ImgComponent src={categoryImg} alt={CaegoryTitle}  className=" w-10 shrink-0"/>
            <div className=' flex flex-col gap-0.5'>
                <p className=' text-xxs font-medium capitalize text-black-500 xl:w-[110px] lg:w-full truncate'>{CaegoryTitle}</p>
            </div>
        </div>
        <div className=' flex gap-2'>
          <p className=' text-xxs font-medium capitalize text-black-500 truncate'>{categoryPrice}</p>
          <p className={`py-0.5 px-1.5 rounded-md text-xxxs font-semibold ${(type === "smartphone" && " bg-[#E9FAF7] text-[#1A9882]") || (type === "tablet" && " bg-[#FFF0EA] text-[#EB3D4D]") || (type === "earphone" && " bg-[#E9FAF7] text-[#22CAAD]") || (type === "laptop" && " bg-[#FEECEE] text-[#EB3D4D]") || (type === "mouse" && " bg-[#EAF8FF] text-secondary-500") || (type === "harddisk" && " bg-[#FFFAE7] text-[#F9C80E]") || (type === "camera" && " bg-[#E9E9EA] text-black-900") }`}>{RevenuePercent}</p>
        </div>
    </div>
  )
}

export default TopCatCard
