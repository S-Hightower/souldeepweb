import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import { Link } from 'react-router-dom';

import styles from "./view_css/Main.module.css"

function Main() {
    return (
        <>
        <Header />
        <div className={styles.container}>
            <div className={styles.banner}>
                <h1>I'm learning and growing everyday and it is my mission to help you discover your gifts as well</h1>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default Main;