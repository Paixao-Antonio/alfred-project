
import React, { useState } from "react";

import {
    FiSearch,
    FiFilter,
    FiActivity,
    FiUser,
    FiClock,
    FiEye,
    FiDownload,
    FiRefreshCw,
    FiCheckCircle,
    FiEdit,
    FiTrash2,
    FiPlusCircle,
    FiLogIn,
    FiShield
} from "react-icons/fi";

import styles from "./Auditoria.module.css";


const Auditoria = () => {

    // ==========================================
    // PESQUISA
    // ==========================================

    const [pesquisa, setPesquisa] = useState("");

    const [filtro, setFiltro] = useState("Todas");


    // ==========================================
    // DADOS DAS ATIVIDADES
    // ==========================================

    const atividades = [

        {
            id: 1,
            usuario: "Paixão António",
            email: "paixao@email.com",
            acao: "Criou um novo projeto",
            tipo: "Criação",
            projeto: "Sistema Alfred",
            data: "15/08/2026",
            hora: "18:42",
            ip: "192.168.1.10",
            status: "Sucesso",
            icon: <FiPlusCircle />
        },

        {
            id: 2,
            usuario: "Maria José",
            email: "maria@email.com",
            acao: "Atualizou informações do projeto",
            tipo: "Edição",
            projeto: "Sistema Alfred",
            data: "15/08/2026",
            hora: "17:30",
            ip: "192.168.1.15",
            status: "Sucesso",
            icon: <FiEdit />
        },

        {
            id: 3,
            usuario: "Carlos Manuel",
            email: "carlos@email.com",
            acao: "Entrou no sistema",
            tipo: "Login",
            projeto: "Sistema Alfred",
            data: "15/08/2026",
            hora: "16:20",
            ip: "192.168.1.21",
            status: "Sucesso",
            icon: <FiLogIn />
        },

        {
            id: 4,
            usuario: "Ana Paula",
            email: "ana@email.com",
            acao: "Eliminou uma tarefa",
            tipo: "Exclusão",
            projeto: "Website Institucional",
            data: "15/08/2026",
            hora: "15:12",
            ip: "192.168.1.25",
            status: "Sucesso",
            icon: <FiTrash2 />
        },

        {
            id: 5,
            usuario: "Paixão António",
            email: "paixao@email.com",
            acao: "Alterou permissões de utilizador",
            tipo: "Segurança",
            projeto: "Sistema Alfred",
            data: "14/08/2026",
            hora: "14:45",
            ip: "192.168.1.10",
            status: "Sucesso",
            icon: <FiShield />
        }

    ];


    // ==========================================
    // FILTRAR ATIVIDADES
    // ==========================================

    const atividadesFiltradas = atividades.filter((atividade) => {

        const correspondePesquisa =
            atividade.usuario
                .toLowerCase()
                .includes(pesquisa.toLowerCase()) ||

            atividade.acao
                .toLowerCase()
                .includes(pesquisa.toLowerCase()) ||

            atividade.projeto
                .toLowerCase()
                .includes(pesquisa.toLowerCase());


        const correspondeFiltro =
            filtro === "Todas" ||
            atividade.tipo === filtro;


        return correspondePesquisa && correspondeFiltro;

    });


    return (

        <div className={styles.container}>


            {/* =====================================
                CABEÇALHO
            ====================================== */}

            <div className={styles.header}>

                <div className={styles.titleArea}>

                    <div className={styles.titleIcon}>
                        <FiActivity />
                    </div>

                    <div>

                        <h1>
                            Auditoria
                        </h1>

                        <p>
                            Acompanhe todas as atividades realizadas no sistema.
                        </p>

                    </div>

                </div>


                <button className={styles.exportButton}>

                    <FiDownload />

                    Exportar

                </button>

            </div>


            {/* =====================================
                CARDS DE RESUMO
            ====================================== */}

            <div className={styles.summary}>


                <div className={styles.summaryCard}>

                    <div className={styles.summaryIcon}>
                        <FiActivity />
                    </div>

                    <div>

                        <span>
                            Total de atividades
                        </span>

                        <strong>
                            248
                        </strong>

                    </div>

                </div>


                <div className={styles.summaryCard}>

                    <div className={styles.summaryIcon}>
                        <FiUser />
                    </div>

                    <div>

                        <span>
                            Utilizadores ativos
                        </span>

                        <strong>
                            12
                        </strong>

                    </div>

                </div>


                <div className={styles.summaryCard}>

                    <div className={styles.summaryIcon}>
                        <FiClock />
                    </div>

                    <div>

                        <span>
                            Atividades hoje
                        </span>

                        <strong>
                            36
                        </strong>

                    </div>

                </div>


                <div className={styles.summaryCard}>

                    <div className={styles.summaryIcon}>
                        <FiCheckCircle />
                    </div>

                    <div>

                        <span>
                            Operações concluídas
                        </span>

                        <strong>
                            98%
                        </strong>

                    </div>

                </div>

            </div>


            {/* =====================================
                FILTROS
            ====================================== */}

            <div className={styles.filters}>

                <div className={styles.searchBox}>

                    <FiSearch />

                    <input
                        type="text"
                        placeholder="Pesquisar atividade..."
                        value={pesquisa}
                        onChange={(e) =>
                            setPesquisa(e.target.value)
                        }
                    />

                </div>


                <div className={styles.filterBox}>

                    <FiFilter />

                    <select
                        value={filtro}
                        onChange={(e) =>
                            setFiltro(e.target.value)
                        }
                    >

                        <option value="Todas">
                            Todas
                        </option>

                        <option value="Criação">
                            Criação
                        </option>

                        <option value="Edição">
                            Edição
                        </option>

                        <option value="Exclusão">
                            Exclusão
                        </option>

                        <option value="Login">
                            Login
                        </option>

                        <option value="Segurança">
                            Segurança
                        </option>

                    </select>

                </div>


                <button className={styles.refreshButton}>

                    <FiRefreshCw />

                    Atualizar

                </button>

            </div>


            {/* =====================================
                TABELA
            ====================================== */}

            <div className={styles.tableCard}>

                <div className={styles.tableHeader}>

                    <div>

                        <h2>
                            Log de Atividades
                        </h2>

                        <span>
                            Registo das últimas operações realizadas
                        </span>

                    </div>

                    <span className={styles.resultCount}>

                        {atividadesFiltradas.length} resultados

                    </span>

                </div>


                <div className={styles.tableWrapper}>

                    <table>

                        <thead>

                            <tr>

                                <th>
                                    Utilizador
                                </th>

                                <th>
                                    Atividade
                                </th>

                                <th>
                                    Projeto
                                </th>

                                <th>
                                    Data
                                </th>

                                <th>
                                    IP
                                </th>

                                <th>
                                    Estado
                                </th>

                                <th>
                                    Ação
                                </th>

                            </tr>

                        </thead>


                        <tbody>

                            {atividadesFiltradas.map((atividade) => (

                                <tr key={atividade.id}>

                                    {/* UTILIZADOR */}

                                    <td>

                                        <div className={styles.user}>

                                            <div className={styles.avatar}>
                                                {atividade.usuario.charAt(0)}
                                            </div>

                                            <div>

                                                <strong>
                                                    {atividade.usuario}
                                                </strong>

                                                <span>
                                                    {atividade.email}
                                                </span>

                                            </div>

                                        </div>

                                    </td>


                                    {/* ATIVIDADE */}

                                    <td>

                                        <div className={styles.activity}>

                                            <div className={styles.activityIcon}>
                                                {atividade.icon}
                                            </div>

                                            <div>

                                                <strong>
                                                    {atividade.acao}
                                                </strong>

                                                <span>
                                                    {atividade.tipo}
                                                </span>

                                            </div>

                                        </div>

                                    </td>


                                    {/* PROJETO */}

                                    <td>

                                        <span className={styles.project}>
                                            {atividade.projeto}
                                        </span>

                                    </td>


                                    {/* DATA */}

                                    <td>

                                        <div className={styles.date}>

                                            <strong>
                                                {atividade.data}
                                            </strong>

                                            <span>
                                                {atividade.hora}
                                            </span>

                                        </div>

                                    </td>


                                    {/* IP */}

                                    <td>

                                        <span className={styles.ip}>
                                            {atividade.ip}
                                        </span>

                                    </td>


                                    {/* STATUS */}

                                    <td>

                                        <span className={styles.status}>

                                            <span className={styles.statusDot}></span>

                                            {atividade.status}

                                        </span>

                                    </td>


                                    {/* AÇÃO */}

                                    <td>

                                        <button className={styles.viewButton}>

                                            <FiEye />

                                        </button>

                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>


                {/* =================================
                    SEM RESULTADOS
                ================================== */}

                {atividadesFiltradas.length === 0 && (

                    <div className={styles.empty}>

                        <FiActivity />

                        <h3>
                            Nenhuma atividade encontrada
                        </h3>

                        <p>
                            Tente alterar os filtros ou pesquisar por outro termo.
                        </p>

                    </div>

                )}

            </div>

        </div>

    );

};


export default Auditoria;