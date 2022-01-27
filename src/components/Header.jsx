import React from "react";
import { Link } from "react-router-dom";

import styles from './component_css/Header.module.css';

function Header() {

    return(
        <div className={styles.container}>
            <div className={styles.header}>
            <div className={styles.links}>
                <Link to={'/'}>
                    <h1>Soul Deep Life</h1>
                </Link>
                <Link to={'/about'}>
                    <p>About</p>
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
            </div>{/* header */}
        </div>//container
    );
}

export default Header;