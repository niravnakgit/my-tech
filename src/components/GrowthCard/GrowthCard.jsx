import React from 'react'

// components
import ImgComponent from '../ImgComponent/ImgCompoenent';

const GrowthCard = (props) => {
    const {countryTitle, countryCustomer, growthPercent, countryImg} = props;
  return (
    <div className='flex justify-between items-center gap-3'>
        <div className=' flex items-center gap-3'>
            <ImgComponent src={countryImg} alt={countryTitle}  className=" w-10 shrink-0"/>
            <div className=' flex flex-col gap-0.5'>
                <p className=' text-xxs font-medium capitalize text-black-500 truncate'>{countryTitle}</p>
                <p className=' text-xxxs text-gray-500 capitalize'>{countryCustomer}</p>
            </div>
        </div>
        <div className=' flex items-center gap-2'>
            <div className=' w-16 h-2 relative bg-gray-100 rounded-full'>
              <div className={`absolute top-0 left-0 h-full rounded-full ${(countryTitle === 'USA' && "bg-[#22CAAD]") || (countryTitle === 'Japan' && "bg-[#F86624]") || (countryTitle === 'France' && "bg-[#F9C80E]") || (countryTitle === 'Germany' && "bg-[#2086BF]") || (countryTitle === 'South Korea' && "bg-[#EB3D4D]")}`} style={{width: `${growthPercent}%`}}></div>
            </div>
          <p className=' text-xxxs font-semibold capitalize text-black-400 truncate'>{growthPercent}%</p>
        </div>
    </div>
  )
}

export default GrowthCard
