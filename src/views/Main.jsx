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
            <h1 className={styles.span_h1}>
                <span>We </span>
                <span>are </span>
                <span>all </span>
                <span>learning </span>
                <span>and </span>
                <span>growing </span>
                <span>everyday </span>
                <span>and </span>
                <span>it </span>
                <span>is </span>
                <span>my </span>
                <span>mission </span>
                <span>to </span>
                <span>help </span>
                <span>you </span>
                <span>discover </span>
                <span>your </span>
                <span>inner </span>
                <span>gifts. </span>
            </h1>
        </div>
        <Footer />
        </>
    )
}

export default Main;