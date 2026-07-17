
import React from 'react'
import styles from './Escopo.module.css'
import CardTitle from '../formulario/forma/CardTitle'
import Pesquisar from './Pesquisar'
import Footer from './Footer'

const Escopo = ( ) => {
    return (

        <div>
            <Pesquisar />

            <CardTitle
                header="Definição de escopo"
                title="Escopo de Projecto"
                descricao="Defina todos os aspectos e limite do projecto"
                variante='duplobotao'
            />


            <div className={styles.CardEscopoTwo}>

                <div className={styles.CardEscopoOne}>
                    <h4>Informações básicas</h4>
                    <p className={styles.CardPara}>Dados fundamentais do projecto</p>
                </div>

                <div className={styles.CardConteinerFirst}>
                    <label htmlFor="">Nome do projecto *</label>
                    <div className={styles.ConteinerInputName}>
                        <input type="text" placeholder='Ex: Sistema de Gestão Escolar' />
                    </div>

                    <div className={styles.ConteinerLabel} >
                        <label className={styles.ConteinerLabel} htmlFor="">Gestor do Projecto *</label>
                        <label className={styles.ConteinerLabel} htmlFor="">Patrocinador *</label>
                    </div>

                    <div className={styles.ConteinerGestor}>
                        <div className={styles.ConteinerInput}>
                            <input type="text" placeholder='Nome do responsável do projecto' />
                        </div>
                        <div className={styles.ConteinerInput}>
                            <input type="text" placeholder='Nome do patrocinador do projecto' />
                        </div>

                    </div>


                    <div className={styles.ConteinerLabel}>
                        <label className={styles.ConteinerLabel} htmlFor="">Data de inicio *</label>
                        <label className={styles.ConteinerLabel} htmlFor="">Data de termino *</label>
                    </div>

                    <div className={styles.ConteinerGestor}>
                        <div className={styles.ConteinerInput}>
                            <input type="date" placeholder='Ex: Sistema de Gestão Escolar' />
                        </div>
                        <div className={styles.ConteinerInput}>
                            <input type="date" placeholder='Ex: Sistema de Gestão Escolar' />
                        </div>

                    </div>

                    <div className={styles.ConteinerLabel}>
                        <label className={styles.ConteinerLabel} htmlFor="">Orçamento *</label>
                        <label className={styles.ConteinerLabel} htmlFor="">Prioridade *</label>
                    </div>

                    <div className={styles.ConteinerGestor}>
                        <div className={styles.ConteinerInput}>
                            <input type="number" placeholder='0.00' />
                        </div>
                        <div className={styles.ConteinerInput}>
                            <select name="Prioridade" id="">
                                <option value="" disabled>Escolha a sua prioridade *</option>
                                <option value="">Alta</option>
                                <option value="">Média</option>
                                <option value="">Baixa</option>
                            </select>
                        </div>

                    </div>

                </div>

            </div>


            <div className={styles.CardSeparador}>

                <div className={styles.CardEscopoTwo}>
                    <div className={styles.CardEscopoOne}>
                        <h4>Objectivo e Justificativa</h4>
                        <p className={styles.CardPara}>Por que e para que este projecto deve existir</p>
                    </div>

                    <div className={styles.ConteinerObject}>

                        <label htmlFor="">Objectivo do projecto *</label>

                        <div className={styles.ConteinerObjectName}>
                            <input type="text" placeholder='Descreva os objectivos SMART (Específicos, Mensuráveis, Atingíveis, Relevantes, temporais) do projecto...' />
                            <div className={styles.ConteinerObjectSpan}>
                                <span>Dica: Use objectivos mensuráveis como "Aumentar a eficiência em 30% até dezembro em 2026"</span>
                            </div>

                        </div>

                        <label htmlFor="">Justificativa do projecto *</label>

                        <div className={styles.ConteinerObjectName}>
                            <input type="text" placeholder='Explique a razão por detrás do seu projecto, o problema que ele resolve e os benefícios esperados...' />

                        </div>
                    </div>

                </div>

            </div>


            <div className={styles.CardSeparador}>

                <div className={styles.CardEscopoTwo}>

                    <div className={styles.CardEscopoOne}>
                        <div className={styles.CardEscopoThree}>
                            <div>
                                <h4>Entregas do Projecto</h4>
                                <p className={styles.CardPara}>O que será produzido e entregue</p>
                            </div>

                            <div>
                                <button className={styles.CardBoato}>+ Adicionar Entrega</button>
                            </div>
                        </div>

                    </div>

                    <div className={styles.CardABC}>

                        <div className={styles.CardConteiner}>

                            <div className={styles.ConteinerLabel}>
                                <label htmlFor="">Nome da Entrega *</label>
                                <label htmlFor="">Prazo de Entrega *</label>
                            </div>

                            <div className={styles.ConteinerGestor}>
                                <div className={styles.ConteinerInput}>
                                    <input type="text" placeholder='Front End - componentização' />
                                </div>

                                <div className={styles.ConteinerInput}>
                                    <input type="date" placeholder='Nome do patrocinador do projecto' />
                                </div>

                            </div>

                            <label htmlFor="">Descrição *</label>
                            <div className={styles.ConteinerInputDescricao}>
                                <input type="text" placeholder='Entregar todos componentes do layout principal...' />
                            </div>
                        </div>

                    </div>

                </div>

            </div>



            <div className={styles.CardSeparador}>

                <div className={styles.CardEscopoTwo}>

                    <div className={styles.CardEscopoOne}>
                        <div className={styles.CardEscopoThree}>
                            <div>
                                <h4>Exlusão do Projecto</h4>
                                <p className={styles.CardPara}>O que que não está incluido no projecto</p>
                            </div>

                            <div>
                                <button className={styles.CardBoato}>+ Adicionar Exclusão</button>
                            </div>
                        </div>

                    </div>

                    <div className={styles.CardABC}>



                        <div className={styles.InputExclusao}>
                           <div>Defina claramente o que não faz parte deste projecto para evitar mal-entendidos e mudanças de escopo futuras</div>
                        </div>

                        <div className={styles.InputExclusaoTwo}>
                            <input className={styles.InputOne} type="text" placeholder='#1' />
                            <input className={styles.InputTwo} type="text" placeholder='Ex.: Integração com sistemas legados não está incluida nesta fase.' />
                        </div>

                    </div>

                </div>

            </div>



            <div className={styles.CardSalvar}>
                <button type="submit">Salvar como rascunho</button>
                <button type="submit">Salvar e Finalizar</button>
            </div>





            <Footer />

        </div>
    )
}

export default Escopo
