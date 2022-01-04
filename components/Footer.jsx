import React from 'react';
import {footer, menus, social, subscription, menuitem, icon, form, submit} from './Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faFacebook, faPinterest, faTiktok } from '@fortawesome/free-brands-svg-icons'; 
import Link from 'next/link';

const Footer = () => {

    const menu = [{name: 'Home', link: " "}, {name: 'Menu', link: "Menu"}, {name: 'Reservation', link: "Reservation"}, {name: 'Online Service', link: "OnlineServ"}, {name: 'Job', link: "Jobs"}, {name: 'About', link: "About"}, {name: 'Contact', link: "Contact"}];
    const networks = [{
        icon:faTwitter,
        text: "Twitter"
    }, {
        icon:faInstagram,
        text: "Instagram"
    }, {
        icon:faFacebook,
        text: "Facebook"
    }, {
        icon:faPinterest,
        text: "Pinterest"
    }, {
        icon:faTiktok,
        text: "Tiktok"
    }];

    return (
        <footer className={footer}>
            <div className={menus}>
                <h3>Menus</h3>
                {menu.map((men)=>(
                    <div key={men.name} >
                        <Link passhref href={`/${men.link}`}>
                            <p className={menuitem}>{men.name}</p>
                        </Link>
                    </div>
                ))}
            </div>
            <div className={social}>
                <h3>Social Network</h3>
                {networks.map((net)=>(
                    <div key={net.name}>
                        <Link passhref href={`/${net.text}`}>
                            <p><FontAwesomeIcon className={icon} icon={net.icon}/> | {net.text}</p>
                        </Link>
                    </div>
                ))}
            </div>
            <div className={subscription}>
                <h3>Subsribe to our newsletter</h3>
                <form className={form}>
                    <input type="email" placeholder='Email...' />
                    <button className={submit}>Subscribe</button>
                </form>
            </div>
        </footer>
    )
}

export default Footer
