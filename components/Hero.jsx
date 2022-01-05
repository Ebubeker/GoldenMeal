import React from 'react';
import {section, content, brand, quote, heroBtn, btnCont} from './Hero.module.css';
import Link from 'next/link';

const Hero = () => {
    return (
        <div className={section}>
            <div className={content}>
                <div>
                    <p className={brand}>Golden Meal</p>
                    <p className={quote}>&quot;Where the food has a golden origin!! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, culpa!&quot;</p>
                    <div className={btnCont}>
                        <Link passhref={`/Menu`} href={`/Menu`}>
                            <p className={heroBtn}>Menu</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;
