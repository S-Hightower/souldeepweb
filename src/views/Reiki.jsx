import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import styles from "./view_css/Reiki.module.css";

function Reiki() {
    return(
        <>
        <Header />
        <div className={styles.container}>
        <div class="reiki-intro">
            <h1>I am a Reiki Master Teacher and Intuitive who assists you in healing yourself</h1>
        </div>
        <div class="reiki-body">
            <h1>Reiki Session</h1>
            <h3>In person, lasting about 1 to 1 1/2 hours.</h3>
            <h4>I like to block 2 hours for this session, so that we have time to talk beforehand, and afterwards. The session can go from an hour to an hour and a half depending on the needs of the client.</h4>
            <h2>Add a mini card reading for $10 (in person at session)</h2>
        <br />
            <h1>Long Distance Reiki Session</h1>
            <h3>1/2 hour</h3>
            <h4>For those times when you can't make it to me, or if you are out of town, state or country and would like a session. This session is about 30 minutes as I can work remotely on both sides of your body at the same time - we then speak on the phone afterwards to go over any findings or issues that showed up during the session. </h4>
        <br />
            <h1>Pet Reiki</h1>
            <h3>local or distant</h3>
            <h4>Our fur babies sometimes need a little extra love and attention. Reiki can help with anxiety & aches and hurts and just about anything that it can help a human with.</h4>
        <br />
            <div class="cxl-notice">
                <h3>All Cancellations with less than 24 hours notice may be charged Full session price.</h3>
            </div>
        <br />
            <h1>Reiki Classes:</h1>
            <div class="private-class-notice">
                <h3>The importance of choosing a Reiki Master Teacher: <a href="https://www.facebook.com/SoulDeepLife/videos/1095733260582033">Deep Soul Facebook Video</a></h3>
                <h4>ASK ABOUT PRIVATE CLASSES TO FIT YOUR SCHEDULE </h4>
            </div>
            <h4><span>Private Classes add $25</span> -  **Turn your private class in to a group class by bringing a friend to save $25</h4>
        <br />
            <h1>Reiki I Class</h1>
            <h4>Reiki 1 includes your first attunement, Reiki 1 manual - included in the manual is a history of Reiki, a meditation to meet your Reiki guide, information on your Chakras, Reiki etiquette, instructions on how to have a Reiki practice, and much more. The classes are small and very hands-on, meaning you will receive personalized instruction on the basics of doing a full Reiki session, so as to be comfortable to do sessions on your own. You will be working directly with myself and/or other participants in the class. Upon completion of the class you will receive your First Degree Reiki Certification. Also included with this class, as well as Reiki 2, Reiki 3a, and Master Teacher classes, is an ongoing opportunity to come back at any time to join a scheduled class to refresh, or gain additional knowledge for your own practice. The only prerequisite is that you have taken that degree/class prior to coming back, and that there is room for you in the class. </h4>
        <br />
            <h1>Reiki II Class</h1>
            <h4>Reiki 2 includes your second attunement to include 3 Reiki symbols, the Reiki 2 manual, including the use of the three Reiki symbols to include distant Reiki, instructions on how the symbols work, and much more. The class is hands on, meaning you will receive personalized instruction from myself, working with myself directly and/or other participants in the class.  We will learn how to use the symbols by practicing using them. We will also go over the heightened intuition Reiki 2 can bring, and more... Upon completion of the class you will receive your Second Degree Reiki Certification.</h4>
        <br />
            <h1>Reiki Expert Class</h1>
            <h4>This is an advanced class, and is the prerequisite to your Master Teachers Certification. In this class you will be attuned to the the Master symbol without the ability to pass attunements.  It is for those who know they want to take their practice to another level, and is a good step to decide if you want to go on to teach Reiki. In this class you will receive your Expert level manual, and will receive hands on training. </h4>
            <h4>Upon completion of the class you will receive the Expert Level Certification.</h4>
            <h3>(to be eligible to take the Master Teacher course, you must complete 100 hours of Reiki practice)</h3>
        <br />
            <h1>Reiki Master Teacher Class including one time help with your first class</h1>
            <h4>This class will give you the tools to become a competent White Light Reiki Master Teacher. The requirements for this course are the study, certification and completion of Reiki 1, 2, & 3a, along with a documented 100 hours of reiki practitioner practice. This class will give you all of the tools needed to pass attunements as well as all of the written material needed to create your own manuals and certificates, and of course me to help with your very first class. </h4>
        <br />
            <h1>The Benefits of Reiki:</h1>
            <h4>Creates deep relaxation and aids the body in releasing stress and tension, It supports the body's natural ability to heal itself, Re-establishes spiritual equilibrium and mental well being, Aids better sleep, Balances the body's energies, Can help with acute (injuries) and chronic problems (asthma, eczema, headaches, etc.) and aides the breaking of addictions, Helps relieve pain, Assists the body in cleaning itself from toxins, Reduces some of the side effects of drugs and helps the body to recover from drug therapy after surgery and chemotherapy, Supports the immune system, Helps in emotional clearing Adjusts itself according to the needs of the recipient</h4>
        <br />
            <div class="end-notes">
                <h3>Each individual is different, and each Reiki session is as unique as the person receiving the treatment.</h3>
                <h3>Reiki is not intended to replace your current medical regimen. It is a complementary modality, that enhances and promotes healing. </h3>
                <h2>Healing Physically, Healing Emotionally & Healing Spiritually</h2>
            </div>
        </div>
        </div>
        <Footer />
        </>
    )
};

export default Reiki;