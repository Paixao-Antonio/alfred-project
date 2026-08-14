
import React, { useState } from "react";

import {
    FiPlus,
    FiMoreVertical,
    FiCalendar,
    FiUser,
    FiFilter,
    FiSearch,
    FiCheckCircle
} from "react-icons/fi";

import styles from "./Kanban.module.css";


const Kanban = () => {

    const [filtro, setFiltro] = useState("Todas");

    const colunas = [
        {
            id: "backlog",
            titulo: "Backlog",
            cor: "cinza"
        },
        {
            id: "todo",
            titulo: "A Fazer",
            cor: "azul"
        },
        {
            id: "progress",
            titulo: "Em Progresso",
            cor: "amarelo"
        },
        {
            id: "review",
            titulo: "Em Revisão",
            cor: "roxo"
        },
        {
            id: "done",
            titulo: "Concluído",
            cor: "verde"
        }
    ];


    const tarefas = [
        {
            id: 1,
            titulo: "Criar estrutura do Dashboard",
            descricao: "Desenvolver a estrutura principal da dashboard.",
            coluna: "backlog",
            prioridade: "Alta",
            responsavel: "Paixão António",
            prazo: "18 Ago",
            etiqueta: "Frontend"
        },

        {
            id: 2,
            titulo: "Criar página de Projetos",
            descricao: "Desenvolver interface para gestão dos projetos.",
            coluna: "todo",
            prioridade: "Alta",
            responsavel: "Maria José",
            prazo: "20 Ago",
            etiqueta: "React"
        },

        {
            id: 3,
            titulo: "Implementar autenticação",
            descricao: "Criar sistema de login e autenticação.",
            coluna: "progress",
            prioridade: "Alta",
            responsavel: "João Manuel",
            prazo: "22 Ago",
            etiqueta: "Backend"
        },

        {
            id: 4,
            titulo: "Testar formulário de projetos",
            descricao: "Verificar validações e comportamento do formulário.",
            coluna: "review",
            prioridade: "Média",
            responsavel: "Carlos Pedro",
            prazo: "24 Ago",
            etiqueta: "Testes"
        },

        {
            id: 5,
            titulo: "Criar menu lateral",
            descricao: "Implementar navegação da aplicação.",
            coluna: "done",
            prioridade: "Baixa",
            responsavel: "Ana Silva",
            prazo: "15 Ago",
            etiqueta: "UI"
        }
    ];


    const getPrioridadeClass = (prioridade) => {

        if (prioridade === "Alta") {
            return styles.alta;
        }

        if (prioridade === "Média") {
            return styles.media;
        }

        return styles.baixa;
    };


    const filtrarTarefas = (coluna) => {

        let resultado = tarefas.filter(
            (tarefa) => tarefa.coluna === coluna
        );

        if (filtro !== "Todas") {

            resultado = resultado.filter(
                (tarefa) => tarefa.prioridade === filtro
            );

        }

        return resultado;
    };


    return (

        <div className={styles.container}>

            {/* ========================= */}
            {/* CABEÇALHO */}
            {/* ========================= */}

            <div className={styles.header}>

                <div className={styles.titleArea}>

                    <div className={styles.titleIcon}>
                        <FiCheckCircle />
                    </div>

                    <div>

                        <h2>Quadro Kanban</h2>

                        <p>
                            Organize e acompanhe as tarefas do seu projeto.
                        </p>

                    </div>

                </div>


                <button className={styles.addButton}>
                    <FiPlus />
                    Nova tarefa
                </button>

            </div>


            {/* ========================= */}
            {/* CONTROLES */}
            {/* ========================= */}

            <div className={styles.controls}>

                <div className={styles.search}>

                    <FiSearch />

                    <input
                        type="text"
                        placeholder="Pesquisar tarefa..."
                    />

                </div>


                <div className={styles.filter}>

                    <FiFilter />

                    <select
                        value={filtro}
                        onChange={(e) => setFiltro(e.target.value)}
                    >

                        <option value="Todas">
                            Todas
                        </option>

                        <option value="Alta">
                            Alta prioridade
                        </option>

                        <option value="Média">
                            Média prioridade
                        </option>

                        <option value="Baixa">
                            Baixa prioridade
                        </option>

                    </select>

                </div>

            </div>


            {/* ========================= */}
            {/* KANBAN */}
            {/* ========================= */}

            <div className={styles.board}>

                {colunas.map((coluna) => {

                    const tarefasColuna = filtrarTarefas(
                        coluna.id
                    );

                    return (

                        <div
                            className={styles.column}
                            key={coluna.id}
                        >

                            {/* CABEÇALHO DA COLUNA */}

                            <div className={styles.columnHeader}>

                                <div className={styles.columnTitle}>

                                    <span
                                        className={`${styles.columnDot} ${styles[coluna.cor]}`}
                                    ></span>

                                    <h3>
                                        {coluna.titulo}
                                    </h3>

                                    <span className={styles.counter}>
                                        {tarefasColuna.length}
                                    </span>

                                </div>


                                <button className={styles.columnMenu}>
                                    <FiMoreVertical />
                                </button>

                            </div>


                            {/* TAREFAS */}

                            <div className={styles.tasks}>

                                {tarefasColuna.map((tarefa) => (

                                    <div
                                        className={styles.taskCard}
                                        key={tarefa.id}
                                    >

                                        {/* TOPO */}

                                        <div className={styles.taskTop}>

                                            <span
                                                className={`${styles.priority} ${getPrioridadeClass(
                                                    tarefa.prioridade
                                                )}`}
                                            >
                                                {tarefa.prioridade}
                                            </span>

                                            <button>
                                                <FiMoreVertical />
                                            </button>

                                        </div>


                                        {/* TÍTULO */}

                                        <h4>
                                            {tarefa.titulo}
                                        </h4>


                                        {/* DESCRIÇÃO */}

                                        <p>
                                            {tarefa.descricao}
                                        </p>


                                        {/* ETIQUETA */}

                                        <span className={styles.tag}>
                                            {tarefa.etiqueta}
                                        </span>


                                        {/* RODAPÉ */}

                                        <div className={styles.taskFooter}>

                                            <div className={styles.taskInfo}>

                                                <FiCalendar />

                                                <span>
                                                    {tarefa.prazo}
                                                </span>

                                            </div>


                                            <div className={styles.avatar}>

                                                {tarefa.responsavel
                                                    .charAt(0)
                                                    .toUpperCase()}

                                            </div>

                                        </div>

                                    </div>

                                ))}


                                {/* ADICIONAR */}

                                <button className={styles.addTask}>
                                    <FiPlus />
                                    Adicionar tarefa
                                </button>

                            </div>

                        </div>

                    );

                })}

            </div>

        </div>

    );

};

export default Kanban;