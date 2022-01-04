import React from 'react'
import { imagebox } from './OneLineImage.module.css';

const OneLineImage = ({url}) => {
    return (
        <div className={imagebox}>
            <img src={url} />
        </div>
    )
}

export default OneLineImage
