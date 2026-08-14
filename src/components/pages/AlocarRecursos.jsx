
import React, { useState } from "react";

import {
    FiArrowLeft,
    FiUsers,
    FiBriefcase,
    FiCalendar,
    FiClock,
    FiPercent,
    FiSave,
    FiX,
    FiUser
} from "react-icons/fi";

import styles from "./AlocarRecursos.module.css";


const AlocarRecursos = () => {

    // ==========================================
    // ESTADO DO FORMULÁRIO
    // ==========================================

    const [formData, setFormData] = useState({
        projeto: "",
        recurso: "",
        tipo: "Humano",
        funcao: "",
        dataInicio: "",
        dataFim: "",
        horasSemanais: "",
        carga: 50,
        observacao: ""
    });


    // ==========================================
    // ALTERAR OS CAMPOS
    // ==========================================

    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });

    };


    // ==========================================
    // ALTERAR CARGA
    // ==========================================

    const handleCarga = (e) => {

        setFormData({
            ...formData,
            carga: e.target.value
        });

    };


    // ==========================================
    // ENVIAR FORMULÁRIO
    // ==========================================

    const handleSubmit = (e) => {

        e.preventDefault();

        console.log("Dados da alocação:", formData);

        alert("Recurso alocado com sucesso!");

    };


    // ==========================================
    // CANCELAR
    // ==========================================

    const handleCancel = () => {

        setFormData({
            projeto: "",
            recurso: "",
            tipo: "Humano",
            funcao: "",
            dataInicio: "",
            dataFim: "",
            horasSemanais: "",
            carga: 50,
            observacao: ""
        });

    };


    return (

        <div className={styles.container}>

            {/* ======================================
                CABEÇALHO
            ======================================= */}

            <div className={styles.header}>

                <button
                    className={styles.backButton}
                    type="button"
                >
                    <FiArrowLeft />

                    Voltar
                </button>


                <div className={styles.titleArea}>

                    <div className={styles.titleIcon}>
                        <FiUsers />
                    </div>


                    <div>

                        <h1>
                            Alocar Recursos
                        </h1>

                        <p>
                            Adicione e distribua recursos para o seu projeto.
                        </p>

                    </div>

                </div>

            </div>


            {/* ======================================
                RESUMO
            ======================================= */}

            <div className={styles.summary}>

                <div className={styles.summaryItem}>

                    <div className={styles.summaryIcon}>
                        <FiBriefcase />
                    </div>

                    <div>

                        <span>
                            Projeto
                        </span>

                        <strong>
                            {formData.projeto || "Não selecionado"}
                        </strong>

                    </div>

                </div>


                <div className={styles.summaryItem}>

                    <div className={styles.summaryIcon}>
                        <FiUser />
                    </div>

                    <div>

                        <span>
                            Recurso
                        </span>

                        <strong>
                            {formData.recurso || "Não selecionado"}
                        </strong>

                    </div>

                </div>


                <div className={styles.summaryItem}>

                    <div className={styles.summaryIcon}>
                        <FiPercent />
                    </div>

                    <div>

                        <span>
                            Carga
                        </span>

                        <strong>
                            {formData.carga}%
                        </strong>

                    </div>

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
                    INFORMAÇÕES PRINCIPAIS
                =================================== */}

                <div className={styles.card}>

                    <div className={styles.cardTitle}>

                        <div className={styles.cardIcon}>
                            <FiBriefcase />
                        </div>

                        <div>

                            <h2>
                                Informações da Alocação
                            </h2>

                            <p>
                                Selecione o projeto e o recurso que será alocado.
                            </p>

                        </div>

                    </div>


                    <div className={styles.grid}>

                        {/* PROJETO */}

                        <div className={styles.field}>

                            <label>
                                Projeto
                                <span>*</span>
                            </label>

                            <select
                                name="projeto"
                                value={formData.projeto}
                                onChange={handleChange}
                                required
                            >

                                <option value="">
                                    Selecionar projeto
                                </option>

                                <option value="Sistema de Gestão">
                                    Sistema de Gestão
                                </option>

                                <option value="Aplicativo Mobile">
                                    Aplicativo Mobile
                                </option>

                                <option value="Website Institucional">
                                    Website Institucional
                                </option>

                                <option value="Plataforma ERP">
                                    Plataforma ERP
                                </option>

                            </select>

                        </div>


                        {/* RECURSO */}

                        <div className={styles.field}>

                            <label>
                                Recurso
                                <span>*</span>
                            </label>

                            <select
                                name="recurso"
                                value={formData.recurso}
                                onChange={handleChange}
                                required
                            >

                                <option value="">
                                    Selecionar recurso
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


                        {/* TIPO */}

                        <div className={styles.field}>

                            <label>
                                Tipo de recurso
                            </label>

                            <select
                                name="tipo"
                                value={formData.tipo}
                                onChange={handleChange}
                            >

                                <option value="Humano">
                                    Recurso Humano
                                </option>

                                <option value="Equipamento">
                                    Equipamento
                                </option>

                                <option value="Material">
                                    Material
                                </option>

                                <option value="Financeiro">
                                    Financeiro
                                </option>

                            </select>

                        </div>


                        {/* FUNÇÃO */}

                        <div className={styles.field}>

                            <label>
                                Função
                            </label>

                            <input
                                type="text"
                                name="funcao"
                                value={formData.funcao}
                                onChange={handleChange}
                                placeholder="Ex.: Desenvolvedor"
                            />

                        </div>

                    </div>

                </div>


                {/* ==================================
                    PERÍODO
                =================================== */}

                <div className={styles.card}>

                    <div className={styles.cardTitle}>

                        <div className={styles.cardIcon}>
                            <FiCalendar />
                        </div>

                        <div>

                            <h2>
                                Período de Alocação
                            </h2>

                            <p>
                                Defina o período em que o recurso estará alocado.
                            </p>

                        </div>

                    </div>


                    <div className={styles.grid}>

                        {/* DATA INÍCIO */}

                        <div className={styles.field}>

                            <label>
                                Data de início
                                <span>*</span>
                            </label>

                            <div className={styles.inputIcon}>

                                <FiCalendar />

                                <input
                                    type="date"
                                    name="dataInicio"
                                    value={formData.dataInicio}
                                    onChange={handleChange}
                                    required
                                />

                            </div>

                        </div>


                        {/* DATA FIM */}

                        <div className={styles.field}>

                            <label>
                                Data de término
                                <span>*</span>
                            </label>

                            <div className={styles.inputIcon}>

                                <FiCalendar />

                                <input
                                    type="date"
                                    name="dataFim"
                                    value={formData.dataFim}
                                    onChange={handleChange}
                                    required
                                />

                            </div>

                        </div>


                        {/* HORAS */}

                        <div className={styles.field}>

                            <label>
                                Horas semanais
                            </label>

                            <div className={styles.inputIcon}>

                                <FiClock />

                                <input
                                    type="number"
                                    name="horasSemanais"
                                    value={formData.horasSemanais}
                                    onChange={handleChange}
                                    placeholder="Ex.: 40"
                                    min="1"
                                />

                            </div>

                        </div>

                    </div>

                </div>


                {/* ==================================
                    CARGA DE TRABALHO
                =================================== */}

                <div className={styles.card}>

                    <div className={styles.cardTitle}>

                        <div className={styles.cardIcon}>
                            <FiPercent />
                        </div>

                        <div>

                            <h2>
                                Carga de Trabalho
                            </h2>

                            <p>
                                Defina quanto tempo do recurso será dedicado ao projeto.
                            </p>

                        </div>

                    </div>


                    <div className={styles.rangeArea}>

                        <div className={styles.rangeHeader}>

                            <span>
                                Percentual de alocação
                            </span>

                            <strong>
                                {formData.carga}%
                            </strong>

                        </div>


                        <input
                            type="range"
                            min="0"
                            max="100"
                            step="5"
                            value={formData.carga}
                            onChange={handleCarga}
                            className={styles.range}
                        />


                        <div className={styles.rangeLabels}>

                            <span>
                                0%
                            </span>

                            <span>
                                25%
                            </span>

                            <span>
                                50%
                            </span>

                            <span>
                                75%
                            </span>

                            <span>
                                100%
                            </span>

                        </div>

                    </div>

                </div>


                {/* ==================================
                    OBSERVAÇÃO
                =================================== */}

                <div className={styles.card}>

                    <div className={styles.cardTitle}>

                        <div className={styles.cardIcon}>
                            <FiClock />
                        </div>

                        <div>

                            <h2>
                                Observações
                            </h2>

                            <p>
                                Adicione informações adicionais sobre a alocação.
                            </p>

                        </div>

                    </div>


                    <textarea
                        name="observacao"
                        value={formData.observacao}
                        onChange={handleChange}
                        placeholder="Escreva uma observação..."
                        rows="4"
                    ></textarea>

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

                        Alocar Recurso

                    </button>

                </div>

            </form>

        </div>

    );

};


export default AlocarRecursos;