
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
} from "react-icons/fi";

const Dashboard = () => {
    const menuItems = [
        {
            icon: <FiGrid />,
            label: "Dashboard",
            path: "/dashboard-page",
        },

        {
            icon: <FiFolder />,
            label: "Projetos",
            path: "/projects",
        },

        {
            icon: <FiTarget />,
            label: "Escopo",
            path: "/escopo",
        },

        {
            icon: <FiCheckSquare />,
            label: "Tarefas",
            path: "/tarefas",
        },

        {
            icon: <FiClock />,
            label: "Criar Projecto",
            path: "/create-project",
        },

        {
            icon: <FiActivity />,
            label: "Actividades",
            path: "/actividades",
        },

        {
            icon: <FiMessageSquare />,
            label: "Chat",
            path: "/chat",
        },

        {
            icon: <FiShield />,
            label: "Permissões",
            path: "/permission",
        },

        {
            icon: <FiUsers />,
            label: "Relatórios",
            path: "/relatorio",
        },


        {
            icon: <FiBookOpen />,
            label: "Guia PM",
            path: "/guia",
        },

        {
            icon: <FiUsers />,
            label: "Team",
            path: "/team",
        },

        {
            icon: <FiSettings />,
            label: "Configurações",
            path: "/Configuracoes",
        },

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