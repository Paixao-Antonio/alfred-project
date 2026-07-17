import { Outlet } from "react-router-dom";
import Dashboard from "../components/Dashboard/Dashboard";

import styles from "./MainLayout.module.css";

function MainLayout() {
    return (
        <div className={styles.container}>

            <Dashboard />

            <div className={styles.content} >
                <Outlet />
            </div>
        </div>
    );
}

export default MainLayout;