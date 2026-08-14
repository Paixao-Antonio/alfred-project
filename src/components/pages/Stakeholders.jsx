
import React, { useState } from "react";

import {
    FiUsers,
    FiPlus,
    FiSearch,
    FiFilter,
    FiMoreVertical,
    FiUser,
    FiBriefcase,
    FiTrendingUp,
    FiAlertCircle
} from "react-icons/fi";

import styles from "./Stakeholders.module.css";


const Stakeholders = () => {

    // =========================
    // ESTADO DO FILTRO
    // =========================

    const [filtro, setFiltro] = useState("Todos");


    // =========================
    // DADOS DOS STAKEHOLDERS
    // =========================

    const stakeholders = [

        {
            id: 1,
            nome: "Paixão António",
            cargo: "Gestor do Projeto",
            organizacao: "Alfred-Project",
            tipo: "Interno",
            influencia: "Alta",
            interesse: "Alto",
            relacionamento: "Positivo",
            responsavel: "Ana Silva"
        },

        {
            id: 2,
            nome: "Maria José",
            cargo: "Cliente",
            organizacao: "Empresa XYZ",
            tipo: "Externo",
            influencia: "Alta",
            interesse: "Alto",
            relacionamento: "Positivo",
            responsavel: "Paixão António"
        },

        {
            id: 3,
            nome: "João Manuel",
            cargo: "Desenvolvedor",
            organizacao: "Alfred-Project",
            tipo: "Interno",
            influencia: "Média",
            interesse: "Alto",
            relacionamento: "Positivo",
            responsavel: "Paixão António"
        },

        {
            id: 4,
            nome: "Carlos Pedro",
            cargo: "Fornecedor",
            organizacao: "Tech Solutions",
            tipo: "Externo",
            influencia: "Média",
            interesse: "Médio",
            relacionamento: "Neutro",
            responsavel: "Maria José"
        },

        {
            id: 5,
            nome: "Ana Silva",
            cargo: "Diretora Financeira",
            organizacao: "Empresa XYZ",
            tipo: "Interno",
            influencia: "Alta",
            interesse: "Médio",
            relacionamento: "Positivo",
            responsavel: "Paixão António"
        },

        {
            id: 6,
            nome: "Pedro Miguel",
            cargo: "Consultor",
            organizacao: "PM Consulting",
            tipo: "Externo",
            influencia: "Baixa",
            interesse: "Médio",
            relacionamento: "Neutro",
            responsavel: "Carlos Pedro"
        }

    ];


    // =========================
    // FILTRO
    // =========================

    const stakeholdersFiltrados = stakeholders.filter((stakeholder) => {

        if (filtro === "Todos") {
            return true;
        }

        return stakeholder.tipo === filtro;

    });


    // =========================
    // CLASSE DA INFLUÊNCIA
    // =========================

    const getInfluenciaClass = (influencia) => {

        if (influencia === "Alta") {
            return styles.influenciaAlta;
        }

        if (influencia === "Média") {
            return styles.influenciaMedia;
        }

        return styles.influenciaBaixa;

    };


    // =========================
    // CLASSE DO INTERESSE
    // =========================

    const getInteresseClass = (interesse) => {

        if (interesse === "Alto") {
            return styles.interesseAlto;
        }

        if (interesse === "Médio") {
            return styles.interesseMedio;
        }

        return styles.interesseBaixo;

    };


    // =========================
    // CLASSE DO RELACIONAMENTO
    // =========================

    const getRelacionamentoClass = (relacionamento) => {

        if (relacionamento === "Positivo") {
            return styles.relacionamentoPositivo;
        }

        if (relacionamento === "Neutro") {
            return styles.relacionamentoNeutro;
        }

        return styles.relacionamentoNegativo;

    };


    return (

        <div className={styles.container}>

            {/* ========================= */}
            {/* CABEÇALHO */}
            {/* ========================= */}

            <div className={styles.header}>

                <div className={styles.titleArea}>

                    <div className={styles.titleIcon}>
                        <FiUsers />
                    </div>

                    <div>

                        <h2>
                            Stakeholders
                        </h2>

                        <p>
                            Gerencie as partes interessadas do projeto.
                        </p>

                    </div>

                </div>


                <button className={styles.addButton}>

                    <FiPlus />

                    Novo stakeholder

                </button>

            </div>


            {/* ========================= */}
            {/* CARDS DE RESUMO */}
            {/* ========================= */}

            <div className={styles.summary}>

                {/* TOTAL */}

                <div className={styles.summaryCard}>

                    <div className={`${styles.summaryIcon} ${styles.blue}`}>
                        <FiUsers />
                    </div>

                    <div>

                        <span>
                            Total
                        </span>

                        <strong>
                            6
                        </strong>

                    </div>

                </div>


                {/* INTERNOS */}

                <div className={styles.summaryCard}>

                    <div className={`${styles.summaryIcon} ${styles.green}`}>
                        <FiUser />
                    </div>

                    <div>

                        <span>
                            Internos
                        </span>

                        <strong>
                            3
                        </strong>

                    </div>

                </div>


                {/* EXTERNOS */}

                <div className={styles.summaryCard}>

                    <div className={`${styles.summaryIcon} ${styles.orange}`}>
                        <FiBriefcase />
                    </div>

                    <div>

                        <span>
                            Externos
                        </span>

                        <strong>
                            3
                        </strong>

                    </div>

                </div>


                {/* ALTA INFLUÊNCIA */}

                <div className={styles.summaryCard}>

                    <div className={`${styles.summaryIcon} ${styles.red}`}>
                        <FiTrendingUp />
                    </div>

                    <div>

                        <span>
                            Alta influência
                        </span>

                        <strong>
                            3
                        </strong>

                    </div>

                </div>

            </div>


            {/* ========================= */}
            {/* MATRIZ DE STAKEHOLDERS */}
            {/* ========================= */}

            <div className={styles.matrixCard}>

                <div className={styles.matrixHeader}>

                    <div>

                        <h3>
                            Matriz de influência e interesse
                        </h3>

                        <p>
                            Identifique os stakeholders que precisam de maior atenção.
                        </p>

                    </div>

                    <FiAlertCircle />

                </div>


                <div className={styles.matrix}>

                    <div className={styles.matrixBox}>

                        <strong>
                            Gerenciar de perto
                        </strong>

                        <span>
                            Alta influência + Alto interesse
                        </span>

                        <div className={styles.matrixNumber}>
                            2
                        </div>

                    </div>


                    <div className={styles.matrixBox}>

                        <strong>
                            Manter satisfeitos
                        </strong>

                        <span>
                            Alta influência + Baixo interesse
                        </span>

                        <div className={styles.matrixNumber}>
                            1
                        </div>

                    </div>


                    <div className={styles.matrixBox}>

                        <strong>
                            Manter informados
                        </strong>

                        <span>
                            Baixa influência + Alto interesse
                        </span>

                        <div className={styles.matrixNumber}>
                            2
                        </div>

                    </div>


                    <div className={styles.matrixBox}>

                        <strong>
                            Monitorizar
                        </strong>

                        <span>
                            Baixa influência + Baixo interesse
                        </span>

                        <div className={styles.matrixNumber}>
                            1
                        </div>

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
                        placeholder="Pesquisar stakeholder..."
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

                        <option value="Interno">
                            Internos
                        </option>

                        <option value="Externo">
                            Externos
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
                        Lista de Stakeholders
                    </h3>

                    <p>
                        Pessoas e organizações envolvidas no projeto.
                    </p>

                </div>

                <span>
                    {stakeholdersFiltrados.length} stakeholders
                </span>

            </div>


            {/* ========================= */}
            {/* LISTA */}
            {/* ========================= */}

            <div className={styles.stakeholderList}>

                {stakeholdersFiltrados.map((stakeholder) => (

                    <div
                        className={styles.stakeholderCard}
                        key={stakeholder.id}
                    >

                        {/* PERFIL */}

                        <div className={styles.profile}>

                            <div className={styles.avatar}>

                                {stakeholder.nome.charAt(0)}

                            </div>

                            <div>

                                <strong>
                                    {stakeholder.nome}
                                </strong>

                                <span>
                                    {stakeholder.cargo}
                                </span>

                            </div>

                        </div>


                        {/* ORGANIZAÇÃO */}

                        <div className={styles.organization}>

                            <span className={styles.dataLabel}>
                                Organização
                            </span>

                            <span>
                                {stakeholder.organizacao}
                            </span>

                        </div>


                        {/* TIPO */}

                        <div>

                            <span className={styles.dataLabel}>
                                Tipo
                            </span>

                            <span className={styles.type}>
                                {stakeholder.tipo}
                            </span>

                        </div>


                        {/* INFLUÊNCIA */}

                        <div>

                            <span className={styles.dataLabel}>
                                Influência
                            </span>

                            <span
                                className={`${styles.badge} ${getInfluenciaClass(
                                    stakeholder.influencia
                                )}`}
                            >
                                {stakeholder.influencia}
                            </span>

                        </div>


                        {/* INTERESSE */}

                        <div>

                            <span className={styles.dataLabel}>
                                Interesse
                            </span>

                            <span
                                className={`${styles.badge} ${getInteresseClass(
                                    stakeholder.interesse
                                )}`}
                            >
                                {stakeholder.interesse}
                            </span>

                        </div>


                        {/* RELACIONAMENTO */}

                        <div>

                            <span className={styles.dataLabel}>
                                Relacionamento
                            </span>

                            <span
                                className={`${styles.badge} ${getRelacionamentoClass(
                                    stakeholder.relacionamento
                                )}`}
                            >
                                {stakeholder.relacionamento}
                            </span>

                        </div>


                        {/* RESPONSÁVEL */}

                        <div>

                            <span className={styles.dataLabel}>
                                Responsável
                            </span>

                            <span className={styles.responsavel}>
                                {stakeholder.responsavel}
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


export default Stakeholders;