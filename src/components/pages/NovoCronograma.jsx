
import React, { useState } from "react";

import {
    FiArrowLeft,
    FiCalendar,
    FiClock,
    FiFileText,
    FiFlag,
    FiSave,
    FiTarget,
    FiUsers,
    FiCheckCircle
} from "react-icons/fi";

import styles from "./NovoCronograma.module.css";


const NovoCronograma = () => {

    // ==========================================
    // ESTADO DO FORMULÁRIO
    // ==========================================

    const [cronograma, setCronograma] = useState({
        nome: "",
        descricao: "",
        dataInicio: "",
        dataFim: "",
        responsavel: "",
        prioridade: "Média",
        status: "Planejamento",
        observacoes: ""
    });


    // ==========================================
    // ALTERAR OS CAMPOS
    // ==========================================

    const handleChange = (e) => {

        const { name, value } = e.target;

        setCronograma({
            ...cronograma,
            [name]: value
        });

    };


    // ==========================================
    // ENVIAR FORMULÁRIO
    // ==========================================

    const handleSubmit = (e) => {

        e.preventDefault();

        console.log("Novo cronograma:", cronograma);

        alert("Cronograma criado com sucesso!");

    };


    // ==========================================
    // CANCELAR
    // ==========================================

    const handleCancel = () => {

        setCronograma({
            nome: "",
            descricao: "",
            dataInicio: "",
            dataFim: "",
            responsavel: "",
            prioridade: "Média",
            status: "Planejamento",
            observacoes: ""
        });

    };


    return (

        <div className={styles.container}>

            {/* =====================================
                CABEÇALHO
            ====================================== */}

            <div className={styles.header}>

                <button
                    type="button"
                    className={styles.backButton}
                >
                    <FiArrowLeft />
                    Voltar
                </button>


                <div className={styles.headerContent}>

                    <div className={styles.headerIcon}>
                        <FiCalendar />
                    </div>


                    <div>

                        <h1>
                            Novo Cronograma
                        </h1>

                        <p>
                            Crie e organize o cronograma do seu projeto.
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
                    INFORMAÇÕES DO CRONOGRAMA
                ================================== */}

                <div className={styles.card}>

                    <div className={styles.cardHeader}>

                        <div className={styles.cardIcon}>
                            <FiFileText />
                        </div>

                        <div>

                            <h2>
                                Informações do Cronograma
                            </h2>

                            <p>
                                Informe os dados principais do cronograma.
                            </p>

                        </div>

                    </div>


                    <div className={styles.formGrid}>

                        {/* NOME */}

                        <div className={styles.formGroup}>

                            <label>
                                Nome do Cronograma
                                <span>*</span>
                            </label>

                            <input
                                type="text"
                                name="nome"
                                value={cronograma.nome}
                                onChange={handleChange}
                                placeholder="Ex.: Cronograma do Projeto"
                                required
                            />

                        </div>


                        {/* RESPONSÁVEL */}

                        <div className={styles.formGroup}>

                            <label>
                                Responsável
                                <span>*</span>
                            </label>

                            <div className={styles.inputIcon}>

                                <FiUsers />

                                <input
                                    type="text"
                                    name="responsavel"
                                    value={cronograma.responsavel}
                                    onChange={handleChange}
                                    placeholder="Nome do responsável"
                                    required
                                />

                            </div>

                        </div>

                    </div>


                    {/* DESCRIÇÃO */}

                    <div className={styles.formGroup}>

                        <label>
                            Descrição
                        </label>

                        <textarea
                            name="descricao"
                            value={cronograma.descricao}
                            onChange={handleChange}
                            placeholder="Descreva o objetivo e conteúdo deste cronograma..."
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
                            <FiClock />
                        </div>

                        <div>

                            <h2>
                                Período
                            </h2>

                            <p>
                                Defina o período de execução do cronograma.
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
                                    value={cronograma.dataInicio}
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
                                    value={cronograma.dataFim}
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
                                Defina a prioridade e o estado inicial.
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
                                value={cronograma.prioridade}
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


                        {/* STATUS */}

                        <div className={styles.formGroup}>

                            <label>
                                Estado inicial
                            </label>

                            <select
                                name="status"
                                value={cronograma.status}
                                onChange={handleChange}
                            >

                                <option value="Planejamento">
                                    Planejamento
                                </option>

                                <option value="Em andamento">
                                    Em andamento
                                </option>

                                <option value="Concluído">
                                    Concluído
                                </option>

                                <option value="Pausado">
                                    Pausado
                                </option>

                            </select>

                        </div>

                    </div>

                </div>


                {/* =================================
                    OBSERVAÇÕES
                ================================== */}

                <div className={styles.card}>

                    <div className={styles.cardHeader}>

                        <div className={styles.cardIcon}>
                            <FiTarget />
                        </div>

                        <div>

                            <h2>
                                Observações
                            </h2>

                            <p>
                                Adicione informações adicionais ao cronograma.
                            </p>

                        </div>

                    </div>


                    <div className={styles.formGroup}>

                        <label>
                            Observações
                        </label>

                        <textarea
                            name="observacoes"
                            value={cronograma.observacoes}
                            onChange={handleChange}
                            placeholder="Insira observações, notas ou informações importantes..."
                            rows="5"
                        ></textarea>

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
                            Cronograma pronto para criação
                        </h3>

                        <p>
                            Verifique as informações antes de criar o cronograma.
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

                        Criar Cronograma

                    </button>

                </div>

            </form>

        </div>

    );

};


export default NovoCronograma;