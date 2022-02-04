import React, { useState } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import styles from "./view_css/Reiki.module.css";

import ReikiBadge from "../component_images/ReikiBadge.png";
import WhatReiki from "../component_images/WhatReiki.png";

const Reiki = (props) => {

    const[selection, setSelection] = useState([]);
    const[wasClicked, setWasClicked] = useState(false);

    const onClickHandler = (e, index) => {
        e.preventDefault();
        setSelection(index);
        setWasClicked(true);
    };

    return(
        <>
        <Header />
        <div className={styles.container}>

            <div className={styles.static_intro}>
                <img src={ReikiBadge} width="200" height="200" alt="IARP Member badge" className="me-3"/>
                <h1>I am a Reiki Master Teacher and Intuitive who assists you in healing yourself</h1>
            </div>

                <h4>Please select whether you are interested in Reiki sessions or classes:</h4>
            <div className={styles.clickers}>
                <div className="btn-group btn-group-lg mb-5" role="group">
                    <button className="btn border border-dark" onClick={e => onClickHandler(e,1)} value={selection}>Sessions</button>
                    <button className="btn border border-dark" onClick={e => onClickHandler(e,2)} value={selection}>Classes</button>
                </div>
            </div>

            <div className={styles.renders}>
                { !wasClicked }
                {selection === 1 && 
                    <div className={styles.session}>
                        <div className="card text-start bg-light p-2 text-dark bg-opacity-10" style={{width: 700}}>
                            <h1>Reiki Session</h1>
                            <h4>🔹in person, lasting about 1 to 1 1/2 hours.</h4>
                            <h5>I like to block 2 hours for this session, so that we have time to talk beforehand, and afterwards. The session can go from an hour to an hour and a half depending on the needs of the client.</h5>
                            <h4>Add a mini card reading for $10 (in person at session)</h4>
                        </div>
                    <br />
                        <div className="card text-start bg-light p-2 text-dark bg-opacity-10" style={{width: 700}}>
                            <h1>Long Distance Reiki Session</h1>
                            <h4>🔹1/2 hour</h4>
                            <h5>For those times when you can't make it to me, or if you are out of town, state or country and would like a session. This session is about 30 minutes as I can work remotely on both sides of your body at the same time - we then speak on the phone afterwards to go over any findings or issues that showed up during the session. </h5>
                        </div>
                    <br />
                        <div className="card text-start bg-light p-2 text-dark bg-opacity-10" style={{width: 700}}>
                            <h1>Pet Reiki</h1>
                            <h4>🔹local or distant</h4>
                            <h5>Our fur babies sometimes need a little extra love and attention. Reiki can help with anxiety & aches and hurts and just about anything that it can help a human with.</h5>
                        </div>
                    <br />
                        <div className="card text-start bg-light p-2 bg-opacity-25 text-danger" style={{width: 900}}>
                            <h4>All Cancellations with less than 24 hours notice may be charged Full session price.</h4>
                        </div>
                    </div>
                }

            {selection === 2 &&
                <div className={styles.class}>

                        <h1>Reiki Classes:</h1>

                        <div class="private-class-notice">
                            <h4>The importance of choosing a Reiki Master Teacher: <a href="https://www.facebook.com/SoulDeepLife/videos/1095733260582033">Deep Soul Facebook Video</a></h4>
                            <h5>ASK ABOUT PRIVATE CLASSES TO FIT YOUR SCHEDULE </h5>
                        </div>

                        <h5><span>Private Classes add $25</span> -  **Turn your private class in to a group class by bringing a friend to save $25</h5>

                    <br />
                    <div className="card text-start bg-light p-2 text-dark bg-opacity-10" style={{width: 900}}>
                        <h1>Reiki I Class</h1>
                        <h5>📍 includes your first attunement and Reiki 1 manual📍</h5>
                        <h5 className="text-start">Included in the manual:</h5>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item bg-light p-2 text-dark bg-opacity-10">a history of Reiki</li>
                            <li className="list-group-item bg-light p-2 text-dark bg-opacity-10">a meditation to meet your Reiki guide</li>
                            <li className="list-group-item bg-light p-2 text-dark bg-opacity-10">information on your Chakras</li>
                            <li className="list-group-item bg-light p-2 text-dark bg-opacity-10">Reiki etiquette</li>
                            <li className="list-group-item bg-light p-2 text-dark bg-opacity-10">instructions on how to have a Reiki practice</li>
                            <li className="list-group-item bg-light p-2 text-dark bg-opacity-10">and much more!</li>
                        </ul>
                        <h5>
                            The classes are small and very hands-on, meaning you will receive personalized instruction on the basics of doing a full Reiki session, so as to be comfortable to do sessions on your own. You will be working directly with myself and/or other participants in the class. Upon completion of the class you will receive your First Degree Reiki Certification. Also included with this class, as well as Reiki 2, Reiki 3A, and Master Teacher classes, is an ongoing opportunity to come back at any time to join a scheduled class to refresh, or gain additional knowledge for your own practice. The only prerequisite is that you have taken that degree/class prior to coming back, and that there is room for you in the class. </h5>
                    </div>
                    <br />
                    <div className="card text-start bg-light p-2 text-dark bg-opacity-10" style={{width: 900}}>
                        <h1>Reiki II Class</h1>
                        <h5>📍includes your second attunement to include 3 Reiki symbols and the Reiki 2 manual📍</h5>
                        <h5 className="text-start">Included in the manual:</h5>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item bg-light p-2 text-dark bg-opacity-10">the use of the three Reiki symbols to include distant Reiki</li>
                            <li className="list-group-item bg-light p-2 text-dark bg-opacity-10">instructions on how the symbols work</li>
                            <li className="list-group-item bg-light p-2 text-dark bg-opacity-10">and much more!</li>
                        </ul>
                        <h5>The class is hands on, meaning you will receive personalized instruction from myself, working with myself directly and/or other participants in the class. We will learn how to use the symbols by practicing using them. We will also go over the heightened intuition Reiki 2 can bring, and more. Upon completion of the class you will receive your Second Degree Reiki Certification.</h5>
                    </div>
                    <br />
                    <div className="card text-start bg-light p-2 text-dark bg-opacity-10" style={{width: 900}}>
                        <h1>Reiki Expert Class</h1>
                        <h5>This is an advanced class, and is the prerequisite to your Master Teachers Certification. In this class you will be attuned to the the Master symbol without the ability to pass attunements.  It is for those who know they want to take their practice to another level, and is a good step to decide if you want to go on to teach Reiki. In this class you will receive your Expert level manual, and will receive hands on training. </h5>
                        <h5>Upon completion of the class you will receive the Expert Level Certification.</h5>
                        <h5>(to be eligible to take the Master Teacher course, you must complete 100 hours of Reiki practice)</h5>
                    </div>
                    <br />
                    <div className="card text-start bg-light p-2 text-dark bg-opacity-10" style={{width: 900}}>
                        <h1>Reiki Master Teacher Class including one time help with your first class</h1>
                        <h5>📍includes one time help with your first class📍</h5>
                        <h5>This class will give you the tools to become a competent White Light Reiki Master Teacher. The requirements for this course are the study, certification and completion of Reiki 1, 2, & 3A, along with a documented 100 hours of reiki practitioner practice. This class will give you all of the tools needed to pass attunements as well as all of the written material needed to create your own manuals and certificates, and of course me to help with your very first class. </h5>
                    </div>
                </div>
                }
            </div>
            <div className={styles.static_end}>
            <img src={WhatReiki} width="600" height="600" className="mb-3 mt-3" alt="original text with description of what reiki is/isn't"/>
            <div className="card bg-light p-2 text-dark bg-opacity-25">
                <div className="card-body">
                    <h2>The Benefits of Reiki:</h2>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item bg-light p-2 text-dark bg-opacity-10"><h6>Creates deep relaxation and aids the body in releasing stress and tension</h6></li>
                        <li className="list-group-item bg-light p-2 text-dark bg-opacity-10"><h6>It supports the body's natural ability to heal itself</h6></li>
                        <li className="list-group-item bg-light p-2 text-dark bg-opacity-10"><h6>Re-establishes spiritual equilibrium and mental well being</h6></li>
                        <li className="list-group-item bg-light p-2 text-dark bg-opacity-10"><h6>Aids better sleep</h6></li>
                        <li className="list-group-item bg-light p-2 text-dark bg-opacity-10"><h6>Balances the body's energies</h6></li>
                        <li className="list-group-item bg-light p-2 text-dark bg-opacity-10"><h6>Can help with acute (injuries) and chronic problems (asthma, eczema, headaches, etc.)</h6></li>
                        <li className="list-group-item bg-light p-2 text-dark bg-opacity-10"><h6>Aides the breaking of addictions</h6></li>
                        <li className="list-group-item bg-light p-2 text-dark bg-opacity-10"><h6>Helps relieve pain</h6></li>
                        <li className="list-group-item bg-light p-2 text-dark bg-opacity-10"><h6>Assists the body in cleaning itself from toxins</h6></li>
                        <li className="list-group-item bg-light p-2 text-dark bg-opacity-10"><h6>Reduces some of the side effects of drugs and helps the body to recover from drug therapy after surgery and chemotherapy</h6></li>
                        <li className="list-group-item bg-light p-2 text-dark bg-opacity-10"><h6>Supports the immune system</h6></li>
                        <li className="list-group-item bg-light p-2 text-dark bg-opacity-10"><h6>Helps in emotional clearing</h6></li>
                        <li className="list-group-item bg-light p-2 text-dark bg-opacity-10"><h6>Adjusts itself according to the needs of the recipient</h6></li>
                    </ul>
                </div>
            </div>
            <br />
            <div className="card bg-light p-2 text-dark bg-opacity-25 mb-5">
                <div className="card-body">
                    <h4>Each individual is different, and each Reiki session is as unique as the person receiving the treatment.</h4>
                    <h4>Reiki is not intended to replace your current medical regimen. It is a complementary modality, that enhances and promotes healing. </h4>
                    <h2>Healing Physically, Healing Emotionally & Healing Spiritually</h2>
                </div>
            </div>
            </div>
        </div>
        <Footer />
        </>
    )
};

export default Reiki;