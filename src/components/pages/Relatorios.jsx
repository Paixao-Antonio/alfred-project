
import React from 'react'

import Pesquisar from './Pesquisar'

import styles from "./Relatorios.module.css";

import {
    projectStatus,
    priorityTasks,
} from "../../data/ChartData";

const Relatorios = () => {


    const meses = [
        "Out 25",
        "Nov 25",
        "Dez 25",
        "Jan 26",
        "Fev 26",
        "Mar 26"
    ];

    const tarefas = [4, 5, 5, 5, 6, 7];

    const gastos = [15, 8, 6, 4, 5];

    return (

        <div >

            <Pesquisar />

            <div className={styles.relatorio}>

                <div className={styles.relatorioOne}>
                    <div>
                        <h2>Relatórios</h2>
                        <span>Análises e métricas detalhadas do desempenho</span>
                    </div>

                    <div>
                        <button>Exportar PDF</button>
                    </div>
                </div>

                <div className={styles.relatorioTwo}>
                    <div>
                        <select name="" id="">
                            <option value="" disabled selected hidden>Filtrar</option>
                            <option value="">Visão Geral</option>
                            <option value="">Projectos</option>
                            <option value="">Tarefas</option>
                            <option value="">Orçamento</option>
                        </select>
                    </div>

                    <div>
                        <select name="" id="">
                            <option value="" disabled selected hidden>Filtrar</option>
                            <option value="">Última Semana</option>
                            <option value="">Último Mês</option>
                            <option value="">Último Trimestre</option>
                            <option value="">Último Ano</option>
                        </select>
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


                <div className={styles.container}>

                    {/* CARD 1 */}
                    <div className={styles.card}>

                        <h3>Distribuição de Projetos por Status</h3>

                        <div className={styles.pieWrapper}>

                            <span className={styles.ativo}>
                                Ativos: {projectStatus.ativos}
                            </span>

                            <div className={styles.pieChart}></div>

                            <div className={styles.labels}>
                                <span className={styles.concluido}>
                                    Concluidos: {projectStatus.concluidos}
                                </span>

                                <span className={styles.pausado}>
                                    Pausados: {projectStatus.pausados}
                                </span>

                                <span className={styles.planejamento}>
                                    Planejamento: {projectStatus.planejamento}
                                </span>
                            </div>

                        </div>

                    </div>

                    {/* CARD 2 */}
                    <div className={styles.card}>

                        <h3>Tarefas por Prioridade</h3>

                        <div className={styles.barChart}>


                            <div className={styles.barItem}>

                                <div
                                    className={styles.bar}
                                    style={{ height: "215px" }}
                                >
                                    <span>10</span>
                                </div>

                                <p>Alta</p>
                            </div>

                            <div className={styles.barItem}>
                                <div
                                    className={styles.bar}
                                    style={{ height: "108px" }}
                                >
                                    <span>5</span>
                                </div>

                                <p>Média</p>
                            </div>

                            <div className={styles.barItem}>
                                <div
                                    className={styles.bar}
                                    style={{ height: "50px" }}
                                >
                                    <span>2</span>
                                </div>

                                <p>Baixa</p>
                            </div>

                        </div>

                    </div>

                </div>


                <div className={styles.container}>

                    {/* EVOLUÇÃO MENSAL */}
                    <div className={styles.card}>

                        <h3>Evolução Mensal</h3>

                        <div className={styles.chartArea}>

                            <div className={styles.yAxis}>
                                <span>100</span>
                                <span>75</span>
                                <span>50</span>
                                <span>25</span>
                                <span>0</span>
                            </div>

                            <div className={styles.graph}>

                                <div className={styles.grid}></div>

                                <svg
                                    className={styles.lineSvg}
                                    viewBox="0 0 300 200"
                                >
                                    <polyline
                                        fill="none"
                                        stroke="#22c55e"
                                        strokeWidth="3"
                                        points="10,190 60,188 110,186 160,185 210,182 260,178"
                                    />

                                    <circle cx="10" cy="190" r="4" fill="#c1eb50" />
                                    <circle cx="10" cy="190" r="4" fill="#22c55e" />
                                    <circle cx="60" cy="188" r="4" fill="#22c55e" />
                                    <circle cx="110" cy="186" r="4" fill="#22c55e" />
                                    <circle cx="160" cy="185" r="4" fill="#22c55e" />
                                    <circle cx="210" cy="182" r="4" fill="#22c55e" />
                                    <circle cx="260" cy="178" r="4" fill="#22c55e" />
                                    <circle cx="260" cy="178" r="4" fill="#c52222" />
                                </svg>

                                <div className={styles.months}>
                                    {meses.map((mes, index) => (
                                        <span key={index}>{mes}</span>
                                    ))}
                                </div>

                            </div>

                        </div>

                        <div className={styles.legend}>
                            <div>
                                <span className={styles.blue}></span>
                                Projetos
                            </div>

                            <div>
                                <span className={styles.green}></span>
                                Tarefas
                            </div>
                        </div>

                    </div>

                    {/* ORÇAMENTO */}
                    <div className={styles.card}>

                        <h3>Orçamento vs Gasto (M Kz)</h3>

                        <div className={styles.barContainer}>

                            <div className={styles.yAxisBar}>
                                <span>16</span>
                                <span>12</span>
                                <span>8</span>
                                <span>4</span>
                                <span>0</span>
                            </div>

                            <div className={styles.barGraph}>

                                <div className={styles.grid}></div>

                                {gastos.map((valor, index) => (
                                    <div
                                        key={index}
                                        className={styles.barColumn}
                                    >
                                        <div
                                            className={styles.barOrange}
                                            style={{
                                                height: `${valor * 10}px`
                                            }}
                                        ></div>
                                    </div>
                                ))}

                            </div>

                        </div>

                        <div className={styles.legend}>
                            <div>
                                <span className={styles.blue}></span>
                                Orçamento
                            </div>

                            <div>
                                <span className={styles.orange}></span>
                                Gasto
                            </div>
                        </div>

                    </div>

                </div>




                <div className={styles.relatorioFour}>

                    <h2>Projetos com Melhor Desempenho</h2>

                    <div className={styles.relatorioFourOne}>

                        <div className={styles.relatorioFourIcone}>#1</div>

                        <div>
                            <div className={styles.relatorioFourTwo}>
                                <h4>Portal de Ensino Online</h4>
                                <span className={styles.relatorioFourSpan}>Media</span>
                            </div>

                            <div className={styles.relatorioFourTwo}>
                                <div className={styles.relatorioFourBarra}>
                                    <div className={styles.relatorioFourBarraOne}></div>
                                </div>
                                <span className={styles.relatorioFourSpanTwo}>65%</span>
                            </div>

                        </div>
                    </div>

                    <div className={styles.relatorioFourOne}>

                        <div className={styles.relatorioFourIcone}>#1</div>

                        <div>
                            <div className={styles.relatorioFourTwo}>
                                <h4>Portal de Ensino Online</h4>
                                <span className={styles.relatorioFourSpan}>Media</span>
                            </div>

                            <div className={styles.relatorioFourTwo}>
                                <div className={styles.relatorioFourBarra}>
                                    <div className={styles.relatorioFourBarraOne}></div>
                                </div>
                                <span className={styles.relatorioFourSpanTwo}>65%</span>
                            </div>

                        </div>
                    </div>

                    <div className={styles.relatorioFourOne}>

                        <div className={styles.relatorioFourIcone}>#1</div>

                        <div>
                            <div className={styles.relatorioFourTwo}>
                                <h4>Portal de Ensino Online</h4>
                                <span className={styles.relatorioFourSpan}>Media</span>
                            </div>

                            <div className={styles.relatorioFourTwo}>
                                <div className={styles.relatorioFourBarra}>
                                    <div className={styles.relatorioFourBarraOne}></div>
                                </div>
                                <span className={styles.relatorioFourSpanTwo}>65%</span>
                            </div>

                        </div>
                    </div>


                </div>

            </div>

        </div>
    )
}

export default Relatorios
