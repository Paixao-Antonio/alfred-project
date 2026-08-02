
import { Outlet } from "react-router-dom"

import Navbar from "../components/pages/Navbar"

import Footer from "../components/pages/Footer"
import MainLayout from "./MainLayout"

import styles from "./PublicLayout.module.css";

const PublicLayout = () => {
    return (
        <div className={styles.conteiner}>
            <Navbar />
            <main className={styles.main}>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default PublicLayout
