import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import styles from "./view_css/About.module.css";

import couple from "../component_images/couple.jpg";
import skittles from "../component_images/skittles.jpg";
import apollo from "../component_images/apollo.jpg";
import outlook from "../component_images/outlook.jpg";
import BrendaProfile from "../component_images/BrendaProfile.jpg";
import Couple1 from "../component_images/Couple1.jpg";

function About() {
    return(
        <>
        <Header />
        <div className={styles.about_container}>
        <div className={styles.about_intro}>
            <img src={BrendaProfile} width="350" height="425" alt="owner profile" className="me-5"/>
            <h2>​I believe I will be forever learning and growing.
                <br />
            I believe our thoughts become things.
                <br />
            ​I believe that Love is the greatest power on earth.
                <br />
            I believe in putting love into all that I do.
                <br />
                <br />
            <span>Happy <span className={styles.span2}>-</span>Healthy <span className={styles.span2}>-</span>Whole
                <br />
                <hr />
            ​This is my desire for you.</span></h2>
        </div>

        <div className={styles.about_body}>
            <div className={styles.photo_group1}>
                <h4>I am a Colorado native, I'm married to the love of my life, we have four children, ten grandchildren, and 2 cats. I love the ocean, and plan to live by it soon! I play poker (Texas Hold'em), love to fish, and camp. I do my best to look for the good in this world and believe our thoughts are powerful!</h4>
            <img src={Couple1} width="400" height="350" alt="couple posing and smiling" className="ms-5"/>
            <br />
            </div>

            <div className={styles.wrapper}>
                <div>
                    <h4>If you choose to work with me, please know that I believe we are all responsible for what shows up in our world and will do my best to teach you to be accountable to yourself. When we work together you will find that I do my best to show you that you have more power over your world than you ever thought possible! It's my mission to help you know that you can live an empowered life!!</h4>
                </div>
            <img src={couple} width="350" height="500" alt="couple dressed nicely posing" className="me-5 ms-5"/>
            <div>
                <h4>I have been a student in the field of Law of Attraction for over twenty years - including eight years formal education. By utilizing these skills, you will receive a uniquely insightful perspective no matter which modality used to help your situation.</h4>
            </div>
            </div>

            <div className={styles.photo_group3}>
            <img src={skittles} width="400" height="400" alt="black cat looking dapper with bowtie" className="me-5"/>
                <h4>Reiki found me in the late 1990's and in 2008 I became a certified practitioner. In 2009, after over 100 practice hours, I took my Master Teacher training and am now a certified Reiki Master Teacher.  I love the peace that a Reiki session brings to everyone! I truly enjoy helping ease stress, and I am always delighted when the insights I sometimes receive are able to help my client. It's especially wonderful if they find healing ~ mentally, emotionally, physically or any combination or all of the above. Being able to teach others how to do this beautiful modality helps spread peace, joy and healing to others, and that is truly rewarding! I've volunteered with a local hospice as well as being blessed to use Reiki on several of my grandchildren's births ~ Reiki is Universal in it's benefits.</h4>
            <br />
            </div>

            <div className={styles.photo_group4}>
                <h4>In 2014, I was introduced to the practice of Soul Realignment.  After having my Akashic records read, and cleared, I found that I was no longer holding myself back. I was making better choices and had a clearer vision of what I wanted for my future.  In 2016, I started my certification process and as of January 2017 received my Certification as a Soul Realignment Practitioner and as of today I am a certified level three practitioner.  I love that this modality helps people re-connect with their true soul design. I love that it gives guidance on how  to move forward. It truly helps regenerate lives.</h4>
            <img src={apollo} width="400" height="500" alt="cat looking dapper with bowtie" className="ms-5"/>
            <br />
            </div>

            <div className={styles.wrapper}>
                <h4>With both of these modalities under my belt, and after years of learning to trust that still inner voice, as well as the amazing pictures that reveal themselves to me, I am now fully out of the closet as a Psychic. Claircognizance is and has been my strongest</h4>
                <img src={outlook} width="500" height="500" alt="scenic outlook towards the ocean and horizon" className="me-5 ms-5"/>
                <h4>gift, but coming in close second is Clairvoyance. I use them throughout my practice in Reiki, Akashic Readings, Emotional Body Release, Astrology, and my Card Readings. In many cases it comes through just simply speaking with you. </h4>
            </div>
            
            <div className={styles.closer} >
                <h4>Here is a recent video interview for Awoke TV where I go over all the many services offered:  <a href="https://vimeo.com/475300685/c6dc744052">Watch Here</a></h4>
            </div>

        </div>
        </div>
        <Footer />
        </>
    )
};

export default About;