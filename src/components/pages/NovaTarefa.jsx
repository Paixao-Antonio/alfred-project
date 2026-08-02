
import React from 'react'

import { Link } from 'react-router-dom'

import { useState } from 'react'

import styles from './NovaTarefa.module.css'

import { IoIosArrowRoundBack } from "react-icons/io";

const NovaTarefa = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const [project, setProject] = useState("");
    const [responsible, setResponsible] = useState("");
    const [sprint, setSprint] = useState("");
    const [timeEstimate, setTimeEstimate] = useState("");

    const [status, setStatus] = useState("pendente");
    const [priority, setPriority] = useState("media");
    const [dueDate, setDueDate] = useState("");

    return (

        <div>

            <div className={styles.taskCard}>

                <div className={styles.taskCardTitle}>

                    <div className={styles.taskCardIcone}>
                        <Link to="/tarefas"> <IoIosArrowRoundBack /></Link>
                    </div>

                    <div className={styles.taskCardText}>
                        <h4>Criar Novo Projeto</h4>
                        <span>Preencha os dados do projeto</span>
                    </div>

                </div>


                {/* 1. INFORMAÇÕES DA TAREFA */}

                <div className={styles.sectionTeste}>

                    <h4 className={styles.sectionTitle}>Informações da Tarefa</h4>

                    <div className={styles.formGroup}>

                        <label>Título da Tarefa</label>
                        <input
                            type="text"
                            placeholder="Ex: Criar landing page"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label>Descrição</label>
                        <textarea
                            placeholder="Descreva a tarefa..."
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>

                </div>

                {/* 2. VINCULAÇÃO E ATRIBUIÇÃO */}

                <div className={styles.sectionTeste}>


                    <h4 className={styles.sectionTitle}>Vinculação e Atribuição</h4>

                    <div className={styles.grid}>
                        <div className={styles.formGroup}>
                            <label>Projecto</label>
                            <select
                                value={project}
                                onChange={(e) => setProject(e.target.value)}
                            >
                                <option value="">Selecione</option>
                                <option value="web">Website</option>
                                <option value="app">Aplicação Mobile</option>
                            </select>
                        </div>

                        <div className={styles.formGroup}>
                            <label>Responsável</label>
                            <input
                                value={responsible}
                                onChange={(e) => setResponsible(e.target.value)}
                            >
            
                            </input>
                        </div>

                        <div className={styles.formGroup}>
                            <label>Sprint</label>
                            <select
                                value={sprint}
                                onChange={(e) => setSprint(e.target.value)}
                            >
                                <option value="">Selecione</option>
                                <option value="sprint1">Sprint 1</option>
                                <option value="sprint2">Sprint 2</option>
                            </select>
                        </div>

                        <div className={styles.formGroup}>
                            <label>Tempo Estimado (h)</label>
                            <input
                                type="number"
                                placeholder="Ex: 5"
                                value={timeEstimate}
                                onChange={(e) => setTimeEstimate(e.target.value)}
                            />
                        </div>
                    </div>

                </div>

                {/* 3. STATUS E PRIORIDADE */}

                <div className={styles.sectionTeste}>


                    <h4 className={styles.sectionTitle}>Status e Prioridade</h4>

                    <div className={styles.grid}>
                        <div className={styles.formGroup}>
                            <label>Status</label>
                            <select
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                            >
                                <option value="pendente">Pendente</option>
                                <option value="em-progresso">Em Progresso</option>
                                <option value="concluido">Concluído</option>
                            </select>
                        </div>

                        <div className={styles.formGroup}>
                            <label>Prioridade</label>
                            <select
                                value={priority}
                                onChange={(e) => setPriority(e.target.value)}
                            >
                                <option value="baixa">Baixa</option>
                                <option value="media">Média</option>
                                <option value="alta">Alta</option>
                            </select>
                        </div>

                        <div className={styles.formGroup}>
                            <label>Data de Vencimento</label>
                            <input
                                type="date"
                                value={dueDate}
                                onChange={(e) => setDueDate(e.target.value)}
                            />
                        </div>
                    </div>

                </div>

                {/* BOTÃO */}
                <div className={styles.actions}>
                    <button
                        onClick={() => {
                            console.log({
                                title,
                                description,
                                project,
                                responsible,
                                sprint,
                                timeEstimate,
                                status,
                                priority,
                                dueDate,
                            });
                        }}
                    >
                        Cancelar
                    </button>

                    <button
                        onClick={() => {
                            console.log({
                                title,
                                description,
                                project,
                                responsible,
                                sprint,
                                timeEstimate,
                                status,
                                priority,
                                dueDate,
                            });
                        }}
                    >
                        Criar Tarefa
                    </button>
                </div>

            </div>

        </div>
    )
}

export default NovaTarefa
