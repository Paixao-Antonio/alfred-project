
import React from 'react'
import { CiSearch } from "react-icons/ci";
import styles from "./ProjectSearch.module.css"

const ProjectSearch = ({ placeholder, variante = 'padrao' }) => {

    return (

        <div className={styles.ProjectOne}>

            <div className={styles.ProjectTwo}>
                <input type="search" name="" id="" placeholder={placeholder} />
                <CiSearch className={styles.Search} />
            </div>

            <div className={styles.ProjectThree}>

                {variante === 'padrao' && (
                    <>
                        <button>Filtro</button>
                    </>
                )}

            </div>

        </div>
    )
}

export default ProjectSearch
