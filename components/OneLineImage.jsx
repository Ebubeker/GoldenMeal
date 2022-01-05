import React from 'react'
import { imagebox, img } from './OneLineImage.module.css';
import Image from 'next/image';

const OneLineImage = ({url}) => {
    return (
        <div className={imagebox}>
            <div style={{backgroundImage: `url("${url}")`}} className={img} />
        </div>
    )
}

export default OneLineImage
