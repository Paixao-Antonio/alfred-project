
import React, { useState } from "react";

import {
    FiBell,
    FiCheck,
    FiCheckCircle,
    FiMessageSquare,
    FiAlertTriangle,
    FiCalendar,
    FiClock,
    FiTrash2,
    FiMoreVertical,
    FiFilter
} from "react-icons/fi";

import styles from "./Notificacoes.module.css";


const Notificacoes = () => {

    // ==============================
    // ESTADO DAS NOTIFICAÇÕES
    // ==============================

    const [notificacoes, setNotificacoes] = useState([

        {
            id: 1,
            tipo: "tarefa",
            titulo: "Nova tarefa atribuída",
            mensagem:
                "Foi atribuída uma nova tarefa ao seu perfil no projeto Alfred-Project.",
            data: "Hoje, 10:45",
            lida: false
        },

        {
            id: 2,
            tipo: "prazo",
            titulo: "Prazo próximo",
            mensagem:
                "A tarefa 'Desenvolvimento do Dashboard' termina amanhã.",
            data: "Hoje, 09:30",
            lida: false
        },

        {
            id: 3,
            tipo: "comentario",
            titulo: "Novo comentário",
            mensagem:
                "João Manuel adicionou um comentário na tarefa 'Sistema de Login'.",
            data: "Hoje, 08:15",
            lida: false
        },

        {
            id: 4,
            tipo: "projeto",
            titulo: "Projeto atualizado",
            mensagem:
                "O projeto 'Sistema de Gestão' foi atualizado por Ana Silva.",
            data: "Ontem, 16:40",
            lida: true
        },

        {
            id: 5,
            tipo: "alerta",
            titulo: "Alerta de projeto",
            mensagem:
                "O projeto encontra-se com algumas tarefas atrasadas.",
            data: "Ontem, 14:20",
            lida: true
        },

        {
            id: 6,
            tipo: "tarefa",
            titulo: "Tarefa concluída",
            mensagem:
                "A tarefa 'Modelação da Base de Dados' foi concluída.",
            data: "12 Ago 2026",
            lida: true
        }

    ]);


    // ==============================
    // FILTRO
    // ==============================

    const [filtro, setFiltro] = useState("Todas");


    // ==============================
    // MENU DE FILTRO
    // ==============================

    const notificacoesFiltradas = notificacoes.filter((notificacao) => {

        if (filtro === "Todas") {
            return true;
        }

        if (filtro === "Não lidas") {
            return !notificacao.lida;
        }

        if (filtro === "Lidas") {
            return notificacao.lida;
        }

        return true;

    });


    // ==============================
    // CONTAR NÃO LIDAS
    // ==============================

    const naoLidas = notificacoes.filter(
        (notificacao) => !notificacao.lida
    ).length;


    // ==============================
    // MARCAR COMO LIDA
    // ==============================

    const marcarComoLida = (id) => {

        setNotificacoes(

            notificacoes.map((notificacao) => {

                if (notificacao.id === id) {

                    return {
                        ...notificacao,
                        lida: true
                    };

                }

                return notificacao;

            })

        );

    };


    // ==============================
    // MARCAR TODAS COMO LIDAS
    // ==============================

    const marcarTodasComoLidas = () => {

        setNotificacoes(

            notificacoes.map((notificacao) => ({
                ...notificacao,
                lida: true
            }))

        );

    };


    // ==============================
    // ELIMINAR NOTIFICAÇÃO
    // ==============================

    const eliminarNotificacao = (id) => {

        setNotificacoes(

            notificacoes.filter(
                (notificacao) => notificacao.id !== id
            )

        );

    };


    // ==============================
    // ÍCONE DA NOTIFICAÇÃO
    // ==============================

    const getIcon = (tipo) => {

        switch (tipo) {

            case "tarefa":

                return (
                    <div className={`${styles.icon} ${styles.blue}`}>
                        <FiCheckCircle />
                    </div>
                );


            case "prazo":

                return (
                    <div className={`${styles.icon} ${styles.orange}`}>
                        <FiClock />
                    </div>
                );


            case "comentario":

                return (
                    <div className={`${styles.icon} ${styles.purple}`}>
                        <FiMessageSquare />
                    </div>
                );


            case "projeto":

                return (
                    <div className={`${styles.icon} ${styles.green}`}>
                        <FiCalendar />
                    </div>
                );


            case "alerta":

                return (
                    <div className={`${styles.icon} ${styles.red}`}>
                        <FiAlertTriangle />
                    </div>
                );


            default:

                return (
                    <div className={styles.icon}>
                        <FiBell />
                    </div>
                );

        }

    };


    return (

        <div className={styles.container}>


            {/* ================================= */}
            {/* CABEÇALHO */}
            {/* ================================= */}

            <div className={styles.header}>

                <div className={styles.titleArea}>

                    <div className={styles.titleIcon}>

                        <FiBell />

                        {naoLidas > 0 && (

                            <span className={styles.badge}>
                                {naoLidas}
                            </span>

                        )}

                    </div>


                    <div>

                        <h2>
                            Notificações
                        </h2>

                        <p>
                            Acompanhe as atualizações e atividades do seu projeto.
                        </p>

                    </div>

                </div>


                <button
                    className={styles.readAllButton}
                    onClick={marcarTodasComoLidas}
                >

                    <FiCheck />

                    Marcar todas como lidas

                </button>

            </div>


            {/* ================================= */}
            {/* RESUMO */}
            {/* ================================= */}

            <div className={styles.summary}>


                <div className={styles.summaryCard}>

                    <div className={`${styles.summaryIcon} ${styles.blue}`}>

                        <FiBell />

                    </div>

                    <div>

                        <span>
                            Total
                        </span>

                        <strong>
                            {notificacoes.length}
                        </strong>

                    </div>

                </div>


                <div className={styles.summaryCard}>

                    <div className={`${styles.summaryIcon} ${styles.orange}`}>

                        <FiClock />

                    </div>

                    <div>

                        <span>
                            Não lidas
                        </span>

                        <strong>
                            {naoLidas}
                        </strong>

                    </div>

                </div>


                <div className={styles.summaryCard}>

                    <div className={`${styles.summaryIcon} ${styles.green}`}>

                        <FiCheckCircle />

                    </div>

                    <div>

                        <span>
                            Lidas
                        </span>

                        <strong>
                            {notificacoes.length - naoLidas}
                        </strong>

                    </div>

                </div>

            </div>


            {/* ================================= */}
            {/* FILTROS */}
            {/* ================================= */}

            <div className={styles.filterArea}>


                <div className={styles.filterTitle}>

                    <FiFilter />

                    <span>
                        Filtrar notificações
                    </span>

                </div>


                <div className={styles.filters}>


                    <button
                        className={
                            filtro === "Todas"
                                ? styles.activeFilter
                                : ""
                        }
                        onClick={() => setFiltro("Todas")}
                    >

                        Todas

                    </button>


                    <button
                        className={
                            filtro === "Não lidas"
                                ? styles.activeFilter
                                : ""
                        }
                        onClick={() => setFiltro("Não lidas")}
                    >

                        Não lidas

                        {naoLidas > 0 && (

                            <span>
                                {naoLidas}
                            </span>

                        )}

                    </button>


                    <button
                        className={
                            filtro === "Lidas"
                                ? styles.activeFilter
                                : ""
                        }
                        onClick={() => setFiltro("Lidas")}
                    >

                        Lidas

                    </button>

                </div>

            </div>


            {/* ================================= */}
            {/* LISTA */}
            {/* ================================= */}

            <div className={styles.listHeader}>

                <div>

                    <h3>
                        Atividade recente
                    </h3>

                    <p>
                        As notificações mais recentes aparecem primeiro.
                    </p>

                </div>

                <span>
                    {notificacoesFiltradas.length} notificações
                </span>

            </div>


            <div className={styles.notificationsList}>


                {notificacoesFiltradas.length === 0 ? (

                    <div className={styles.empty}>

                        <FiBell />

                        <h3>
                            Nenhuma notificação
                        </h3>

                        <p>
                            Não existem notificações para este filtro.
                        </p>

                    </div>

                ) : (

                    notificacoesFiltradas.map((notificacao) => (

                        <div
                            key={notificacao.id}
                            className={`
                                ${styles.notification}
                                ${!notificacao.lida
                                    ? styles.unread
                                    : ""
                                }
                            `}
                        >


                            {/* ÍCONE */}

                            {getIcon(notificacao.tipo)}


                            {/* CONTEÚDO */}

                            <div className={styles.notificationContent}>

                                <div className={styles.notificationTitle}>

                                    <h4>
                                        {notificacao.titulo}
                                    </h4>

                                    {!notificacao.lida && (

                                        <span className={styles.newBadge}>
                                            Nova
                                        </span>

                                    )}

                                </div>


                                <p>
                                    {notificacao.mensagem}
                                </p>


                                <div className={styles.notificationFooter}>

                                    <span>

                                        <FiClock />

                                        {notificacao.data}

                                    </span>

                                </div>

                            </div>


                            {/* AÇÕES */}

                            <div className={styles.actions}>


                                {!notificacao.lida && (

                                    <button
                                        title="Marcar como lida"
                                        onClick={() =>
                                            marcarComoLida(notificacao.id)
                                        }
                                    >

                                        <FiCheck />

                                    </button>

                                )}


                                <button
                                    title="Eliminar"
                                    onClick={() =>
                                        eliminarNotificacao(notificacao.id)
                                    }
                                >

                                    <FiTrash2 />

                                </button>


                                <button title="Mais opções">

                                    <FiMoreVertical />

                                </button>

                            </div>

                        </div>

                    ))

                )}

            </div>


        </div>

    );

};


export default Notificacoes;