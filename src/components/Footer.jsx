import React from "react";

import styles from './component_css/Footer.module.css';

function Footer() {

    return(
        <div className={styles.footer}>
            <div className={styles.footer_start}>
                <h1>We Would Love For You to Visit Soon!</h1>
            </div>
            <div>
                <h2>Hours:</h2>
                <h4>M-F: 9am - 5pm</h4>
                <h2>Email:</h2>
                <h4>souldeeplife@gmail.com</h4>
            </div>
            <div className={styles.socials}>
                <a href="https://www.facebook.com/SoulDeepLife/?hc_ref=ARQksql18gBASM8xkYt608htSsVHXoAK34ohihxtaQWDznq4eoGf1NiDN5Y8_U7ZzzE&ref=nf_target&__tn__=kC-R" class="fa fa-facebook"></a>
                <a href="https://www.linkedin.com/in/brenda-martinez-zen1/linkedin.com" class="fa fa-linkedin"></a>
                <a href="https://www.instagram.com/brenda.martinez.psychic/" class="fa fa-instagram"></a>
            </div>
        </div>
    );
}

export default Footer;