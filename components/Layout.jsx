import React from 'react';
import { Navbar } from '.';
import {Footer} from '.';

const Layout = ({children}) => {
    return (
        <>
            <Navbar/>
            {children}
            <Footer/>
        </>
    )
}

export default Layout
