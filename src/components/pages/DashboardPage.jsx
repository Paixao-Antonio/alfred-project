
import React from 'react'

import Pesquisar from './Pesquisar'

import Footer from './Footer'

import styles from "./DashboardPage.module.css";


const DashboardPage = () => {

    return (

        <div>

            <Pesquisar />

            <div className={styles.dashboard}>

                <div className={styles.dashboardOne}>
                    <div>
                        <h2>Dashboard</h2>
                        <span>Visão geral dos seus projectos e actividades</span>
                    </div>

                    <div>
                        <button>Exportar PDF</button>
                    </div>
                </div>


                <div className={styles.relatorioThree}>

                    <div className={styles.CardRelatorio}>

                        <div className={styles.CardRelatorioOne}>

                            <div className={styles.CardRelatorioTwo}>
                                <h4>Pendentes</h4>
                                <span>5</span>
                            </div>

                            <div className={styles.CardRelatorioThree}>
                                <h3>Angola</h3>
                            </div>
                        </div>

                    </div>

                    <div className={styles.CardRelatorio}>

                        <div className={styles.CardRelatorioOne}>

                            <div className={styles.CardRelatorioTwo}>
                                <h4>Pendentes</h4>
                                <span>5</span>
                            </div>

                            <div className={styles.CardRelatorioThree}>
                                <h3>Angola</h3>
                            </div>
                        </div>

                    </div>

                    <div className={styles.CardRelatorio}>

                        <div className={styles.CardRelatorioOne}>

                            <div className={styles.CardRelatorioTwo}>
                                <h4>Pendentes</h4>
                                <span>5</span>
                            </div>

                            <div className={styles.CardRelatorioThree}>
                                <h3>Angola</h3>
                            </div>
                        </div>

                    </div>

                    <div className={styles.CardRelatorio}>

                        <div className={styles.CardRelatorioOne}>

                            <div className={styles.CardRelatorioTwo}>
                                <h4>Pendentes</h4>
                                <span>5</span>
                            </div>

                            <div className={styles.CardRelatorioThree}>
                                <h3>Angola</h3>
                            </div>
                        </div>

                    </div>


                </div>

            </div>

            <Footer />

        </div>
    )
}

export default DashboardPage
