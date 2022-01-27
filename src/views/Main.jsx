import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import { Link } from 'react-router-dom';

import styles from "./view_css/Main.module.css"

function Main() {
    return (
        <div className={styles.container}>
        <Header />
            <div className={styles.index_body}>
                <div className={styles.service_group}>
                    <Link to={'/soulcoaching'}>
                    <h1>Soul Coaching</h1>
                    </Link>
                    <p>I help my clients connect to their soul energy, enabling them to see the way in which they use their beliefs as a limiting shield. I help them see, energetically how, when they break down the wounds that created their beliefs, so that they can be transmuted into their greatest assets.</p>
                </div>
                <div className={styles.service_group}>
                    <Link to={'/energyclearing'}>
                    <h1>Emotional Body Release & Clearing</h1>
                    </Link>
                    <p>By energetically identifying trapped emotions we are able to bring them to the surface, face them, create a healthier emotion to replace the old emotion, and ultimately clear them. This helps you move forward gently into your desired life.</p>
                </div>
                <div className={styles.service_group}>
                    <Link to={'/pastlife'}>
                    <h1>Certified Level 3 Soul Realignment - Past Life - Akashic Readings</h1>
                    </Link>
                    <p>Helping you validate who you are truly designed to be, to clear blocks, restrictions & karma all to assist you in moving forward to an empowered place.Reading offerings range from extensive personal readings, relationship readings to knowing your guides.</p>
                </div>
                <div className={styles.service_group}>
                    <Link to={'/reiki'}>
                    <h1>Certified Reiki Master Teacher & Practitioner</h1>
                    </Link>
                    <p>Personal Sessions, local and long distant. Private & Group Classes - Reiki 1, 2, 3 & Master Teacher</p>
                </div>
                <div className={styles.service_group}>
                    <h1>True Sidereal Astrology</h1>
                    <p>Leading Edge Readings of your natal chart by two premier astrologers and mystics. Please visit <a href="http://www.fsastrology.com/">Free Spirits Astrology</a> for more information.</p>
                </div>
                <div className={styles.service_group}>
                    <h1>Oracle Card Readings and Intuitive Discovery</h1>
                    <p>Brenda uses a variety of Oracle card decks, using her intuition and higher guidance to bring you the information your higher-self asks about.  She is a student of vibrational intentions and will always bring forth messages designed to enhance, uplift and empower you and the situations you may inquire about.</p> <h4>Readings are $1 a minute and can be done via Zoom, Facebook Messenger or in person (travel time is extra).</h4>
                </div>
                <div className={styles.service_group_extra}>
                    <p>All Services Available via Zoom or in Person</p>
                </div>
            </div>
        <Footer />
        </div >
    )
}

export default Main;