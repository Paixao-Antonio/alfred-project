
import React from 'react'
import { Link } from 'react-router-dom'

import Pesquisar from './Pesquisar'

import Footer from './Footer'

import styles from './CreateProject.module.css'

import { IoIosArrowRoundBack } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { MdOutlineCreateNewFolder } from "react-icons/md";

const CreateProject = () => {
    return (
        <div>

            <Pesquisar />

            <div className={styles.CardCreateProject}>

                <div className={styles.CardCreateTitle}>

                    <div className={styles.CardCreateTitleIcon}>
                        <Link to="/projects"> <IoIosArrowRoundBack /></Link>
                    </div>

                    <div>
                        <h4 className={styles.CardCreateTitleText}>Criar Novo Projeto</h4>
                        <span className={styles.CardCreateSpan}>Preencha os dados do projeto</span>
                    </div>

                </div>

                <div className={styles.CardCreateSecond}>

                    <h3>Informações Básicas</h3>

                    <label htmlFor="">Nome do Projecto</label>
                    <div className={styles.CardCreateInput}>
                        <input type="text"/>
                    </div>

                    <label htmlFor="">Descrição</label>
                    <div className={styles.CreateInputDescri}>
                        <textarea name="" id=""></textarea>
                    </div>

                    <div >

                        <div className={styles.CreateLabel}>
                            <label htmlFor="">Cliente/Empresa</label>
                            <label htmlFor="">Responsável</label>
                        </div>

                        <div className={styles.CreateLabel}>
                            <div className={styles.CardCreateInput}>
                                <input type="text" placeholder='Nome do responsável do projecto' />
                            </div>
                            <div className={styles.CardCreateInput}>
                                <input type="text" placeholder='Nome do patrocinador do projecto' />
                            </div>

                        </div>
                    </div>


                    <div className={styles.CreateLabel}>
                        <label htmlFor="">Categoria</label>
                        <label htmlFor="">Departamento</label>
                    </div>


                    <div className={styles.CreateLabel}>
                        <div className={styles.CardCreateInput}>
                            <input type="text" />
                        </div>

                        <div className={styles.CardCreateInput}>
                            <input type="text" />
                        </div>

                    </div>

                </div>


                <div className={styles.CardCreateSecond}>

                    <div>
                        <h4>Status e Prioridade</h4>
                    </div>

                    <div className={styles.CreateLabel}>
                        <label htmlFor="">Status</label>
                        <label htmlFor="">Prioridade</label>
                    </div>

                    <div className={styles.CreateLabel}>
                        <div className={styles.CardCreateInput}>
                            <select name="" id="">
                                <option value="" disabled>-- Defina o status --</option>
                                <option value="Planejado">Planejado</option>
                                <option value="Activo">Activo</option>
                                <option value="Pausado">Pausado</option>
                                <option value="Concluído">Concluído</option>
                            </select>
                        </div>
                        <div className={styles.CardCreateInput}>
                            <select name="" id="">
                                <option value="" disabled>-- Defina a prioridade --</option>
                                <option value="Baixa">Baixa</option>
                                <option value="Média">Média</option>
                                <option value="Alta">Alta</option>
                                <option value="Urgente">Urgente</option>
                            </select>
                        </div>

                    </div>
                </div>


                <div className={styles.CardCreateSecond}>

                    <div>
                        <h4>Cronograma e Orçamento</h4>
                    </div>

                    <div className={styles.CreateLabel}>
                        <label htmlFor="">Data de Início</label>
                        <label htmlFor="">Data de Término</label>
                    </div>

                    <div className={styles.CreateLabel}>
                        <div className={styles.CardCreateInput}>
                            <input type="date" name="" id="" />
                        </div>
                        <div className={styles.CardCreateInput}>
                            <input type="date" name="" id="" />
                        </div>

                    </div>

                    <label htmlFor="">Oramento Total (em kz)</label>
                    <div className={styles.CardCreateInput}>
                        <input type="number" name="" id="" placeholder='Ex.: 15.000.000,00 kz'/>
                    </div>
                </div>

                <div className={styles.CardCreateBotao}>
                    <button className={styles.CardCreateBotaoIcon}> <IoMdClose  /> Cancelar</button>
                    <button className={styles.CardCreateBotaoTwo}> <MdOutlineCreateNewFolder /> Criar Projecto</button>
                </div>

            </div>

            <Footer />

        </div>

    )
}

export default CreateProject
