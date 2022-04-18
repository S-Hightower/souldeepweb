import React, { useState } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import styles from "./view_css/PastLife.module.css";

const PastLife = () => {

    // const [isActive, setIsActive] = useState(false);

    // const AccordionData = [
    //     {
    //     title:"Main Past Life Reading & Clearing",
    //     content: "​Who you are at soul level is brought to light, your true energy body is discovered, as well as what your soul strengths are.  From there the blocks and restrictions from your past which are affecting your present are uncovered.  Once your blocks and restrictions are revealed, through the stories of your past, you are able to understand the circumstances behind the choices you've made. It's those choices that  have created the blocks and restrictions, then and now. From there we are able to clear the blocks and restrictions helping you move forward into the life you were meant to live."},

    //     {title:"Akashic Clearing of Properties",
    //     content: "Our properties can carry unwanted negative energy of all forms; many of which have been there long before any of us came along. This reading identifies what negative energies are present. The energies are then cleared at the Akashic level. This reading is great for those that have done the Main reading, because we are energetically drawn to places that are like us.  Many times your home will no longer resonate with you once the main reading and clearing is done. It is also great for properties that are not selling and no one seems to know why, as well as for homes that are newly purchased where you want a clean slate moving in. (A recommended add-on to the Main Reading)"}
    // ];

    // const { title, content } = AccordionData;







    return (
        <>
        <Header />
        <div className={styles.container}>
            <div class={styles.pastlife_intro}>
                <h1>Akashic Readings and Clearings</h1>
                <h1>(Past & Present Life)</h1>
            </div>



            <div class="pastlife-body">
                <h1>Main Past Life Reading & Clearing</h1>
                <h4>​Who you are at soul level is brought to light, your true energy body is discovered, as well as what your soul strengths are.  From there the blocks and restrictions from your past which are affecting your present are uncovered.  Once your blocks and restrictions are revealed, through the stories of your past, you are able to understand the circumstances behind the choices you've made. It's those choices that  have created the blocks and restrictions, then and now. From there we are able to clear the blocks and restrictions helping you move forward into the life you were meant to live.</h4>
            <br />
                <h1>Akashic Clearing of Properties</h1>
                <h4>Our properties can carry unwanted negative energy of all forms; many of which have been there long before any of us came along. This reading identifies what negative energies are present. The energies are then cleared at the Akashic level. This reading is great for those that have done the Main reading, because we are energetically drawn to places that are like us.  Many times your home will no longer resonate with you once the main reading and clearing is done. It is also great for properties that are not selling and no one seems to know why, as well as for homes that are newly purchased where you want a clean slate moving in. (A recommended add-on to the Main Reading)</h4>
            <br />
                <h1>Relationship Reading</h1>
                <h4>The relationship session is designed to offer insight and perspective on how a relationship contributes to our own experience.  I investigate specifically what energy blocks and restrictions may be negatively affecting my client(s) in the area of relationships, as well as the blocks that are unique to the particular relationship in question. The reading is not limited to romantic relationships and partnerships. It can be done for parent/child, siblings, business partners and close friends. The goal is to encourage both people to regard each other from a Soul perspective, to know why they have chosen to experience each other, and to acknowledge and clear blocks and restrictions that may have been affecting the relationship. (Also a Add-on to the Main reading)</h4>
            <br />
                <h1>Life Situation Reading</h1>
                <h4>This reading is designed for clients that have already done the main reading and want to resolve specific issues that they are currently encountering – However it can also be adapted for new clients as well. Clearing work can be like peeling an onion - there are lots and lots of layers of negativity to be cleared. This reading with help you with the everyday occurrences that seem to pile up and have you asking “Ok what else can happen”- such as: your car broke down, your boss passed you up for the promotion you were in line for, your child got in a fight, the dishwasher sprang a leak and your floors are ruined, your best friend has stopped talking to you and you have a sinus infection... This reading is interactive in that the client will describe their situations as well let me know why they think things are happening, and what their intention is for the resolution of the situations. I go into the records and find the underlying energetic blocks and restrictions that surround these situations and the choices that were made to uphold this energy, so that it can be cleared. (Suggested Follow up Reading to Continue Your Growth Path)</h4>
            <br />
                <h1>Life Lesson Readings</h1>
                <h4>This reading revolves entirely around our life lessons. We are not here to be in school, but our Soul does chooses lessons or experiences that help in the exploration of its divinity (Many of these lessons need to be learned the hard way) The Soul can experience itself in these types of situations in a varied way. Our life lessons represent the experiences our Soul is choosing to examine in this lifetime. They are themes of sorts, chosen so that we can experience our Divinity and more fully express our true nature.  This reading helps explain why we have the experiences we do, and helps give permission to experience our life in the way we designed it. (Can be an Add-on to Main Reading or as a Follow-up session)</h4>
            <br />
                <h1>Spirit Guides - Inner team & Outer team</h1>
                <h4>Spirit Guides are Souls who have had incarnations on earth before. They assist us in our spiritual development, and help in the fulfilling of our highest path and purpose for this incarnation. Our Guides assist us, protect us, and inspire our creativity. They also provide us with information and guidance.</h4>
                <h4>Your inner Circle of Guides is your very own personal team, exclusively assigned to you. This reading helps you understand who your Spirit Guides are, and who each personal guide is at soul level, what traits and energy they bring to your life as well as how they try to communicate with you, and sometimes even a message they would like you to receive.  With this reading you go home with a comprehensive in-depth report on each of your guides so that you have the opportunity to know and work with them yourself on a personal level.</h4>
                <h4>Your Outer team of guides are busy – they have more than one person they are helping at a time. There are seven guides, each in charge of a specific area of your life. They are not involved with the small details of your day to day lives and do not guide you through everyday experiences like your inner team does. Your Outer team works on your behalf as needed.  It is interesting to know who these guides are, based on their energy centers of training. This lets you know what kind of assistance is present and gives us clues to the energies we may want to focus on within certain life areas.</h4>
                <p>This Reading is a combination of both Guide Teams giving you a full picture of the Guides and the Guidance they offer</p>
            <br />
                <h1>Most Soul Realignment readings can be done not only for you, but for your children, your spouse, your significant other, and members of your household as well as Close friends, so that you can connect with them on a deeper level. </h1>
            <br />
                <h1>***If you would like to become a certified Soul Realignment Practitioner yourself - click this link for more information: <a href="https://andreahess.isrefer.com/go/SRCert/SoulDeepLife/">Click Here</a></h1>
            </div>
        </div>
        <Footer />
        </>
    )
};

export default PastLife;