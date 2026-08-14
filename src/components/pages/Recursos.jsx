
import React, { useState } from "react";

import {
    FiUsers,
    FiPlus,
    FiSearch,
    FiFilter,
    FiMoreVertical,
    FiClock,
    FiBriefcase,
    FiCheckCircle,
    FiAlertTriangle
} from "react-icons/fi";

import styles from "./Recursos.module.css";


const Recursos = () => {

    const [filtro, setFiltro] = useState("Todos");


    const recursos = [
        {
            id: 1,
            nome: "Paixão António",
            funcao: "Gestor de Projetos",
            avatar: "PA",
            projetos: 3,
            horas: 36,
            capacidade: 40,
            utilizacao: 90,
            status: "Disponível"
        },

        {
            id: 2,
            nome: "Maria José",
            funcao: "Designer UI/UX",
            avatar: "MJ",
            projetos: 2,
            horas: 32,
            capacidade: 40,
            utilizacao: 80,
            status: "Disponível"
        },

        {
            id: 3,
            nome: "João Manuel",
            funcao: "Desenvolvedor",
            avatar: "JM",
            projetos: 4,
            horas: 44,
            capacidade: 40,
            utilizacao: 110,
            status: "Sobrecarregado"
        },

        {
            id: 4,
            nome: "Carlos Pedro",
            funcao: "Analista de Sistemas",
            avatar: "CP",
            projetos: 2,
            horas: 24,
            capacidade: 40,
            utilizacao: 60,
            status: "Disponível"
        },

        {
            id: 5,
            nome: "Ana Silva",
            funcao: "Marketing",
            avatar: "AS",
            projetos: 1,
            horas: 16,
            capacidade: 40,
            utilizacao: 40,
            status: "Disponível"
        },

        {
            id: 6,
            nome: "Pedro Miguel",
            funcao: "Desenvolvedor Frontend",
            avatar: "PM",
            projetos: 3,
            horas: 38,
            capacidade: 40,
            utilizacao: 95,
            status: "Disponível"
        }
    ];


    const filtrarRecursos = () => {

        if (filtro === "Todos") {
            return recursos;
        }

        if (filtro === "Disponíveis") {
            return recursos.filter(
                (recurso) => recurso.status === "Disponível"
            );
        }

        if (filtro === "Sobrecarregados") {
            return recursos.filter(
                (recurso) => recurso.status === "Sobrecarregado"
            );
        }

        return recursos;
    };


    const getCargaClass = (utilizacao) => {

        if (utilizacao > 100) {
            return styles.cargaAlta;
        }

        if (utilizacao >= 80) {
            return styles.cargaMedia;
        }

        return styles.cargaBaixa;
    };


    const getStatusClass = (status) => {

        if (status === "Sobrecarregado") {
            return styles.statusDanger;
        }

        return styles.statusSuccess;
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

                        <h2>Recursos</h2>

                        <p>
                            Gerencie a alocação e a carga de trabalho da sua equipa.
                        </p>

                    </div>

                </div>


                <button className={styles.addButton}>

                    <FiPlus />

                    Alocar recurso

                </button>

            </div>


            {/* ========================= */}
            {/* RESUMO */}
            {/* ========================= */}

            <div className={styles.summary}>

                {/* TOTAL */}

                <div className={styles.summaryCard}>

                    <div className={`${styles.summaryIcon} ${styles.blue}`}>

                        <FiUsers />

                    </div>

                    <div>

                        <span>Total de recursos</span>

                        <strong>6</strong>

                    </div>

                </div>


                {/* DISPONÍVEIS */}

                <div className={styles.summaryCard}>

                    <div className={`${styles.summaryIcon} ${styles.green}`}>

                        <FiCheckCircle />

                    </div>

                    <div>

                        <span>Disponíveis</span>

                        <strong>5</strong>

                    </div>

                </div>


                {/* SOBRECARREGADOS */}

                <div className={styles.summaryCard}>

                    <div className={`${styles.summaryIcon} ${styles.red}`}>

                        <FiAlertTriangle />

                    </div>

                    <div>

                        <span>Sobrecarregados</span>

                        <strong>1</strong>

                    </div>

                </div>


                {/* CARGA MÉDIA */}

                <div className={styles.summaryCard}>

                    <div className={`${styles.summaryIcon} ${styles.orange}`}>

                        <FiClock />

                    </div>

                    <div>

                        <span>Carga média</span>

                        <strong>79%</strong>

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
                        placeholder="Pesquisar recurso..."
                    />

                </div>


                <div className={styles.filter}>

                    <FiFilter />

                    <select
                        value={filtro}
                        onChange={(e) => setFiltro(e.target.value)}
                    >

                        <option value="Todos">
                            Todos os recursos
                        </option>

                        <option value="Disponíveis">
                            Disponíveis
                        </option>

                        <option value="Sobrecarregados">
                            Sobrecarregados
                        </option>

                    </select>

                </div>

            </div>


            {/* ========================= */}
            {/* TÍTULO DA LISTA */}
            {/* ========================= */}

            <div className={styles.listHeader}>

                <div>

                    <h3>Alocação da equipa</h3>

                    <p>
                        Acompanhe a utilização dos recursos por semana.
                    </p>

                </div>

                <span>
                    Semana atual
                </span>

            </div>


            {/* ========================= */}
            {/* LISTA */}
            {/* ========================= */}

            <div className={styles.resourceList}>

                {filtrarRecursos().map((recurso) => (

                    <div
                        className={styles.resourceCard}
                        key={recurso.id}
                    >

                        {/* INFORMAÇÕES DO COLABORADOR */}

                        <div className={styles.resourcePerson}>

                            <div className={styles.avatar}>

                                {recurso.avatar}

                            </div>


                            <div className={styles.personInfo}>

                                <strong>
                                    {recurso.nome}
                                </strong>

                                <span>
                                    {recurso.funcao}
                                </span>

                            </div>

                        </div>


                        {/* PROJETOS */}

                        <div className={styles.resourceData}>

                            <div className={styles.dataIcon}>
                                <FiBriefcase />
                            </div>

                            <div>

                                <span>Projetos</span>

                                <strong>
                                    {recurso.projetos}
                                </strong>

                            </div>

                        </div>


                        {/* HORAS */}

                        <div className={styles.resourceData}>

                            <div className={styles.dataIcon}>
                                <FiClock />
                            </div>

                            <div>

                                <span>Horas</span>

                                <strong>
                                    {recurso.horas}h / {recurso.capacidade}h
                                </strong>

                            </div>

                        </div>


                        {/* CARGA */}

                        <div className={styles.workload}>

                            <div className={styles.workloadHeader}>

                                <span>
                                    Carga de trabalho
                                </span>

                                <strong>
                                    {recurso.utilizacao}%
                                </strong>

                            </div>


                            <div className={styles.workloadBar}>

                                <div
                                    className={`${styles.workloadFill} ${getCargaClass(
                                        recurso.utilizacao
                                    )}`}
                                    style={{
                                        width: `${Math.min(
                                            recurso.utilizacao,
                                            100
                                        )}%`
                                    }}
                                ></div>

                            </div>

                        </div>


                        {/* STATUS */}

                        <div className={styles.statusArea}>

                            <span
                                className={`${styles.status} ${getStatusClass(
                                    recurso.status
                                )}`}
                            >

                                {recurso.status}

                            </span>

                        </div>


                        {/* MENU */}

                        <button className={styles.menuButton}>

                            <FiMoreVertical />

                        </button>

                    </div>

                ))}

            </div>


            {/* ========================= */}
            {/* LEGENDA */}
            {/* ========================= */}

            <div className={styles.legend}>

                <div>

                    <span className={styles.legendGreen}></span>

                    Carga baixa

                </div>

                <div>

                    <span className={styles.legendOrange}></span>

                    Carga média

                </div>

                <div>

                    <span className={styles.legendRed}></span>

                    Sobrecarga

                </div>

            </div>

        </div>

    );

};

export default Recursos;