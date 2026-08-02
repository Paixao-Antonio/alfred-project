
import React from 'react'
import { CiSearch } from "react-icons/ci";
import styles from "./ProjectSearch.module.css"

const ProjectSearch = ({ placeholder, variante = 'padrao' }) => {

    return (

        <div className={styles.ProjectOne}>

            <div className={styles.ProjectThree}>

                {variante === 'padrao' && (
                    <>
                        <select name="Filtro" id="" required>
                            <option value="" disabled selected hidden>Filtrar</option>
                            <option value="">Do último mês</option>
                            <option value="">Dos últimos três meses</option>
                            <option value="">Dos últimos seis meses</option>
                        </select>
                    </>
                )}

                {variante === 'padraoproj' && (
                    <>
                        <select name="Projectos" id="" required>
                            <option value="" disabled selected hidden>Filtrar</option>
                            <option value="">ID</option>
                            <option value="">Projecto</option>
                            <option value="">Gestor</option>
                        </select>
                    </>
                )}

            </div>

            <div className={styles.ProjectTwo}>
                <input type="search" name="" id="" placeholder={placeholder} />
                <CiSearch className={styles.Search} />
            </div>



        </div>
    )
}

export default ProjectSearch
