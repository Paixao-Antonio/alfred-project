
import { NavLink } from "react-router-dom";

import styles from "./Dashboard.module.css";

import logo2 from "../../img/logo1.png";

import {
    FiGrid,
    FiFolder,
    FiTarget,
    FiCheckSquare,
    FiClock,
    FiActivity,
    FiMessageSquare,
    FiTrendingUp,
    FiUsers,
    FiShield,
    FiFileText,
    FiBookOpen,
    FiSettings,
    FiCalendar,
    FiColumns,
    FiPackage,
    FiDollarSign,
    FiUserCheck,
    FiAlertTriangle,
    FiArchive,
    FiBell,
    FiHelpCircle
} from "react-icons/fi";

const Dashboard = () => {
    const menuItems = [

        {
            icon: <FiGrid />,
            label: "Dashboard",
            path: "/dashboard"
        },

        {
            icon: <FiFolder />,
            label: "Projetos",
            path: "/projects"
        },

        {
            icon: <FiTarget />,
            label: "Escopo",
            path: "/escopo"
        },

        {
            icon: <FiCheckSquare />,
            label: "Tarefas",
            path: "/tarefas"
        },

        {
            icon: <FiClock />,
            label: "Sprints",
            path: "/sprints"
        },

        {
            icon: <FiActivity />,
            label: "Actividades",
            path: "/actividades"
        },

        {
            icon: <FiMessageSquare />,
            label: "Chat",
            path: "/chat"
        },

        {
            icon: <FiUsers />,
            label: "Equipe",
            path: "/equipe"
        },

        {
            icon: <FiShield />,
            label: "Permissões",
            path: "/permission"
        },

        {
            icon: <FiFileText />,
            label: "Relatórios",
            path: "/relatorio"
        },

        {
            icon: <FiBookOpen />,
            label: "Guia PM",
            path: "/guia"
        },

        {
            icon: <FiSettings />,
            label: "Configurações",
            path: "/configuracoes"
        },

        {
            icon: <FiCalendar />,
            label: "Cronograma",
            path: "/cronograma"
        },

        {
            icon: <FiColumns />,
            label: "Quadro Kanban",
            path: "/kanban"
        },

        {
            icon: <FiPackage />,
            label: "Recursos",
            path: "/recursos"
        },

        {
            icon: <FiDollarSign />,
            label: "Orçamento / Custos",
            path: "/orcamento"
        },

        {
            icon: <FiUserCheck />,
            label: "Stakeholders",
            path: "/stakeholders"
        },

        {
            icon: <FiAlertTriangle />,
            label: "Registo de Riscos",
            path: "/riscos"
        },

        {
            icon: <FiArchive />,
            label: "Documentos",
            path: "/documentos"
        },

        {
            icon: <FiBell />,
            label: "Notificações",
            path: "/notificacoes"
        },

        {
            icon: <FiHelpCircle />,
            label: "Ajuda / Suporte",
            path: "/suporte"
        }

    ];

    return (

        <div className={styles.sidebar}>
            {/* LOGO */}
            <div className={styles.logoContainer}>
                <div className={styles.logo}>
                    <img src={logo2} alt="alfred-project" />
                </div>

                <div>
                    <h2>Alfred-Project</h2>
                    <span>@alfred_project</span>
                </div>
            </div>

            {/* MENU */}
            <div className={styles.menu}>
                {menuItems.map((item, index) => (
                    <NavLink
                        key={index}
                        to={item.path}
                        className={({ isActive }) =>
                            isActive
                                ? `${styles.menuItem} ${styles.active}`
                                : styles.menuItem
                        }
                    >
                        <span className={styles.icon}>
                            {item.icon}
                        </span>

                        <span>{item.label}</span>
                    </NavLink>
                ))}
            </div>

            {/* FOOTER */}
            <div className={styles.footer}>
                <div className={styles.flags}>
                    <span className={styles.red}></span>
                    <span className={styles.yellow}></span>
                    <span className={styles.black}></span>
                </div>

                <span>Versão 1.0.0</span>
            </div>
        </div>

    );
};

export default Dashboard;