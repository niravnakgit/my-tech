import React from 'react'

// components
import ImgComponent from '@/components/ImgComponent/ImgCompoenent';

// images
import MoreOptionIcon from '@/assets/images/more-option-icon.svg';

const TitleCard = (props) => {
    const {title, subtitle, isMoreOption = true, className, children} = props;
  return (
    <div className={`p-5 bg-white rounded-xl shadow-card-shadow ${className ? className : ''}`}>
        <div className='mb-5 flex justify-between'>
            <div className='flex flex-col gap-0.5'>
                <h6 className=' text-base xl:text-sm lg:text-xs text-black-500 font-semibold capitalize'>{title}</h6>
                <p className=' text-xxs xl:text-xxxs text-black-300'>{subtitle}</p>
            </div>
            {isMoreOption &&
                <button>
                    <ImgComponent src={MoreOptionIcon} alt="more-option" />
                </button>
            }
        </div>
        {children}
    </div>
  )
}

export default TitleCard
