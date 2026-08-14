
import React, { useState } from "react";

import {
    FiDollarSign,
    FiPlus,
    FiSearch,
    FiFilter,
    FiMoreVertical,
    FiTrendingUp,
    FiTrendingDown,
    FiCreditCard,
    FiAlertTriangle
} from "react-icons/fi";

import styles from "./Orcamento.module.css";


const Orcamento = () => {

    const [filtro, setFiltro] = useState("Todas");


    // =========================
    // DADOS DO ORÇAMENTO
    // =========================

    const orcamento = {
        total: 2500000,
        gasto: 1575000,
        disponivel: 925000,
        utilizado: 63
    };


    // =========================
    // DESPESAS
    // =========================

    const despesas = [

        {
            id: 1,
            descricao: "Desenvolvimento do sistema",
            categoria: "Desenvolvimento",
            responsavel: "Paixão António",
            data: "12 Ago 2026",
            valor: 450000,
            status: "Pago"
        },

        {
            id: 2,
            descricao: "Design UI/UX",
            categoria: "Design",
            responsavel: "Maria José",
            data: "10 Ago 2026",
            valor: 280000,
            status: "Pago"
        },

        {
            id: 3,
            descricao: "Serviços de hospedagem",
            categoria: "Infraestrutura",
            responsavel: "João Manuel",
            data: "08 Ago 2026",
            valor: 150000,
            status: "Pago"
        },

        {
            id: 4,
            descricao: "Campanha de marketing",
            categoria: "Marketing",
            responsavel: "Ana Silva",
            data: "05 Ago 2026",
            valor: 320000,
            status: "Pendente"
        },

        {
            id: 5,
            descricao: "Licenças de software",
            categoria: "Software",
            responsavel: "Carlos Pedro",
            data: "02 Ago 2026",
            valor: 175000,
            status: "Pago"
        },

        {
            id: 6,
            descricao: "Consultoria técnica",
            categoria: "Consultoria",
            responsavel: "Pedro Miguel",
            data: "01 Ago 2026",
            valor: 200000,
            status: "Pendente"
        }

    ];


    // =========================
    // FORMATAÇÃO DE VALORES
    // =========================

    const formatarValor = (valor) => {

        return new Intl.NumberFormat("pt-AO", {
            style: "currency",
            currency: "AOA",
            maximumFractionDigits: 0
        }).format(valor);

    };


    // =========================
    // FILTRAR DESPESAS
    // =========================

    const despesasFiltradas = despesas.filter((despesa) => {

        if (filtro === "Todas") {
            return true;
        }

        return despesa.categoria === filtro;

    });


    // =========================
    // CLASSE DA CATEGORIA
    // =========================

    const getCategoriaClass = (categoria) => {

        if (categoria === "Desenvolvimento") {
            return styles.desenvolvimento;
        }

        if (categoria === "Design") {
            return styles.design;
        }

        if (categoria === "Infraestrutura") {
            return styles.infraestrutura;
        }

        if (categoria === "Marketing") {
            return styles.marketing;
        }

        if (categoria === "Software") {
            return styles.software;
        }

        return styles.consultoria;

    };


    // =========================
    // STATUS
    // =========================

    const getStatusClass = (status) => {

        if (status === "Pago") {
            return styles.statusPago;
        }

        return styles.statusPendente;

    };


    return (

        <div className={styles.container}>

            {/* ========================= */}
            {/* CABEÇALHO */}
            {/* ========================= */}

            <div className={styles.header}>

                <div className={styles.titleArea}>

                    <div className={styles.titleIcon}>
                        <FiDollarSign />
                    </div>

                    <div>

                        <h2>
                            Orçamento / Custos
                        </h2>

                        <p>
                            Controle o orçamento e acompanhe os custos do projeto.
                        </p>

                    </div>

                </div>


                <button className={styles.addButton}>

                    <FiPlus />

                    Nova despesa

                </button>

            </div>


            {/* ========================= */}
            {/* CARDS DE RESUMO */}
            {/* ========================= */}

            <div className={styles.summary}>

                {/* ORÇAMENTO */}

                <div className={styles.summaryCard}>

                    <div className={`${styles.summaryIcon} ${styles.blue}`}>
                        <FiCreditCard />
                    </div>

                    <div>

                        <span>
                            Orçamento total
                        </span>

                        <strong>
                            {formatarValor(orcamento.total)}
                        </strong>

                    </div>

                </div>


                {/* GASTO */}

                <div className={styles.summaryCard}>

                    <div className={`${styles.summaryIcon} ${styles.red}`}>
                        <FiTrendingDown />
                    </div>

                    <div>

                        <span>
                            Total gasto
                        </span>

                        <strong>
                            {formatarValor(orcamento.gasto)}
                        </strong>

                    </div>

                </div>


                {/* DISPONÍVEL */}

                <div className={styles.summaryCard}>

                    <div className={`${styles.summaryIcon} ${styles.green}`}>
                        <FiTrendingUp />
                    </div>

                    <div>

                        <span>
                            Saldo disponível
                        </span>

                        <strong>
                            {formatarValor(orcamento.disponivel)}
                        </strong>

                    </div>

                </div>


                {/* UTILIZAÇÃO */}

                <div className={styles.summaryCard}>

                    <div className={`${styles.summaryIcon} ${styles.orange}`}>
                        <FiAlertTriangle />
                    </div>

                    <div>

                        <span>
                            Orçamento utilizado
                        </span>

                        <strong>
                            {orcamento.utilizado}%
                        </strong>

                    </div>

                </div>

            </div>


            {/* ========================= */}
            {/* PROGRESSO DO ORÇAMENTO */}
            {/* ========================= */}

            <div className={styles.budgetCard}>

                <div className={styles.budgetHeader}>

                    <div>

                        <h3>
                            Utilização do orçamento
                        </h3>

                        <p>
                            Acompanhe quanto do orçamento já foi utilizado.
                        </p>

                    </div>

                    <strong>
                        {orcamento.utilizado}%
                    </strong>

                </div>


                <div className={styles.progressBar}>

                    <div
                        className={styles.progressFill}
                        style={{
                            width: `${orcamento.utilizado}%`
                        }}
                    ></div>

                </div>


                <div className={styles.progressInfo}>

                    <span>
                        Gasto: {formatarValor(orcamento.gasto)}
                    </span>

                    <span>
                        Total: {formatarValor(orcamento.total)}
                    </span>

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
                        placeholder="Pesquisar despesa..."
                    />

                </div>


                <div className={styles.filter}>

                    <FiFilter />

                    <select
                        value={filtro}
                        onChange={(e) => setFiltro(e.target.value)}
                    >

                        <option value="Todas">
                            Todas as categorias
                        </option>

                        <option value="Desenvolvimento">
                            Desenvolvimento
                        </option>

                        <option value="Design">
                            Design
                        </option>

                        <option value="Infraestrutura">
                            Infraestrutura
                        </option>

                        <option value="Marketing">
                            Marketing
                        </option>

                        <option value="Software">
                            Software
                        </option>

                        <option value="Consultoria">
                            Consultoria
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
                        Despesas do projeto
                    </h3>

                    <p>
                        Registo das despesas e custos realizados.
                    </p>

                </div>

                <span>
                    {despesasFiltradas.length} despesas
                </span>

            </div>


            {/* ========================= */}
            {/* LISTA DE DESPESAS */}
            {/* ========================= */}

            <div className={styles.expenseList}>

                {despesasFiltradas.map((despesa) => (

                    <div
                        className={styles.expenseCard}
                        key={despesa.id}
                    >

                        {/* DESCRIÇÃO */}

                        <div className={styles.expenseDescription}>

                            <div className={styles.expenseIcon}>

                                <FiDollarSign />

                            </div>

                            <div>

                                <strong>
                                    {despesa.descricao}
                                </strong>

                                <span>
                                    {despesa.responsavel}
                                </span>

                            </div>

                        </div>


                        {/* CATEGORIA */}

                        <div>

                            <span className={styles.dataLabel}>
                                Categoria
                            </span>

                            <span
                                className={`${styles.category} ${getCategoriaClass(
                                    despesa.categoria
                                )}`}
                            >
                                {despesa.categoria}
                            </span>

                        </div>


                        {/* DATA */}

                        <div className={styles.dataColumn}>

                            <span className={styles.dataLabel}>
                                Data
                            </span>

                            <span>
                                {despesa.data}
                            </span>

                        </div>


                        {/* VALOR */}

                        <div className={styles.valueColumn}>

                            <span className={styles.dataLabel}>
                                Valor
                            </span>

                            <strong>
                                {formatarValor(despesa.valor)}
                            </strong>

                        </div>


                        {/* STATUS */}

                        <span
                            className={`${styles.status} ${getStatusClass(
                                despesa.status
                            )}`}
                        >
                            {despesa.status}
                        </span>


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


export default Orcamento;