
import React from 'react'

import { Link } from "react-router-dom";

import styles from './Tarefas.module.css'
import CardTitle from '../formulario/forma/CardTitle'
import ProjectSearch from '../formulario/forma/ProjectSearch'

const Tarefas = () => {
    return (

        <div>

            <div className={styles.CardTarefas}>

                <div className={styles.CardTarefasOne}>

                    <div className={styles.CardTarefasTwo}>
                        <h3>Quadro de Tarefas</h3>
                        <span>Gerencie tarefas com drag & drop</span>
                    </div>

                    <Link to="/nova-tarefa" className={styles.button}>
                        + Nova Tarefa
                    </Link>

                </div>

                <div className={styles.CardMother}>

                    <div className={styles.CardTask}>

                            <div className={styles.CardTaskTwo}>
                                <h4>Pendentes</h4>

                                <div className={styles.CardTaskThree}>
                                    <span>5</span>
                                    <h3>Angola</h3>
                                </div>
                        </div>

                    </div>

                    <div className={styles.CardTask}>

                            <div className={styles.CardTaskTwo}>
                                <h4>Pendentes</h4>

                                <div className={styles.CardTaskThree}>
                                    <span>5</span>
                                    <h3>Angola</h3>
                                </div>
                        </div>

                    </div>

                    <div className={styles.CardTask}>

                            <div className={styles.CardTaskTwo}>
                                <h4>Pendentes</h4>

                                <div className={styles.CardTaskThree}>
                                    <span>5</span>
                                    <h3>Angola</h3>
                                </div>
                        </div>

                    </div>

                </div>

                <ProjectSearch
                    placeholder='pesquisar tarefas...'
                />

                <div className={styles.CardStatusZero}>
                    <div className={styles.CardStatus}>
                        <h4>Pendente</h4>
                        <span>5</span>
                    </div>

                    <div className={styles.CardStatus}>
                        <h4>Pendente</h4>
                        <span>5</span>
                    </div>

                    <div className={styles.CardStatus}>
                        <h4>Pendente</h4>
                        <span>5</span>
                    </div>
                </div>

                <div className={styles.TarefasZero}>

                    <div className={styles.Tarefas}>

                        <div className={styles.TarefasCard}>
                            <h5>Inegração com sistemas de pagamento</h5>
                            <span> ⋮ </span>
                        </div>

                        <div className={styles.TarefasCardDesc}>
                            <p>Integrar Gatway de pagamentos multicaixa</p>
                        </div>

                        <div className={styles.TarefasCardResp}>
                            <span>Paixao</span>
                            <span>Data: 19/05</span>
                        </div>

                        <div className={styles.TarefasCardSeparador}></div>

                        <div className={styles.TarefasCardPriodidade}>
                            <div className={styles.TarefasPriodidade}>Alta</div>
                            <div>Atrasada</div>
                        </div>

                    </div>

                     <div className={styles.Tarefas}>

                        <div className={styles.TarefasCard}>
                            <h5>Inegração com sistemas de pagamento</h5>
                            <span> ⋮ </span>
                        </div>

                        <div className={styles.TarefasCardDesc}>
                            <p>Integrar Gatway de pagamentos multicaixa</p>
                        </div>

                        <div className={styles.TarefasCardResp}>
                            <span>Paixao</span>
                            <span>Data: 19/05</span>
                        </div>

                        <div className={styles.TarefasCardSeparador}></div>

                        <div className={styles.TarefasCardPriodidade}>
                            <div className={styles.TarefasPriodidade}>Alta</div>
                            <div>Atrasada</div>
                        </div>

                    </div>

                     <div className={styles.Tarefas}>

                        <div className={styles.TarefasCard}>
                            <h5>Inegração com sistemas de pagamento</h5>
                            <span> ⋮ </span>
                        </div>

                        <div className={styles.TarefasCardDesc}>
                            <p>Integrar Gatway de pagamentos multicaixa</p>
                        </div>

                        <div className={styles.TarefasCardResp}>
                            <span>Paixao</span>
                            <span>Data: 19/05</span>
                        </div>

                        <div className={styles.TarefasCardSeparador}></div>

                        <div className={styles.TarefasCardPriodidade}>
                            <div className={styles.TarefasPriodidade}>Alta</div>
                            <div>Atrasada</div>
                        </div>

                    </div>


                </div>

            </div>

        </div>
    )
}

export default Tarefas
