import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import styles from "./view_css/Main.module.css"

function Main() {
    return(
        <div className={styles.container}>
            <Header />
            <Footer />
        </div>
    )
}

export default Main;