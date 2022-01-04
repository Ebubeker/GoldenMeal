import React from 'react';
import {list, menuCard, cardTitle, cardPara, menuTitle, menuContain, aligningMenu, singleMenu} from './MenuList.module.css';

const MenuList = () => {

    const eightCourseMenu = [{title: "Raw hand harvested seafood",
                              contain: "aged vinegar, laver, virgin soy"},
                             {title: "Smoked eel",
                              contain: "young almonds, flowers"},
                             {title: "Bone marrow noodles",
                              contain: "mud crab, sour koji, sesame"},
                             {title: "Native marron",
                              contain: "Koshihikari rice, sea urchin butter, maw salted egg yolk, wilted nasturtium"},
                             {title: "Maremma pasture raised duck",
                              contain: "roasted lettuce, black garlic, agretti, seaweed"},
                             {title: "Slow cooked pig jowl",
                              contain: "fermented shiitake custard black pig salami, trotter broth"},
                             {title: "Slow cooked pig jowl",
                              contain: "fermented shiitake custard black pig salami, trotter broth"},
                             {title: "Chocolate",
                              contain: "a moment in time"},];

    return (
        <div className={list}>
            <div className={menuCard}>
                <p className={cardTitle}>EIGHT-COURSE MENU</p>
                <p className={cardPara}>The eight-course menu is available at lunch & dinner</p>
                <div className={aligningMenu}>
                    {eightCourseMenu.map((menu)=>(
                        <div className={singleMenu}>
                            <p className={menuTitle}>{menu.title}</p>
                            <p className={menuContain}>{menu.contain}</p>
                        </div>
                    ))}
                    <div className={singleMenu}>
                        <p className={menuTitle}>Eight-Course Menu $310</p>
                        <p className={menuContain}>Quay Pairing $180 <br /> Sommelier Pairing $230</p>
                    </div>
                </div>
            </div>
            <div className={menuCard}>
                <p className={cardTitle}>SIX-COURSE MENU</p>
                <p className={cardPara}>The six-course menu is available at lunch & dinner</p>
                <div className={aligningMenu}>
                    {eightCourseMenu.map((menu, index)=>(
                        <div key={index} className={singleMenu}>
                            <p className={menuTitle}>{menu.title}</p>
                            <p className={menuContain}>{menu.contain}</p>
                        </div>
                    ))}
                    <div className={singleMenu}>
                        <p className={menuTitle}>Eight-Course Menu $310</p>
                        <p className={menuContain}>Quay Pairing $180 <br /> Sommelier Pairing $230</p>
                    </div>
                </div>
            </div>
            <div className={menuCard}>
                <p className={cardTitle}>DRINKS MENU</p>
                <p className={cardPara}>The eight-course menu is available at lunch & dinner</p>
                <div className={aligningMenu}>
                    {eightCourseMenu.map((menu, index)=>(
                        <div key={index} className={singleMenu}>
                            <p className={menuTitle}>{menu.title}</p>
                            <p className={menuContain}>{menu.contain}</p>
                        </div>
                    ))}
                    <div className={singleMenu}>
                        <p className={menuTitle}>Eight-Course Menu $310</p>
                        <p className={menuContain}>Quay Pairing $180 <br /> Sommelier Pairing $230</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuList;
