import styles from "./page.module.css";

import iconAnual from "../../../../public/images/icons/iconAnual.png";
import iconMensal from "../../../../public/images/icons/iconMensal.png";
import iconProjeto1 from "../../../../public/images/icons/iconProjeto1.png";
import iconProjeto2 from "../../../../public/images/icons/iconProjeto2.png";
import iconProjeto3 from "../../../../public/images/icons/iconProjeto3.png";

import ArrowIcon from '@mui/icons-material/KeyboardArrowDown';

export default function Home() {
    return (
        <main className={styles.main}>
            <section className={styles.saibaMais}>
                <div className={styles.glassEffect}></div> {/* Efeito de vidro */}
                <h1 className={styles.saibaMaisTitle}>Conheça os projetos e os programas anuais e mensais desenvolvidos pelo Instituto</h1>
                <p className={styles.saibaMaisText}>Saiba mais</p>
                <ArrowIcon className={styles.seta}/>
            </section>
            <section className={styles.anual}>
                <div className={styles.conteudo}>
                    <h1 className={styles.title}>Anuais</h1>
                    <div className={styles.info}>
                        <h2 className={styles.subTitle}>Maio Solidário</h2>
                        <p className={styles.text}>Nós concentramos todas as nossas arrecadações deste mês para doar a uma única instituição. Que geralmente é o GACC.</p>
                        <p className={styles.text}>O que é doado: alimentos, brinquedos, livros, roupas, utensílios domésticos e produtos de higiene e limpeza.</p>
                    </div>
                    <div className={styles.info}>
                        <h2 className={styles.subTitle}>Precisamos falar sobre isso</h2>
                        <p className={styles.text}>Visa conhecer onde e como a gente pretende trabalhar e as metas a se alcançar; utilizando sempre da escuta ativa para conhecer e catalogar as comunidades com quem trabalhamos a fim de falar de necessidades e vicissitudes.</p>
                    </div>
                </div>
                <div className={styles.iconsDiv}>
                    <img src={iconAnual.src} alt="Icon" className={styles.icon}/>
                </div>
            </section>
            <section className={styles.mensal}>
                <div className={styles.conteudo}>
                    <h1 className={styles.title}>Mensais</h1>
                    <div className={styles.info}>
                        <h2 className={styles.subTitle}>A Educação rompe Fronteiras</h2>
                        <p className={styles.text}>Esse é um programa, por meio do qual são desenvolvidos alguns projetos que visam educar e informar, com metas que alcancem as comunidades através de palestras. Elas têm o objetivo de educar e dar suporte para encaminhá-los a instituições, órgãos e ONGs que atendam à necessidade premente que não é contemplada pelo Instituto.</p>
                        <p className={styles.text}>O lema que norteia os projetos e campanhas é “Seja coerente, claro e objetivo, mas não esqueça de ser gentilmente educado, todo mundo enfrenta seus próprios dilemas.”</p>
                    </div>
                    <div className={styles.info}>
                        <h2 className={styles.subTitle}>Mulheres: Juntas somos uma Fortaleza!</h2>
                        <p className={styles.text}>Através desse programa damos o suporte a mulheres que vivem em situação de rua e sofrem violências de toda natureza. Há mulheres que socorremos que já sofreram estupro coletivo e violências físicas absurdas!</p>
                    </div>
                </div>
                <div className={styles.iconsDiv}>
                    <img src={iconMensal.src} alt="Icon" className={styles.icon}/>
                </div>
            </section>
            <section className={styles.projeto}>
                <div className={styles.conteudo}>
                    <h1 className={styles.title}>Projetos</h1>
                    <div className={styles.info}>
                        <h2 className={styles.subTitle}>Luta Pelo Bem</h2>
                        <p className={styles.text}>Temos como prioridade o atendimento a crianças, jovens e adultos em situação de vulnerabilidade social e/ou residentes de comunidades vulneráveis/carentes promovendo educação/socialização, conscientização de valor e pertencimento, de respeito à vida, e a tomada de consciência do próprio potencial. Com vista ao desenvolvimento integral do indivíduo por meio de hábitos mais saudáveis, pleiteamos parceria e ferramentas do Ministério da Cidadania para promoção da inclusão social.</p>
                    </div>
                    <div className={styles.info}>
                        <h2 className={styles.subTitle}>Qual mulher é sua maior referência e por qual motivo?</h2>
                        <p className={styles.text}>Através do programa “Mulheres: Juntas somos uma F+ortaleza”, foram desenvolvidos alguns projetos de informação e conscientização acerca dos direitos e deveres da mulher - de zero a cem anos, a exemplo esse.</p>
                        <p className={styles.text}>Esse projeto visa trabalhar/elevar o amor-próprio e a auto-estima na mulher a partir da reflexão dos pontos favoráveis que a mesma pontuará em relação a uma figura feminina considerada por ela como referencial. É preciso considerar o emocional e psicológico ultra delicado e complexo que a mulher que se encontra em situação de rua deve se encontrar.</p>
                        <p className={styles.text}>O lema é “As mulheres devem ter assegurado o seu direito de voz para se expressarem. Por isso, empoderar uma mulher é dar a ela o que lhe é de direito.”</p>
                    </div>
                    <div className={styles.info}>
                        <h2 className={styles.subTitle}>Leveza: Caminhando de mãos dadas.</h2>
                    </div>
                    <div className={styles.info}>
                        <h2 className={styles.subTitle}>Exalando amor e gratidão</h2>
                        <p className={styles.text}>Projeto onde trabalhamos o emocional, o psicológico e o espiritual da pessoa acometida com câncer e de seus familiares desenvolvendo nosso papel de ponte entre aqueles que podem ajudar dentro da necessidade que a pessoa oncológica apresenta. </p>
                    </div>
                    <div className={styles.info}>
                        <h2 className={styles.subTitle}>Só Alegria</h2>
                        <p className={styles.text}>Projeto que tem como objetivo trabalhar a autoestima do paciente oncológico, proporcionando-lhe um momento de embelezamento, onde recebemos doação de cabelos e similares e providenciamos perucas.</p>
                        <p className={styles.text}>Receber o diagnóstico de um câncer é um acontecimento que, por si só, pode fragilizar muito o paciente e sua família. Lidar com as dúvidas, incertezas, medos, mudanças profundas de rotina e desconfortos físicos contribuem para tornar o dia a dia do tratamento complexo. Se o contexto inclui questões de pobreza, desemprego, tabagismo, alcoolismo e dificuldade nas relações familiares, a jornada do paciente com câncer tende a ser ainda mais desafiadora.</p>
                        <p className={styles.text}>As ações de apoio a pacientes com câncer têm o objetivo de minimizar esses sentimentos e proporcionar uma relação mais fácil com cada etapa de convivência com a doença. Buscamos trabalhar com vários pilares diferentes de apoio. Como o apoio a pacientes com câncer exige uma abordagem multidisciplinar, contamos com profissionais de diferentes frentes.</p>
                        <p className={styles.text}>O paciente oncológico vive um contexto biopsicossocial que envolve a alteração da rotina diária, maior dependência de cuidados de terceiros, necessidade de mudança de hábito, alteração da imagem corporal e, por consequência, há um isolamento social, para citar alguns exemplos. Todos esses fatores podem levar ao sofrimento psicológico, com sintomas de depressão, ansiedade, medo, dúvidas e insatisfação com a autoimagem.</p>
                    </div>
                </div>
                <div className={styles.iconsDiv}>
                    <img src={iconProjeto1.src} alt="Icon" className={styles.icon}/>
                    <img src={iconProjeto2.src} alt="Icon" className={styles.icon}/>
                    <img src={iconProjeto3.src} alt="Icon" className={styles.icon}/>
                </div>
            </section>
        </main>
    );
}