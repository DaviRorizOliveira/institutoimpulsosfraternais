import styles from "./page.module.css";

import logo from "../../public/images/logo/logoClara.png";
import equipe from "../../public/images/outros/equipe.png";

import ArrowIcon from '@mui/icons-material/ArrowForward';

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
                    <p className={styles.infoText}><span className={styles.infoTitle}>O que fazemos:</span> Alimentamos, Informamos, Orientamos e Educamos</p>
                    <p className={styles.infoText}><span className={styles.infoTitle}>Onde estamos:</span> No Estado da Bahia, com o sonho de atender a todos os Estados Brasileiros</p>
                    <p className={styles.infoText}><span className={styles.infoTitle}>Organizações Sociais Parceiras:</span> GACC</p>
                </div>
            </section>
            
            <section className={styles.teamSection}>
                <div className={styles.glassEffect4}></div> {/* Efeito de vidro 4 */}
                <img src={equipe.src} alt="Foto da equipe" className={styles.imagem}/>
                <div className={styles.teamText}>
                    <h1 className={styles.teamTitle}>Conheça nossa equipe</h1>
                    <p className={styles.teamInfo}>Veja quem faz parte do nosso time e está sempre disposto a melhorar a vida de muitas pessoas</p>
                    <a href="#" className={styles.saibaMais}>
                        <p className={styles.icons}>Saiba Mais</p>
                        <ArrowIcon className={styles.icons}/>
                    </a>
                </div>
            </section>
            <section className={styles.linkSection}>
                <div className={styles.glassEffect5}></div> {/* Efeito de vidro 5 */}
                <div className={styles.linkConteudo}>
                    <div className={styles.divisao}>
                        <h2 className={styles.divisaoTitle}>Nossos Programas e Projetos</h2>
                        <p className={styles.divisaoText}>Conheça os projetos e os programas desenvolvidos pelo Instituto</p>
                        <a href="#" className={styles.button}>
                            <p className={styles.buttonIcon}>Saiba Mais</p>
                            <ArrowIcon className={styles.buttonIcon}/>
                        </a>
                    </div>
                    <div className={styles.divisoria}></div> {/* Linha Divisória Vertical */}
                    <div className={styles.divisao}>
                        <h2 className={styles.divisaoTitle}>Trasparência</h2>
                        <p className={styles.divisaoText}>Conheça as  nossas diretrizes e relatórios de impacto</p>
                        <a href="#" className={styles.button}>
                            <p className={styles.buttonIcon}>Saiba Mais</p>
                            <ArrowIcon className={styles.buttonIcon}/>
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}