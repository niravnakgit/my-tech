import React from 'react'
import Image from 'next/image'

const ImgComponent = (props) => {
    const { src, width, height, alt, className } = props

    return (
        <Image
            src={src}
            width={width}
            height={height}
            alt={alt}
            className={className}
        />
    )
}

export default ImgComponent
