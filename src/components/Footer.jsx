import React from "react";

import { SocialIcon } from 'react-social-icons';

import styles from './component_css/Footer.module.css';

function Footer() {

    return(
        <div className={styles.footer}>
            <div className={styles.footer_start}>
                <h1>We Would Love For You to Visit Soon!</h1>
            <div>
                <SocialIcon fgColor="#FFFFFF" url="https://www.facebook.com/SoulDeepLife/?hc_ref=ARQksql18gBASM8xkYt608htSsVHXoAK34ohihxtaQWDznq4eoGf1NiDN5Y8_U7ZzzE&ref=nf_target&__tn__=kC-R" style={{ height: 30, width: 30, marginRight: 5, marginTop:10 }}/>
                <SocialIcon fgColor="#FFFFFF" url="https://www.linkedin.com/in/brenda-martinez-zen1/linkedin.com" style={{ height: 30, width: 30, marginRight: 5, marginTop:10 }}/>
                <SocialIcon fgColor="#FFFFFF" url="https://www.instagram.com/brenda.martinez.psychic/" style={{ height: 30, width: 30, marginRight: 25, marginTop: 10}}/>
            </div>
            </div>
            <div className={styles.footer_info}>
                <h2>Hours:</h2>
                <h4>M-F: 9am - 5pm</h4>
                <h2>Email:</h2>
                <h4>souldeeplife@gmail.com</h4>
            </div>
        </div>
    );
}

export default Footer;