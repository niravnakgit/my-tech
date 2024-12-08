import React from 'react'

// components
import ImgComponent from '@/components/ImgComponent/ImgCompoenent';

// images
import CaretUpIcon from '@/assets/images/careet-up.svg';

const SummeryCard = (props) => {
    const {CardTitle, CardTotal, CardImg, CardPercent, TodayIncrease} = props;
  return (
    <div className=' p-5 bg-white rounded-xl flex flex-col gap-4 shadow-card-shadow'>
        <div className=' flex justify-between items-start gap-4'>
            <div className=' flex flex-col gap-2'>
                <p className=' text-xs xl:text-xxs font-medium text-black-300 capitalize'>{CardTitle}</p>
                <p className=' text-xl xl:text-lg lg:text-md font-semibold text-black-500'>{CardTotal}</p>
            </div>
            <ImgComponent src={CardImg} alt={CardTitle} className=" w-9 shrink-0"/>
        </div>
        <div className=' flex gap-1'>
            <p className=' text-xxs text-[#1A9882] font-bold inline-flex'>{CardPercent}%
                <ImgComponent src={CaretUpIcon} alt="caret-icon" />
            </p>
            <p className=' text-xxs text-gray-400 font-semibold inline-flex'>+${TodayIncrease} today</p>
        </div>
    </div>
  )
}

export default SummeryCard
