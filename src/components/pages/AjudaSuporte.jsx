
import React, { useState } from "react";

import {
    FiHelpCircle,
    FiSearch,
    FiBookOpen,
    FiMessageSquare,
    FiMail,
    FiPhone,
    FiChevronDown,
    FiChevronUp,
    FiSend,
    FiFileText,
    FiUsers,
    FiSettings,
    FiAlertCircle
} from "react-icons/fi";

import styles from "./AjudaSuporte.module.css";


const AjudaSuporte = () => {

    // =====================================
    // ESTADO DAS PERGUNTAS
    // =====================================

    const [perguntaAberta, setPerguntaAberta] = useState(null);


    // =====================================
    // ESTADO DO FORMULÁRIO
    // =====================================

    const [formulario, setFormulario] = useState({
        assunto: "",
        mensagem: ""
    });


    // =====================================
    // PERGUNTAS FREQUENTES
    // =====================================

    const perguntas = [

        {
            id: 1,
            pergunta: "Como criar um novo projeto?",
            resposta:
                "Aceda ao menu Projetos e clique no botão 'Novo Projeto'. Preencha as informações necessárias e clique em criar projeto."
        },

        {
            id: 2,
            pergunta: "Como adicionar membros à equipe?",
            resposta:
                "Abra o projeto desejado, aceda à área Equipe e selecione a opção para adicionar um novo membro."
        },

        {
            id: 3,
            pergunta: "Como criar uma nova tarefa?",
            resposta:
                "Aceda à área Tarefas, clique em 'Nova Tarefa', defina o responsável, prioridade, prazo e demais informações."
        },

        {
            id: 4,
            pergunta: "Como alterar as informações do meu perfil?",
            resposta:
                "Aceda a Configurações > Perfil. Nesta área poderá alterar o seu nome, email, telefone, função e outras informações."
        },

        {
            id: 5,
            pergunta: "Como recuperar o acesso à minha conta?",
            resposta:
                "Na página de login selecione 'Esqueci a minha palavra-passe' e siga as instruções apresentadas."
        },

        {
            id: 6,
            pergunta: "Como contactar a equipa de suporte?",
            resposta:
                "Pode contactar a equipa através do formulário de suporte, email ou telefone apresentados nesta página."
        }

    ];


    // =====================================
    // CATEGORIAS
    // =====================================

    const categorias = [

        {
            id: 1,
            titulo: "Primeiros passos",
            descricao: "Aprenda a utilizar o Alfred-Project.",
            icon: <FiBookOpen />,
            cor: "blue"
        },

        {
            id: 2,
            titulo: "Projetos",
            descricao: "Gestão e organização de projetos.",
            icon: <FiFileText />,
            cor: "green"
        },

        {
            id: 3,
            titulo: "Equipe",
            descricao: "Gestão dos membros e permissões.",
            icon: <FiUsers />,
            cor: "purple"
        },

        {
            id: 4,
            titulo: "Configurações",
            descricao: "Configure a sua conta e sistema.",
            icon: <FiSettings />,
            cor: "orange"
        }

    ];


    // =====================================
    // ABRIR / FECHAR PERGUNTA
    // =====================================

    const abrirPergunta = (id) => {

        if (perguntaAberta === id) {

            setPerguntaAberta(null);

        } else {

            setPerguntaAberta(id);

        }

    };


    // =====================================
    // ALTERAR FORMULÁRIO
    // =====================================

    const alterarFormulario = (e) => {

        setFormulario({
            ...formulario,
            [e.target.name]: e.target.value
        });

    };


    // =====================================
    // ENVIAR PEDIDO
    // =====================================

    const enviarPedido = (e) => {

        e.preventDefault();

        alert("Pedido de suporte enviado com sucesso!");

        setFormulario({
            assunto: "",
            mensagem: ""
        });

    };


    return (

        <div className={styles.container}>


            {/* ================================= */}
            {/* CABEÇALHO */}
            {/* ================================= */}

            <div className={styles.header}>

                <div className={styles.titleArea}>

                    <div className={styles.titleIcon}>
                        <FiHelpCircle />
                    </div>

                    <div>

                        <h2>
                            Ajuda e Suporte
                        </h2>

                        <p>
                            Encontre respostas ou entre em contacto com a nossa equipa.
                        </p>

                    </div>

                </div>

            </div>


            {/* ================================= */}
            {/* PESQUISA */}
            {/* ================================= */}

            <div className={styles.searchArea}>

                <div className={styles.searchIcon}>
                    <FiSearch />
                </div>

                <input
                    type="text"
                    placeholder="Pesquise uma dúvida, funcionalidade ou problema..."
                />

                <button>
                    Pesquisar
                </button>

            </div>


            {/* ================================= */}
            {/* CATEGORIAS */}
            {/* ================================= */}

            <div className={styles.sectionHeader}>

                <div>

                    <h3>
                        Como podemos ajudar?
                    </h3>

                    <p>
                        Explore uma das categorias abaixo.
                    </p>

                </div>

            </div>


            <div className={styles.categories}>

                {categorias.map((categoria) => (

                    <div
                        className={styles.categoryCard}
                        key={categoria.id}
                    >

                        <div
                            className={`${styles.categoryIcon} ${styles[categoria.cor]}`}
                        >

                            {categoria.icon}

                        </div>

                        <div>

                            <h4>
                                {categoria.titulo}
                            </h4>

                            <p>
                                {categoria.descricao}
                            </p>

                        </div>

                    </div>

                ))}

            </div>


            {/* ================================= */}
            {/* CONTEÚDO PRINCIPAL */}
            {/* ================================= */}

            <div className={styles.mainContent}>


                {/* ============================= */}
                {/* PERGUNTAS FREQUENTES */}
                {/* ============================= */}

                <div className={styles.faqSection}>

                    <div className={styles.sectionHeader}>

                        <div>

                            <h3>
                                Perguntas frequentes
                            </h3>

                            <p>
                                Respostas para as dúvidas mais comuns.
                            </p>

                        </div>

                    </div>


                    <div className={styles.questions}>

                        {perguntas.map((item) => (

                            <div
                                className={styles.question}
                                key={item.id}
                            >

                                <button
                                    className={styles.questionButton}
                                    onClick={() =>
                                        abrirPergunta(item.id)
                                    }
                                >

                                    <span>
                                        {item.pergunta}
                                    </span>

                                    {perguntaAberta === item.id ? (
                                        <FiChevronUp />
                                    ) : (
                                        <FiChevronDown />
                                    )}

                                </button>


                                {perguntaAberta === item.id && (

                                    <div className={styles.answer}>

                                        <p>
                                            {item.resposta}
                                        </p>

                                    </div>

                                )}

                            </div>

                        ))}

                    </div>

                </div>


                {/* ============================= */}
                {/* CONTACTOS */}
                {/* ============================= */}

                <div className={styles.contactSection}>

                    <div className={styles.contactHeader}>

                        <div className={styles.contactIcon}>
                            <FiMessageSquare />
                        </div>

                        <div>

                            <h3>
                                Precisa de mais ajuda?
                            </h3>

                            <p>
                                A nossa equipa está disponível para ajudar.
                            </p>

                        </div>

                    </div>


                    {/* EMAIL */}

                    <div className={styles.contactItem}>

                        <div className={`${styles.contactItemIcon} ${styles.blue}`}>
                            <FiMail />
                        </div>

                        <div>

                            <strong>
                                Email
                            </strong>

                            <span>
                                suporte@alfred-project.com
                            </span>

                        </div>

                    </div>


                    {/* TELEFONE */}

                    <div className={styles.contactItem}>

                        <div className={`${styles.contactItemIcon} ${styles.green}`}>
                            <FiPhone />
                        </div>

                        <div>

                            <strong>
                                Telefone
                            </strong>

                            <span>
                                +244 900 000 000
                            </span>

                        </div>

                    </div>


                    {/* CHAT */}

                    <div className={styles.contactItem}>

                        <div className={`${styles.contactItemIcon} ${styles.purple}`}>
                            <FiMessageSquare />
                        </div>

                        <div>

                            <strong>
                                Chat
                            </strong>

                            <span>
                                Fale directamente com a equipa.
                            </span>

                        </div>

                    </div>


                    {/* ESTADO */}

                    <div className={styles.supportStatus}>

                        <span className={styles.statusDot}></span>

                        Equipa de suporte online

                    </div>

                </div>

            </div>


            {/* ================================= */}
            {/* FORMULÁRIO DE SUPORTE */}
            {/* ================================= */}

            <div className={styles.supportForm}>

                <div className={styles.formHeader}>

                    <div>

                        <h3>
                            Enviar pedido de suporte
                        </h3>

                        <p>
                            Descreva o problema e a nossa equipa entrará em contacto.
                        </p>

                    </div>

                    <FiAlertCircle />

                </div>


                <form onSubmit={enviarPedido}>

                    <div className={styles.formGroup}>

                        <label>
                            Assunto
                        </label>

                        <input
                            type="text"
                            name="assunto"
                            value={formulario.assunto}
                            onChange={alterarFormulario}
                            placeholder="Ex.: Problema ao criar projeto"
                            required
                        />

                    </div>


                    <div className={styles.formGroup}>

                        <label>
                            Mensagem
                        </label>

                        <textarea
                            name="mensagem"
                            value={formulario.mensagem}
                            onChange={alterarFormulario}
                            placeholder="Descreva detalhadamente o problema..."
                            rows="5"
                            required
                        ></textarea>

                    </div>


                    <button
                        type="submit"
                        className={styles.sendButton}
                    >

                        <FiSend />

                        Enviar pedido

                    </button>

                </form>

            </div>


        </div>

    );

};


export default AjudaSuporte;