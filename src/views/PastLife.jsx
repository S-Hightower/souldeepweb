import React, { useState } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import styles from "./view_css/PastLife.module.css";

import data from './data';
import SingleService from './Service';

const PastLife = () => {

    const [services, setServices] = useState(data);

    return (
        <>
            <Header />
            <div className={styles.container}>
                <div className={styles.pastlife_intro}>
                    <h1>Akashic Readings and Clearings</h1>
                    <h4>(Past & Present Life)</h4>
                </div>
                <main>
                    <div className={styles.pastlife_body}>
                        <section className='info'>
                            {services.map((service) => (
                                <SingleService key={service.id} {...service} />
                            ))}
                        </section>
                    </div>
                </main>
                <div className={styles.pastlife_outro}>
                    <h4>Most soul realignment readings can be done not only for you, but for your children, your spouse, your significant other, members of your household, as well as close friends so that you can connect with them on a deeper level.</h4>
                </div>
                <div className={styles.closer}>
                    <h5>If you would like to become a certified Soul Realignment Practitioner yourself - click this <a href="https://andreahess.isrefer.com/go/SRCert/SoulDeepLife/">link</a> for more information.</h5>
                </div>
            </div>
            <Footer />
        </>
    )
};

export default PastLife;