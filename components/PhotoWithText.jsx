import React, {useRef, useEffect} from 'react';
import {section, textLeft, title, paragraph, photoRight, content} from './PhotoWithText.module.css';

const PhotoWithText = ({pos, titlepo, text, image}) => {

    if(pos === "right"){
        return (
            <div className={section}>
                <div className={textLeft}>
                    <div className={content}>
                        <p className={title}>{titlepo}</p>
                        <p className={paragraph}>{text}</p>
                    </div>
                </div>
                <div style={{backgroundImage: `url("${image}")`}}className={photoRight}>

                </div>
            </div>
        )
    }else if(pos === "left"){
        return (
            <div className={section}>
                <div style={{backgroundImage: `url("${image}")`}}className={photoRight}>

                </div>
                <div className={textLeft}>
                    <div className={content}>
                        <p className={title}>{titlepo}</p>
                        <p className={paragraph}>{text}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default PhotoWithText;
