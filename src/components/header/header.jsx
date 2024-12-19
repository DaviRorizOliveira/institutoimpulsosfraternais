"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./header.module.css";

import logo from "../../../public/images/logo/logoClaraNomeLateral.png";

const Header = () => {
    const [isMenuActive, setIsMenuActive] = useState(false);

    // Alterna o menu mobile
    const handleMenuClick = () => {
        setIsMenuActive(!isMenuActive);
    };

    // Adiciona ou remove a classe `noScroll` do body
    useEffect(() => {
        if (isMenuActive) {
            document.body.classList.add(styles.noScroll);
        } else {
            document.body.classList.remove(styles.noScroll);
        }

        return () => {
            document.body.classList.remove(styles.noScroll);
        };
    }, [isMenuActive]);

    return (
        <header className={styles.header}>
            <nav className={styles.navBar}>
                <div>
                    <img src={logo.src} alt="Logo" className={styles.logo}/>
                </div>

                <div
                    className={`${styles.mobileMenu} ${isMenuActive ? styles.active : ""}`}
                    onClick={handleMenuClick}
                >
                    <div className={styles.line1}></div>
                    <div className={styles.line2}></div>
                    <div className={styles.line3}></div>
                </div>

                <ul className={`${styles.navLinks} ${isMenuActive ? styles.active : ""}`}>
                    <li><Link href="#" className={styles.links}>Home</Link></li>
                    <li><Link href="#" className={styles.links}>Sobre</Link></li>
                    <li><Link href="#" className={styles.links}>Programas</Link></li>
                    <li><Link href="#" className={styles.links}>Transparência</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;