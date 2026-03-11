
import React from 'react'

import { Fragment, jsxDEV } from "react/jsx-dev-runtime";

import styles from './Titulo.module.css'


const Titulo = ({ name }) => {
    return (
        <>
            <h3 className={styles.titulo}> {name} </h3>
        </>
    )
}

export default Titulo
