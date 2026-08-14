
import React, { useState } from "react";

import {
    FiFolder,
    FiFileText,
    FiFile,
    FiImage,
    FiUpload,
    FiSearch,
    FiFilter,
    FiMoreVertical,
    FiDownload,
    FiTrash2,
    FiHardDrive,
    FiClock,
    FiUsers
} from "react-icons/fi";

import styles from "./Documentos.module.css";


const Documentos = () => {

    // =========================
    // ESTADO DO FILTRO
    // =========================

    const [filtro, setFiltro] = useState("Todos");


    // =========================
    // DOCUMENTOS
    // =========================

    const documentos = [

        {
            id: 1,
            nome: "Plano do Projeto.pdf",
            tipo: "PDF",
            tamanho: "2.4 MB",
            responsavel: "Paixão António",
            data: "12 Ago 2026"
        },

        {
            id: 2,
            nome: "Cronograma do Projeto.xlsx",
            tipo: "Excel",
            tamanho: "1.8 MB",
            responsavel: "Ana Silva",
            data: "10 Ago 2026"
        },

        {
            id: 3,
            nome: "Requisitos do Sistema.docx",
            tipo: "Word",
            tamanho: "850 KB",
            responsavel: "Maria José",
            data: "08 Ago 2026"
        },

        {
            id: 4,
            nome: "Arquitetura do Sistema.pdf",
            tipo: "PDF",
            tamanho: "3.2 MB",
            responsavel: "João Manuel",
            data: "05 Ago 2026"
        },

        {
            id: 5,
            nome: "Logotipo do Projeto.png",
            tipo: "Imagem",
            tamanho: "420 KB",
            responsavel: "Carlos Pedro",
            data: "02 Ago 2026"
        },

        {
            id: 6,
            nome: "Relatório Mensal.pdf",
            tipo: "PDF",
            tamanho: "1.2 MB",
            responsavel: "Paixão António",
            data: "01 Ago 2026"
        }

    ];


    // =========================
    // PASTAS
    // =========================

    const pastas = [

        {
            id: 1,
            nome: "Documentação",
            arquivos: 12,
            tamanho: "18.4 MB"
        },

        {
            id: 2,
            nome: "Relatórios",
            arquivos: 8,
            tamanho: "12.7 MB"
        },

        {
            id: 3,
            nome: "Planeamento",
            arquivos: 15,
            tamanho: "25.2 MB"
        },

        {
            id: 4,
            nome: "Design",
            arquivos: 9,
            tamanho: "32.8 MB"
        }

    ];


    // =========================
    // FILTRAR DOCUMENTOS
    // =========================

    const documentosFiltrados = documentos.filter((documento) => {

        if (filtro === "Todos") {
            return true;
        }

        return documento.tipo === filtro;

    });


    // =========================
    // ÍCONE DO DOCUMENTO
    // =========================

    const getIcon = (tipo) => {

        if (tipo === "PDF") {
            return (
                <div className={`${styles.fileIcon} ${styles.pdf}`}>
                    <FiFileText />
                </div>
            );
        }

        if (tipo === "Excel") {
            return (
                <div className={`${styles.fileIcon} ${styles.excel}`}>
                    <FiFileText />
                </div>
            );
        }

        if (tipo === "Word") {
            return (
                <div className={`${styles.fileIcon} ${styles.word}`}>
                    <FiFileText />
                </div>
            );
        }

        if (tipo === "Imagem") {
            return (
                <div className={`${styles.fileIcon} ${styles.image}`}>
                    <FiImage />
                </div>
            );
        }

        return (
            <div className={styles.fileIcon}>
                <FiFile />
            </div>
        );

    };


    return (

        <div className={styles.container}>


            {/* ========================= */}
            {/* CABEÇALHO */}
            {/* ========================= */}

            <div className={styles.header}>

                <div className={styles.titleArea}>

                    <div className={styles.titleIcon}>
                        <FiFolder />
                    </div>

                    <div>

                        <h2>
                            Documentos
                        </h2>

                        <p>
                            Organize, armazene e partilhe os ficheiros do projeto.
                        </p>

                    </div>

                </div>


                <button className={styles.uploadButton}>

                    <FiUpload />

                    Carregar ficheiro

                </button>

            </div>


            {/* ========================= */}
            {/* RESUMO */}
            {/* ========================= */}

            <div className={styles.summary}>


                <div className={styles.summaryCard}>

                    <div className={`${styles.summaryIcon} ${styles.blue}`}>
                        <FiHardDrive />
                    </div>

                    <div>

                        <span>
                            Espaço utilizado
                        </span>

                        <strong>
                            89.1 MB
                        </strong>

                        <small>
                            de 500 MB
                        </small>

                    </div>

                </div>


                <div className={styles.summaryCard}>

                    <div className={`${styles.summaryIcon} ${styles.orange}`}>
                        <FiFileText />
                    </div>

                    <div>

                        <span>
                            Ficheiros
                        </span>

                        <strong>
                            44
                        </strong>

                        <small>
                            documentos
                        </small>

                    </div>

                </div>


                <div className={styles.summaryCard}>

                    <div className={`${styles.summaryIcon} ${styles.green}`}>
                        <FiFolder />
                    </div>

                    <div>

                        <span>
                            Pastas
                        </span>

                        <strong>
                            8
                        </strong>

                        <small>
                            organizadas
                        </small>

                    </div>

                </div>


                <div className={styles.summaryCard}>

                    <div className={`${styles.summaryIcon} ${styles.purple}`}>
                        <FiUsers />
                    </div>

                    <div>

                        <span>
                            Colaboradores
                        </span>

                        <strong>
                            6
                        </strong>

                        <small>
                            com acesso
                        </small>

                    </div>

                </div>

            </div>


            {/* ========================= */}
            {/* PASTAS */}
            {/* ========================= */}

            <div className={styles.sectionHeader}>

                <div>

                    <h3>
                        Pastas
                    </h3>

                    <p>
                        Aceda rapidamente aos ficheiros organizados.
                    </p>

                </div>

            </div>


            <div className={styles.folders}>


                {pastas.map((pasta) => (

                    <div
                        className={styles.folderCard}
                        key={pasta.id}
                    >

                        <div className={styles.folderTop}>

                            <div className={styles.folderIcon}>
                                <FiFolder />
                            </div>

                            <button className={styles.moreButton}>
                                <FiMoreVertical />
                            </button>

                        </div>


                        <h4>
                            {pasta.nome}
                        </h4>


                        <div className={styles.folderInfo}>

                            <span>
                                {pasta.arquivos} ficheiros
                            </span>

                            <span>
                                {pasta.tamanho}
                            </span>

                        </div>

                    </div>

                ))}

            </div>


            {/* ========================= */}
            {/* CONTROLOS */}
            {/* ========================= */}

            <div className={styles.controls}>

                <div className={styles.search}>

                    <FiSearch />

                    <input
                        type="text"
                        placeholder="Pesquisar ficheiro..."
                    />

                </div>


                <div className={styles.filter}>

                    <FiFilter />

                    <select
                        value={filtro}
                        onChange={(e) => setFiltro(e.target.value)}
                    >

                        <option value="Todos">
                            Todos os tipos
                        </option>

                        <option value="PDF">
                            PDF
                        </option>

                        <option value="Word">
                            Word
                        </option>

                        <option value="Excel">
                            Excel
                        </option>

                        <option value="Imagem">
                            Imagens
                        </option>

                    </select>

                </div>

            </div>


            {/* ========================= */}
            {/* LISTA DE DOCUMENTOS */}
            {/* ========================= */}

            <div className={styles.documentsHeader}>

                <div>

                    <h3>
                        Ficheiros recentes
                    </h3>

                    <p>
                        Documentos adicionados recentemente ao projeto.
                    </p>

                </div>

                <span>
                    {documentosFiltrados.length} ficheiros
                </span>

            </div>


            <div className={styles.documentsList}>


                {documentosFiltrados.map((documento) => (

                    <div
                        className={styles.documentCard}
                        key={documento.id}
                    >


                        {/* ÍCONE */}

                        {getIcon(documento.tipo)}


                        {/* INFORMAÇÕES */}

                        <div className={styles.documentInfo}>

                            <strong>
                                {documento.nome}
                            </strong>

                            <span>
                                {documento.tipo} • {documento.tamanho}
                            </span>

                        </div>


                        {/* RESPONSÁVEL */}

                        <div className={styles.documentColumn}>

                            <small>
                                Responsável
                            </small>

                            <span>
                                {documento.responsavel}
                            </span>

                        </div>


                        {/* DATA */}

                        <div className={styles.documentColumn}>

                            <small>
                                Adicionado
                            </small>

                            <span>
                                {documento.data}
                            </span>

                        </div>


                        {/* AÇÕES */}

                        <div className={styles.actions}>

                            <button title="Descarregar">

                                <FiDownload />

                            </button>


                            <button title="Mais opções">

                                <FiMoreVertical />

                            </button>

                        </div>

                    </div>

                ))}


            </div>


            {/* ========================= */}
            {/* ESPAÇO DE ARMAZENAMENTO */}
            {/* ========================= */}

            <div className={styles.storage}>

                <div className={styles.storageHeader}>

                    <div>

                        <h3>
                            Armazenamento
                        </h3>

                        <p>
                            Espaço utilizado pelo projeto.
                        </p>

                    </div>

                    <FiHardDrive />

                </div>


                <div className={styles.storageInfo}>

                    <span>
                        89.1 MB de 500 MB utilizados
                    </span>

                    <strong>
                        18%
                    </strong>

                </div>


                <div className={styles.progress}>

                    <div className={styles.progressBar}></div>

                </div>


                <div className={styles.storageFooter}>

                    <span>
                        <FiClock />
                        Atualizado hoje
                    </span>

                    <span>
                        410.9 MB disponíveis
                    </span>

                </div>

            </div>


        </div>

    );

};


export default Documentos;