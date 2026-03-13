
import { Link } from 'react-router-dom'
import styles from "./Navbar.module.css"

import logo2 from "../../img/logo2.png"

const Navbar = () => {

    return (

        <div className={styles.divnav}>

            <nav className={styles.navbar}>

                <button className={styles.hamburger}>
                    ☰
                </button>

                <Link to="/"> <img src={logo2} alt="alfre-project" /></Link>

                <ul className={styles.lista}>
                    <li className={styles.item}><Link to="/">Home</Link></li>
                    <li className={styles.item}><Link to="/login-usuario">Login Usuário</Link></li>
                    <li className={styles.item}><Link to="/login-admin">Login Admin</Link></li>
                </ul>
            </nav>

        </div>

    )
}

export default Navbar
