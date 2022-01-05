import React from 'react'
import { imagebox } from './OneLineImage.module.css';
import Image from 'next/image';

const OneLineImage = ({url}) => {
    return (
        <div className={imagebox}>
            <Image src={url}  />
        </div>
    )
}

export default OneLineImage
