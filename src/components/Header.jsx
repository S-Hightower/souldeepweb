import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import styles from './component_css/Header.module.css';
import { CSSTransition } from "react-transition-group"

import { ReactComponent as WaveIcon } from './component_css/icons/wave.svg';

function Header() {

    return(
        <Navbar>
            <NavItem icon={< WaveIcon />}>
                <DropdownMenu></DropdownMenu>
            </NavItem>
        </Navbar>
    );
}

function Navbar(props) {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">{props.children}</ul>
        </nav>
    );
}

function NavItem(props) {
    const [ open, setOpen ] = useState(false);

    return (

    );
}

    return(
        <div className={styles.header}>
        <div className={styles.links}>
            <Link to={'/'}>
                <h1>Soul Deep Life</h1>
            </Link>
            <Link to={'/about'}>
                <p>About</p>
            </Link>
            <Link to={'/testimonials'}>
                <p>Testimonials</p>
            </Link>
            <Link to={'/contact'}>
                <p>Contact</p>
            </Link>
            <Link to={'/resources'}>
                <p>Resources</p>
            </Link>
            <Link to={'/reiki'}>
                <p>Reiki</p>
            </Link>
            <Link to={'/pastlife'}>
                <p>Past Life Readings & Clearings</p>
            </Link>
            <Link to={'/energyclearing'}>
                <p>Energetic Emotion Body Clearing</p>
            </Link>
            <Link to={'/soulcoaching'}>
                <p>Soul Coaching</p>
            </Link>
        </div>
        </div>
    );
}

export default Header;