import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import styles from "./view_css/Resources.module.css";

function Resources() {
    return (
        <>
        <Header />
        <div className={styles.container}>
            <div className="mt-3">
                <h2>There is no such thing as competition in an abundant Universe.</h2>
                <h5 className="mt3">I've  come across some amazing practitioners who you may need or want to check out. Below are some of my favorites! If you don't see something your are looking for, contact me, I likely have someone I can refer you too! </h5>
            </div>
            <div className="card-group mt-5">
            <div className="card border-info border-2">
                <div className="card-title">
                    <h3>I would like to introduce to you Misty with Handwriting-Soul Academy</h3>
                </div>
                <div className="card-body">
                    <h5>I took this program late spring, and the difference in my life is astounding! I have doubled my income, am now getting ready to be a part of a TV show and am clearer on who and what I want to become! Who knew that something as seemingly innocent could have such a huge impact in our lives.  In this course Misty helps you understand just how much we can achieve in our life when we re-wire our brains for success through our handwriting.</h5>
                    <h5>In this video, Misty shares with you why your handwriting is so important! <a href="https://vimeo.com/455671266/65cb250b34">Click Here</a></h5>
                    <h5>If you decide this is something you too would like to experience in your life click the link below and sign up for this amazing and life changing course!</h5>
                     <h5><a href="https://handwriting-soul-academy.teachable.com/p/handwriting-soul-academy-online-course?affcode=693476_5yaqklwt">Take me to the online course!</a></h5>
                </div>
            </div>
            <div className="card border-info border-2">
                <div className="card-title">
                    <h3>Next, I would like to introduce you to Courtney DeMatteo with Crystal Clarity Life Coaching and Reiki</h3>
                </div>
                <div className="card-body">
                    <h5>Courtney is a Life Alignment coach who can help you personally, professionally and everything in between.  Courtney is a huge part of me building a successful business, and through her coaching I am a better person all the way around.  Her Reiki sessions are amazing and if you'd rather not travel up north to see me, she's a great choice on the south end of Colorado Springs.</h5>
                    <h5>Check out Courtney on her website: <a href="​https://crystalclaritylifecoaching.com/">Crystal Clarity Life Coaching</a></h5>
                </div>
            </div>
            <div className="card border-info border-2">
                <div className="card-title">
                    <h3>My next recommendation is for Sabrina Monay, Neuromuscular Massage Therapist</h3>
                </div>
                <div className="card-title">
                    <h5>Sabrina is amazing at what she does. Her deep tissue massages are second to none and she has some of the best prices in town! She also offers, Cupping, Graston, Sports Therapy and works with Down Syndrome kids and is crafty too! Sabrina is not on Social Media, and this is giving her time to learn more and more new crafts - give her a call and let her know I sent you! <span>719-310-2966</span></h5>
                </div>
            </div>
            </div>
        </div>
        <Footer />
        </>
    )

};

export default Resources;