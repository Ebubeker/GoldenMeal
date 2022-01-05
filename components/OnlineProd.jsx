import React, { useRef } from 'react';
import {prodCard, cardCont, prodTitle, prodDesc, hoverItem, prodPrice, prop, orderBtn, img} from './OnlineProd.module.css';
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import Image from 'next/image';

const OnlineProd = ({url, title, desc, incl, loc, price}) => {

    const item = useRef(null)

    const onhover = () => {
        item.current.style.display = "block";
    };

    const onleave = () => {
        item.current.style.display = "none";
    }

    return (
        <div onMouseOver={onhover} onMouseLeave={onleave} className={prodCard}>
            <div className={cardCont}>
                <div className={img} style={{backgroundImage: `url("${url}")`}}/>
                <p className={prodTitle}>{title}</p>
                <p className={prodDesc}>{desc}</p>
            </div>
            <div ref={item} className={hoverItem}>
                <div className={cardCont}>
                    <p className={prodTitle}>Title: {title}</p>
                    <p className={prodPrice}>Price: <span>{price}</span></p>
                    <p className={prop}>Location: {loc}</p>
                    <p className={prop}>Includes:  {incl}</p>
                    <button className={orderBtn}>Order this Product</button>
                </div>
            </div>
        </div>
    )
}

export default OnlineProd;
