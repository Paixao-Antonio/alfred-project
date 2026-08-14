
import React, { useState } from "react";

import {
    FiArrowLeft,
    FiCalendar,
    FiCheckCircle,
    FiFileText,
    FiFlag,
    FiSave,
    FiTarget,
    FiUsers
} from "react-icons/fi";

import styles from "./CriarSprint.module.css";


const CriarSprint = () => {

    // ==========================================
    // ESTADO DO FORMULÁRIO
    // ==========================================

    const [sprint, setSprint] = useState({
        nome: "",
        objetivo: "",
        descricao: "",
        dataInicio: "",
        dataFim: "",
        prioridade: "Média",
        responsavel: "",
        status: "Planejamento"
    });


    // ==========================================
    // ALTERAR CAMPOS
    // ==========================================

    const handleChange = (e) => {

        const { name, value } = e.target;

        setSprint({
            ...sprint,
            [name]: value
        });

    };


    // ==========================================
    // SUBMETER FORMULÁRIO
    // ==========================================

    const handleSubmit = (e) => {

        e.preventDefault();

        console.log("Nova Sprint:", sprint);

        alert("Sprint criada com sucesso!");

    };


    // ==========================================
    // CANCELAR
    // ==========================================

    const handleCancel = () => {

        setSprint({
            nome: "",
            objetivo: "",
            descricao: "",
            dataInicio: "",
            dataFim: "",
            prioridade: "Média",
            responsavel: "",
            status: "Planejamento"
        });

    };


    return (

        <div className={styles.container}>

            {/* =====================================
                CABEÇALHO
            ====================================== */}

            <div className={styles.header}>

                <button className={styles.backButton}>
                    <FiArrowLeft />
                    Voltar
                </button>


                <div className={styles.headerContent}>

                    <div className={styles.headerIcon}>
                        <FiTarget />
                    </div>

                    <div>

                        <h1>
                            Criar Nova Sprint
                        </h1>

                        <p>
                            Defina os objetivos, período e responsáveis pela nova sprint.
                        </p>

                    </div>

                </div>

            </div>


            {/* =====================================
                FORMULÁRIO
            ====================================== */}

            <form
                className={styles.form}
                onSubmit={handleSubmit}
            >

                {/* =================================
                    INFORMAÇÕES DA SPRINT
                ================================== */}

                <div className={styles.card}>

                    <div className={styles.cardHeader}>

                        <div className={styles.cardIcon}>
                            <FiFileText />
                        </div>

                        <div>

                            <h2>
                                Informações da Sprint
                            </h2>

                            <p>
                                Informe os dados principais da sprint.
                            </p>

                        </div>

                    </div>


                    <div className={styles.formGrid}>

                        {/* NOME */}

                        <div className={styles.formGroup}>

                            <label>
                                Nome da Sprint
                                <span>*</span>
                            </label>

                            <input
                                type="text"
                                name="nome"
                                value={sprint.nome}
                                onChange={handleChange}
                                placeholder="Ex.: Sprint 01 - Desenvolvimento"
                                required
                            />

                        </div>


                        {/* OBJETIVO */}

                        <div className={styles.formGroup}>

                            <label>
                                Objetivo
                                <span>*</span>
                            </label>

                            <input
                                type="text"
                                name="objetivo"
                                value={sprint.objetivo}
                                onChange={handleChange}
                                placeholder="Ex.: Desenvolver módulo de autenticação"
                                required
                            />

                        </div>

                    </div>


                    {/* DESCRIÇÃO */}

                    <div className={styles.formGroup}>

                        <label>
                            Descrição
                        </label>

                        <textarea
                            name="descricao"
                            value={sprint.descricao}
                            onChange={handleChange}
                            placeholder="Descreva o que será realizado nesta sprint..."
                            rows="5"
                        ></textarea>

                    </div>

                </div>


                {/* =================================
                    PERÍODO
                ================================== */}

                <div className={styles.card}>

                    <div className={styles.cardHeader}>

                        <div className={styles.cardIcon}>
                            <FiCalendar />
                        </div>

                        <div>

                            <h2>
                                Período da Sprint
                            </h2>

                            <p>
                                Defina a data de início e término.
                            </p>

                        </div>

                    </div>


                    <div className={styles.formGrid}>

                        {/* DATA INÍCIO */}

                        <div className={styles.formGroup}>

                            <label>
                                Data de início
                                <span>*</span>
                            </label>

                            <div className={styles.inputIcon}>

                                <FiCalendar />

                                <input
                                    type="date"
                                    name="dataInicio"
                                    value={sprint.dataInicio}
                                    onChange={handleChange}
                                    required
                                />

                            </div>

                        </div>


                        {/* DATA FIM */}

                        <div className={styles.formGroup}>

                            <label>
                                Data de término
                                <span>*</span>
                            </label>

                            <div className={styles.inputIcon}>

                                <FiCalendar />

                                <input
                                    type="date"
                                    name="dataFim"
                                    value={sprint.dataFim}
                                    onChange={handleChange}
                                    required
                                />

                            </div>

                        </div>

                    </div>

                </div>


                {/* =================================
                    CONFIGURAÇÕES
                ================================== */}

                <div className={styles.card}>

                    <div className={styles.cardHeader}>

                        <div className={styles.cardIcon}>
                            <FiFlag />
                        </div>

                        <div>

                            <h2>
                                Configurações
                            </h2>

                            <p>
                                Defina a prioridade, responsável e estado inicial.
                            </p>

                        </div>

                    </div>


                    <div className={styles.formGrid}>

                        {/* PRIORIDADE */}

                        <div className={styles.formGroup}>

                            <label>
                                Prioridade
                            </label>

                            <select
                                name="prioridade"
                                value={sprint.prioridade}
                                onChange={handleChange}
                            >

                                <option value="Alta">
                                    Alta
                                </option>

                                <option value="Média">
                                    Média
                                </option>

                                <option value="Baixa">
                                    Baixa
                                </option>

                            </select>

                        </div>


                        {/* RESPONSÁVEL */}

                        <div className={styles.formGroup}>

                            <label>
                                Responsável
                            </label>

                            <div className={styles.inputIcon}>

                                <FiUsers />

                                <input
                                    type="text"
                                    name="responsavel"
                                    value={sprint.responsavel}
                                    onChange={handleChange}
                                    placeholder="Nome do responsável"
                                />

                            </div>

                        </div>


                        {/* STATUS */}

                        <div className={styles.formGroup}>

                            <label>
                                Estado inicial
                            </label>

                            <select
                                name="status"
                                value={sprint.status}
                                onChange={handleChange}
                            >

                                <option value="Planejamento">
                                    Planejamento
                                </option>

                                <option value="Ativa">
                                    Ativa
                                </option>

                                <option value="Pausada">
                                    Pausada
                                </option>

                            </select>

                        </div>

                    </div>

                </div>


                {/* =================================
                    RESUMO
                ================================== */}

                <div className={styles.summary}>

                    <div className={styles.summaryIcon}>
                        <FiCheckCircle />
                    </div>

                    <div>

                        <h3>
                            Sprint pronta para criação
                        </h3>

                        <p>
                            Verifique as informações antes de criar a sprint.
                        </p>

                    </div>

                </div>


                {/* =================================
                    BOTÕES
                ================================== */}

                <div className={styles.actions}>

                    <button
                        type="button"
                        className={styles.cancelButton}
                        onClick={handleCancel}
                    >
                        Cancelar
                    </button>


                    <button
                        type="submit"
                        className={styles.saveButton}
                    >

                        <FiSave />

                        Criar Sprint

                    </button>

                </div>

            </form>

        </div>

    );

};


export default CriarSprint;