import Image from "next/image";
import styles from "./page.module.css";

import logo from "../../public/images/logo/logoClara.png";

export default function Home() {
    return (
        <main className={styles.main}>
            <section className={styles.welcomeSection}>
                <div className={styles.glassEffect1}></div> {/* Efeito de vidro 1 */}
                <div className={styles.glassEffect2}></div> {/* Efeito de vidro 2 */}
                <div className={styles.welcome}>
                    <h2 className={styles.welcomeH2}>Bem Vindo(a) ao</h2>
                    <h1 className={styles.welcomeH1}>Instituto Impulsos Fraternais em Memória de Sarah Pinheiro</h1>
                </div>
                <img src={logo.src} alt="Logo" className={styles.logo}/>
            </section>
            
            <section className={styles.objectiveSection}>
                <div className={styles.glassEffect3}></div> {/* Efeito de vidro 3 */}
                <div className={styles.auxiliar}>
                    <h3 className={styles.objectiveTitle}>Objetivo</h3>
                    <p className={styles.objectiveText}>Nosso foco é levar ajuda às pessoas, buscando estar próximo delas e construir boas memórias através da escuta ativa e do auxílio pontual; conhecer suas necessidades, suas angústias e limitações com o objetivo de promover cidadania no enfrentamento das desigualdades por meio dos direitos socioassistenciais.</p>
                    <div className={styles.info}>
                        <p className={styles.infoTitle}>O que fazemos:</p>
                        <p className={styles.infoText}>Alimentamos, Informamos, Orientamos e Educamos</p>
                    </div>
                    <div className={styles.info}>
                        <p className={styles.infoTitle}>Onde estamos:</p>
                        <p className={styles.infoText}>No Estado da Bahia, com o sonho de atender a todos Estados Brasileiros</p>
                    </div>
                    <div className={styles.info}>
                        <p className={styles.infoTitle}>Organizações Sociais Parceiras:</p>
                        <p className={styles.infoText}>GACC</p>
                    </div>
                </div>
            </section>
            
            <section className={styles.section}></section>
            <section className={styles.section}></section>
        </main>
    );
}