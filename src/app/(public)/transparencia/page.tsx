import styles from "./page.module.css";

export default function Home() {
    return (
        <main className={styles.main}>
            <section className={styles.transparenciaSection}>
                <div className={styles.glassEffect}></div> {/* Efeito de vidro */}
                <div className={styles.auxiliar}>
                    <h1 className={styles.transparenciaTitle}>Transparência</h1>
                    <p className={styles.transparenciaText}>No Instituto Impulsos Fraternais, acreditamos que a transparência é fundamental para construir confiança e credibilidade com nossos beneficiários, doadores, voluntários e a comunidade em geral. Nosso objetivo é fornecer apoio (material e subjetivo), orientações e informações pontuais e atualizadas para as pessoas. Nesse sentido, consideramos essencial operar com total clareza em todas as nossas ações e processos.</p>
                </div>
            </section>
            <section className={styles.estatutoSection}>
                <h1 className={styles.estatutoTitle}>Estatuto Social</h1>
                <div className={styles.info}>
                    <p className={styles.estatutoText}><span className={styles.textBold}>do corpo de colaboradores:</span> Diretoria, Comitê e Conselhos Consultivo e Fiscal:</p>
                    <p className={styles.estatutoIndent}><span className={styles.textBold}>a) A diretoria</span> é formada pela Presidente e Fundadora da Instituição, Jerlaine Santos de Souza e a Vice-Presidente, Camille Souza dos Santos. Diretora do Financeiro: Ana Caroline Souza dos Santos Diretora Administrativo: Camille Souza dos Santos.</p>
                    <p className={styles.estatutoIndent}><span className={styles.textBold}>b) O Comitê</span> é composto por cinco integrantes fixos e temporários.</p>
                    <p className={styles.estatutoIndent}><span className={styles.textBold}>c) Conselho Fiscal:</span> possui três membros e dois suplentes</p>
                    <p className={styles.estatutoText}><span className={styles.textBold}>Política de Voluntariado:</span> Segue a disciplina da matéria, bem como o Estatuto da Instituição.</p>
                    <p className={styles.estatutoText}><span className={styles.textBold}>Comitê</span> é um órgão de caráter voluntário e consultivo. Ele tem a função de sensibilizar os diferentes públicos e setores do Instituto e para o Instituto, com o objetivo de executar ações de responsabilidade social, por meio de apoio ou promoção de programas e projetos de impacto social. A contribuição do comitê concentra-se no auxílio ao desenvolvimento de conteúdo e na conscientização da comunidade para a importância do trabalho.</p>
                </div>
            </section>
            <section className={styles.relatorioSection}>
                <h1 className={styles.relatorioTitle}>Relatório de Impacto</h1>
                <div className={styles.info}>
                    <h2 className={styles.relatorioSubTitle}>Relatório de Auditoria</h2>
                    <p className={styles.relatorioText}>O Instituto Impulsos Fraternais é uma organização não governamental sem fins lucrativos que tem o compromisso de destinar 80% de todos os recursos arrecadados às atividades desenvolvidas pela Instituição. Os demais 20% são utilizados para despesas administrativas e reinvestidos em ações para captação de recursos. O uso dos recursos do Instituto é rigorosamente controlado e os relatórios financeiros são publicados anualmente. As informações detalhadas da atuação da organização podem ser vistas no site do Relatório anual de atividades. Nota: até a presente data, o Instituto NUNCA recebeu dinheiro, só doações em alimento, roupas e brinquedo.</p>
                </div>
            </section>
        </main>
    );
}