import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import styles from './component_css/Header.module.css';
import { CSSTransition } from "react-transition-group"

function Header() {

    return (
        <Navbar>
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
            </div>
                <NavItem>
                    <DropdownMenu></DropdownMenu>
                </NavItem>
        </Navbar>
    );
}

function Navbar(props) {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navbar_nav}>{props.children}</ul>
        </nav>
    );
}

function NavItem(props) {
    const [open, setOpen] = useState(false);

    return (
        <li className={styles.nav_item}>
            <button href="#" className={styles.icon_button} onClick={() => setOpen(!open)}>
                <p className={styles.icon_p}>Services</p>
            </button>

            {open && props.children}
        </li>
    );
}

function DropdownMenu() {
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    }, [])

    function calcHeight(el) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    function DropdownItem(props) {
        return (
            <a href="#" className={styles.menu_item} onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                {props.children}
            </a>
        );
    }


    return (
        <div className={styles.dropdown} style={{ height: menuHeight }} ref={dropdownRef}>

            <CSSTransition
                in={activeMenu === 'main'}
                timeout={500}
                classNames={styles.menu_primary}
                unmountOnExit
                onEnter={calcHeight}>
                <div className={styles.menu}>
                    <DropdownItem><Link to={'/reiki'}><p className={styles.linklist}>Reiki</p></Link></DropdownItem>

                    <DropdownItem><Link to={'/pastlife'}><p className={styles.linklist}>Past Life Readings & Clearings</p></Link></DropdownItem>

                    <DropdownItem><Link to={'/energyclearing'}><p className={styles.linklist}>Energetic Emotion Body Clearing</p></Link></DropdownItem>

                    <DropdownItem><Link to={'/soulcoaching'}><p className={styles.linklist}>Spiritual Guidance</p></Link></DropdownItem>
                </div>
            </CSSTransition>
        </div>
    );
}

export default Header;