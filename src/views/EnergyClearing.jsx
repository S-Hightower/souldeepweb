import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import styles from "./view_css/EnergyClearing.module.css";

function EnergyClearing() {
    return (
        <>
        <Header />
        <div className={styles.container}>
            <div className={styles.energy_intro}>
                <h1>Emotional Body Release Technique</h1>
            </div>
            <div className={styles.energy_body}>
                    <h4>Emotions can be trapped in our bodies without us knowing, or being aware of what they are.  They can be created in childhood, in our formattable teenage years, early adult traumas and/or handed down to us from our parents, grandparents and sometimes from many generations back, they can also be trapped in our bodies from past-lives. Little and large things happen to us and we perceive and handle them through our emotions, but if we don't fully process them, they become trapped and live in our body. This can create havoc, and a lack of health (emotional, physical and spiritual). </h4>
                <hr />
                    <h4>Through Energetic Emotion Body Clearing, we work together to not only find the emotions, to break down any heart walls you might have created to help protect your heart, but we dive deep into the cause of, or the starting point of the emotion to remove it so that you can "feel" better.  And, by doing this you are allowing healing for yourself as well as helping an changing past and future timelines for your families lineages. </h4>
                <hr />
                    <h4>With my psychic and akashic knowledge I am able to dive deep and uncover many insights to help you connect an understand where and how these emotions have impacted you, so that they can clear in a full and deep manor. </h4>
                <hr />
                    <h4>Another important part of this clearing, is us working together to find what emotions from your higher self are in better alignment with what you want. When you clear something, it's smart to set your intentions to what you want, what is in your highest good? By doing this, you clear what is no longer serving you, and replacing it with what will. </h4>
                <hr />
                    <h4>This clearing is always gentle, easy and even though it may bring up old wounds, it is quick and shifts you in a beautiful subtle way!</h4>
                <hr />
                {/* <h1>Emotional Body Release Technique $87/1 hour session - Package deals available</h1> */}
            </div>
        </div>
        <Footer />
        </>
    )
};

export default EnergyClearing;