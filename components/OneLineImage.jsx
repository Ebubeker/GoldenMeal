import React from 'react'
import { imagebox, img } from './OneLineImage.module.css';
import Image from 'next/image';

const OneLineImage = ({url}) => {
    return (
        <div className={imagebox}>
            <Image src={url} className={img} />
        </div>
    )
}

export default OneLineImage
