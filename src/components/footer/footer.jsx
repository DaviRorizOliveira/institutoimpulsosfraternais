"use client";

import React from "react";
import Link from "next/link";
import styles from "./footer.module.css";

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

import logo from "../../../public/images/logo/logoClaraNomeBege.png";

const Footer = () =>{
    return (
        <footer className={styles.footer}>
            <section>
                <img src={logo.src} alt="Logo" className={styles.logo}/>
            </section>
            <section>
                <div className={styles.info}>
                    <h1 className={styles.title}>Contato</h1>
                    <p className={styles.subTitle}>ins.impulsosfraternais_sarahpinheiro@outlook.com</p>
                    <p className={styles.subTitle}>(73) 9 8889-7601</p>
                </div>
                <div className={styles.info}>
                    <h1 className={styles.title}>Endereço</h1>
                    <p className={styles.subTitle}>Av. Coronel Pessoa, nº 66, Bairro Pontal Ilhéus - BA</p>
                </div>
                <div className={styles.redes}>
                    <a href="#"><FacebookIcon className={styles.icons}/></a>
                    <a href="#"><InstagramIcon className={styles.icons}/></a>
                    <a href="#"><YouTubeIcon className={styles.icons}/></a>
                </div>
            </section>
            <section>
                <ul className={styles.navLinks}>
                    <li className={styles.links}><Link href="/">Home</Link></li>
                    <li className={styles.links}><Link href="/Sobre">Sobre</Link></li>
                    <li className={styles.links}><Link href="/Programa">Programas</Link></li>
                    <li className={styles.links}><Link href="/Transparencia">Transparência</Link></li>
                </ul>
            </section>
        </footer>
    )
}

export default Footer;