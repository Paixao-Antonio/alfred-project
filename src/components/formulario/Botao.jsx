
import React from 'react'

import styles from './Botao.module.css'

const Botao = ({ name }) => {
    return (

        <>
            <button className={styles.botao}>{name} </button>
        </>
    )
}

export default Botao
