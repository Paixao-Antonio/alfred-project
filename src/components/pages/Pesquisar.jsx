
import styles from './Pesquisar.module.css'

import { IoNotifications } from "react-icons/io5";
import { RiAdminLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";

const Pesquisar = () => {

    return (

        <div className={styles.geral}>

            <div className={styles.settings}>

                <div className={styles.oneOption}>

                    <button className={styles.hamburger}>
                        ☰
                    </button>

                    <input type="text" placeholder='pesquisar projectos, tarefas...
                    '/> 
                    <CiSearch className={styles.Search}/>

                </div>

                <div className={styles.twoOption}>
                    <IoNotifications />
                    <RiAdminLine />
                    <h5>Admin</h5>
                    <h5>Gestor</h5>
                </div>

            </div>

        </div>
    )
}

export default Pesquisar
