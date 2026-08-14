
import React, { useState } from "react";

import {
    FiPlus,
    FiCalendar,
    FiCheckCircle,
    FiClock,
    FiTarget,
    FiMoreVertical,
    FiChevronRight,
    FiPlay,
    FiPause,
} from "react-icons/fi";

import styles from "./Sprints.module.css";

const Sprints = () => {

    const [filtro, setFiltro] = useState("Todas");

    const sprints = [
        {
            id: 1,
            nome: "Sprint 01",
            objetivo: "Estrutura inicial do sistema",
            inicio: "01 Ago 2026",
            fim: "14 Ago 2026",
            tarefas: 12,
            concluidas: 10,
            progresso: 83,
            status: "Concluída",
        },

        {
            id: 2,
            nome: "Sprint 02",
            objetivo: "Desenvolvimento do Dashboard",
            inicio: "15 Ago 2026",
            fim: "28 Ago 2026",
            tarefas: 18,
            concluidas: 8,
            progresso: 44,
            status: "Em andamento",
        },

        {
            id: 3,
            nome: "Sprint 03",
            objetivo: "Implementação do módulo de projetos",
            inicio: "29 Ago 2026",
            fim: "11 Set 2026",
            tarefas: 15,
            concluidas: 0,
            progresso: 0,
            status: "Planejada",
        },
    ];

    const filtrarSprints = () => {

        if (filtro === "Todas") {
            return sprints;
        }

        return sprints.filter(
            (sprint) => sprint.status === filtro
        );
    };

    const getStatusClass = (status) => {

        if (status === "Concluída") {
            return styles.concluida;
        }

        if (status === "Em andamento") {
            return styles.andamento;
        }

        return styles.planejada;
    };

    return (

        <div className={styles.container}>

            {/* ========================= */}
            {/* CABEÇALHO */}
            {/* ========================= */}

            <div className={styles.header}>

                <div className={styles.titleArea}>

                    <div className={styles.titleIcon}>
                        <FiTarget />
                    </div>

                    <div>
                        <h2>Sprints</h2>

                        <p>
                            Planeie, acompanhe e gerencie os ciclos dos seus projetos.
                        </p>
                    </div>

                </div>

                <button className={styles.newButton}>
                    <FiPlus />
                    Nova Sprint
                </button>

            </div>


            {/* ========================= */}
            {/* RESUMO */}
            {/* ========================= */}

            <div className={styles.summary}>

                <div className={styles.summaryCard}>

                    <div className={styles.blueIcon}>
                        <FiTarget />
                    </div>

                    <div>
                        <span>Total de Sprints</span>
                        <strong>3</strong>
                    </div>

                </div>


                <div className={styles.summaryCard}>

                    <div className={styles.greenIcon}>
                        <FiPlay />
                    </div>

                    <div>
                        <span>Em andamento</span>
                        <strong>1</strong>
                    </div>

                </div>


                <div className={styles.summaryCard}>

                    <div className={styles.orangeIcon}>
                        <FiClock />
                    </div>

                    <div>
                        <span>Planejadas</span>
                        <strong>1</strong>
                    </div>

                </div>


                <div className={styles.summaryCard}>

                    <div className={styles.purpleIcon}>
                        <FiCheckCircle />
                    </div>

                    <div>
                        <span>Concluídas</span>
                        <strong>1</strong>
                    </div>

                </div>

            </div>


            {/* ========================= */}
            {/* SPRINT ATUAL */}
            {/* ========================= */}

            <div className={styles.currentSprint}>

                <div className={styles.currentHeader}>

                    <div>

                        <div className={styles.currentTitle}>
                            <span>Sprint atual</span>

                            <span className={styles.activeBadge}>
                                ● Em andamento
                            </span>
                        </div>

                        <h3>Sprint 02</h3>

                        <p>
                            Desenvolvimento do Dashboard
                        </p>

                    </div>

                    <button className={styles.moreButton}>
                        <FiMoreVertical />
                    </button>

                </div>


                <div className={styles.currentInfo}>

                    <div className={styles.date}>
                        <FiCalendar />

                        <div>
                            <span>Período</span>
                            <strong>
                                15 Ago - 28 Ago 2026
                            </strong>
                        </div>
                    </div>


                    <div className={styles.date}>
                        <FiTarget />

                        <div>
                            <span>Objetivo</span>
                            <strong>
                                18 tarefas
                            </strong>
                        </div>
                    </div>


                    <div className={styles.date}>
                        <FiCheckCircle />

                        <div>
                            <span>Concluídas</span>
                            <strong>
                                8 tarefas
                            </strong>
                        </div>
                    </div>

                </div>


                <div className={styles.currentProgress}>

                    <div className={styles.progressHeader}>

                        <span>Progresso da Sprint</span>

                        <strong>44%</strong>

                    </div>

                    <div className={styles.progressBar}>

                        <div
                            className={styles.progressFill}
                            style={{ width: "44%" }}
                        ></div>

                    </div>

                </div>

            </div>


            {/* ========================= */}
            {/* FILTROS */}
            {/* ========================= */}

            <div className={styles.filterArea}>

                <h3>Lista de Sprints</h3>

                <div className={styles.filters}>

                    {[
                        "Todas",
                        "Em andamento",
                        "Planejada",
                        "Concluída",
                    ].map((item) => (

                        <button
                            key={item}
                            onClick={() => setFiltro(item)}
                            className={
                                filtro === item
                                    ? styles.filterActive
                                    : ""
                            }
                        >
                            {item}
                        </button>

                    ))}

                </div>

            </div>


            {/* ========================= */}
            {/* LISTA */}
            {/* ========================= */}

            <div className={styles.sprintList}>

                {filtrarSprints().map((sprint) => (

                    <div
                        className={styles.sprintCard}
                        key={sprint.id}
                    >

                        <div className={styles.sprintTop}>

                            <div>

                                <div className={styles.sprintName}>

                                    <h3>{sprint.nome}</h3>

                                    <span
                                        className={
                                            getStatusClass(
                                                sprint.status
                                            )
                                        }
                                    >
                                        {sprint.status}
                                    </span>

                                </div>

                                <p>
                                    {sprint.objetivo}
                                </p>

                            </div>

                            <button className={styles.moreButton}>
                                <FiMoreVertical />
                            </button>

                        </div>


                        <div className={styles.sprintDetails}>

                            <div>
                                <FiCalendar />

                                <span>
                                    {sprint.inicio}
                                    {" - "}
                                    {sprint.fim}
                                </span>
                            </div>

                            <div>
                                <FiCheckCircle />

                                <span>
                                    {sprint.concluidas}
                                    /
                                    {sprint.tarefas}
                                    {" "}tarefas
                                </span>
                            </div>

                        </div>


                        <div className={styles.cardProgress}>

                            <div className={styles.progressHeader}>

                                <span>Progresso</span>

                                <strong>
                                    {sprint.progresso}%
                                </strong>

                            </div>

                            <div className={styles.progressBar}>

                                <div
                                    className={
                                        styles.progressFill
                                    }
                                    style={{
                                        width: `${sprint.progresso}%`,
                                    }}
                                ></div>

                            </div>

                        </div>


                        <button className={styles.detailsButton}>

                            Ver detalhes

                            <FiChevronRight />

                        </button>

                    </div>

                ))}

            </div>

        </div>
    );
};

export default Sprints;