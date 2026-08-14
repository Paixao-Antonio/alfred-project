
import React, { useState } from "react";

import {
    FiArrowLeft,
    FiUserPlus,
    FiUser,
    FiMail,
    FiBriefcase,
    FiShield,
    FiSave,
    FiCheckCircle
} from "react-icons/fi";

import styles from "./AdicionarMembro.module.css";


const AdicionarMembro = () => {

    // ==========================================
    // ESTADO DO FORMULÁRIO
    // ==========================================

    const [membro, setMembro] = useState({
        nome: "",
        sobrenome: "",
        email: "",
        telefone: "",
        funcao: "",
        departamento: "",
        permissao: "Membro",
        estado: "Ativo"
    });


    // ==========================================
    // ALTERAR OS CAMPOS
    // ==========================================

    const handleChange = (e) => {

        const { name, value } = e.target;

        setMembro({
            ...membro,
            [name]: value
        });

    };


    // ==========================================
    // ENVIAR FORMULÁRIO
    // ==========================================

    const handleSubmit = (e) => {

        e.preventDefault();

        console.log("Novo membro:", membro);

        alert("Membro adicionado com sucesso!");

    };


    // ==========================================
    // LIMPAR FORMULÁRIO
    // ==========================================

    const handleCancel = () => {

        setMembro({
            nome: "",
            sobrenome: "",
            email: "",
            telefone: "",
            funcao: "",
            departamento: "",
            permissao: "Membro",
            estado: "Ativo"
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
                        <FiUserPlus />
                    </div>

                    <div>

                        <h1>
                            Adicionar Membro
                        </h1>

                        <p>
                            Adicione um novo membro à equipa do projeto.
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
                    INFORMAÇÕES PESSOAIS
                ================================== */}

                <div className={styles.card}>

                    <div className={styles.cardHeader}>

                        <div className={styles.cardIcon}>
                            <FiUser />
                        </div>

                        <div>

                            <h2>
                                Informações Pessoais
                            </h2>

                            <p>
                                Informe os dados básicos do membro.
                            </p>

                        </div>

                    </div>


                    <div className={styles.formGrid}>

                        {/* NOME */}

                        <div className={styles.formGroup}>

                            <label>
                                Nome
                                <span>*</span>
                            </label>

                            <input
                                type="text"
                                name="nome"
                                value={membro.nome}
                                onChange={handleChange}
                                placeholder="Insira o nome"
                                required
                            />

                        </div>


                        {/* SOBRENOME */}

                        <div className={styles.formGroup}>

                            <label>
                                Sobrenome
                                <span>*</span>
                            </label>

                            <input
                                type="text"
                                name="sobrenome"
                                value={membro.sobrenome}
                                onChange={handleChange}
                                placeholder="Insira o sobrenome"
                                required
                            />

                        </div>


                        {/* EMAIL */}

                        <div className={styles.formGroup}>

                            <label>
                                Email
                                <span>*</span>
                            </label>

                            <div className={styles.inputIcon}>

                                <FiMail />

                                <input
                                    type="email"
                                    name="email"
                                    value={membro.email}
                                    onChange={handleChange}
                                    placeholder="exemplo@email.com"
                                    required
                                />

                            </div>

                        </div>


                        {/* TELEFONE */}

                        <div className={styles.formGroup}>

                            <label>
                                Telefone
                            </label>

                            <input
                                type="text"
                                name="telefone"
                                value={membro.telefone}
                                onChange={handleChange}
                                placeholder="Ex.: +244 900 000 000"
                            />

                        </div>

                    </div>

                </div>


                {/* =================================
                    INFORMAÇÕES PROFISSIONAIS
                ================================== */}

                <div className={styles.card}>

                    <div className={styles.cardHeader}>

                        <div className={styles.cardIcon}>
                            <FiBriefcase />
                        </div>

                        <div>

                            <h2>
                                Informações Profissionais
                            </h2>

                            <p>
                                Defina a função e o departamento do membro.
                            </p>

                        </div>

                    </div>


                    <div className={styles.formGrid}>

                        {/* FUNÇÃO */}

                        <div className={styles.formGroup}>

                            <label>
                                Função
                                <span>*</span>
                            </label>

                            <input
                                type="text"
                                name="funcao"
                                value={membro.funcao}
                                onChange={handleChange}
                                placeholder="Ex.: Desenvolvedor Front-end"
                                required
                            />

                        </div>


                        {/* DEPARTAMENTO */}

                        <div className={styles.formGroup}>

                            <label>
                                Departamento
                            </label>

                            <input
                                type="text"
                                name="departamento"
                                value={membro.departamento}
                                onChange={handleChange}
                                placeholder="Ex.: Tecnologia"
                            />

                        </div>

                    </div>

                </div>


                {/* =================================
                    ACESSO E PERMISSÕES
                ================================== */}

                <div className={styles.card}>

                    <div className={styles.cardHeader}>

                        <div className={styles.cardIcon}>
                            <FiShield />
                        </div>

                        <div>

                            <h2>
                                Acesso e Permissões
                            </h2>

                            <p>
                                Defina o nível de acesso do membro.
                            </p>

                        </div>

                    </div>


                    <div className={styles.formGrid}>

                        {/* PERMISSÃO */}

                        <div className={styles.formGroup}>

                            <label>
                                Nível de Permissão
                            </label>

                            <select
                                name="permissao"
                                value={membro.permissao}
                                onChange={handleChange}
                            >

                                <option value="Administrador">
                                    Administrador
                                </option>

                                <option value="Gestor">
                                    Gestor de Projeto
                                </option>

                                <option value="Membro">
                                    Membro
                                </option>

                                <option value="Visualizador">
                                    Visualizador
                                </option>

                            </select>

                        </div>


                        {/* ESTADO */}

                        <div className={styles.formGroup}>

                            <label>
                                Estado
                            </label>

                            <select
                                name="estado"
                                value={membro.estado}
                                onChange={handleChange}
                            >

                                <option value="Ativo">
                                    Ativo
                                </option>

                                <option value="Inativo">
                                    Inativo
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
                            Membro pronto para ser adicionado
                        </h3>

                        <p>
                            Confirme os dados antes de adicionar o membro à equipa.
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

                        Adicionar Membro

                    </button>

                </div>

            </form>

        </div>

    );

};


export default AdicionarMembro;