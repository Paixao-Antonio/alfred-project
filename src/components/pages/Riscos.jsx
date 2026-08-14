
import React, { useState } from "react";

import {
    FiAlertTriangle,
    FiPlus,
    FiSearch,
    FiFilter,
    FiMoreVertical,
    FiShield,
    FiActivity,
    FiCheckCircle,
    FiClock
} from "react-icons/fi";

import styles from "./Riscos.module.css";


const Riscos = () => {

    // =========================
    // ESTADO DO FILTRO
    // =========================

    const [filtro, setFiltro] = useState("Todos");


    // =========================
    // DADOS DOS RISCOS
    // =========================

    const riscos = [

        {
            id: 1,
            codigo: "R-001",
            titulo: "Atraso no desenvolvimento",
            descricao: "Possibilidade de atraso nas entregas devido à complexidade técnica.",
            categoria: "Cronograma",
            probabilidade: "Alta",
            impacto: "Alto",
            nivel: "Crítico",
            responsavel: "Paixão António",
            estado: "Aberto"
        },

        {
            id: 2,
            codigo: "R-002",
            titulo: "Indisponibilidade da equipa",
            descricao: "Ausência de membros importantes durante fases críticas do projeto.",
            categoria: "Recursos",
            probabilidade: "Média",
            impacto: "Alto",
            nivel: "Alto",
            responsavel: "Ana Silva",
            estado: "Mitigado"
        },

        {
            id: 3,
            codigo: "R-003",
            titulo: "Alteração de requisitos",
            descricao: "Alterações frequentes nos requisitos podem aumentar o escopo.",
            categoria: "Escopo",
            probabilidade: "Alta",
            impacto: "Médio",
            nivel: "Alto",
            responsavel: "Maria José",
            estado: "Aberto"
        },

        {
            id: 4,
            codigo: "R-004",
            titulo: "Falha no servidor",
            descricao: "Possibilidade de indisponibilidade temporária da infraestrutura.",
            categoria: "Tecnologia",
            probabilidade: "Baixa",
            impacto: "Alto",
            nivel: "Médio",
            responsavel: "João Manuel",
            estado: "Monitorizado"
        },

        {
            id: 5,
            codigo: "R-005",
            titulo: "Aumento de custos",
            descricao: "Possibilidade de custos superiores ao orçamento previsto.",
            categoria: "Financeiro",
            probabilidade: "Média",
            impacto: "Médio",
            nivel: "Médio",
            responsavel: "Carlos Pedro",
            estado: "Aberto"
        },

        {
            id: 6,
            codigo: "R-006",
            titulo: "Problemas de segurança",
            descricao: "Possíveis vulnerabilidades na aplicação.",
            categoria: "Segurança",
            probabilidade: "Baixa",
            impacto: "Alto",
            nivel: "Médio",
            responsavel: "Pedro Miguel",
            estado: "Mitigado"
        }

    ];


    // =========================
    // FILTRO
    // =========================

    const riscosFiltrados = riscos.filter((risco) => {

        if (filtro === "Todos") {
            return true;
        }

        return risco.estado === filtro;

    });


    // =========================
    // CLASSE DA PROBABILIDADE
    // =========================

    const getProbabilidadeClass = (probabilidade) => {

        if (probabilidade === "Alta") {
            return styles.probabilidadeAlta;
        }

        if (probabilidade === "Média") {
            return styles.probabilidadeMedia;
        }

        return styles.probabilidadeBaixa;

    };


    // =========================
    // CLASSE DO IMPACTO
    // =========================

    const getImpactoClass = (impacto) => {

        if (impacto === "Alto") {
            return styles.impactoAlto;
        }

        if (impacto === "Médio") {
            return styles.impactoMedio;
        }

        return styles.impactoBaixo;

    };


    // =========================
    // CLASSE DO NÍVEL
    // =========================

    const getNivelClass = (nivel) => {

        if (nivel === "Crítico") {
            return styles.nivelCritico;
        }

        if (nivel === "Alto") {
            return styles.nivelAlto;
        }

        return styles.nivelMedio;

    };


    // =========================
    // CLASSE DO ESTADO
    // =========================

    const getEstadoClass = (estado) => {

        if (estado === "Mitigado") {
            return styles.estadoMitigado;
        }

        if (estado === "Monitorizado") {
            return styles.estadoMonitorizado;
        }

        return styles.estadoAberto;

    };


    return (

        <div className={styles.container}>

            {/* ========================= */}
            {/* CABEÇALHO */}
            {/* ========================= */}

            <div className={styles.header}>

                <div className={styles.titleArea}>

                    <div className={styles.titleIcon}>
                        <FiAlertTriangle />
                    </div>

                    <div>

                        <h2>
                            Registo de Riscos
                        </h2>

                        <p>
                            Identifique, avalie e acompanhe os riscos do projeto.
                        </p>

                    </div>

                </div>


                <button className={styles.addButton}>

                    <FiPlus />

                    Novo risco

                </button>

            </div>


            {/* ========================= */}
            {/* CARDS DE RESUMO */}
            {/* ========================= */}

            <div className={styles.summary}>

                {/* TOTAL */}

                <div className={styles.summaryCard}>

                    <div className={`${styles.summaryIcon} ${styles.blue}`}>
                        <FiActivity />
                    </div>

                    <div>

                        <span>
                            Total de riscos
                        </span>

                        <strong>
                            6
                        </strong>

                    </div>

                </div>


                {/* CRÍTICOS */}

                <div className={styles.summaryCard}>

                    <div className={`${styles.summaryIcon} ${styles.red}`}>
                        <FiAlertTriangle />
                    </div>

                    <div>

                        <span>
                            Riscos críticos
                        </span>

                        <strong>
                            1
                        </strong>

                    </div>

                </div>


                {/* ALTOS */}

                <div className={styles.summaryCard}>

                    <div className={`${styles.summaryIcon} ${styles.orange}`}>
                        <FiShield />
                    </div>

                    <div>

                        <span>
                            Riscos altos
                        </span>

                        <strong>
                            2
                        </strong>

                    </div>

                </div>


                {/* MITIGADOS */}

                <div className={styles.summaryCard}>

                    <div className={`${styles.summaryIcon} ${styles.green}`}>
                        <FiCheckCircle />
                    </div>

                    <div>

                        <span>
                            Mitigados
                        </span>

                        <strong>
                            2
                        </strong>

                    </div>

                </div>

            </div>


            {/* ========================= */}
            {/* MATRIZ DE RISCO */}
            {/* ========================= */}

            <div className={styles.matrixCard}>

                <div className={styles.matrixHeader}>

                    <div>

                        <h3>
                            Matriz de Probabilidade × Impacto
                        </h3>

                        <p>
                            Avaliação visual do nível de exposição aos riscos.
                        </p>

                    </div>

                    <FiAlertTriangle />

                </div>


                <div className={styles.riskMatrix}>

                    <div className={styles.matrixTitle}>
                        Impacto
                    </div>


                    <div className={styles.matrixGrid}>

                        <div className={`${styles.matrixCell} ${styles.medium}`}>
                            Médio
                        </div>

                        <div className={`${styles.matrixCell} ${styles.high}`}>
                            Alto
                        </div>

                        <div className={`${styles.matrixCell} ${styles.critical}`}>
                            Crítico
                        </div>


                        <div className={`${styles.matrixCell} ${styles.low}`}>
                            Baixo
                        </div>

                        <div className={`${styles.matrixCell} ${styles.medium}`}>
                            Médio
                        </div>

                        <div className={`${styles.matrixCell} ${styles.high}`}>
                            Alto
                        </div>


                        <div className={`${styles.matrixCell} ${styles.low}`}>
                            Baixo
                        </div>

                        <div className={`${styles.matrixCell} ${styles.low}`}>
                            Baixo
                        </div>

                        <div className={`${styles.matrixCell} ${styles.medium}`}>
                            Médio
                        </div>

                    </div>


                    <div className={styles.matrixLabels}>

                        <span>
                            Baixa
                        </span>

                        <span>
                            Média
                        </span>

                        <span>
                            Alta
                        </span>

                    </div>

                    <div className={styles.probabilityTitle}>
                        Probabilidade
                    </div>

                </div>

            </div>


            {/* ========================= */}
            {/* CONTROLES */}
            {/* ========================= */}

            <div className={styles.controls}>

                <div className={styles.search}>

                    <FiSearch />

                    <input
                        type="text"
                        placeholder="Pesquisar risco..."
                    />

                </div>


                <div className={styles.filter}>

                    <FiFilter />

                    <select
                        value={filtro}
                        onChange={(e) => setFiltro(e.target.value)}
                    >

                        <option value="Todos">
                            Todos
                        </option>

                        <option value="Aberto">
                            Abertos
                        </option>

                        <option value="Mitigado">
                            Mitigados
                        </option>

                        <option value="Monitorizado">
                            Monitorizados
                        </option>

                    </select>

                </div>

            </div>


            {/* ========================= */}
            {/* TÍTULO DA LISTA */}
            {/* ========================= */}

            <div className={styles.listHeader}>

                <div>

                    <h3>
                        Registo de riscos
                    </h3>

                    <p>
                        Lista dos riscos identificados no projeto.
                    </p>

                </div>

                <span>
                    {riscosFiltrados.length} riscos
                </span>

            </div>


            {/* ========================= */}
            {/* LISTA DE RISCOS */}
            {/* ========================= */}

            <div className={styles.riskList}>

                {riscosFiltrados.map((risco) => (

                    <div
                        className={styles.riskCard}
                        key={risco.id}
                    >

                        {/* CÓDIGO E TÍTULO */}

                        <div className={styles.riskDescription}>

                            <div className={styles.riskIcon}>

                                <FiAlertTriangle />

                            </div>

                            <div>

                                <span className={styles.codigo}>
                                    {risco.codigo}
                                </span>

                                <strong>
                                    {risco.titulo}
                                </strong>

                                <p>
                                    {risco.descricao}
                                </p>

                            </div>

                        </div>


                        {/* CATEGORIA */}

                        <div>

                            <span className={styles.dataLabel}>
                                Categoria
                            </span>

                            <span className={styles.category}>
                                {risco.categoria}
                            </span>

                        </div>


                        {/* PROBABILIDADE */}

                        <div>

                            <span className={styles.dataLabel}>
                                Probabilidade
                            </span>

                            <span
                                className={`${styles.badge} ${getProbabilidadeClass(
                                    risco.probabilidade
                                )}`}
                            >
                                {risco.probabilidade}
                            </span>

                        </div>


                        {/* IMPACTO */}

                        <div>

                            <span className={styles.dataLabel}>
                                Impacto
                            </span>

                            <span
                                className={`${styles.badge} ${getImpactoClass(
                                    risco.impacto
                                )}`}
                            >
                                {risco.impacto}
                            </span>

                        </div>


                        {/* NÍVEL */}

                        <div>

                            <span className={styles.dataLabel}>
                                Nível
                            </span>

                            <span
                                className={`${styles.badge} ${getNivelClass(
                                    risco.nivel
                                )}`}
                            >
                                {risco.nivel}
                            </span>

                        </div>


                        {/* RESPONSÁVEL */}

                        <div>

                            <span className={styles.dataLabel}>
                                Responsável
                            </span>

                            <span className={styles.responsavel}>
                                {risco.responsavel}
                            </span>

                        </div>


                        {/* ESTADO */}

                        <div>

                            <span className={styles.dataLabel}>
                                Estado
                            </span>

                            <span
                                className={`${styles.badge} ${getEstadoClass(
                                    risco.estado
                                )}`}
                            >
                                {risco.estado}
                            </span>

                        </div>


                        {/* MENU */}

                        <button className={styles.menuButton}>

                            <FiMoreVertical />

                        </button>

                    </div>

                ))}

            </div>

        </div>

    );

};


export default Riscos;