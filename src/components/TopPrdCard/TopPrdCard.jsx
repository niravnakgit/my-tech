import React from 'react'

// components
import ImgComponent from '../ImgComponent/ImgCompoenent';

const TopPrdCard = (props) => {
    const {producTitle, ProductType, productPrice, productImg} = props;
  return (
    <div className='flex justify-between items-center gap-3'>
        <div className=' flex items-center gap-3'>
            <ImgComponent src={productImg} alt={producTitle}  className=" w-10 shrink-0"/>
            <div className=' flex flex-col gap-0.5'>
                <p className=' text-xxs font-medium capitalize text-black-500 xl:w-32 lg:w-full truncate'>{producTitle}</p>
                <p className=' text-xxxs text-gray-500 capitalize'>{ProductType}</p>
            </div>
        </div>
        <p className=' w-[46px] shrink-0 text-xxs font-medium capitalize text-black-500 truncate'>{productPrice}</p>
    </div>
  )
}

export default TopPrdCard
