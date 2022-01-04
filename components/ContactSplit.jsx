import React from 'react'
import {section, textLeft, content, photoRight, contactBtn, contactTitle, overlay, highl} from './ContactSplit.module.css';

const ContactSplit = () => {
    return (
        <div className={section}>
            <div className={photoRight}>
                <div className={overlay}>
                    <p><span className={highl}>Location:</span> London, Birmingham, Oxford, Liverpool, York, Manchester</p>
                    <p><span className={highl}>Times Open:</span> Monday-Friday from 8am till 8pm, Weekend 8am till 12pm</p>
                </div>
            </div>
            <div className={textLeft}>
                <div className={content}>
                    <form>
                        <p className={contactTitle}>Contact Form</p>
                        <input type="name" placeholder='Name'/>
                        <input type="email" placeholder='Email'/>
                        <input type="subject" placeholder='Subject'/>
                        <textarea placeholder='Message'></textarea>
                        <button className={contactBtn}>Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactSplit
