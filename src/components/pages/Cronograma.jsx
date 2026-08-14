
import React, { useState } from "react";

import {
    FiCalendar,
    FiChevronLeft,
    FiChevronRight,
    FiPlus,
    FiClock,
    FiCheckCircle,
    FiAlertCircle,
    FiMoreVertical
} from "react-icons/fi";

import styles from "./Cronograma.module.css";

const Cronograma = () => {

    const [periodo, setPeriodo] = useState("Mês");

    const semanas = [
        "01 - 07",
        "08 - 14",
        "15 - 21",
        "22 - 28",
        "29 - 05"
    ];

    const projetos = [
        {
            id: 1,
            nome: "Desenvolvimento da Plataforma",
            responsavel: "Paixão António",
            inicio: 0,
            duracao: 3,
            progresso: 75,
            status: "Em andamento"
        },
        {
            id: 2,
            nome: "Pesquisa de Mercado",
            responsavel: "Maria José",
            inicio: 1,
            duracao: 2,
            progresso: 100,
            status: "Concluído"
        },
        {
            id: 3,
            nome: "Campanha de Marketing",
            responsavel: "João Manuel",
            inicio: 2,
            duracao: 3,
            progresso: 45,
            status: "Em andamento"
        },
        {
            id: 4,
            nome: "Testes do Sistema",
            responsavel: "Carlos Pedro",
            inicio: 3,
            duracao: 2,
            progresso: 20,
            status: "Atrasado"
        }
    ];

    const getStatusClass = (status) => {

        if (status === "Concluído") {
            return styles.concluido;
        }

        if (status === "Atrasado") {
            return styles.atrasado;
        }

        return styles.andamento;
    };

    const getStatusIcon = (status) => {

        if (status === "Concluído") {
            return <FiCheckCircle />;
        }

        if (status === "Atrasado") {
            return <FiAlertCircle />;
        }

        return <FiClock />;
    };

    return (

        <div className={styles.container}>

            {/* ========================= */}
            {/* CABEÇALHO */}
            {/* ========================= */}

            <div className={styles.header}>

                <div>

                    <div className={styles.titleArea}>

                        <div className={styles.titleIcon}>
                            <FiCalendar />
                        </div>

                        <div>
                            <h2>Cronograma</h2>

                            <p>
                                Acompanhe o cronograma e o progresso dos seus projetos.
                            </p>
                        </div>

                    </div>

                </div>

                <button className={styles.addButton}>
                    <FiPlus />
                    Novo cronograma
                </button>

            </div>


            {/* ========================= */}
            {/* RESUMO */}
            {/* ========================= */}

            <div className={styles.summary}>

                <div className={styles.summaryCard}>

                    <div className={styles.summaryIcon}>
                        <FiCalendar />
                    </div>

                    <div>
                        <span>Total de projetos</span>
                        <strong>4</strong>
                    </div>

                </div>


                <div className={styles.summaryCard}>

                    <div className={`${styles.summaryIcon} ${styles.green}`}>
                        <FiCheckCircle />
                    </div>

                    <div>
                        <span>Concluídos</span>
                        <strong>1</strong>
                    </div>

                </div>


                <div className={styles.summaryCard}>

                    <div className={`${styles.summaryIcon} ${styles.orange}`}>
                        <FiClock />
                    </div>

                    <div>
                        <span>Em andamento</span>
                        <strong>2</strong>
                    </div>

                </div>


                <div className={styles.summaryCard}>

                    <div className={`${styles.summaryIcon} ${styles.red}`}>
                        <FiAlertCircle />
                    </div>

                    <div>
                        <span>Atrasados</span>
                        <strong>1</strong>
                    </div>

                </div>

            </div>


            {/* ========================= */}
            {/* CONTROLES */}
            {/* ========================= */}

            <div className={styles.controls}>

                <div className={styles.navigation}>

                    <button>
                        <FiChevronLeft />
                    </button>

                    <strong>Agosto 2026</strong>

                    <button>
                        <FiChevronRight />
                    </button>

                </div>


                <div className={styles.periods}>

                    {["Semana", "Mês", "Trimestre"].map((item) => (

                        <button
                            key={item}
                            onClick={() => setPeriodo(item)}
                            className={
                                periodo === item
                                    ? styles.periodActive
                                    : ""
                            }
                        >
                            {item}
                        </button>

                    ))}

                </div>

            </div>


            {/* ========================= */}
            {/* CRONOGRAMA */}
            {/* ========================= */}

            <div className={styles.schedule}>

                {/* Cabeçalho das semanas */}

                <div className={styles.timelineHeader}>

                    <div className={styles.projectColumn}>
                        Projeto / Atividade
                    </div>

                    <div className={styles.weeks}>

                        {semanas.map((semana, index) => (

                            <div
                                key={index}
                                className={styles.week}
                            >
                                <span>Semana {index + 1}</span>
                                <strong>{semana}</strong>
                            </div>

                        ))}

                    </div>

                </div>


                {/* Projetos */}

                <div className={styles.projectList}>

                    {projetos.map((projeto) => (

                        <div
                            className={styles.projectRow}
                            key={projeto.id}
                        >

                            {/* Informações */}

                            <div className={styles.projectInfo}>

                                <div className={styles.projectTitle}>
                                    <strong>{projeto.nome}</strong>

                                    <button>
                                        <FiMoreVertical />
                                    </button>
                                </div>

                                <span>
                                    Responsável: {projeto.responsavel}
                                </span>

                                <div className={styles.progressInfo}>

                                    <div className={styles.progressBar}>
                                        <div
                                            className={styles.progress}
                                            style={{
                                                width: `${projeto.progresso}%`
                                            }}
                                        ></div>
                                    </div>

                                    <span>
                                        {projeto.progresso}%
                                    </span>

                                </div>

                            </div>


                            {/* Timeline */}

                            <div className={styles.timeline}>

                                {semanas.map((_, index) => (

                                    <div
                                        key={index}
                                        className={styles.timelineCell}
                                    >

                                        {index === projeto.inicio && (

                                            <div
                                                className={`${styles.taskBar} ${getStatusClass(projeto.status)}`}
                                                style={{
                                                    width: `${projeto.duracao * 100}%`
                                                }}
                                            >

                                                <span>
                                                    {getStatusIcon(projeto.status)}
                                                </span>

                                                <strong>
                                                    {projeto.progresso}%
                                                </strong>

                                            </div>

                                        )}

                                    </div>

                                ))}

                            </div>

                        </div>

                    ))}

                </div>

            </div>


            {/* ========================= */}
            {/* LEGENDA */}
            {/* ========================= */}

            <div className={styles.legend}>

                <div>
                    <span className={styles.legendGreen}></span>
                    Em andamento
                </div>

                <div>
                    <span className={styles.legendBlue}></span>
                    Concluído
                </div>

                <div>
                    <span className={styles.legendRed}></span>
                    Atrasado
                </div>

            </div>

        </div>
    );
};

export default Cronograma;