

import React, { useState } from "react";

import {
    FiArrowLeft,
    FiAlertTriangle,
    FiFileText,
    FiUser,
    FiCalendar,
    FiShield,
    FiSave,
    FiX
} from "react-icons/fi";

import styles from "./NovoRisco.module.css";


const NovoRisco = () => {

    // ==========================================
    // ESTADO DO FORMULÁRIO
    // ==========================================

    const [formData, setFormData] = useState({
        titulo: "",
        descricao: "",
        categoria: "",
        probabilidade: "Baixa",
        impacto: "Baixo",
        responsavel: "",
        dataIdentificacao: "",
        estrategia: "",
        mitigacao: ""
    });


    // ==========================================
    // ALTERAR CAMPOS
    // ==========================================

    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });

    };


    // ==========================================
    // CALCULAR NÍVEL DO RISCO
    // ==========================================

    const calcularRisco = () => {

        const valores = {
            Baixa: 1,
            Média: 2,
            Alta: 3
        };

        const probabilidade =
            valores[formData.probabilidade];

        const impacto =
            valores[formData.impacto];


        const resultado = probabilidade * impacto;


        if (resultado >= 7) {
            return "Alto";
        }

        if (resultado >= 4) {
            return "Médio";
        }

        return "Baixo";

    };


    const nivelRisco = calcularRisco();


    // ==========================================
    // ENVIAR FORMULÁRIO
    // ==========================================

    const handleSubmit = (e) => {

        e.preventDefault();

        console.log("Novo risco:", {
            ...formData,
            nivel: nivelRisco
        });

        alert("Risco registado com sucesso!");

    };


    // ==========================================
    // CANCELAR
    // ==========================================

    const handleCancel = () => {

        setFormData({
            titulo: "",
            descricao: "",
            categoria: "",
            probabilidade: "Baixa",
            impacto: "Baixo",
            responsavel: "",
            dataIdentificacao: "",
            estrategia: "",
            mitigacao: ""
        });

    };


    return (

        <div className={styles.container}>

            {/* ======================================
                CABEÇALHO
            ======================================= */}

            <div className={styles.header}>

                <button
                    type="button"
                    className={styles.backButton}
                >

                    <FiArrowLeft />

                    Voltar

                </button>


                <div className={styles.titleArea}>

                    <div className={styles.titleIcon}>
                        <FiAlertTriangle />
                    </div>


                    <div>

                        <h1>
                            Novo Risco
                        </h1>

                        <p>
                            Registe e acompanhe os riscos identificados no projeto.
                        </p>

                    </div>

                </div>

            </div>


            {/* ======================================
                INDICADOR DE RISCO
            ======================================= */}

            <div className={styles.riskPreview}>

                <div className={styles.previewIcon}>
                    <FiAlertTriangle />
                </div>


                <div className={styles.previewText}>

                    <span>
                        Nível de risco
                    </span>

                    <strong
                        className={
                            nivelRisco === "Alto"
                                ? styles.riskHigh
                                : nivelRisco === "Médio"
                                    ? styles.riskMedium
                                    : styles.riskLow
                        }
                    >
                        {nivelRisco}
                    </strong>

                </div>


                <div className={styles.previewInfo}>

                    <span>
                        Calculado com base na probabilidade e impacto.
                    </span>

                </div>

            </div>


            {/* ======================================
                FORMULÁRIO
            ======================================= */}

            <form
                className={styles.form}
                onSubmit={handleSubmit}
            >


                {/* ==================================
                    INFORMAÇÕES DO RISCO
                =================================== */}

                <div className={styles.card}>

                    <div className={styles.cardTitle}>

                        <div className={styles.cardIcon}>
                            <FiFileText />
                        </div>


                        <div>

                            <h2>
                                Informações do Risco
                            </h2>

                            <p>
                                Descreva o risco identificado no projeto.
                            </p>

                        </div>

                    </div>


                    <div className={styles.fieldFull}>

                        <label>
                            Título do risco
                            <span>*</span>
                        </label>

                        <input
                            type="text"
                            name="titulo"
                            value={formData.titulo}
                            onChange={handleChange}
                            placeholder="Ex.: Atraso na entrega do sistema"
                            required
                        />

                    </div>


                    <div className={styles.fieldFull}>

                        <label>
                            Descrição
                            <span>*</span>
                        </label>

                        <textarea
                            name="descricao"
                            value={formData.descricao}
                            onChange={handleChange}
                            placeholder="Descreva detalhadamente o risco..."
                            rows="4"
                            required
                        />

                    </div>


                    <div className={styles.grid}>

                        {/* CATEGORIA */}

                        <div className={styles.field}>

                            <label>
                                Categoria
                                <span>*</span>
                            </label>

                            <select
                                name="categoria"
                                value={formData.categoria}
                                onChange={handleChange}
                                required
                            >

                                <option value="">
                                    Selecionar categoria
                                </option>

                                <option value="Técnico">
                                    Técnico
                                </option>

                                <option value="Financeiro">
                                    Financeiro
                                </option>

                                <option value="Recursos Humanos">
                                    Recursos Humanos
                                </option>

                                <option value="Prazo">
                                    Prazo
                                </option>

                                <option value="Qualidade">
                                    Qualidade
                                </option>

                                <option value="Externo">
                                    Externo
                                </option>

                            </select>

                        </div>


                        {/* RESPONSÁVEL */}

                        <div className={styles.field}>

                            <label>
                                Responsável
                            </label>

                            <div className={styles.inputIcon}>

                                <FiUser />

                                <select
                                    name="responsavel"
                                    value={formData.responsavel}
                                    onChange={handleChange}
                                >

                                    <option value="">
                                        Selecionar responsável
                                    </option>

                                    <option value="João António">
                                        João António
                                    </option>

                                    <option value="Maria José">
                                        Maria José
                                    </option>

                                    <option value="Carlos Manuel">
                                        Carlos Manuel
                                    </option>

                                    <option value="Ana Paula">
                                        Ana Paula
                                    </option>

                                </select>

                            </div>

                        </div>


                        {/* DATA */}

                        <div className={styles.field}>

                            <label>
                                Data de identificação
                            </label>

                            <div className={styles.inputIcon}>

                                <FiCalendar />

                                <input
                                    type="date"
                                    name="dataIdentificacao"
                                    value={formData.dataIdentificacao}
                                    onChange={handleChange}
                                />

                            </div>

                        </div>

                    </div>

                </div>


                {/* ==================================
                    AVALIAÇÃO DO RISCO
                =================================== */}

                <div className={styles.card}>

                    <div className={styles.cardTitle}>

                        <div className={styles.cardIcon}>
                            <FiAlertTriangle />
                        </div>


                        <div>

                            <h2>
                                Avaliação do Risco
                            </h2>

                            <p>
                                Avalie a probabilidade e o impacto do risco.
                            </p>

                        </div>

                    </div>


                    <div className={styles.grid}>

                        {/* PROBABILIDADE */}

                        <div className={styles.field}>

                            <label>
                                Probabilidade
                            </label>

                            <select
                                name="probabilidade"
                                value={formData.probabilidade}
                                onChange={handleChange}
                            >

                                <option value="Baixa">
                                    Baixa
                                </option>

                                <option value="Média">
                                    Média
                                </option>

                                <option value="Alta">
                                    Alta
                                </option>

                            </select>

                        </div>


                        {/* IMPACTO */}

                        <div className={styles.field}>

                            <label>
                                Impacto
                            </label>

                            <select
                                name="impacto"
                                value={formData.impacto}
                                onChange={handleChange}
                            >

                                <option value="Baixo">
                                    Baixo
                                </option>

                                <option value="Média">
                                    Médio
                                </option>

                                <option value="Alta">
                                    Alto
                                </option>

                            </select>

                        </div>

                    </div>


                    {/* RESULTADO */}

                    <div className={styles.riskResult}>

                        <div>

                            <span>
                                Classificação atual
                            </span>

                            <strong
                                className={
                                    nivelRisco === "Alto"
                                        ? styles.riskHigh
                                        : nivelRisco === "Médio"
                                            ? styles.riskMedium
                                            : styles.riskLow
                                }
                            >
                                {nivelRisco}
                            </strong>

                        </div>


                        <FiShield />

                    </div>

                </div>


                {/* ==================================
                    PLANO DE RESPOSTA
                =================================== */}

                <div className={styles.card}>

                    <div className={styles.cardTitle}>

                        <div className={styles.cardIcon}>
                            <FiShield />
                        </div>


                        <div>

                            <h2>
                                Plano de Resposta
                            </h2>

                            <p>
                                Defina como o risco será tratado.
                            </p>

                        </div>

                    </div>


                    {/* ESTRATÉGIA */}

                    <div className={styles.fieldFull}>

                        <label>
                            Estratégia de resposta
                        </label>

                        <select
                            name="estrategia"
                            value={formData.estrategia}
                            onChange={handleChange}
                        >

                            <option value="">
                                Selecionar estratégia
                            </option>

                            <option value="Evitar">
                                Evitar
                            </option>

                            <option value="Mitigar">
                                Mitigar
                            </option>

                            <option value="Transferir">
                                Transferir
                            </option>

                            <option value="Aceitar">
                                Aceitar
                            </option>

                        </select>

                    </div>


                    {/* MITIGAÇÃO */}

                    <div className={styles.fieldFull}>

                        <label>
                            Plano de mitigação
                        </label>

                        <textarea
                            name="mitigacao"
                            value={formData.mitigacao}
                            onChange={handleChange}
                            placeholder="Descreva as ações que serão tomadas para reduzir ou controlar o risco..."
                            rows="5"
                        />

                    </div>

                </div>


                {/* ==================================
                    BOTÕES
                =================================== */}

                <div className={styles.actions}>

                    <button
                        type="button"
                        className={styles.cancelButton}
                        onClick={handleCancel}
                    >

                        <FiX />

                        Cancelar

                    </button>


                    <button
                        type="submit"
                        className={styles.saveButton}
                    >

                        <FiSave />

                        Registar Risco

                    </button>

                </div>

            </form>

        </div>

    );

};


export default NovoRisco;