import styles from "./page.module.css";

export default function Home() {
    return (
        <main className={styles.main}>
            <section className={styles.identidadeSection}>
                <div className={styles.glassEffect1}></div> {/* Efeito de vidro 1 */}
                <div className={styles.auxiliar}>
                    <div className={styles.divisao1}>
                        <h1 className={styles.identidadeTitle}>Conheça um pouco mais sobre nós e a nossa história</h1>
                    </div>
                    <div className={styles.divisoria}></div> {/* Linha Divisória Vertical */}
                    <div className={styles.divisao2}>
                        <h2 className={styles.identidadeSubTitle}>Quem somos?</h2>
                        <p className={styles.identidadeText}>O Instituto Impulsos Fraternais é uma organização sem fins lucrativos que leva ajuda às pessoas por meio de programas, projetos e campanhas.</p>
                        <p className={styles.identidadeText}>Nosso foco é levar ajuda às pessoas, buscando estarmos próximos delas e construir boas memórias, através da escuta ativa e do auxílio pontual; conhecer suas necessidades, suas angústias e limitações com o objetivo de promover cidadania no enfrentamento das desigualdades por meio dos direitos socioassistenciais.</p>
                        <p className={styles.identidadeText}>A organização entende como parte fundamental de seu trabalho minimizar as desigualdades sociais, conscientizando as pessoas margeadas da sua importância enquanto pessoa humana.</p>
                    </div>
                </div>
            </section>
            <section className={styles.estruturaSection}>
                <h1 className={styles.estruturaTitle}>Nossa Estrutura</h1>
                <div className={styles.info}>
                    <p className={styles.estruturaText}>O Instituto Impulsos Fraternais conta com uma equipe engajada e colaborativa. É dirigido e coordenado por profissionais qualificados, humanos, empáticos e cuja maioria deles já trabalhou em outros projetos sociais. Dessa forma, todos que trabalham na Instituição exalam o desejo de fazer o bem. Nesse sentido, valorizamos o trabalho em rede e buscamos parcerias para ampliar nosso impacto na luta por justiça social. A organização é composta por Conselhos consultivos e/ou deliberativos e/ou administrativos.</p>
                    <p className={styles.estruturaText}>A sede da Instituição está situada na Bahia, onde se encontra a Presidente, que atende a nossos parceiros a nível Nacional e Internacional, atualmente a Dra. Jerlaine Santos de Souza.</p>
                    <p className={styles.estruturaText}>Os Conselhos estão vinculados a cinco diretorias operacionais que gerenciam os programas de logística, assistência e suporte às nossas atividades; um compromisso compartilhado com os Princípios e o Estatuto da Instituição.</p>
                </div>
            </section>
            <section className={styles.historiaSection}>
                <div className={styles.lateral}></div>
                <div className={styles.conteudo}>
                    <h2 className={styles.historiaSubTitle}>Nossa história</h2>
                    <div className={styles.info}>
                        <p className={styles.estruturaText}>Em julho do ano 2020, nascia o INSTITUTO IMPULSOS FRATERNAIS EM MEMÓRIA DE SARAH PINHEIRO, inicialmente como um Projeto Social, cujo lema se fundou no desejo e decisão de fazer o bem através da entrega diária de suporte material, emocional e espiritual (no auge da pandemia). Em Maio daquele ano, a filha caçula da Sra. Jerlaine S. de Souza, Presidente do Instituto, foi a óbito em decorrência de complicações de uma das cirurgias feita na luta contra o câncer.</p>
                        <p className={styles.estruturaText}>Assim, como forma de enfrentar o luto e ressignificar a dor, a família enlutada se dispôs a apoiar a matriarca no seu compromisso de, no período noturno, por três vezes na semana servir o pão, café, chocolate quente, máscaras, produtos de higiene, agasalhos, água limpa para consumir e para o banho, além do apoio moral, psicológico, emocional e espiritual as pessoas em situação de rua. Bem como, durante o dia, a distribuir cestas-básicas para famílias em grandes dificuldades em razão da pandemia, sempre entregando uma mensagem de apoio, fé e esperança.</p>
                        <p className={styles.estruturaText}>Faz-se necessário mencionar que toda doação feita foi adquirida por meio de campanhas através das redes sociais, onde a Sra. Jerlaine Souza usava as redes sociais para impulsionar fraternalmente as pessoas a doarem o que podiam para ajudar a quem precisava; funcionando, dessa forma, como uma ponte entre quem queria e podia doar e quem precisava da doação.</p>
                        <p className={styles.estruturaText}>Nesse período, para além do suporte material, o instituto entregava, sobretudo, Acolhimento, Solidariedade e Respeito. Porém, com uma variável, o Instituto NÃO recebia doação em dinheiro.</p>
                        <p className={styles.estruturaText}>Hoje, o Instituto reúne um corpo colaborativo (fixos e temporários) que se identifica com a essência e o trabalho da Organização, os quais se dedicam ao trabalho para ampliar as oportunidades da melhor forma, transformando-as em potenciais realidades para servir melhor a comunidade.</p>
                        <p className={styles.estruturaText}>Nossa eterna gratidão aos nossos colaboradores que em meio às suas dores e perdas acreditaram no projeto e nos apoiaram nessa decisão.</p>
                    </div>
                </div>
            </section>
            <section className={styles.cardSection}></section>
            <section className={styles.principioSection}></section>
        </main>
    );
}