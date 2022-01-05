import React, {useRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars, faTimes} from '@fortawesome/free-solid-svg-icons'
import {content, reservation, menu, icon, iconicon, openMenu, navItem, navLinks, closeIcon, closeMenu, brandName} from './Navbar.module.css';
import Link from 'next/link';
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;


const Navbar = () => {

    const menuBar = useRef(null);
    
    const menu = [{name: 'Home', link: ""}, {name: 'Menu', link: "Menu"}, {name: 'Reservation', link: "Reservation"}, {name: 'Online Service', link: "OnlineServ"}, {name: 'Job', link: "Jobs"}, {name: 'About', link: "About"}, {name: 'Contact', link: "Contact"}];

    const open = ()=>{
        menuBar.current.className = openMenu;
        menuBar.current.style.display = "flex";
    }

    const close = ()=>{
        menuBar.current.className = closeMenu;
        setTimeout(() => {
            
            menuBar.current.style.display = "none";
        }, 200);
    }

    return (
        <nav>
            <div className={content}>
                <div className={reservation}>
                    <p>
                        Reservation
                    </p>
                </div>
                <div className={menu}>
                    <div onClick={open} className={icon}>
                        <FontAwesomeIcon className={iconicon} icon={faBars}/>
                    </div>
                </div>
            </div>
            <div ref={menuBar} className={openMenu}>
                <FontAwesomeIcon onClick={close} className={closeIcon} icon={faTimes}/>
                <div className={navLinks}>
                    {menu.map((men)=>{
                        if(men.name === "Home"){
                            return(
                                <div onClick={close}>
                                    <Link key={men.name} href={`/`}>
                                        <p className={navItem}>{men.name}</p>
                                    </Link>
                                </div>
                            )
                        }else{
                            return(
                                <div onClick={close}>
                                    <Link key={men.name} href={`/${men.link}`}>
                                        <p className={navItem}>{men.name}</p>
                                    </Link>
                                </div>
                            );
                        }
                    })}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
