import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import styles from "./view_css/SoulCoaching.module.css";

function SoulCoaching() {
    return (
        <>
        <Header />
        <div className={styles.container}>
            <div className={styles.soulcoaching_body}>
                <h3>Brenda's approach to coaching is unconventional and unusual. She will meet you where you are. She will help you decipher where your soul is designed to be, and will guide you in finding that both of those places are not outside of you, but simply a journey of your soul's evolution to find itself.</h3>
                <h3>With her background in Reiki-energy work and star chart knowledge(Astrology), tapping into your past & past lives with Akashic work, emotional body release, and psychic abilities, she can help your soul find its true north and help you discover the essence of your soul design.</h3>
                <h2>Every client is different, every soul is unique.</h2>
                <h2>Every soul's journey is sacred and beautiful.</h2>
            </div>
        </div>
        <Footer />
        </>
    )
};

export default SoulCoaching;